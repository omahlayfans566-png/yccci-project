const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'images');

const images = [
  { file: 'our-vision.jpg', maxWidth: 800 },
  { file: 'donation-img.jpg', maxWidth: 800 },
];

async function resizeJpg(config) {
  const inputPath = path.join(IMAGES_DIR, config.file);
  const ext = path.extname(config.file).toLowerCase();
  const baseName = path.basename(config.file, ext);
  const tempPath = path.join(IMAGES_DIR, `${baseName}-resized${ext}`);

  if (!fs.existsSync(inputPath)) {
    console.log(`  SKIP: ${config.file} not found`);
    return;
  }

  const metadata = await sharp(inputPath).metadata();
  const originalWidth = metadata.width;
  const originalSizeKB = (fs.statSync(inputPath).size / 1024).toFixed(1);

  if (originalWidth <= config.maxWidth) {
    console.log(`  SKIP: ${config.file} already small enough`);
    return;
  }

  console.log(`\nProcessing: ${config.file}`);
  console.log(`  Original: ${originalWidth}x${metadata.height}, ${originalSizeKB}KB`);

  try {
    await sharp(inputPath)
      .resize({ width: config.maxWidth, withoutEnlargement: true })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(tempPath);

    const tempSizeKB = (fs.statSync(tempPath).size / 1024).toFixed(1);
    
    // Delete original, rename temp to original
    fs.unlinkSync(inputPath);
    fs.renameSync(tempPath, inputPath);
    
    console.log(`  Resized to ${config.maxWidth}px wide: ${tempSizeKB}KB (was ${originalSizeKB}KB)`);
  } catch (err) {
    console.error(`  ERROR: ${err.message}`);
  }
}

async function main() {
  console.log('=== Resizing JPG Fallback Images ===\n');
  
  for (const config of images) {
    await resizeJpg(config);
  }
  
  console.log('\n=== Complete ===');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});