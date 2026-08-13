const fs = require('fs');
const https = require('https');
const path = require('path');

function fetchHtml(url) {
    return new Promise((resolve, reject) => {
        const options = { headers: { 'User-Agent': 'Mozilla/5.0' } };
        https.get(url, options, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                return fetchHtml(new URL(res.headers.location, url).href).then(resolve).catch(reject);
            }
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', err => reject(err));
    });
}

function download(url, dest) {
    return new Promise((resolve, reject) => {
        const fullDest = path.join('c:/Users/USUARIO/clon pagina motos/public', dest);
        fs.mkdirSync(path.dirname(fullDest), { recursive: true });
        if (fs.existsSync(fullDest)) return resolve(); 
        
        const file = fs.createWriteStream(fullDest);
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, function(response) {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => file.close(resolve));
            } else {
                file.close();
                fs.unlink(fullDest, () => {});
                resolve(); 
            }
        }).on('error', function(err) {
            fs.unlink(fullDest, () => {});
            resolve();
        });
    });
}

const colorMap = {
    'red': 'Rojo',
    'black': 'Negro',
    'gray': 'Gris',
    'blue': 'Azul',
    'white': 'Blanco',
    'green': 'Verde',
    'yellow': 'Amarillo',
    'orange': 'Naranja',
    'silver': 'Plateado',
    'brown': 'Café'
};

function translateColor(en) {
    const lower = en.toLowerCase();
    return colorMap[lower] || en.charAt(0).toUpperCase() + en.slice(1);
}

async function run() {
    const motorcyclesPath = 'c:/Users/USUARIO/clon pagina motos/src/data/motorcycles.ts';
    let content = fs.readFileSync(motorcyclesPath, 'utf-8');
    
    const slugs = Array.from(content.matchAll(/id:\s*"([^"]+)"/g)).map(m => m[1]);
    
    for (const slug of slugs) {
        console.log(`Processing ${slug}...`);
        const html = await fetchHtml(`https://honsupermotos.com/${slug}`);
        
        // Find imagesByColor
        const imgByColorMatch = html.match(/const imagesByColor = ({.*?}?);/);
        if (!imgByColorMatch) {
            console.log(`  -> No imagesByColor found`);
            continue;
        }
        
        let imagesByColor;
        try {
            imagesByColor = JSON.parse(imgByColorMatch[1]);
        } catch(e) {
            console.log(`  -> Failed to parse imagesByColor JSON`);
            continue;
        }
        
        // Find buttons
        const btnRegex = /<button[^>]+data-color="([^"]+)"[^>]+style="background-color:\s*([^;"]+)[^>]+title="([^"]+)"/g;
        const buttons = [];
        let bMatch;
        while ((bMatch = btnRegex.exec(html)) !== null) {
            buttons.push({
                id: bMatch[1],
                hex: bMatch[2].trim(),
                title: bMatch[3]
            });
        }
        
        if (buttons.length === 0) {
            console.log(`  -> No color buttons found`);
            continue;
        }
        
        const colorsArr = [];
        for (const btn of buttons) {
            const images = imagesByColor[btn.id];
            if (images && images.length > 0) {
                const imgUrl = images[0];
                colorsArr.push(`{ name: "${translateColor(btn.title)}", hex: "${btn.hex}", image: "${imgUrl}" }`);
                await download(`https://honsupermotos.com${imgUrl}`, imgUrl);
            }
        }
        
        if (colorsArr.length === 0) continue;
        
        const colorsStr = `\n    colors: [\n      ${colorsArr.join(',\n      ')}\n    ],`;
        
        // Update motorcycles.ts
        const slugIdx = content.indexOf(`id: "${slug}"`);
        const nextSlugIdx = content.indexOf(`id: "`, slugIdx + 1);
        const block = content.slice(slugIdx, nextSlugIdx !== -1 ? nextSlugIdx : content.length);
        
        // If it already has colors block, replace it. Otherwise insert after gallery or image
        if (block.includes('colors: [')) {
            const colorsIdx = block.indexOf('colors: [');
            const endColorsIdx = block.indexOf(']', colorsIdx);
            const oldColorsBlock = block.slice(colorsIdx - 4, endColorsIdx + 2); // get the property
            content = content.replace(oldColorsBlock, colorsStr);
        } else if (block.includes('gallery: [')) {
            const galleryIdx = block.indexOf('gallery: [');
            const endGalleryIdx = block.indexOf(']', galleryIdx);
            const oldGalleryBlock = block.slice(galleryIdx, endGalleryIdx + 1);
            content = content.replace(oldGalleryBlock, oldGalleryBlock + ',' + colorsStr);
        } else {
            const imageMatch = block.match(/image:\s*"[^"]+",?/);
            if (imageMatch) {
                content = content.replace(imageMatch[0], imageMatch[0] + colorsStr);
            }
        }
        console.log(`  -> Updated colors for ${slug}`);
    }
    
    fs.writeFileSync(motorcyclesPath, content);
    console.log('Done!');
}

run();
