import fs from 'fs';
import path from 'path';
import GalleryClient from './GalleryClient';

export const metadata = {
  title: 'Gallery | Katra Travels',
  description: 'A glimpse of the landscapes we build itineraries around.',
};

function getImagesFromDir(dirName) {
  const dirPath = path.join(process.cwd(), 'public', 'images', 'gallery', dirName);
  try {
    if (fs.existsSync(dirPath)) {
      const files = fs.readdirSync(dirPath);
      // Filter out non-image files if needed
      return files.filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file)).map(file => `/images/gallery/${dirName}/${file}`);
    }
  } catch (error) {
    console.error(`Error reading directory ${dirName}:`, error);
  }
  return [];
}

export default function Gallery() {
  const galleryImages = {
    kashmir: getImagesFromDir('kashmir'),
    himachal: getImagesFromDir('himachal'),
    vaishnodevi: getImagesFromDir('vaishnodevi'),
    people: getImagesFromDir('people'),
  };

  return <GalleryClient galleryImages={galleryImages} />;
}