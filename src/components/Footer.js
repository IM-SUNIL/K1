import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">

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
        <div className="footer-col">
          <h3 className="footer-heading">Popular Searches</h3>
          <ul className="footer-links">
            <li><Link href="/destinations">Tourism in Katra</Link></li>
            <li><Link href="/contact">Best Hotel in Katra</Link></li>
            <li><Link href="/packages/kashmir-escape">Kashmir Tour Packages</Link></li>
            <li><Link href="/packages/vaishno-devi-yatra">Vaishno Devi Yatra</Link></li>
            <li><Link href="/contact">Srinagar Cab Service</Link></li>
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