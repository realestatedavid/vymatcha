const fs = require('fs');
const html = fs.readFileSync("/Users/davidtran/Desktop/Vy's App/vys_cafe_menu.html", 'utf8');

const result = {};

// Strategy: Split by section labels
const sections = html.split('<span class="sec-label">');

sections.forEach(sec => {
  const labelMatch = sec.match(/^([^<]+)<\/span>/);
  if (!labelMatch) return;
  const label = labelMatch[1].trim().toLowerCase();
  
  console.log(`Processing section: "${label}"`);
  
  const drinks = sec.split('<div class="drow"');
  drinks.shift(); 
  
  drinks.forEach(chunk => {
    const svgMatch = chunk.match(/<svg[\s\S]*?<\/svg>/);
    const titleMatch = chunk.match(/class="dtitle">([^<]+(?:<[^>]+>[^<]*<\/[^>]+>)?[^<]*)/);
    if (!svgMatch || !titleMatch) return;
    
    const svg = svgMatch[0].trim();
    const cleanedTitle = titleMatch[1].replace(/<span[^>]*>[\s\S]*?<\/span>/g, '').replace(/<[^>]+>/g, '').trim();
    
    // Categorized mapping based on section label
    if (label === 'matcha latte') {
      if (cleanedTitle === 'Signature Einspanner') result['ein'] = svg;
      if (cleanedTitle === 'Regular') result['reg'] = svg;
      if (cleanedTitle === 'Strawberry') result['str'] = svg;
      if (cleanedTitle === 'Jasmine Tea Matcha Cloud') result['jas'] = svg;
      if (cleanedTitle === 'Pandan') result['pan'] = svg;
      if (cleanedTitle === 'Coconut Cloud') result['coc'] = svg;
      if (cleanedTitle === 'Maple') result['map'] = svg;
      if (cleanedTitle === 'Mango') result['man'] = svg;
      if (cleanedTitle === 'Ube') result['ube'] = svg;
    } else if (label === 'jasmine green tea') {
      if (cleanedTitle === 'Honey') result['jh'] = svg;
      if (cleanedTitle === 'Strawberry') result['jstr'] = svg;
      if (cleanedTitle === 'Mango') result['jman'] = svg;
      if (cleanedTitle === 'Passionfruit') result['jpas'] = svg;
    } else if (label === 'refreshers') {
      if (cleanedTitle === 'Limeade') result['lim'] = svg;
      if (cleanedTitle === 'Lemonade') result['lem'] = svg;
    } else if (label === 'coffee') {
      if (cleanedTitle === 'Vietnamese Coffee') result['vc'] = svg;
      if (cleanedTitle === 'Brown Sugar Shaken Espresso') result['bs'] = svg;
      if (cleanedTitle === 'White Mocha Iced Latte') result['wm'] = svg;
      if (cleanedTitle === 'Mocha Iced Latte') result['moc'] = svg;
    } else if (label === 'tea') {
      if (cleanedTitle === 'Thai Tea') result['tt'] = svg;
      if (cleanedTitle === 'Thai Green Tea') result['tg'] = svg;
    }
  });
});

// CUSTOM: Create Mango Passion Fruit by combining Mango icon + Passionfruit seeds
if (result['jman'] && result['jpas']) {
  const circles = result['jpas'].match(/<circle[\s\S]*?\/>/g) || [];
  result['manpas'] = result['jman'].replace('</svg>', circles.join('\n') + '\n</svg>');
  console.log('Created Mango Passion Fruit (manpas)');
}

let out = 'const DRINK_SVGS = {\n';
for (const [id, svg] of Object.entries(result)) {
  const escaped = svg.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
  out += `  '${id}': \`${escaped}\`,\n`;
}
out += '};\n';

fs.writeFileSync('/Users/davidtran/Downloads/david-tran-real-estate/vys-matcha/svgs.js', out);
console.log('svgs.js updated successfully!');
console.log('Matched IDs:', Object.keys(result).join(', '));
