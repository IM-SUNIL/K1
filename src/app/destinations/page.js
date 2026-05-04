import Link from 'next/link';

export default function Destinations() {
  const destinations = [
    { name: 'Kashmir', image: '/images/Packages/kashmir_escape.jpg', desc: 'The Paradise on Earth with stunning lakes and valleys.' },
    { name: 'Himachal', image: '/images/himachal1.jpg', desc: 'Snow-capped peaks and adventurous mountain trails.' },
    { name: 'Vaishno Devi', image: '/images/Packages/Vaishno Devi.jpg', desc: 'Spiritual journey to the holy shrine in Trikuta Hills.' },
    { name: 'Uttrakhand', image: '/images/Packages/uttrakhand.jpg', desc: 'Land of Gods, mountains, and serene rivers.' },
    { name: 'Delhi', image: '/images/Packages/Delhi.jpg', desc: 'The heart of India with rich history and markets.' },
    { name: 'Ladakh', image: '/images/kashmir1.jpg', desc: 'The land of high passes and surreal landscapes.' },
    { name: 'Amritsar', image: '/images/hl-trust.jpg', desc: 'Home to the Golden Temple and rich Punjabi heritage.' }
  ];

  return (
    <div className="destinations-page">
      <div className="section">
        <div className="page-intro">
          <h1>Explore Destinations</h1>
          <p>Discover the beauty of North India with our hand-picked destinations.</p>
        </div>
        <div className="destinations-grid">
          {destinations.map((dest) => (
            <div key={dest.name} className="dest-card-large">
              <div className="dest-image">
                <img src={dest.image} alt={dest.name} loading="lazy" />
              </div>
              <div className="dest-info">
                <h2>{dest.name}</h2>
                <p>{dest.desc}</p>
                <Link href={`/packages?q=${dest.name.toLowerCase()}`} className="btn btn-primary btn-sm">View Packages</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
