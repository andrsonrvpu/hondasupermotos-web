const fs = require('fs');

const file = 'c:/Users/USUARIO/clon pagina motos/src/data/motorcycles.ts';
let content = fs.readFileSync(file, 'utf-8');

// The colors arrays look like:
// colors: [
//   { name: "Rojo", hex: "#DC2626", image: "..." },
//   ...
// ],

content = content.replace(/colors:\s*\[([\s\S]*?)\]/g, (match, items) => {
    const lines = items.trim().split('\n').map(l => l.trim()).filter(l => l.length > 0);
    // remove trailing comma if present
    const parsedLines = lines.map(l => {
        let clean = l;
        if (clean.endsWith(',')) clean = clean.slice(0, -1);
        return { text: l, clean };
    });
    
    const unique = [];
    const seen = new Set();
    
    for (const obj of parsedLines) {
        if (!seen.has(obj.clean)) {
            seen.add(obj.clean);
            unique.push(obj.text);
        }
    }
    
    return `colors: [\n      ${unique.join('\n      ')}\n    ]`;
});

fs.writeFileSync(file, content);
console.log('Duplicates removed.');
