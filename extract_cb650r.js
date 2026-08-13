const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({headless: 'new'});
        const page = await browser.newPage();
        
        await page.goto('https://honsupermotos.com/cb650r', {waitUntil: 'networkidle2'});
        
        // Wait for page to load
        await new Promise(r => setTimeout(r, 2000));
        
        // Use evaluate to avoid clickablePoint error
        const results = await page.evaluate(async () => {
            const btns = document.querySelectorAll('button[title], button[aria-label^="Seleccionar color"]');
            const data = [];
            for (let i = 0; i < btns.length; i++) {
                const btn = btns[i];
                btn.click();
                
                // wait for image to load/switch
                await new Promise(r => setTimeout(r, 1000));
                
                const img = document.querySelector('.aspect-\\[4\\\\/3\\] img');
                data.push({
                    color: btn.getAttribute('title') || btn.getAttribute('aria-label'),
                    imgUrl: img ? img.getAttribute('src') : null
                });
            }
            return data;
        });
        
        console.log(JSON.stringify(results, null, 2));
        
        await browser.close();
    } catch(e) {
        console.error(e);
        process.exit(1);
    }
})();
