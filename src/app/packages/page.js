import Link from 'next/link';
import { packages } from '@/data/packages';

export default function Packages() {
  const packageList = Object.values(packages);

  return (
    <>
      <div className="section" style={{ paddingTop: '1rem' }}>
        <div className="page-intro">
          <h1>Our Tour Packages</h1>
        </div>
        <div className="packages-grid">
          {packageList.map((pkg) => (
            <article key={pkg.id} className="pkg-full-card">
              <div style={{ position: 'relative', height: '275px' }}>
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  loading="lazy" 
                />
              </div>
              <div className="pkg-full-inner">
                <h2>{pkg.title}</h2>
                <p className="pkg-meta">{pkg.duration}</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '1.25rem', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: '2.8rem' }}>
                  {pkg.overview}
                </p>
                <ul className="pkg-bullets">
                  {pkg.includes.slice(0, 3).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                  {pkg.includes.length > 3 && <li>& more</li>}
                </ul>
                <div style={{ marginTop: 'auto' }}>
                  <Link href={`/packages/${pkg.id}`} style={{ display: 'block', textAlign: 'center', margin: '16px 0', color: 'var(--accent)', fontWeight: '600', fontSize: '0.9rem' }}>
                    View Detailed Itinerary →
                  </Link>
                  <Link 
                    className="btn btn-primary btn-block" 
                    href={`https://wa.me/919906130577?text=Hi%20Katra%20Travels%2C%20I%27d%20like%20to%20book%20the%20${encodeURIComponent(pkg.title)}%20package.`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Book on WhatsApp
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}