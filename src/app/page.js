"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [currentImg, setCurrentImg] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearInterval(interval);
    };
  }, []);

  const getImgPath = (img) => {
    return isMobile ? `/images/mobile/${img}` : `/images/laptop/${img}`;
  };

  return (
    <>
<div><section className="hero" aria-label="Hero">
      <div className="hero-slider">
        {images.map((img, idx) => (
          <div 
            key={img} 
            className={`hero-slide ${idx === currentImg ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${getImgPath(img)})` }}
          ></div>
        ))}
        <div className="hero-overlay" aria-hidden="true"></div>
      </div>
      <div className="hero-content">
        <p className="hero-kicker">Kashmir · Himachal · Uttrakhand</p>
        <h1>One of the best travel in Katra for Package Tours</h1>
        <p className="tagline">
          Hand-picked stays, dependable cabs, and clear pricing for Kashmir, Himachal, Vaishno Devi, and beyond.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/packages">Browse packages</Link>
          <Link className="btn btn-ghost" href="https://wa.me/919906130577?text=Hi%20Katra%20Travels%2C%20I%27d%20like%20help%20planning%20a%20trip." target="_blank" rel="noopener noreferrer">Message us</Link>
        </div>
      </div>
    </section>

    <div className="marquee-container" aria-hidden="true">
      <div className="marquee-content">
        <div className="marquee-item"><span>✦</span> Kashmir</div>
        <div className="marquee-item"><span>✦</span> Himachal Pradesh</div>
        <div className="marquee-item"><span>✦</span> Vaishno Devi</div>
        <div className="marquee-item"><span>✦</span> Rajasthan</div>
        <div className="marquee-item"><span>✦</span> Uttrakhand</div>
        <div className="marquee-item"><span>✦</span> Amritsar</div>
        {/* Duplicate for infinite loop */}
        <div className="marquee-item"><span>✦</span> Kashmir</div>
        <div className="marquee-item"><span>✦</span> Himachal Pradesh</div>
        <div className="marquee-item"><span>✦</span> Vaishno Devi</div>
        <div className="marquee-item"><span>✦</span> Rajasthan</div>
        <div className="marquee-item"><span>✦</span> Uttrakhand</div>
        <div className="marquee-item"><span>✦</span> Amritsar</div>
      </div>
    </div>

    <section className="section" aria-labelledby="featured-heading">
      <div className="section-head section-head--featured">
        <div>
          <p className="section-kicker" id="featured-heading">Curated for you</p>
          <h2 className="section-title">Popular itineraries</h2>
        </div>
        <Link className="link-arrow" href="/packages">View all</Link>
      </div>
      <div className="scroll-row-wrap scroll-row-wrap--itineraries">
        <div className="scroll-row scroll-row--itineraries">
          <article className="package-card">
            <img src="images/kashmir2.jpg" alt="Dal Lake and mountains in Kashmir" width="480" height="384" loading="lazy" />
            <div className="package-card-body">
              <h3>Kashmir escape</h3>
              <p className="meta">5 nights · Srinagar &amp; surrounds</p>

              <Link href="/packages/kashmir-escape" style={{ display: 'block', textAlign: 'center', margin: '12px 0', color: 'var(--text-secondary)', textDecoration: 'underline', opacity: 0.7, fontSize: '0.9rem' }}>more details</Link>
              <Link className="btn btn-primary btn-block" href="https://wa.me/919906130577?text=Hi%2C%20I%20want%20to%20book%20Kashmir%20escape." target="_blank" rel="noopener noreferrer">Book now</Link>
            </div>
          </article>
          <article className="package-card">
            <img src="images/himachal1.jpg" alt="Snow-capped peaks in Himachal Pradesh" width="480" height="384" loading="lazy" />
            <div className="package-card-body">
              <h3>Himachal circuit</h3>
              <p className="meta">6 nights · Hill stations &amp; drives</p>

              <Link href="/packages/himachal-circuit" style={{ display: 'block', textAlign: 'center', margin: '12px 0', color: 'var(--text-secondary)', textDecoration: 'underline', opacity: 0.7, fontSize: '0.9rem' }}>more details</Link>
              <Link className="btn btn-primary btn-block" href="https://wa.me/919906130577?text=Hi%2C%20I%20want%20to%20book%20Himachal%20circuit." target="_blank" rel="noopener noreferrer">Book now</Link>
            </div>
          </article>
          <article className="package-card">
            <img src="images/vaishnodevi1.jpg" alt="Mountain path toward Vaishno Devi shrine" width="480" height="384" loading="lazy" />
            <div className="package-card-body">
              <h3>Vaishno Devi yatra</h3>
              <p className="meta">3 nights · Katra &amp; darshan support</p>

              <Link href="/packages/vaishno-devi-yatra" style={{ display: 'block', textAlign: 'center', margin: '12px 0', color: 'var(--text-secondary)', textDecoration: 'underline', opacity: 0.7, fontSize: '0.9rem' }}>more details</Link>
              <Link className="btn btn-primary btn-block" href="https://wa.me/919906130577?text=Hi%2C%20I%20want%20to%20book%20Vaishno%20Devi%20yatra." target="_blank" rel="noopener noreferrer">Book now</Link>
            </div>
          </article>
          <article className="package-card">
            <img src="images/rajasthan1.jpg" alt="Historic palace and architecture in Rajasthan" width="480" height="384" loading="lazy" />
            <div className="package-card-body">
              <h3>Rajasthan heritage</h3>
              <p className="meta">7 nights · Forts &amp; desert towns</p>

              <Link href="/packages/rajasthan-heritage" style={{ display: 'block', textAlign: 'center', margin: '12px 0', color: 'var(--text-secondary)', textDecoration: 'underline', opacity: 0.7, fontSize: '0.9rem' }}>more details</Link>
              <Link className="btn btn-primary btn-block" href="https://wa.me/919906130577?text=Hi%2C%20I%20want%20to%20book%20Rajasthan%20heritage." target="_blank" rel="noopener noreferrer">Book now</Link>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section className="section" aria-labelledby="activities-heading">
      <div className="section-head">
        <div>
          <p className="section-kicker" id="activities-heading">Unforgettable Experiences</p>
          <h2 className="section-title">Trending Activities ⚡</h2>
        </div>
      </div>
      <div className="scroll-row-wrap">
        <div className="scroll-row">
          <div className="activity-card">
            <div className="activity-image-wrap">
              <img src="images/activities/biking.png" alt="Biking" width="280" height="280" loading="lazy" />
              <span className="activity-badge">6 Trips</span>
            </div>
            <h3>Biking</h3>
          </div>
          <div className="activity-card">
            <div className="activity-image-wrap">
              <img src="images/activities/boating.png" alt="Boating" width="280" height="280" loading="lazy" />
              <span className="activity-badge">3 Trips</span>
            </div>
            <h3>Boating</h3>
          </div>
          <div className="activity-card">
            <div className="activity-image-wrap">
              <img src="images/activities/camping.png" alt="Camping" width="280" height="280" loading="lazy" />
              <span className="activity-badge">10 Trips</span>
            </div>
            <h3>Camping</h3>
          </div>
          <div className="activity-card">
            <div className="activity-image-wrap">
              <img src="images/activities/dinner.png" alt="Candlelight Dinner" width="280" height="280" loading="lazy" />
              <span className="activity-badge">4 Trips</span>
            </div>
            <h3>Candlelight Dinner</h3>
          </div>
        </div>
      </div>
    </section>

    <section className="section" aria-labelledby="highlights-heading">
      <div className="section-head">
        <div>
          <p className="section-kicker" id="highlights-heading">Why travellers choose us</p>
          <h2 className="section-title">The way we work</h2>
        </div>
      </div>
      <div className="highlights">
        <article className="highlight-card">
          <div className="highlight-photo">
            <img src="images/hl-value.jpg" alt="Mountain vista at golden hour" width="400" height="300" loading="lazy" />
          </div>
          <div className="highlight-body">
            <h3>Value-first pricing</h3>
            <p>Transparent quotes — no surprise add-ons at checkout.</p>
          </div>
        </article>
        <article className="highlight-card">
          <div className="highlight-photo">
            <img src="images/hl-trust.jpg" alt="Travellers on a scenic journey" width="400" height="300" loading="lazy" />
          </div>
          <div className="highlight-body">
            <h3>Trusted on the ground</h3>
            <p>Drivers and hotel partners we’ve worked with for years.</p>
          </div>
        </article>
        <article className="highlight-card">
          <div className="highlight-photo">
            <img src="images/hl-stay.jpg" alt="Boutique hotel pool and architecture" width="400" height="300" loading="lazy" />
          </div>
          <div className="highlight-body">
            <h3>Comfortable stays</h3>
            <p>Clean rooms in good locations — matched to your budget.</p>
          </div>
        </article>
        <article className="highlight-card">
          <div className="highlight-photo">
            <img src="images/hl-support.jpg" alt="Sunrise over mountains" width="400" height="300" loading="lazy" />
          </div>
          <div className="highlight-body">
            <h3>Support when you need it</h3>
            <p>Reach us on call or WhatsApp throughout your trip.</p>
          </div>
        </article>
      </div>
    </section>

    <section className="stats-section" aria-label="Our Impact">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">10+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">5k+</div>
          <div className="stat-label">Happy Travellers</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">15+</div>
          <div className="stat-label">Destinations</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Support</div>
        </div>
      </div>
    </section>

    <section className="section" aria-labelledby="reviews-heading">
      <div className="section-head">
        <div>
          <p className="section-kicker" id="reviews-heading">Guest stories</p>
          <h2 className="section-title">Word on the trail</h2>
        </div>
      </div>
      <div className="testimonials">
        <article className="testimonial-card">
          <p className="name">Sham Sunder Sanmotra</p>
          <p className="review">Our Kashmir leg was seamless — cabs on time and hotels exactly as promised.</p>
          <p className="stars" aria-label="5 out of 5 stars">★★★★★</p>
        </article>
        <article className="testimonial-card">
          <p className="name">Raj Kumar</p>
          <p className="review">Straight answers on WhatsApp and fair pricing. Felt looked after.</p>
          <p className="stars" aria-label="5 out of 5 stars">★★★★★</p>
        </article>
        <article className="testimonial-card">
          <p className="name">Anil Gupta</p>
          <p className="review">Vaishno Devi darshan logistics were sorted without stress — huge relief.</p>
          <p className="stars" aria-label="5 out of 5 stars">★★★★★</p>
        </article>
      </div>
    </section>

    <section className="faq-section" aria-labelledby="faq-heading">
      <div className="section-head" style={{ textAlign: 'center' }}>
        <div>
          <p className="section-kicker" id="faq-heading">Got Questions?</p>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
      </div>
      <div className="faq-list">
        <details className="faq-item">
          <summary className="faq-summary">How do I book a trip?</summary>
          <div className="faq-content">Simply contact us via WhatsApp or Phone with your desired destination and dates. We will provide a fully customized itinerary and pricing.</div>
        </details>
        <details className="faq-item">
          <summary className="faq-summary">Are flights included in the packages?</summary>
          <div className="faq-content">Our standard packages cover accommodation, private transport, and sightseeing. Flights can be arranged upon special request.</div>
        </details>
        <details className="faq-item">
          <summary className="faq-summary">Is Vaishno Devi Yatra support provided?</summary>
          <div className="faq-content">Yes, we provide end-to-end support for Vaishno Devi including Katra hotel stays, helicopter bookings, and VIP Darshan assistance.</div>
        </details>
        <details className="faq-item">
          <summary className="faq-summary">Do you offer 24/7 support during the trip?</summary>
          <div className="faq-content">Absolutely. You will have a dedicated local coordinator available via WhatsApp or Call 24/7 throughout your entire journey.</div>
        </details>
      </div>
    </section>

    <section className="home-contact-section" aria-labelledby="home-contact-heading">
      <div className="home-contact-inner">
        <div className="home-contact-text">
          <p className="section-kicker">Reach Out</p>
          <h2 className="section-title" id="home-contact-heading">Let's start your journey</h2>
          <p className="tagline">Whether you need a fully customized package or just a reliable cab, we're here to help 24/7.</p>
          
          <div className="home-contact-methods">
            <div className="method-card">
              <h3>Call Us</h3>
              <a href="tel:9906130577" className="method-link">+91 99061 30577</a>
            </div>
            <div className="method-card">
              <h3>WhatsApp</h3>
              <a href="https://wa.me/919906130577" target="_blank" rel="noopener noreferrer" className="method-link">Chat with us</a>
            </div>
            <div className="method-card">
              <h3>Email</h3>
              <a href="mailto:katratravel@gmail.com" className="method-link">katratravel@gmail.com</a>
            </div>
            <div className="method-card">
              <h3>Visit Us</h3>
              <p className="method-link" style={{textDecoration: 'none', color: 'inherit'}}>Katra, J&amp;K</p>
            </div>
          </div>
        </div>
        <div className="home-contact-map">
          <div className="map-frame">
            <iframe
              title="Katra Travels Location"
              src="https://maps.google.com/maps?q=KATRA+TRAVELS,+Katra,+Jammu+and+Kashmir&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section></div>
</>
  );
}