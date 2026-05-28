import fs from "fs";
import path from "path";
import { imageSizeFromFile } from "image-size/fromFile";
import GalleryGrid from "./GalleryGrid";



interface ImageItem {
  src: string;
  width: number;
  height: number;
  aspectRatio: number;
  name: string;
}

async function getGalleryImages(): Promise<ImageItem[]> {
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  
  // Ensure the directory exists
  if (!fs.existsSync(galleryDir)) {
    try {
      await fs.promises.mkdir(galleryDir, { recursive: true });
    } catch (err) {
      console.error("Failed to create gallery directory:", err);
      return [];
    }
    return [];
  }
  
  try {
    const files = await fs.promises.readdir(galleryDir);
    const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".bmp"];
    
    const imageFiles = files.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });
    
    const images: ImageItem[] = [];
    
    for (const file of imageFiles) {
      const filePath = path.join(galleryDir, file);
      try {
        // Read file dimensions asynchronously using the modern image-size 2.x fromFile API
        const dimensions = await imageSizeFromFile(filePath);
        const width = dimensions.width || 800;
        const height = dimensions.height || 600;
        
        images.push({
          src: `/gallery/${file}`,
          width,
          height,
          aspectRatio: width / height,
          name: file,
        });
      } catch (err) {
        console.error(`Error reading metadata for ${file} with imageSizeFromFile:`, err);
        // Fallback dimensions in case file is corrupt or image-size fails to parse
        images.push({
          src: `/gallery/${file}`,
          width: 800,
          height: 600,
          aspectRatio: 800 / 600,
          name: file,
        });
      }
    }
    
    // Sort images alphabetically by file name (so names like pic1, pic2, etc. order cleanly)
    return images.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));
  } catch (err) {
    console.error("Error reading gallery files:", err);
    return [];
  }
}

export default async function GalleryPage() {
  const images = await getGalleryImages();
  
  return <GalleryGrid initialImages={images} />;
}
