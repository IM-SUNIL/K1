"use client";

import * as React from "react";
import { cn } from "@/lib/utils"; 

export const ExpandingCards = React.forwardRef(({ className, items, defaultActiveIndex = 0, autoPlayInterval = 5000, ...props }, ref) => {
  const [activeIndex, setActiveIndex] = React.useState(defaultActiveIndex);
  const [isDesktop, setIsDesktop] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play effect
  React.useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPaused, items.length, autoPlayInterval]);

  const handleInteraction = (index) => {
    setActiveIndex(index);
    setIsPaused(true); 
  };

  const gridStyle = React.useMemo(() => {
    if (activeIndex === null) return {};
    
    if (isDesktop) {
      const columns = items
        .map((_, index) => (index === activeIndex ? "5fr" : "1.2fr")) 
        .join(" ");
      return { gridTemplateColumns: columns };
    } else {
      const rows = items
        .map((_, index) => (index === activeIndex ? "3.5fr" : "1fr"))
        .join(" ");
      return { gridTemplateRows: rows };
    }
  }, [activeIndex, items.length, isDesktop]);

  return (
    <ul
      className={cn(
        "w-full max-w-[1380px] gap-2 md:gap-3",
        "grid",
        "h-[850px] md:h-[550px]", 
        "transition-[grid-template-columns,grid-template-rows] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
        className,
      )}
      style={{
        ...gridStyle,
        ...(isDesktop 
          ? { gridTemplateRows: '1fr' }
          : { gridTemplateColumns: '1fr' }
        )
      }}
      ref={ref}
      onMouseEnter={() => isDesktop && setIsPaused(true)}
      onMouseLeave={() => isDesktop && setIsPaused(false)}
      {...props}
    >
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <li
            key={item.id}
            className={cn(
              "group relative cursor-pointer overflow-hidden rounded-xl md:rounded-3xl border border-white/10 bg-ink shadow-2xl",
              "transition-all duration-500 ease-in-out",
              "min-h-0 min-w-0"
            )}
            onMouseEnter={() => isDesktop && handleInteraction(index)}
            onClick={() => handleInteraction(index)}
            onFocus={() => handleInteraction(index)}
            tabIndex={0}
            data-active={isActive}
          >
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 h-full w-full">
              <img
                src={item.imgSrc}
                alt={item.title}
                className={cn(
                  "block w-full object-cover transition-all duration-700 ease-in-out",
                  isActive ? "h-full scale-105 opacity-100" : "h-full scale-110 opacity-70"
                )}
                style={{ height: '100%', filter: 'grayscale(0%)' }} 
              />
            </div>
            
            {/* Gradient Overlay - Slightly stronger for inactive strips to highlight text */}
            <div className={cn(
              "absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/30 to-transparent transition-opacity duration-700",
              isActive ? "opacity-100" : "opacity-70"
            )} />

            {/* Content Layer */}
            <div className="absolute inset-0 z-20 p-4 md:p-6 flex flex-col h-full w-full pointer-events-none">
              
              {/* Refined Stylish Title for Inactive Strips - Highlighted */}
              <div className={cn(
                "absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out",
                isActive ? "opacity-0 scale-125" : "opacity-100 scale-100"
              )}>
                <h3 className={cn(
                  "font-thin uppercase tracking-widest text-white select-none pointer-events-none",
                  "md:rotate-90 md:text-[4rem] lg:text-[5rem]",
                  "rotate-0 text-[2.5rem]"
                )} 
                style={{ 
                  fontFamily: "'DM Sans', sans-serif",
                  whiteSpace: 'nowrap',
                  fontWeight: 100,
                  opacity: 0.9, // Brighter white as requested
                  filter: 'drop-shadow(0 0 15px rgba(0,0,0,0.8))' // Black shadow highlight
                }}>
                  {item.title}
                </h3>
              </div>

              {/* Active Content (Bottom Aligned) */}
              <div className={cn(
                "mt-auto flex flex-col gap-2 md:gap-4 transition-all duration-700 transform origin-bottom-left",
                isActive ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-90"
              )}>
                <div className="flex flex-col gap-1 md:gap-3">
                  <div className="text-white/90 drop-shadow-md hidden md:block">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl md:text-6xl font-bold text-white tracking-tight drop-shadow-2xl leading-none">
                    {item.title}
                  </h3>
                </div>
                
                <p className="max-w-xl text-[14px] md:text-lg text-white/95 line-clamp-3 leading-relaxed drop-shadow-md font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
});
ExpandingCards.displayName = "ExpandingCards";
