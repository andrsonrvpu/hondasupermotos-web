const fs = require('fs');
const path = require('path');
const https = require('https');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const file = fs.createWriteStream(dest);
    https.get(url, function(response) {
      if (response.statusCode === 200) {
          response.pipe(file);
          file.on('finish', function() {
            file.close(resolve); 
          });
      } else {
          file.close();
          fs.unlink(dest, () => {});
          resolve(); // Resolve anyway on failure so we don't crash
      }
    }).on('error', function(err) {
      fs.unlink(dest, () => {});
      resolve();
    });
  });
}

function fetchHtml(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', err => reject(err));
    });
}

async function run() {
    console.log('Starting color extraction...');
    
    // Read current motorcycles.ts
    const content = fs.readFileSync('src/data/motorcycles.ts', 'utf-8');
    
    // Quick and dirty parser for the slugs
    const slugRegex = /id:\s*"([^"]+)"/g;
    let match;
    const slugs = [];
    while ((match = slugRegex.exec(content)) !== null) {
        slugs.push(match[1]);
    }
    
    console.log(`Found ${slugs.length} motorcycles.`);
    
    const allImages = {};
    
    // Fetch HTML for all slugs and extract PNGs
    for (const slug of slugs) {
        console.log(`Fetching ${slug}...`);
        try {
            const html = await fetchHtml(`https://honsupermotos.com/${slug}`);
            const regex = /\/assets\/bikes\/[^"']+\.png/gi;
            let imgMatch;
            const imgs = new Set();
            while ((imgMatch = regex.exec(html)) !== null) {
                // only keep images that have the slug or bike name in the path to avoid picking up unrelated stuff
                imgs.add(imgMatch[0]);
            }
            allImages[slug] = Array.from(imgs);
            console.log(`  -> Found ${imgs.size} PNGs for ${slug}`);
        } catch (e) {
            console.error(`  -> Failed fetching ${slug}`);
        }
    }
    
    fs.writeFileSync('scratch/all_images.json', JSON.stringify(allImages, null, 2));
    console.log('Saved to scratch/all_images.json');
}

run();
