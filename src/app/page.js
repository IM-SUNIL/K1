"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { packages } from '@/data/packages';
import { ExpandingCards } from '@/components/ui/expanding-cards';
import MarqueeReviews from '@/components/ui/marquee-reviews';
import {
  Mountain,
  Snowflake,
  Landmark,
  Compass,
  MapPin,
  Building2,
  Tent,
  Building,
  Camera,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function Home() {
  const [currentImg, setCurrentImg] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
  const featuredPackages = Object.values(packages);
  const extendedPackages = [...featuredPackages, ...featuredPackages, ...featuredPackages];
  const [carouselIdx, setCarouselIdx] = useState(featuredPackages.length);
  const [isTransitioning, setIsTransitioning] = useState(true);

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

  // Carousel Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      nextCarousel();
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredPackages.length]);

  const nextCarousel = () => {
    setIsTransitioning(true);
    setCarouselIdx((prev) => prev + 1);
  };
  const prevCarousel = () => {
    setIsTransitioning(true);
    setCarouselIdx((prev) => prev - 1);
  };

  useEffect(() => {
    if (!isTransitioning) {
      // Re-enable transition after the jump
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  useEffect(() => {
    // Jump back to middle set for infinite loop
    if (carouselIdx >= featuredPackages.length * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCarouselIdx(featuredPackages.length);
      }, 600);
      return () => clearTimeout(timer);
    }
    if (carouselIdx < featuredPackages.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCarouselIdx(featuredPackages.length * 2 - 1);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [carouselIdx, featuredPackages.length]);

  const getImgPath = (img) => {
    return isMobile ? `/images/mobile/${img}` : `/images/laptop/${img}`;
  };

  return (
    <>
      <div>
        <section className="hero" aria-label="Hero">
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
            <p className="hero-kicker">Kashmir · Ladakh · Himachal · Uttrakhand</p>
            <h1 className="hero-title">Experience the Magic of North India</h1>
            <p className="hero-subtitle">North India's Most Trusted Travel Partner</p>
            <p className="tagline">
              From the spiritual heights of Vaishno Devi to the majestic peaks of Ladakh. Hand-picked stays, dependable cabs, and clear pricing.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/packages">Explore packages</Link>
              <Link className="btn btn-ghost" href="https://wa.me/919906130577?text=Hi%20Katra%20Travels%2C%20I%27d%20like%20help%20planning%20a%20trip." target="_blank" rel="noopener noreferrer">Message us</Link>
            </div>
          </div>
        </section>

        <div className="marquee-container" aria-hidden="true">
          <div className="marquee-content">
            <div className="marquee-item"><span>✦</span> Kashmir</div>
            <div className="marquee-item"><span>✦</span> Ladakh</div>
            <div className="marquee-item"><span>✦</span> Himachal Pradesh</div>
            <div className="marquee-item"><span>✦</span> Vaishno Devi</div>
            <div className="marquee-item"><span>✦</span> Rajasthan</div>
            <div className="marquee-item"><span>✦</span> Uttrakhand</div>
            <div className="marquee-item"><span>✦</span> Taj Mahal</div>
            {/* Duplicate for infinite loop */}
            <div className="marquee-item"><span>✦</span> Kashmir</div>
            <div className="marquee-item"><span>✦</span> Ladakh</div>
            <div className="marquee-item"><span>✦</span> Himachal Pradesh</div>
            <div className="marquee-item"><span>✦</span> Vaishno Devi</div>
            <div className="marquee-item"><span>✦</span> Rajasthan</div>
            <div className="marquee-item"><span>✦</span> Uttrakhand</div>
            <div className="marquee-item"><span>✦</span> Taj Mahal</div>
          </div>
        </div>

        <section className="section overflow-hidden !pb-0 pt-4 md:pt-8">
          <div className="carousel-outer">
            <button onClick={prevCarousel} className="carousel-side-btn left" aria-label="Previous itinerary">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextCarousel} className="carousel-side-btn right" aria-label="Next itinerary">
              <ChevronRight size={24} />
            </button>

            <div className="carousel-container">
              <div
                className="carousel-track"
                style={{
                  transform: `translateX(-${carouselIdx * (isMobile ? 100 : 33.333)}%)`,
                  transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                }}
              >
                {extendedPackages.map((pkg, idx) => (
                  <div key={`${pkg.id}-${idx}`} className="carousel-item">
                    <article className="package-card">
                      <img src={pkg.image} alt={pkg.title} width="480" height="384" loading="lazy" />
                      <div className="package-card-body">
                        <div className="pkg-card-head">
                          <h3>{pkg.title}</h3>
                          <p className="meta">{pkg.duration}</p>
                        </div>
                        <p className="pkg-overview">{pkg.overview}</p>
                        <div className="pkg-card-foot">
                          <Link href={`/packages/${pkg.id}`} className="link-details">View Details</Link>
                          <Link
                            className="btn btn-primary btn-sm"
                            href={`https://wa.me/919906130577?text=Hi%20Katra%20Travels%2C%20I%27d%20like%20to%20book%20the%20${encodeURIComponent(pkg.title)}%20package.`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Book now
                          </Link>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
            <Link className="link-arrow" href="/packages">View all packages →</Link>
          </div>
        </section>

        {/* ——— Top Destinations (Moved Up) ——— */}
        <section className="section bg-warm/30 !py-4 md:!py-8" aria-labelledby="top-dest-heading">
          <div className="section-head" style={{ justifyContent: 'center', textAlign: 'center', marginBottom: '1.5rem' }}>
            <div className="page-intro">
              <p className="section-kicker">Plan your next trip</p>
              <h2 
                className="section-title text-[1.9rem] md:text-[8rem]" 
                id="top-dest-heading"
                style={{ 
                  lineHeight: '1',
                  fontWeight: '800',
                  letterSpacing: '-0.05em'
                }}
              >
                TOP DESTINATIONS
              </h2>
            </div>
          </div>

          <div className="flex justify-center px-0 md:px-4">
            <ExpandingCards
              items={[
                {
                  id: "ladakh",
                  title: "Ladakh",
                  description: "The land of high passes, surreal moonscapes and crystal clear lakes.",
                  imgSrc: "/images/ladakh.png",
                  icon: <Mountain size={24} />,
                  linkHref: "/destinations",
                },
                {
                  id: "kashmir",
                  title: "Kashmir",
                  description: "Often called 'Paradise on Earth' for its breathtaking valleys and serene lakes.",
                  imgSrc: "/images/kashmir1.jpg",
                  icon: <Snowflake size={24} />,
                  linkHref: "/destinations",
                },
                {
                  id: "vaishno-devi",
                  title: "Vaishno Devi",
                  description: "One of the most sacred Hindu pilgrimage sites nestled in the Trikuta Mountains.",
                  imgSrc: "/images/vaishnodevi1.jpg",
                  icon: <Landmark size={24} />,
                  linkHref: "/destinations",
                },
                {
                  id: "uttrakhand",
                  title: "Uttrakhand",
                  description: "The 'Land of Gods' featuring spiritual hubs, yoga centers and Himalayan vistas.",
                  imgSrc: "/images/uttarakhand.png",
                  icon: <Compass size={24} />,
                  linkHref: "/destinations",
                },
                {
                  id: "vrindavan",
                  title: "Vrindavan",
                  description: "The sacred city where Lord Krishna spent his childhood, filled with ancient temples.",
                  imgSrc: "/images/vrindavan.png",
                  icon: <Building2 size={24} />,
                  linkHref: "/destinations",
                },
                {
                  id: "rajasthan",
                  title: "Rajasthan",
                  description: "Experience the royal heritage, majestic forts, and the golden sand dunes of Thar.",
                  imgSrc: "/images/rajasthan1.jpg",
                  icon: <Camera size={24} />,
                  linkHref: "/destinations",
                },
                {
                  id: "himachal",
                  title: "Himachal",
                  description: "The land of snow-capped peaks, lush valleys and adventurous mountain trails.",
                  imgSrc: "/images/himachal1.jpg",
                  icon: <Tent size={24} />,
                  linkHref: "/destinations",
                },
                {
                  id: "delhi",
                  title: "Delhi",
                  description: "India's vibrant capital, where ancient history meets modern city life.",
                  imgSrc: "/images/delhi1.jpg",
                  icon: <Building size={24} />,
                  linkHref: "/destinations",
                },
              ]}
              defaultActiveIndex={0}
            />
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/destinations" className="btn btn-outline">Explore all destinations</Link>
          </div>
        </section>

        {/* ——— Trending Activities (Moved Down) ——— */}
        <section className="section !pt-2 md:!pt-4" aria-labelledby="activities-heading">
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
          <MarqueeReviews />
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
                  <p className="method-link" style={{ textDecoration: 'none', color: 'inherit' }}>Katra, J&amp;K</p>
                </div>
              </div>
            </div>
            <div className="home-contact-map">
              <div className="map-frame">
                <iframe
                  title="Katra Travels Location"
                  src="https://maps.google.com/maps?q=32.990127,74.927788&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}