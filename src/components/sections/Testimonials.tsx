"use client"

import { testimonials } from "@/data/mockData"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState } from "react"
export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth } = scrollRef.current
    const itemWidth = scrollWidth / testimonials.length
    const newIndex = Math.round(scrollLeft / itemWidth)
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.scrollWidth / testimonials.length
      const currentScroll = scrollRef.current.scrollLeft
      const currentIndex = Math.round(currentScroll / itemWidth)
      
      const visibleItems = Math.round(scrollRef.current.clientWidth / itemWidth) || 1
      let nextIndex = direction === 'left' ? currentIndex - visibleItems : currentIndex + visibleItems
      
      if (nextIndex < 0) nextIndex = 0
      if (nextIndex >= testimonials.length) nextIndex = testimonials.length - 1
      
      scrollRef.current.scrollTo({ left: itemWidth * nextIndex, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[var(--honda-red)] text-sm font-bold uppercase tracking-widest block mb-2">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-gray-900 tracking-tighter italic">
            Opiniones de nuestros <span className="text-[var(--honda-red)]">clientes</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. Descubre qué opinan sobre nosotros.
          </p>
        </div>

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
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start flex flex-col items-center text-center bg-gray-50 rounded-2xl p-8 border border-gray-100 h-full transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/30 hover:-translate-y-2 hover:border-[var(--honda-red)] active:shadow-2xl active:shadow-red-600/30 active:-translate-y-2 active:border-[var(--honda-red)] cursor-pointer"
              >
                <div className="flex bg-[var(--honda-red)] text-white p-2 rounded-full mb-4 shrink-0">
                  <Star className="w-6 h-6 fill-current" />
                </div>

                <div className="flex gap-1 mb-6 text-yellow-400 shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? "fill-current" : ""}`} />
                  ))}
                </div>

                <p className="text-gray-700 italic mb-6 grow">
                  "{testimonial.comment}"
                </p>

                <div className="mt-auto shrink-0">
                  <h4 className="font-black text-gray-900 uppercase">{testimonial.name}</h4>
                  <span className="text-sm text-gray-500 font-medium">{testimonial.profile}</span>
                </div>
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
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollRef.current) {
                  const itemWidth = scrollRef.current.scrollWidth / testimonials.length
                  scrollRef.current.scrollTo({ left: itemWidth * index, behavior: 'smooth' })
                }
              }}
              aria-label={`Ir al testimonio ${index + 1}`}
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
  )
}
