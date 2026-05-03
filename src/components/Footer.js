import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
              <path d="M7.5 5L1 18H14L7.5 5Z" fill="var(--accent)" />
              <path d="M16 8L10 18H22L16 8Z" fill="var(--coral)" fillOpacity="0.9" />
              <path d="M11 12L8.5 16H13.5L11 12Z" fill="#fff" fillOpacity="0.8" />
            </svg>
            <span style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'var(--font-display)', background: 'linear-gradient(45deg, var(--accent) 0%, var(--coral) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em' }}>
              Katra Travels
            </span>
          </Link>
          <p>Hand-crafted itineraries, trusted drivers, and honest pricing across Kashmir, Himachal, and North India.</p>
        </div>
        <div className="footer-col">
          <h3 className="footer-heading">Explore</h3>
          <ul className="footer-links">
            <li><Link href="/packages">Packages</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>
        <div className="footer-col footer-contact-block">
          <h3 className="footer-heading">Reach us</h3>
          <p><Link href="tel:9906130577">9906130577</Link></p>
          <p><Link href="mailto:katratravel@gmail.com">katratravel@gmail.com</Link></p>
          <p><Link href="https://wa.me/919906130577" target="_blank" rel="noopener noreferrer">WhatsApp</Link></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Katra Travels. All rights reserved.</p>
      </div>
    </footer>
  );
}