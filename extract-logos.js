const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf-8');

// Match zoho cards
const cardRegex = /<a[^>]*href="([^"]*)"[^>]*class="zoho-card[^"]*"[^>]*>([\s\S]*?)<\/a>/g;
let match;
const products = [];

while ((match = cardRegex.exec(html)) !== null) {
  const href = match[1];
  const inner = match[2];
  
  const imgMatch = inner.match(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"/);
  const nameMatch = inner.match(/<div class="zoho-product-name">([^<]*)<\/div>/);
  const descMatch = inner.match(/<div class="zoho-product-desc">([^<]*)<\/div>/);
  
  if (imgMatch && nameMatch) {
    products.push({
      name: nameMatch[1].trim(),
      desc: descMatch ? descMatch[1].trim() : '',
      alt: imgMatch[2],
      imgSrc: imgMatch[1],
      href: href
    });
  }
}

console.log('Found', products.length, 'Zoho products with images:');
products.forEach(p => console.log('-', p.name, 'image length:', p.imgSrc.length));

// Save them as individual pngs in public/images/logos/
const outDir = path.join(__dirname, 'public/images/logos');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

products.forEach(p => {
  if (p.imgSrc.startsWith('data:image/png;base64,')) {
    const slug = p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const base64Data = p.imgSrc.replace(/^data:image\/png;base64,/, '');
    const filename = `${slug}.png`;
    fs.writeFileSync(path.join(outDir, filename), Buffer.from(base64Data, 'base64'));
    p.localFile = `/images/logos/${filename}`;
    console.log('Saved', filename);
  }
});

fs.writeFileSync(
  path.join(__dirname, 'src/data/extracted-zoho-products.json'),
  JSON.stringify(products.map(({ name, desc, href, localFile }) => ({ name, desc, href, localFile })), null, 2)
);
console.log('Done extracting!');
