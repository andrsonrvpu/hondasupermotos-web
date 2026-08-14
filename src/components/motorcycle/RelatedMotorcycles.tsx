"use client"

import { useRef, useState } from "react";
import { motorcycles } from "@/data/motorcycles";
import { MotorcycleCard } from "@/components/MotorcycleCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  currentMotorcycleId: string;
  category: string;
}

export function RelatedMotorcycles({ currentMotorcycleId, category }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Find related motorcycles by category, excluding the current one
  const related = motorcycles
    .filter((m) => m.category === category && m.id !== currentMotorcycleId)
    .slice(0, 6); // Take up to 6 for better sliding

  // If we don't have enough in the same category, grab some featured ones
  if (related.length < 4) {
    const featured = motorcycles
      .filter((m) => m.featured && m.id !== currentMotorcycleId && !related.find(r => r.id === m.id))
      .slice(0, 6 - related.length);
    related.push(...featured);
  }

  if (related.length === 0) return null;

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth } = scrollRef.current;
    const itemWidth = scrollWidth / related.length;
    const newIndex = Math.round(scrollLeft / itemWidth);
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < related.length) {
      setActiveIndex(newIndex);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.scrollWidth / related.length;
      const currentScroll = scrollRef.current.scrollLeft;
      const currentIndex = Math.round(currentScroll / itemWidth);
      
      const visibleItems = Math.round(scrollRef.current.clientWidth / itemWidth) || 1;
      let nextIndex = direction === 'left' ? currentIndex - visibleItems : currentIndex + visibleItems;
      
      if (nextIndex < 0) nextIndex = 0;
      if (nextIndex >= related.length) nextIndex = related.length - 1;
      
      scrollRef.current.scrollTo({ left: itemWidth * nextIndex, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-center uppercase text-gray-900 mb-12">También te puede interesar</h2>
        
        <div className="relative group">
          {/* Left Button */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 md:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-50 bg-white border border-gray-200 text-gray-800 p-3 md:p-4 rounded-full shadow-lg hover:bg-[var(--honda-red)] hover:text-white hover:border-[var(--honda-red)] hover:shadow-[0_0_30px_rgba(204,0,0,0.6)] active:bg-[var(--honda-red)] active:text-white active:border-[var(--honda-red)] active:shadow-[0_0_30px_rgba(204,0,0,0.6)] transition-all opacity-90 md:opacity-0 md:group-hover:opacity-100 flex hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} className="w-6 h-6 md:w-7 md:h-7" />
          </button>
          
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mb-8 pt-4 -mt-4 scroll-smooth hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {related.map((moto) => (
              <div 
                key={moto.id} 
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start"
              >
                <MotorcycleCard motorcycle={moto} />
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 md:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-50 bg-white border border-gray-200 text-gray-800 p-3 md:p-4 rounded-full shadow-lg hover:bg-[var(--honda-red)] hover:text-white hover:border-[var(--honda-red)] hover:shadow-[0_0_30px_rgba(204,0,0,0.6)] active:bg-[var(--honda-red)] active:text-white active:border-[var(--honda-red)] active:shadow-[0_0_30px_rgba(204,0,0,0.6)] transition-all opacity-90 md:opacity-0 md:group-hover:opacity-100 flex hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Siguiente"
          >
            <ChevronRight size={24} className="w-6 h-6 md:w-7 md:h-7" />
          </button>
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-10">
          {related.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollRef.current) {
                  const itemWidth = scrollRef.current.scrollWidth / related.length;
                  scrollRef.current.scrollTo({ left: itemWidth * index, behavior: 'smooth' });
                }
              }}
              aria-label={`Ir a la motocicleta ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? "w-8 bg-[var(--honda-red)]" 
                  : "w-2.5 bg-gray-300 active:bg-gray-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
