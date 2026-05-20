"use client";
import { useState } from 'react';

export default function GalleryClient({ galleryImages }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const getFilteredImages = () => {
    let imagesToShow = [];
    if (activeFilter === 'all') {
      imagesToShow = [
        ...galleryImages.kashmir.map(src => ({ src, category: 'Kashmir' })),
        ...galleryImages.himachal.map(src => ({ src, category: 'Himachal' })),
        ...galleryImages.vaishnodevi.map(src => ({ src, category: 'Vaishno Devi' })),
        ...galleryImages.people.map(src => ({ src, category: 'People' }))
      ];
    } else if (activeFilter === 'kashmir') {
      imagesToShow = [
        ...galleryImages.kashmir.map(src => ({ src, category: 'Kashmir' })),
        ...galleryImages.people.map(src => ({ src, category: 'People' }))
      ];
    } else if (activeFilter === 'himachal') {
      imagesToShow = [
        ...galleryImages.himachal.map(src => ({ src, category: 'Himachal' })),
        ...galleryImages.people.map(src => ({ src, category: 'People' }))
      ];
    } else if (activeFilter === 'vaishnodevi') {
      imagesToShow = [
        ...galleryImages.vaishnodevi.map(src => ({ src, category: 'Vaishno Devi' })),
        ...galleryImages.people.map(src => ({ src, category: 'People' }))
      ];
    }
    
    return imagesToShow;
  };

  const images = getFilteredImages();

  return (
    <>
      <div className="section">
        <div className="page-intro">
          <h1>Gallery</h1>
          <p>A glimpse of the landscapes we build itineraries around. Tap any image to view it full screen.</p>
        </div>
        <div className="gallery-filters" role="tablist" aria-label="Filter by region">
          <button type="button" className={`filter-btn ${activeFilter === 'all' ? 'is-active' : ''}`} onClick={() => setActiveFilter('all')} role="tab">All</button>
          <button type="button" className={`filter-btn ${activeFilter === 'kashmir' ? 'is-active' : ''}`} onClick={() => setActiveFilter('kashmir')} role="tab">Kashmir</button>
          <button type="button" className={`filter-btn ${activeFilter === 'himachal' ? 'is-active' : ''}`} onClick={() => setActiveFilter('himachal')} role="tab">Himachal</button>
          <button type="button" className={`filter-btn ${activeFilter === 'vaishnodevi' ? 'is-active' : ''}`} onClick={() => setActiveFilter('vaishnodevi')} role="tab">Vaishno Devi</button>
        </div>
        <div className="gallery-masonry">
          {images.map((img, index) => {
            // Apply tall class to every 3rd item or based on a pattern for masonry effect
            const isTall = index % 5 === 0 || index % 5 === 3;
            return (
              <button key={index} type="button" className={`gallery-item ${isTall ? 'tall' : ''}`} data-lightbox="" data-category={img.category.toLowerCase().replace(' ', '')} aria-label={`Open ${img.category} photo fullscreen`}>
                <img src={img.src} alt={`${img.category} scenery`} width="800" height="800" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span className="caption">{img.category}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
