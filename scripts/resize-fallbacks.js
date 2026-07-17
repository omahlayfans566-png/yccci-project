const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'images');
const TEMP_DIR = path.join(__dirname, '..', 'images', '.temp');

// Ensure temp directory exists
if (!fs.existsSync(TEMP_DIR)) {
  fs.mkdirSync(TEMP_DIR, { recursive: true });
}

const images = [
  { file: 'yccci-hero-section.png', maxWidth: 1920 },
  { file: 'youngforchristlogo.png', maxWidth: 120 },
  { file: 'our-vision.jpg', maxWidth: 800 },
  { file: 'youth-fellowship.png', maxWidth: 800 },
  { file: 'donation-img.jpg', maxWidth: 800 },
  { file: 'bible-studies.png', maxWidth: 800 },
  { file: 'sacredheart-novena.png', maxWidth: 800 },
  { file: 'holyrosary-img.png', maxWidth: 800 },
  { file: 'st-josephnovena.png', maxWidth: 800 },
  { file: 'divinemercy-novena.png', maxWidth: 800 },
  { file: 'holyspirit-novena.png', maxWidth: 800 },
  { file: 'immaculate-novena.png', maxWidth: 800 },
];

async function resizeFallback(config) {
  const inputPath = path.join(IMAGES_DIR, config.file);
  const ext = path.extname(config.file).toLowerCase();
  const tempPath = path.join(TEMP_DIR, config.file);

  if (!fs.existsSync(inputPath)) {
    console.log(`  SKIP: ${config.file} not found`);
    return;
  }

  const metadata = await sharp(inputPath).metadata();
  const originalWidth = metadata.width;
  const originalSizeKB = (fs.statSync(inputPath).size / 1024).toFixed(1);

  if (originalWidth <= config.maxWidth) {
    console.log(`  SKIP: ${config.file} already small enough (${originalWidth}px <= ${config.maxWidth}px)`);
    return;
  }

  console.log(`\nProcessing: ${config.file}`);
  console.log(`  Original: ${originalWidth}x${metadata.height}, ${originalSizeKB}KB`);

  try {
    let pipeline = sharp(inputPath).resize({ width: config.maxWidth, withoutEnlargement: true });

    if (ext === '.jpg' || ext === '.jpeg') {
      await pipeline.jpeg({ quality: 85, mozjpeg: true }).toFile(tempPath);
    } else if (ext === '.png') {
      await pipeline.png({ compressionLevel: 9, palette: true }).toFile(tempPath);
    }

    // Replace original with resized version
    const tempSizeKB = (fs.statSync(tempPath).size / 1024).toFixed(1);
    fs.copyFileSync(tempPath, inputPath);
    fs.unlinkSync(tempPath);
    
    console.log(`  Resized to ${config.maxWidth}px wide: ${tempSizeKB}KB (was ${originalSizeKB}KB)`);
  } catch (err) {
    console.error(`  ERROR: ${err.message}`);
  }
}

async function main() {
  console.log('=== Resizing Original Fallback Images ===\n');
  
  for (const config of images) {
    await resizeFallback(config);
  }
  
  // Clean up temp dir
  if (fs.existsSync(TEMP_DIR)) {
    fs.rmdirSync(TEMP_DIR);
  }
  
  console.log('\n=== Resizing Complete ===');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});