const fs = require('fs');
const https = require('https');
const path = require('path');

function fetchHtml(url) {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            }
        };
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
        if (fs.existsSync(fullDest)) return resolve(); // Skip if exists
        
        const file = fs.createWriteStream(fullDest);
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            }
        };
        https.get(url, options, function(response) {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', function() {
                    file.close(resolve); 
                });
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

async function run() {
    console.log('Starting download process...');
    const motorcyclesPath = 'c:/Users/USUARIO/clon pagina motos/src/data/motorcycles.ts';
    let content = fs.readFileSync(motorcyclesPath, 'utf-8');
    
    const slugs = Array.from(content.matchAll(/id:\s*"([^"]+)"/g)).map(m => m[1]);
    
    for (const slug of slugs) {
        console.log('Processing', slug);
        const html = await fetchHtml(`https://honsupermotos.com/${slug}`);
        
        // Use a less restrictive regex for the PNGs
        // Because the path might contain spaces and URL encoded spaces (%20)
        const regex = /\/assets\/bikes\/[^"'\s>]+?\.png/gi;
        const matches = html.match(regex) || [];
        
        // Also check if they are URL encoded
        const uniquePngs = [...new Set(matches.map(m => decodeURI(m)))];
        
        // Wait, some might just be matched as space! Let's just use a broad regex
        const matchesBroad = html.match(/\/assets\/bikes\/[A-Za-z0-9_\-\/\.\%20 ]+\.png/gi) || [];
        const uniqueBroad = [...new Set(matchesBroad.map(m => decodeURIComponent(m)))];
        
        if (uniqueBroad.length === 0) {
            console.log(`No images found for ${slug}`);
            continue;
        }
        
        console.log(`Found ${uniqueBroad.length} unique PNGs on page ${slug}`);
        
        const slugIdx = content.indexOf(`id: "${slug}"`);
        const nextSlugIdx = content.indexOf(`id: "`, slugIdx + 1);
        const block = content.slice(slugIdx, nextSlugIdx !== -1 ? nextSlugIdx : content.length);
        
        const firstImgMatch = block.match(/image:\s*"(\/assets\/bikes\/[^"]+)"/);
        if (!firstImgMatch) continue;
        
        const firstImg = firstImgMatch[1];
        const basePath = path.dirname(firstImg).replace(/\\/g, '/');
        
        const bikePngs = uniqueBroad.filter(p => path.dirname(p).replace(/\\/g, '/') === basePath);
        
        const colorsIdx = block.indexOf('colors: [');
        const endColorsIdx = block.indexOf(']', colorsIdx);
        if (colorsIdx === -1) continue;
        
        let colorsBlock = block.slice(colorsIdx, endColorsIdx + 1);
        const colorMatches = Array.from(colorsBlock.matchAll(/{[^}]*name:\s*"([^"]+)"[^}]*}/g));
        
        for (const cMatch of colorMatches) {
            const colorStr = cMatch[0];
            const colorName = cMatch[1];
            
            if (colorStr.includes('image:')) continue;
            
            // Just matching logic
            let matchedPng = bikePngs.find(p => p.toLowerCase().includes(colorName.toLowerCase().replace(/o$/, 'a')));
            if (!matchedPng) matchedPng = bikePngs.find(p => p.toLowerCase().includes(colorName.toLowerCase()));
            if (!matchedPng) {
                // If it's something like "Tricolor" it might be "TRICOLOR.png"
                // Let's check without accents
                const cleanName = colorName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
                matchedPng = bikePngs.find(p => p.toLowerCase().includes(cleanName));
            }
            if (!matchedPng) {
                const usedImages = Array.from(colorsBlock.matchAll(/image:\s*"([^"]+)"/g)).map(m => m[1]);
                matchedPng = bikePngs.find(p => !usedImages.includes(p));
            }
            
            if (matchedPng) {
                console.log(`Matched ${colorName} to ${matchedPng}`);
                const urlPath = encodeURI(matchedPng).replace(/#/g, '%23').replace(/\?/g, '%3F');
                await download(`https://honsupermotos.com${urlPath}`, matchedPng);
                
                const newColorStr = colorStr.replace(/}/, `, image: "${matchedPng}" }`);
                colorsBlock = colorsBlock.replace(colorStr, newColorStr);
            }
        }
        
        content = content.replace(block.slice(colorsIdx, endColorsIdx + 1), colorsBlock);
    }
    
    fs.writeFileSync(motorcyclesPath, content);
    console.log('Done!');
}

run();
