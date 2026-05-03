import Link from 'next/link';

export default function Home() {
  return (
    <>
<div><section className="hero" aria-label="Hero">
      <div className="hero-bg">
        <img src="images/kashmir1.jpg" alt="Kashmir scenery — mountains, lakes and alpine valleys" width="1200" height="800" fetchPriority="high" />
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
    </section><section className="section" aria-labelledby="featured-heading">
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
    </section><section className="section" aria-labelledby="highlights-heading">
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
    </section><section className="section" aria-labelledby="reviews-heading">
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
    </section><section className="cta-band" aria-labelledby="cta-heading">
      <h2 id="cta-heading">Tell us where you want to go — we’ll shape the rest.</h2>
      <Link className="btn btn-primary" href="/contact">Start planning</Link>
    </section></div>
</>
  );
}