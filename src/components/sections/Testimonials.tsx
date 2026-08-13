"use client"

import { testimonials } from "@/data/mockData"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -scrollRef.current.clientWidth : scrollRef.current.clientWidth
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
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
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-50 bg-white border border-gray-200 text-gray-800 p-3 rounded-full shadow-lg hover:bg-[var(--honda-red)] hover:text-white hover:border-[var(--honda-red)] transition-all opacity-0 group-hover:opacity-100 hidden md:flex hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mb-8 pt-4 -mt-4 scroll-smooth hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start flex flex-col items-center text-center bg-gray-50 rounded-2xl p-8 border border-gray-100 h-full"
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
            className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-50 bg-white border border-gray-200 text-gray-800 p-3 rounded-full shadow-lg hover:bg-[var(--honda-red)] hover:text-white hover:border-[var(--honda-red)] transition-all opacity-0 group-hover:opacity-100 hidden md:flex hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Siguiente"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
