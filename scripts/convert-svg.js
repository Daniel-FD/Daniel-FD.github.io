const sharp = require('sharp');
const fs = require('fs');

const svgBuffer = fs.readFileSync('static/logos/df_logo.svg');

sharp(svgBuffer)
    .resize(64, 64) // Keep original size
    .png()
    .toFile('static/logos/df_logo.png')
    .then(info => { console.log('Conversion complete:', info); })
    .catch(err => { console.error('Error converting file:', err); }); 