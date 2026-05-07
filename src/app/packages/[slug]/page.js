import Link from 'next/link';
import { notFound } from 'next/navigation';
import { packages } from '@/data/packages';

export async function generateStaticParams() {
  return Object.keys(packages).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pkg = packages[slug];

  if (!pkg) {
    return {
      title: 'Package Not Found | Katra Travels',
    };
  }

  return {
    title: `${pkg.title} | ${pkg.duration} - Katra Travels`,
    description: pkg.overview.substring(0, 160) + '...',
    keywords: [pkg.title, pkg.duration, 'Katra Travels', 'Tour Package', 'North India Travel', 'Local Tour Operator'],
  };
}

export default async function PackageDetail({ params }) {
  const { slug } = await params;
  const pkg = packages[slug];

  if (!pkg) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Trip",
    "name": pkg.title,
    "description": pkg.overview,
    "duration": pkg.duration,
    "provider": {
      "@type": "TravelAgency",
      "name": "Katra Travels",
      "url": "https://katratravels.com"
    },
    "itinerary": pkg.itinerary.map((day, idx) => ({
      "@type": "HowToStep",
      "name": `${day.day}: ${day.title}`,
      "text": day.description,
      "position": idx + 1
    })),
    "image": pkg.image
  };

  return (
    <>
      <div className="section">
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
          
          <div className="page-intro">
            <h1>{pkg.title}</h1>
            <p>{pkg.duration} · Premium Itinerary</p>
          </div>
          <div style={{ position: 'relative', height: '400px', width: '100%', borderRadius: 'var(--radius)', overflow: 'hidden', marginBottom: '3rem', boxShadow: 'var(--shadow-lg)' }}>
            <img 
              src={pkg.image} 
              alt={pkg.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
            
            <section>
              <h2 className="section-title" style={{ marginBottom: '1.25rem', fontSize: '1.75rem' }}>Overview</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: '1.7' }}>{pkg.overview}</p>
            </section>

            <section>
              <h2 className="section-title" style={{ marginBottom: '1.5rem', fontSize: '1.75rem' }}>Highlights & Inclusions</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {pkg.includes.map((item, idx) => (
                  <span key={idx} style={{ background: 'var(--bg-warm)', padding: '0.65rem 1.25rem', borderRadius: '99px', fontSize: '0.9rem', fontWeight: '600', color: 'var(--accent)', border: '1px solid var(--line)' }}>
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="section-title" style={{ marginBottom: '2.5rem', fontSize: '1.75rem' }}>Full Itinerary</h2>
              <div className="timeline">
                {pkg.itinerary.map((day, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-day">{day.day}</div>
                      <h3 className="timeline-title">{day.title}</h3>
                      <p className="timeline-desc">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {pkg.stay && pkg.stay.length > 0 && (
              <section>
                <h2 className="section-title" style={{ marginBottom: '1.5rem', fontSize: '1.75rem' }}>Accommodation Details</h2>
                <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                  {pkg.stay.map((item, idx) => (
                    <div key={idx} style={{ padding: '1rem 1.5rem', borderBottom: idx === pkg.stay.length - 1 ? 'none' : '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: '600' }}>{item.includes(':') ? item.split(':')[0] : 'Stay Location'}</span>
                      <span style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>{item.includes(':') ? item.split(':')[1] : item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <div style={{ marginTop: '2rem', padding: '3.5rem 2rem', background: 'var(--ink)', borderRadius: 'var(--radius)', textAlign: 'center', color: '#fff', boxShadow: 'var(--shadow-lg)' }}>
              <h2 style={{ color: '#fff', marginBottom: '1rem', fontSize: '2rem' }}>Experience this Journey</h2>
              <p style={{ opacity: '0.8', marginBottom: '2.5rem', fontSize: '1.1rem', maxWidth: '40ch', marginInline: 'auto' }}>
                Contact our travel experts on WhatsApp to get a personalized quote and customize your trip.
              </p>
              <Link 
                className="btn btn-primary btn-lg" 
                href={`https://wa.me/919906130577?text=Hi%20Katra%20Travels%2C%20I%27d%20like%20to%20inquire%20about%20the%20${encodeURIComponent(pkg.title)}%20package.`}
                target="_blank"
                style={{ minWidth: '240px' }}
              >
                Inquire on WhatsApp
              </Link>
            </div>

          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

