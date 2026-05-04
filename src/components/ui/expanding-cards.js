"use client";

import * as React from "react";
import { cn } from "@/lib/utils"; 

export const ExpandingCards = React.forwardRef(({ className, items, defaultActiveIndex = 0, ...props }, ref) => {
  const [activeIndex, setActiveIndex] = React.useState(defaultActiveIndex);
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const gridStyle = React.useMemo(() => {
    if (activeIndex === null) return {};
    
    if (isDesktop) {
      const columns = items
        .map((_, index) => (index === activeIndex ? "5fr" : "1fr"))
        .join(" ");
      return { gridTemplateColumns: columns };
    } else {
      const rows = items
        .map((_, index) => (index === activeIndex ? "10fr" : "1fr"))
        .join(" ");
      return { gridTemplateRows: rows };
    }
  }, [activeIndex, items.length, isDesktop]);

  const handleInteraction = (index) => {
    setActiveIndex(index);
  };

  return (
    <ul
      className={cn(
        "w-full max-w-[1380px] gap-3",
        "grid",
        "h-[700px] md:h-[500px]",
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
      {...props}
    >
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <li
            key={item.id}
            className={cn(
              "group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-ink shadow-2xl",
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
                  isActive ? "h-full scale-105 grayscale-0 opacity-100" : "h-full scale-110 grayscale opacity-40"
                )}
                style={{ height: '100%' }}
              />
            </div>
            
            {/* Gradient Overlay */}
            <div className={cn(
              "absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-700",
              isActive ? "opacity-100" : "opacity-60"
            )} />

            {/* Content Layer */}
            <div className="absolute inset-0 z-20 p-4 md:p-6 flex flex-col h-full w-full pointer-events-none">
              
              {/* Title for Inactive Cards (Vertical on Desktop, Horizontal on Mobile) */}
              <div className={cn(
                "absolute transition-all duration-500",
                "md:top-1/3 md:left-1/2 md:-translate-x-1/2", // Desktop: Centered and vertical
                "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", // Mobile: Centered horizontally/vertically in the thin row
                isActive ? "opacity-0 scale-95" : "opacity-100 scale-100"
              )}>
                <h3 className={cn(
                  "whitespace-nowrap font-black uppercase tracking-[0.4em] text-white/90 drop-shadow-lg",
                  "md:rotate-90 text-[12px]", // Desktop
                  "rotate-0 text-[10px]"      // Mobile
                )}>
                  {item.title}
                </h3>
              </div>

              {/* Active Content (Bottom Aligned) */}
              <div className={cn(
                "mt-auto flex flex-col gap-3 transition-all duration-700 transform origin-bottom-left",
                isActive ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90"
              )}>
                <div className="flex flex-col gap-2">
                  <div className="text-white/90 drop-shadow-md">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl md:text-5xl font-bold text-white tracking-tight drop-shadow-xl leading-none">
                    {item.title}
                  </h3>
                </div>
                
                <p className="max-w-md text-sm md:text-base text-white/90 line-clamp-3 leading-relaxed drop-shadow-md font-medium">
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
