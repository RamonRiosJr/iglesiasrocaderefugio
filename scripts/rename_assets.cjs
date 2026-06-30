const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../Iglesias Roca de Refugio');
const targetDir = path.join(__dirname, '../public/assets/images');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(sourceDir);

const newNames = [
  'iglesia-roca-de-refugio-worship-service-1',
  'iglesia-roca-de-refugio-community-1',
  'iglesia-roca-de-refugio-praise-1',
  'iglesia-roca-de-refugio-worship-service-2',
  'iglesia-roca-de-refugio-church-family',
  'iglesia-roca-de-refugio-montrose-co-1',
  'iglesia-roca-de-refugio-montrose-co-2',
  'iglesia-roca-de-refugio-sermon',
  'iglesia-roca-de-refugio-youth-group',
  'iglesia-roca-de-refugio-prayer',
  'iglesia-roca-de-refugio-bible-study',
  'iglesia-roca-de-refugio-sunday-service',
  'iglesia-roca-de-refugio-event',
  'iglesia-roca-de-refugio-worship-service-3',
  'iglesia-roca-de-refugio-community-2',
  'iglesia-roca-de-refugio-praise-2',
  'iglesia-roca-de-refugio-church-building',
  'iglesia-roca-de-refugio-altar',
  'iglesia-roca-de-refugio-cross',
  'pastor-benjamin-avina'
];

let nameIndex = 0;

files.forEach(file => {
  if (file === 'info.txt') return;
  
  const ext = path.extname(file);
  let newName = '';
  
  if (file === 'Pastpr Benjamin Aviña.jpg') {
    newName = 'pastor-benjamin-avina' + ext;
  } else {
    if (nameIndex < newNames.length) {
      newName = newNames[nameIndex] + ext;
      nameIndex++;
    } else {
      newName = `iglesia-roca-de-refugio-photo-${nameIndex}` + ext;
      nameIndex++;
    }
  }
  
  const sourceFile = path.join(sourceDir, file);
  const targetFile = path.join(targetDir, newName);
  
  fs.copyFileSync(sourceFile, targetFile);
  console.log(`Copied ${file} -> ${newName}`);
});

console.log('Done moving and renaming files!');
