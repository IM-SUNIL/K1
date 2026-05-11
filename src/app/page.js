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
  ChevronRight,
  Clock
} from 'lucide-react';

export default function Home() {
  const travelAgencySchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Katra Travels",
    "description": "Katra Travels is a premier Katra travel agency offering spiritual Vaishno Devi yatras, local transport, and the best travel in Katra Kashmir package tours. Contact certified local travel agents in Katra for premium stays and reliable cabs.",
    "url": "https://katratravels.in",
    "telephone": "+919906130577",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Katra",
      "addressRegion": "Jammu & Kashmir",
      "postalCode": "182301",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.990127",
      "longitude": "74.927788"
    },
    "sameAs": [
      "https://wa.me/919906130577"
    ],
    "priceRange": "$$",
    "areaServed": ["Katra", "Jammu & Kashmir", "Srinagar", "Kashmir", "Ladakh", "Himachal Pradesh", "Uttarakhand"],
    "knowsAbout": ["tour and travels in Katra", "Katra travel agents", "Katra travel agency", "travel in Katra", "best travel in Katra Kashmir package tour", "Kashmir travel agencys"]
  };

  const [currentImg, setCurrentImg] = useState(0);
  const [isMobile, setIsMobile] = useState(false);


  const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
  const featuredPackages = Object.values(packages);
  const flagshipPkg = packages["north-india-circuit"];
  const extendedPackages = [...featuredPackages, ...featuredPackages, ...featuredPackages];
  const [carouselIdx, setCarouselIdx] = useState(featuredPackages.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [activeDayIdx, setActiveDayIdx] = useState(0);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextCarousel();
    } else if (isRightSwipe) {
      prevCarousel();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setDragStart(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setDragEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (!dragStart || !dragEnd) return;
    const distance = dragStart - dragEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextCarousel();
    } else if (isRightSwipe) {
      prevCarousel();
    }
    setDragStart(0);
    setDragEnd(0);
  };

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

        {/* ——— Flagship Featured Package (Overland Grand Tour) ——— */}
        <section className="section bg-warm/15 !py-8 md:!py-16" aria-labelledby="flagship-heading">
          <div className="container max-w-[1200px] mx-auto">
            <div className="section-head text-center mb-8 md:mb-12">
              <span className="section-kicker">🏆 Flagship Experience</span>
              <h2 className="section-title text-[2rem] md:text-[3.2rem]" id="flagship-heading" style={{ lineHeight: '1.1' }}>
                Ultimate 14-Day Northern India Circuit
              </h2>
              <p className="section-subtitle max-w-[700px] mx-auto text-muted">
                An epic overland journey covering Katra, Kashmir, Ladakh, Himachal, and traditional temples. Experience the ultimate grand circuit of the North.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Spotlight Column */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-3xl overflow-hidden shadow-lg border border-black/5 relative group min-h-[400px]">
                {/* Image Overlay Header */}
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src="/images/packages/north_india_circuit.jpg"
                    alt="14-Day Northern India Circuit"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-white font-bold text-[12px] px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                      Bestseller
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-amber-400 font-semibold text-[13px] tracking-wide mb-1 flex items-center gap-1">
                      <Clock size={14} /> 13 Nights / 14 Days
                    </p>
                    <h3 className="text-xl font-bold tracking-tight">Overland Grand Tour</h3>
                  </div>
                </div>

                {/* Package Quick Summary */}
                <div className="p-6 flex-grow flex flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <p className="text-muted text-[14px] leading-relaxed">
                      {flagshipPkg?.overview}
                    </p>

                    {/* Includes Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {flagshipPkg?.includes.map((inc) => (
                        <span
                          key={inc}
                          className="bg-primary/5 text-primary text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1"
                        >
                          ✦ {inc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[12px] text-muted uppercase tracking-wider block">Hotels & Transport</span>
                      <span className="font-bold text-ink text-[14px]">Fully Hand-Picked & Included</span>
                    </div>
                    <Link
                      className="btn btn-primary btn-sm flex items-center justify-center gap-2 px-6 py-3.5"
                      href={`https://wa.me/919906130577?text=Hi%20Katra%20Travels%2C%20I%27d%20like%20to%20book%20the%2014-Day%20Northern%20India%20Circuit%20flagship%20package.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Flagship Tour
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Interactive Itinerary Column */}
              <div className="lg:col-span-7 flex flex-col bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-black/5 justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-black/5 mb-6">
                    <div>
                      <h3 className="font-bold text-lg text-ink">Explore Full Day-by-Day Itinerary</h3>
                      <p className="text-[13px] text-muted">Click any day below to view highlights of the route</p>
                    </div>
                    <span
                      className="hidden sm:inline-block text-xs font-bold px-3 py-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "rgba(30, 92, 74, 0.1)", color: "var(--accent)" }}
                    >
                      Interactive Map
                    </span>
                  </div>

                  {/* Day Navigation Pills Grid */}
                  <div className="overflow-x-auto scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0 mb-6">
                    <div className="flex gap-2 min-w-max py-1">
                      {flagshipPkg?.itinerary.map((day, idx) => (
                        <button
                          key={day.day}
                          onClick={() => setActiveDayIdx(idx)}
                          className={`w-11 h-11 rounded-full font-bold text-[14px] flex items-center justify-center transition-all duration-300 shrink-0 cursor-pointer ${activeDayIdx === idx
                            ? 'scale-110 shadow-md shadow-accent/20'
                            : 'bg-warm/40 text-muted hover:bg-warm-dark/25 hover:text-ink'
                            }`}
                          style={{
                            backgroundColor: activeDayIdx === idx ? "var(--accent)" : "",
                            color: activeDayIdx === idx ? "#ffffff" : ""
                          }}
                          aria-label={`Show ${day.day}`}
                        >
                          {idx + 1}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Day Content Card with smooth transition */}
                  <div className="min-h-[170px] bg-warm/15 rounded-2xl p-5 md:p-6 border border-warm-dark/5 relative overflow-hidden transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <span
                        className="text-[13px] font-bold tracking-widest uppercase block"
                        style={{ color: "var(--accent)" }}
                      >
                        {flagshipPkg?.itinerary[activeDayIdx]?.day}
                      </span>
                      <span className="text-xs bg-white text-muted border border-black/5 font-semibold px-2.5 py-1 rounded-md">
                        Overland Route Step {activeDayIdx + 1}/14
                      </span>
                    </div>
                    <h4 className="font-bold text-lg text-ink mb-2">
                      {flagshipPkg?.itinerary[activeDayIdx]?.title}
                    </h4>
                    <p className="text-[14px] leading-relaxed text-muted">
                      {flagshipPkg?.itinerary[activeDayIdx]?.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Route Indicator Progress Bar */}
                <div className="pt-6 mt-6 border-t border-black/5">
                  <div className="flex justify-between items-center text-xs text-muted mb-2 font-medium">
                    <span>Route Progress: {flagshipPkg?.itinerary[activeDayIdx]?.title}</span>
                    <span>{Math.round(((activeDayIdx + 1) / 14) * 100)}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-warm rounded-full overflow-hidden">
                    <div
                      className="h-full transition-all duration-500 ease-out"
                      style={{
                        width: `${((activeDayIdx + 1) / 14) * 100}%`,
                        backgroundColor: "var(--accent)"
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section overflow-hidden !pb-0 pt-4 md:pt-8 !px-0">
          <div className="carousel-outer" style={{ maxWidth: 'none', width: '100%' }}>
            <button onClick={prevCarousel} className="carousel-side-btn left" aria-label="Previous itinerary">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextCarousel} className="carousel-side-btn right" aria-label="Next itinerary">
              <ChevronRight size={24} />
            </button>

            <div
              className="carousel-container"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{ cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none' }}
            >
              <div
                className="carousel-track"
                style={{
                  transform: isMobile
                    ? `translateX(calc(10% - ${carouselIdx * 80}%))`
                    : `translateX(calc(6% - ${carouselIdx * 22}%))`,
                  transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                }}
              >
                {extendedPackages.map((pkg, idx) => {
                  const isActive = isMobile
                    ? idx === carouselIdx
                    : (idx >= carouselIdx && idx <= carouselIdx + 3);
                  return (
                    <div
                      key={`${pkg.id}-${idx}`}
                      className="carousel-item"
                      style={{
                        flex: isMobile ? '0 0 80%' : '0 0 22%',
                        width: isMobile ? '80%' : '22%',
                        opacity: isActive ? 1 : 0.45,
                        filter: isActive ? 'none' : 'blur(2.5px)',
                        transform: isActive ? 'scale(1)' : 'scale(0.92)',
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
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
                  );
                })}
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
            <Link className="link-arrow" href="/packages">View all packages →</Link>
          </div>
        </section>

        {/* ——— Jammu to Katra Connectivity & Transport Guide (SEO Target Keywords) ——— */}
        <section className="section" aria-labelledby="guide-heading" style={{ padding: '4rem 1.25rem', borderTop: '1px solid var(--line)' }}>
          <div className="container max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Side: Interactive Transport Details */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-6 md:p-8 border border-black/5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="section-kicker" style={{ justifyContent: 'flex-start' }}>Route &amp; Commute Hub</p>
                  <h2 className="section-title text-[2rem] lg:text-[2.2rem]" id="guide-heading" style={{ lineHeight: '1.15', textAlign: 'left', marginLeft: 0 }}>
                    Jammu to Katra Expressway &amp; Cab Portal
                  </h2>
                  <p className="text-muted text-[15px] leading-relaxed">
                    Plan your journey <strong>to katra</strong> seamlessly. Whether you are coming via train, flight, or driving down the highway, we provide verified information to make your road trip completely sorted.
                  </p>
                </div>

                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#faf8f5] border border-black/[0.03] hover:border-accent/15 hover:bg-[#f6f3ed] transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0" style={{ color: "var(--accent)" }}>
                      <Compass size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-ink text-[15px]">NH-44 Expressway Route</h4>
                      <p className="text-xs text-muted leading-relaxed mt-0.5">
                        Drive down the scenic <strong>jammu katra road</strong>, part of the major <strong>katra jammu highway</strong> network.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#faf8f5] border border-black/[0.03] hover:border-accent/15 hover:bg-[#f6f3ed] transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0" style={{ color: "var(--accent)" }}>
                      <Mountain size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-ink text-[15px]">Upcoming Expressways</h4>
                      <p className="text-xs text-muted leading-relaxed mt-0.5">
                        The highly anticipated <strong>jammu katra express road</strong> corridor will soon cut down commute times to under 1 hour.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Organic Keyword Copy & Contact Widget */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-black/5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col justify-between">
                <div className="space-y-4 text-muted text-[15px] leading-relaxed">
                  <p>
                    For travelers looking for a hassle-free transition, booking a reliable <strong>katra taxi service</strong> or a clean local <strong>katra cab service</strong> is highly recommended. Katra Travels is recognized as one of the top-rated <strong>travel agents in katra</strong> and a leading local <strong>travel agent in katra</strong>.
                  </p>
                  <p>
                    As a verified <strong>travel agency in katra</strong>, we manage end-to-end transfers from Jammu Airport or Railway Station. Save our direct <strong>katra travel agency contact number</strong> to instantly book your highway commute, secure luxury cabs, or custom plan local sightseeing tours.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-black/5 text-ink">
                    <div className="p-4 rounded-xl bg-[#faf8f5] border border-black/[0.02]">
                      <span className="text-[11px] uppercase tracking-wider text-muted block mb-1">Direct Taxi Bookings</span>
                      <span className="font-bold text-[14px]">Jammu - Katra Cab Service</span>
                    </div>
                    <div className="p-4 rounded-xl bg-[#faf8f5] border border-black/[0.02]">
                      <span className="text-[11px] uppercase tracking-wider text-muted block mb-1">Help Desk &amp; Support</span>
                      <a href="tel:9906130577" className="font-bold text-[14px] hover:underline" style={{ color: "var(--accent)" }}>
                        +91 99061 30577
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-black/5 mt-6">
                  <Link
                    className="btn btn-sm text-xs font-bold py-3 px-6 rounded-xl cursor-pointer shadow-sm hover:shadow transition-all duration-300"
                    style={{ backgroundColor: "var(--accent)", color: "#fff" }}
                    href="https://wa.me/919906130577?text=Hi%20Katra%20Travels%2C%20I%27d%20like%20to%20book%20a%20taxi%20service%20from%20Jammu%20to%20Katra."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Taxi Service
                  </Link>
                  <a
                    className="btn btn-outline btn-sm text-xs font-bold py-3 px-6 rounded-xl cursor-pointer hover:bg-black/5 transition-all duration-300"
                    href="tel:9906130577"
                  >
                    Call Agency Team
                  </a>
                </div>
              </div>

            </div>
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
                  imgSrc: "/images/destinations/ladakh.png",
                  icon: <Mountain size={24} />,
                  linkHref: "/destinations",
                },
                {
                  id: "kashmir",
                  title: "Kashmir",
                  description: "Often called 'Paradise on Earth' for its breathtaking valleys and serene lakes.",
                  imgSrc: "/images/destinations/kashmir.jpg",
                  icon: <Snowflake size={24} />,
                  linkHref: "/destinations",
                },
                {
                  id: "vaishno-devi",
                  title: "Vaishno Devi",
                  description: "One of the most sacred Hindu pilgrimage sites nestled in the Trikuta Mountains.",
                  imgSrc: "/images/destinations/vaishnodevi.jpg",
                  icon: <Landmark size={24} />,
                  linkHref: "/destinations",
                },
                {
                  id: "uttrakhand",
                  title: "Uttrakhand",
                  description: "The 'Land of Gods' featuring spiritual hubs, yoga centers and Himalayan vistas.",
                  imgSrc: "/images/destinations/uttarakhand.png",
                  icon: <Compass size={24} />,
                  linkHref: "/destinations",
                },
                {
                  id: "vrindavan",
                  title: "Vrindavan",
                  description: "The sacred city where Lord Krishna spent his childhood, filled with ancient temples.",
                  imgSrc: "/images/destinations/vrindavan.png",
                  icon: <Building2 size={24} />,
                  linkHref: "/destinations",
                },
                {
                  id: "rajasthan",
                  title: "Rajasthan",
                  description: "Experience the royal heritage, majestic forts, and the golden sand dunes of Thar.",
                  imgSrc: "/images/destinations/rajasthan.jpg",
                  icon: <Camera size={24} />,
                  linkHref: "/destinations",
                },
                {
                  id: "himachal",
                  title: "Himachal",
                  description: "The land of snow-capped peaks, lush valleys and adventurous mountain trails.",
                  imgSrc: "/images/destinations/himachal.jpg",
                  icon: <Tent size={24} />,
                  linkHref: "/destinations",
                },
                {
                  id: "delhi",
                  title: "Delhi",
                  description: "India's vibrant capital, where ancient history meets modern city life.",
                  imgSrc: "/images/destinations/delhi.jpg",
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

        {/* Local Travel Agency Expertise Section for SEO and trust */}
        <section className="section bg-warm" aria-labelledby="expertise-heading" style={{ padding: '4rem 1.25rem', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <p className="section-kicker" style={{ justifyContent: 'center' }}>Certified Local Tour Operators</p>
            <h2 className="section-title" id="expertise-heading" style={{ marginBottom: '1.5rem', fontSize: '2.25rem' }}>Your Trusted Tour &amp; Travels in Katra</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--muted)', lineHeight: '1.8', textAlign: 'center' }}>
              <p style={{ marginBottom: '1.25rem' }}>
                Welcome to <strong>Katra Travels</strong>, your premier choice for comprehensive <strong>tour and travels in Katra</strong>. As a leading, certified <strong>Katra travel agency</strong> and local <strong>Katra travel agents</strong>, we specialize in transforming your spiritual pilgrimages and adventure holidays into comfortable, lifelong memories.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                Whether you are searching for hassle-free local sightseeing, secure <strong>travel in Katra</strong>, transport logistics, or booking the <strong>best travel in Katra Kashmir package tour</strong>, we offer highly competitive pricing, custom-tailored itineraries, handpicked hotel stays, and professional local cab drivers.
              </p>
              <p style={{ margin: 0 }}>
                As a registered, trusted <strong>Kashmir travel agency</strong>, we are committed to delivering top-tier service. From booking serene houseboats in Srinagar to organizing smooth mountain commutes and Vaishno Devi helicopter yatra logistics, our local travel experts ensure you travel with absolute peace of mind.
              </p>
            </div>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencySchema) }}
      />
    </>
  );
}