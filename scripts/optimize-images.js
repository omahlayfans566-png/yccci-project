const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'images');
const OUTPUT_DIR = path.join(__dirname, '..', 'images');

// Image configurations: [filename, maxWidth, quality]
// Based on actual display sizes from CSS analysis
const images = [
  // Hero background - full viewport width, max 1920px
  { file: 'yccci-hero-section.png', maxWidth: 1920, quality: 80 },
  
  // Logo - displayed at 48x48 and 120x120
  { file: 'youngforchristlogo.png', maxWidth: 120, quality: 85 },
  
  // About section images - displayed at 600x450 (full column width)
  { file: 'our-vision.jpg', maxWidth: 800, quality: 82 },
  
  // Activity/Novena card images - displayed at 400x220
  { file: 'youth-fellowship.png', maxWidth: 800, quality: 82 },
  { file: 'donation-img.jpg', maxWidth: 800, quality: 82 },
  { file: 'bible-studies.png', maxWidth: 800, quality: 82 },
  
  // Novena card images - displayed at 400x220
  { file: 'sacredheart-novena.png', maxWidth: 800, quality: 82 },
  { file: 'holyrosary-img.png', maxWidth: 800, quality: 82 },
  { file: 'st-josephnovena.png', maxWidth: 800, quality: 82 },
  { file: 'divinemercy-novena.png', maxWidth: 800, quality: 82 },
  { file: 'holyspirit-novena.png', maxWidth: 800, quality: 82 },
  { file: 'immaculate-novena.png', maxWidth: 800, quality: 82 },
];

async function getImageMetadata(filepath) {
  try {
    const metadata = await sharp(filepath).metadata();
    return metadata;
  } catch (err) {
    console.error(`  Could not read metadata for ${filepath}: ${err.message}`);
    return null;
  }
}

async function optimizeImage(config) {
  const inputPath = path.join(IMAGES_DIR, config.file);
  
  if (!fs.existsSync(inputPath)) {
    console.log(`  SKIP: ${config.file} not found`);
    return;
  }

  const ext = path.extname(config.file).toLowerCase();
  const baseName = path.basename(config.file, ext);
  
  // Get original dimensions
  const metadata = await getImageMetadata(inputPath);
  if (!metadata) return;
  
  const originalWidth = metadata.width;
  const originalHeight = metadata.height;
  const originalSizeKB = (fs.statSync(inputPath).size / 1024).toFixed(1);
  
  console.log(`\nProcessing: ${config.file}`);
  console.log(`  Original: ${originalWidth}x${originalHeight}, ${originalSizeKB}KB`);
  
  // Determine resize dimensions (maintain aspect ratio)
  let resizeWidth = config.maxWidth;
  let resizeHeight = null;
  
  if (originalWidth <= config.maxWidth) {
    // Don't upscale, just use original dimensions
    resizeWidth = originalWidth;
  }
  
  // Output paths
  const webpPath = path.join(OUTPUT_DIR, `${baseName}.webp`);
  
  // Create WebP version
  try {
    let pipeline = sharp(inputPath);
    
    if (resizeWidth && resizeWidth < originalWidth) {
      pipeline = pipeline.resize({ width: resizeWidth, withoutEnlargement: true });
    }
    
    await pipeline
      .webp({ quality: config.quality, effort: 6 })
      .toFile(webpPath);
    
    const webpSizeKB = (fs.statSync(webpPath).size / 1024).toFixed(1);
    const savings = ((1 - fs.statSync(webpPath).size / fs.statSync(inputPath).size) * 100).toFixed(1);
    console.log(`  WebP: ${webpPath} (${webpSizeKB}KB, ${savings}% savings)`);
  } catch (err) {
    console.error(`  ERROR creating WebP for ${config.file}: ${err.message}`);
  }
  
  // Also create a resized JPEG/PNG version for fallback (if original is larger than needed)
  if (resizeWidth && resizeWidth < originalWidth * 0.8) {
    const resizedExt = ext;
    const resizedPath = path.join(OUTPUT_DIR, `${baseName}${resizedExt}`);
    
    try {
      let pipeline = sharp(inputPath);
      
      // Resize
      pipeline = pipeline.resize({ width: resizeWidth, withoutEnlargement: true });
      
      if (ext === '.jpg' || ext === '.jpeg') {
        await pipeline.jpeg({ quality: config.quality, mozjpeg: true }).toFile(resizedPath);
      } else if (ext === '.png') {
        await pipeline.png({ quality: config.quality, compressionLevel: 9 }).toFile(resizedPath);
      }
      
      const resizedSizeKB = (fs.statSync(resizedPath).size / 1024).toFixed(1);
      console.log(`  Resized fallback: ${resizedPath} (${resizedSizeKB}KB)`);
    } catch (err) {
      console.error(`  ERROR creating resized fallback for ${config.file}: ${err.message}`);
    }
  }
}

async function main() {
  console.log('=== YCCCI Image Optimization ===\n');
  
  for (const config of images) {
    await optimizeImage(config);
  }
  
  console.log('\n=== Optimization Complete ===');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});