import Link from 'next/link';

export default function Destinations() {
  const destinations = [
    { name: 'Kashmir', image: '/images/destinations/kashmir.jpg', desc: 'The Paradise on Earth with stunning lakes and valleys.' },
    { name: 'Ladakh', image: '/images/destinations/ladakh.png', desc: 'The land of high passes and surreal landscapes.' },
    { name: 'Vaishno Devi', image: '/images/destinations/Vaishnodevi.jpg', desc: 'Spiritual journey to the holy shrine in Trikuta Hills.' },
    { name: 'Himachal', image: '/images/destinations/himachal.jpg', desc: 'Snow-capped peaks and adventurous mountain trails.' },
    { name: 'Uttrakhand', image: '/images/destinations/uttarakhand.png', desc: 'Land of Gods, mountains, and serene rivers.' },
    { name: 'Rajasthan', image: '/images/destinations/Rajasthan.jpg', desc: 'Experience the royal heritage, majestic forts, and golden sand dunes.' },
    { name: 'Delhi', image: '/images/destinations/Delhi.jpg', desc: 'The heart of India with rich history and markets.' },
    { name: 'Vrindavan', image: '/images/destinations/vrindavan.png', desc: 'The sacred city where Lord Krishna spent his childhood.' },
    { name: 'Amritsar', image: '/images/destinations/Amritsar.jpg', desc: 'Home to the Golden Temple and rich Punjabi heritage.' }
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
