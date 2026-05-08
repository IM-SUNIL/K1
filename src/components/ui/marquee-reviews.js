"use client";

import React from "react";
import { cn } from "@/lib/utils";

const VerifyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 48 48"
    className="flex-shrink-0"
  >
    <polygon
      fill="#42a5f5"
      points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
    ></polygon>
    <polygon
      fill="#fff"
      points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
    ></polygon>
  </svg>
);

const ReviewCard = ({ name, review, stars = 5 }) => (
  <div className="p-6 rounded-2xl mx-4 shadow-sm border border-black/5 hover:shadow-md transition-all duration-300 w-[320px] shrink-0 bg-white/80 backdrop-blur-sm">
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between h-7">
        <div className="flex items-center gap-1.5 min-w-0">
          <p className="font-bold text-ink truncate m-0 p-0 leading-normal">{name}</p>
          <div className="flex items-center shrink-0">
            <VerifyIcon />
          </div>
        </div>
        <div className="flex text-amber-500 font-bold tracking-tighter shrink-0 items-center">
          {"★".repeat(stars)}
        </div>
      </div>
      <p className="text-[14px] leading-relaxed text-muted line-clamp-4 italic">
        "{review}"
      </p>
    </div>
  </div>
);

function MarqueeRow({ data, reverse = false, speed = 0.5 }) {
  const containerRef = React.useRef(null);
  const [isDown, setIsDown] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeftState, setScrollLeftState] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  // Triple the data to allow smooth infinite loop in both directions
  const tripled = React.useMemo(() => [...data, ...data, ...data], [data]);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;

    const scroll = () => {
      // Only auto-scroll when NOT dragging and NOT hovered
      if (!isDown && !isHovered) {
        if (reverse) {
          container.scrollLeft -= speed;
          // Loop reset
          if (container.scrollLeft <= 0) {
            container.scrollLeft = container.scrollWidth / 3;
          }
        } else {
          container.scrollLeft += speed;
          // Loop reset
          if (container.scrollLeft >= (container.scrollWidth * 2) / 3) {
            container.scrollLeft = container.scrollWidth / 3;
          }
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Set initial scroll in the middle of our tripled container to allow seamless scrolling
    container.scrollLeft = container.scrollWidth / 3;

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isDown, isHovered, reverse, speed]);

  // Mouse Drag handlers
  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeftState(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeftState - walk;
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setIsHovered(true);
    setIsDown(true);
    setStartX(e.targetTouches[0].clientX - containerRef.current.offsetLeft);
    setScrollLeftState(containerRef.current.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsDown(false);
    setIsHovered(false);
  };

  const handleTouchMove = (e) => {
    if (!isDown) return;
    const x = e.targetTouches[0].clientX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeftState - walk;
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      className="relative w-full overflow-x-auto scrollbar-hide py-4 cursor-grab active:cursor-grabbing select-none flex"
      style={{
        display: "flex",
        whiteSpace: "nowrap",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div className="flex shrink-0">
        {tripled.map((item, i) => (
          <ReviewCard key={i} name={item.name} review={item.review} />
        ))}
      </div>
    </div>
  );
}

const row1 = [
  { name: "Susheel Kumar", review: "Its really a great travel service provider in jammu kashmir union territory. Spl in katra, kashmir package." },
  { name: "Shaam Verma", review: "Its a great travel service. Just walking step to katra railway station and bus stand. The owner and staff r very cooperative." },
  { name: "Naresh Sharma", review: "Best travel in Jammu Kashmir, sply in katra, staff r very co operative, even MD of this agency was full support to our family." },
  { name: "Makhan Chand", review: "It's a very good travel services provider in katra. Sply Kashmir package and himachal package." },
  { name: "Manjeet singh", review: "Great Tour travel in katra for Kashmir Tour plan. May be booking contact katraTour and travel katra." },
  { name: "Shivali mankotia", review: "Best tour and travel in katra. Vaishno devi jammu kashmir my family trip in kashmir 5/nigh 6 days good severs and driver." },
];

const row2 = [
  { name: "Sham sanmotra", review: "This Travel is Exclent. specially providing tour of maa vaishano devi, Kashmir, Himachal pardesh. we Take vechile as well hotel services." },
  { name: "Sudesh Khanyotra", review: "This is best travel for srinagar tour. Also provide hotel in best rate at,katra, jammu, patnitop, srinagar, pahalgam, sonamerg and gulumerg." },
  { name: "Karan Kumar", review: "It's a best travel in katra. Which is provided good service in tour package, vehicle service and hotel booking." },
  { name: "Anima sarkar", review: "Provides you the best trips at very affordable price, I joined a lot of trips with them these guys are just awesome." },
  { name: "Ashu Rajput", review: "Excellent travel agent in Katra. Service is very good, staff r very cooperative." },
  { name: "Sunil Dutt", review: "This service provider is very gud, we take a tour for manali, enjoying alots. Driver was very cooperative." },
  { name: "Sandeep Pandotra", review: "best travel agent at jammu Kashmir. spl at srinagar and himachal. we booked tour for manali. enjoy a lot." },
];

export default function MarqueeReviews() {
  return (
    <div className="flex flex-col gap-2 py-8 overflow-hidden relative">
      {/* Side Fades */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 md:w-48 z-10 bg-gradient-to-r from-[#f3f1ec] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 md:w-48 z-10 bg-gradient-to-l from-[#f3f1ec] to-transparent" />
      
      <MarqueeRow data={row1} speed={0.6} />
      <MarqueeRow data={row2} reverse speed={0.7} />
    </div>
  );
}
