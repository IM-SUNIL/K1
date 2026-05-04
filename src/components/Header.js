"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="top-banner">
        <div className="top-banner-content">
          <p>⚠️ Note: We don't provide helicopter, battery car or any other Mata Vaishno Devi Shrine Board booking.</p>
          <p>⚠️ Note: We don't provide helicopter, battery car or any other Mata Vaishno Devi Shrine Board booking.</p>
          <p>⚠️ Note: We don't provide helicopter, battery car or any other Mata Vaishno Devi Shrine Board booking.</p>
          <p>⚠️ Note: We don't provide helicopter, battery car or any other Mata Vaishno Devi Shrine Board booking.</p>
        </div>
      </div>
      <div className="nav-inner">
        <Link onClick={() => setIsOpen(false)} href="/" className="logo" aria-label="Katra Travels Home" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <svg height="44" viewBox="0 0 240 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 'auto', display: 'block' }}>
            <title>Katra Travels Logo</title>
            <defs>
              <linearGradient id="brand-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0f172a"/>
                <stop offset="100%" stopColor="#10b981"/>
              </linearGradient>
            </defs>
            <text x="0" y="30" style={{ font: "800 32px 'Inter', sans-serif", letterSpacing: "-0.04em", fill: "#0f172a" }}>KATR<tspan fill="url(#brand-grad)">A</tspan></text>
            <text x="120" y="30" style={{ font: "300 15px 'Inter', sans-serif", letterSpacing: "0.45em", fill: "#64748b", textTransform: "uppercase" }}>Travels</text>
            <path d="M88 10L96 4L104 10" stroke="url(#brand-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M92 14L96 11L100 14" stroke="url(#brand-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }} />
          </svg>
        </Link>
        <div className="nav-quick" aria-label="Quick contact">
          <Link onClick={() => setIsOpen(false)} className="nav-icon-btn" href="tel:9906130577" aria-label="Call Us">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
            </svg>
          </Link>
          <Link onClick={() => setIsOpen(false)} className="nav-icon-btn nav-icon-btn--wa" href="https://wa.me/919906130577" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
            </svg>
          </Link>
        </div>
        <button type="button" className="nav-toggle" aria-expanded={isOpen} aria-controls="nav-menu" aria-label="Open menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-panel ${isOpen ? "is-open" : ""}`} onClick={(e) => { if (e.target.classList.contains("nav-panel")) setIsOpen(false) }} id="nav-menu">
          <div className="nav-sheet">
            <ul className="nav-links">
              <li><Link onClick={() => setIsOpen(false)} href="/" aria-current={pathname === '/' ? "page" : undefined}>Home</Link></li>
              <li><Link onClick={() => setIsOpen(false)} href="/packages" aria-current={pathname.startsWith('/packages') ? "page" : undefined}>Packages</Link></li>
              <li><Link onClick={() => setIsOpen(false)} href="/destinations" aria-current={pathname === '/destinations' ? "page" : undefined}>Destinations</Link></li>
              <li><Link onClick={() => setIsOpen(false)} href="/gallery" aria-current={pathname === '/gallery' ? "page" : undefined}>Gallery</Link></li>
              <li><Link onClick={() => setIsOpen(false)} href="/contact" aria-current={pathname === '/contact' ? "page" : undefined}>Contact</Link></li>
              <li><Link onClick={() => setIsOpen(false)} href="/about" aria-current={pathname === '/about' ? "page" : undefined}>About</Link></li>
            </ul>
            <div className="nav-drawer-cta">
              <Link onClick={() => setIsOpen(false)} className="btn btn-outline btn-block" href="tel:9906130577">Call Us</Link>
              <Link onClick={() => setIsOpen(false)} className="btn btn-primary btn-block" href="https://wa.me/919906130577" target="_blank" rel="noopener noreferrer">WhatsApp us</Link>
            </div>
          </div>
        </div>
        <div className="nav-cta-desktop">
          <Link onClick={() => setIsOpen(false)} className="btn btn-outline btn-sm" href="tel:9906130577">Call Us</Link>
          <Link onClick={() => setIsOpen(false)} className="btn btn-dark btn-sm" href="https://wa.me/919906130577?text=Hi%20Katra%20Travels%2C%20I%27d%20like%20to%20plan%20a%20trip." target="_blank" rel="noopener noreferrer">Plan on WhatsApp</Link>
        </div>
      </div>
    </header>
  );
}