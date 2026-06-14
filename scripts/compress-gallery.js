const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const galleryDir = path.join(__dirname, '..', 'public', 'gallery');
const thumbsDir = path.join(galleryDir, 'thumbs');
const manifestPath = path.join(galleryDir, 'thumbs', 'manifest.json');

// Konfigurasi thumbnail
const THUMB_MAX_WIDTH = 800;
const THUMB_QUALITY = 80;

if (!fs.existsSync(thumbsDir)) {
  fs.mkdirSync(thumbsDir, { recursive: true });
}

async function run() {
  const files = fs.readdirSync(galleryDir);
  const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.bmp'];

  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return imageExtensions.includes(ext) && !fs.statSync(path.join(galleryDir, file)).isDirectory();
  });

  console.log(`Found ${imageFiles.length} images. Generating WebP thumbnails...`);

  const manifest = [];

  for (const file of imageFiles) {
    const inputPath = path.join(galleryDir, file);
    const baseName = path.basename(file, path.extname(file));
    const outputName = `${baseName}.webp`;
    const outputPath = path.join(thumbsDir, outputName);

    try {
      // Get original dimensions (reading metadata is very fast)
      const metadata = await sharp(inputPath).metadata();
      const origWidth = metadata.width || 800;
      const origHeight = metadata.height || 600;

      // Check if thumbnail already exists
      const fileExists = fs.existsSync(outputPath);
      
      if (!fileExists) {
        // Generate WebP thumbnail only if it doesn't exist
        await sharp(inputPath)
          .resize({ width: THUMB_MAX_WIDTH, withoutEnlargement: true })
          .webp({ quality: THUMB_QUALITY })
          .toFile(outputPath);

        const originalStats = fs.statSync(inputPath);
        const thumbStats = fs.statSync(outputPath);
        const savings = ((1 - (thumbStats.size / originalStats.size)) * 100).toFixed(1);
        console.log(`✓ NEW: ${file}: ${(originalStats.size / (1024 * 1024)).toFixed(2)}MB → ${(thumbStats.size / 1024).toFixed(1)}KB (${savings}% savings)`);
      } else {
        // console.log(`- Skipped: ${file} (thumbnail exists)`);
      }

      manifest.push({
        original: file,
        thumb: outputName,
        width: origWidth,
        height: origHeight,
        aspectRatio: +(origWidth / origHeight).toFixed(4),
      });
    } catch (error) {
      console.error(`✗ Error processing ${file}:`, error.message);
      // Still add to manifest with fallback dimensions
      manifest.push({
        original: file,
        thumb: null,
        width: 800,
        height: 600,
        aspectRatio: 1.3333,
      });
    }
  }

  // Sort manifest alphabetically
  manifest.sort((a, b) => a.original.localeCompare(b.original, undefined, { numeric: true, sensitivity: 'base' }));

  // Write manifest JSON
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`\n✓ Manifest written to ${manifestPath}`);
  console.log(`✓ ${manifest.length} thumbnails generated in ${thumbsDir}`);
}

run().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
