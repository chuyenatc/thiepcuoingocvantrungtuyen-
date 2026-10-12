const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/"templateData":\s*"([^"]+)"/);
if (match) {
  const decoded = Buffer.from(match[1], 'base64').toString('utf8');
  fs.writeFileSync('decoded.json', decoded);
  console.log('Decoded and saved to decoded.json');
} else {
  console.log('Not found');
}
