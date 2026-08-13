const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    try {
        const browser = await puppeteer.launch({headless: 'new'});
        const page = await browser.newPage();
        
        // Go to main page to get all bike links
        await page.goto('https://honsupermotos.com/motos', {waitUntil: 'networkidle2'});
        
        const links = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('a[href^="/"]'))
                .map(a => a.getAttribute('href'))
                .filter(href => href && !href.includes('#') && href !== '/' && href !== '/motos' && href !== '/privacidad' && href !== '/terminos' && href !== '/cookies')
                // filter unique
                .filter((v, i, a) => a.indexOf(v) === i);
        });
        
        console.log('Found links:', links.length);
        
        const allColors = {};
        
        for (const link of links) {
            console.log(`Checking ${link}...`);
            await page.goto(`https://honsupermotos.com${link}`, {waitUntil: 'networkidle2'});
            
            // The color picker has buttons with bg colors, and they probably change the main image.
            // Let's look for the main image and click each color button to see what it changes to.
            const colorButtons = await page.$$('button[title], button[aria-label^="Seleccionar color"]');
            
            const bikeColors = [];
            
            for (let i = 0; i < colorButtons.length; i++) {
                await colorButtons[i].click();
                await new Promise(r => setTimeout(r, 200)); // wait for image to update
                
                // Get the main image src
                const imgUrl = await page.evaluate(() => {
                    const img = document.querySelector('.aspect-\\[4\\\\/3\\] img');
                    return img ? img.getAttribute('src') : null;
                });
                
                // Get color name/hex
                const colorData = await page.evaluate((idx) => {
                    const btns = document.querySelectorAll('button[title], button[aria-label^="Seleccionar color"]');
                    const btn = btns[idx];
                    const span = btn.querySelector('span');
                    return {
                        name: btn.getAttribute('title') || btn.getAttribute('aria-label').replace('Seleccionar color ', ''),
                        hex: span ? span.style.backgroundColor : null
                    };
                }, i);
                
                if (imgUrl && colorData) {
                    bikeColors.push({
                        ...colorData,
                        image: imgUrl
                    });
                }
            }
            
            if (bikeColors.length > 0) {
                allColors[link.replace('/', '')] = bikeColors;
            }
        }
        
        fs.writeFileSync('C:/Users/USUARIO/.gemini/antigravity/brain/c648ccdf-c693-4709-b466-139a43d21fd6/scratch/extracted_colors.json', JSON.stringify(allColors, null, 2));
        console.log('Done extracting colors!');
        
        await browser.close();
    } catch(e) {
        console.error(e);
    }
})();
