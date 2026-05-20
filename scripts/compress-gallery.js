const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const picturesDir = path.join(__dirname, '..', 'app', 'gallery', 'pictures');
const thumbnailsDir = path.join(picturesDir, 'thumbnails');

if (!fs.existsSync(thumbnailsDir)) {
  fs.mkdirSync(thumbnailsDir, { recursive: true });
}

fs.readdir(picturesDir, async (err, files) => {
  if (err) {
    console.error('Error reading pictures directory:', err);
    return;
  }

  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.png', '.jpg', '.jpeg', '.webp'].includes(ext);
  });

  console.log(`Found ${imageFiles.length} images. Processing thumbnails...`);

  for (const file of imageFiles) {
    const inputPath = path.join(picturesDir, file);
    const outputPath = path.join(thumbnailsDir, file);

    try {
      const ext = path.extname(file).toLowerCase();
      let pipeline = sharp(inputPath).resize({ width: 600, withoutEnlargement: true });

      if (ext === '.png') {
        pipeline = pipeline.png({ quality: 80, palette: true, compressionLevel: 8 });
      } else if (['.jpg', '.jpeg'].includes(ext)) {
        pipeline = pipeline.jpeg({ quality: 80, progressive: true });
      } else if (ext === '.webp') {
        pipeline = pipeline.webp({ quality: 80 });
      }

      await pipeline.toFile(outputPath);
      const originalStats = fs.statSync(inputPath);
      const thumbStats = fs.statSync(outputPath);
      const savings = ((1 - (thumbStats.size / originalStats.size)) * 100).toFixed(1);
      console.log(`✓ Generated thumbnail for ${file}: ${(originalStats.size / (1024 * 1024)).toFixed(2)}MB -> ${(thumbStats.size / 1024).toFixed(1)}KB (${savings}% savings)`);
    } catch (error) {
      console.error(`✗ Error processing ${file}:`, error);
    }
  }
  console.log('All thumbnails generated successfully!');
});
