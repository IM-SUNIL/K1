"use client";
import Link from 'next/link';

export default function Gallery() {
  return (
    <>
<div><div className="page-hero">
      <h1>Gallery</h1>
      <p>A glimpse of the landscapes we build itineraries around. Tap any image to view it full screen.</p>
    </div><div className="gallery-filters" role="tablist" aria-label="Filter by region">
      <button type="button" className="filter-btn is-active" data-filter="all" role="tab">All</button>
      <button type="button" className="filter-btn" data-filter="kashmir" role="tab">Kashmir</button>
      <button type="button" className="filter-btn" data-filter="himachal" role="tab">Himachal</button>
      <button type="button" className="filter-btn" data-filter="vaishnodevi" role="tab">Vaishno Devi</button>
    </div><div className="gallery-masonry">
      <button type="button" className="gallery-item tall" data-lightbox="" data-category="kashmir" aria-label="Open Kashmir photo fullscreen">
        <img src="images/kashmir1.jpg" alt="Kashmir lakes and mountains" width="800" height="800" loading="lazy" />
        <span className="caption">Kashmir</span>
      </button>
      <button type="button" className="gallery-item" data-lightbox="" data-category="kashmir" aria-label="Open Kashmir landscape fullscreen">
        <img src="images/kashmir2.jpg" alt="Alpine scenery in Kashmir region" width="800" height="800" loading="lazy" />
        <span className="caption">Kashmir</span>
      </button>
      <button type="button" className="gallery-item" data-lightbox="" data-category="himachal" aria-label="Open Himachal photo fullscreen">
        <img src="images/himachal1.jpg" alt="Himachal mountain valley" width="800" height="800" loading="lazy" />
        <span className="caption">Himachal</span>
      </button>
      <button type="button" className="gallery-item" data-lightbox="" data-category="himachal" aria-label="Open Himachal hills fullscreen">
        <img src="images/himachal2.jpg" alt="Himachal Pradesh peaks" width="800" height="800" loading="lazy" />
        <span className="caption">Himachal</span>
      </button>
      <button type="button" className="gallery-item tall" data-lightbox="" data-category="vaishnodevi" aria-label="Open Vaishno Devi trail photo fullscreen">
        <img src="images/vaishnodevi1.jpg" alt="Mountain trail toward Vaishno Devi" width="800" height="800" loading="lazy" />
        <span className="caption">Vaishno Devi</span>
      </button>
      <button type="button" className="gallery-item" data-lightbox="" data-category="kashmir" aria-label="Open hero landscape fullscreen">
        <img src="images/hero.jpg" alt="Dramatic Himalayan ridgelines" width="800" height="800" loading="lazy" />
        <span className="caption">Himalaya</span>
      </button>
    </div></div>
</>
  );
}