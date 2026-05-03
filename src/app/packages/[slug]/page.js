import Link from 'next/link';
import { notFound } from 'next/navigation';
import { packages } from '@/data/packages';

export async function generateStaticParams() {
  return Object.keys(packages).map((slug) => ({
    slug: slug,
  }));
}

export default async function PackageDetail({ params }) {
  const { slug } = await params;
  const pkg = packages[slug];

  if (!pkg) {
    notFound();
  }

  return (
    <>
      <div className="page-hero">
        <h1>{pkg.title}</h1>
        <p>{pkg.duration} · Premium Itinerary</p>
      </div>

      <div className="section">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          
          <img 
            src={pkg.image} 
            alt={pkg.title} 
            style={{ width: '100%', borderRadius: '16px', marginBottom: '32px', objectFit: 'cover', maxHeight: '400px' }} 
          />

          <div style={{ marginBottom: '40px' }}>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>Overview</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>{pkg.overview}</p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>What's Included</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {pkg.includes.map((item, idx) => (
                <li key={idx} style={{ background: 'var(--bg-secondary)', padding: '8px 16px', borderRadius: '30px', fontSize: '0.95rem', fontWeight: '500' }}>
                  ✓ {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>Where to Stay</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {pkg.stay.map((item, idx) => (
                <li key={idx} style={{ padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>{item.split(':')[0]}</strong>: {item.split(':')[1]}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 className="section-title" style={{ marginBottom: '24px' }}>Itinerary Details</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {pkg.itinerary.map((day, idx) => (
                <div key={idx} style={{ background: 'var(--bg-secondary)', padding: '24px', borderRadius: '12px' }}>
                  <p style={{ color: 'var(--brand-primary)', fontWeight: '600', marginBottom: '8px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{day.day}</p>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>{day.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{day.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '60px', marginBottom: '40px', padding: '40px', background: 'var(--bg-secondary)', borderRadius: '16px', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '16px' }}>Ready to Book?</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Contact us on WhatsApp to customize and book this package.</p>
            <Link 
              className="btn btn-primary" 
              href={`https://wa.me/919906130577?text=Hi%20Katra%20Travels%2C%20I%27d%20like%20to%20book%20the%20${encodeURIComponent(pkg.title)}%20package.`}
              target="_blank"
            >
              Book on WhatsApp
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
