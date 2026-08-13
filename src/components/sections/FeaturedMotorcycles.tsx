"use client"

import { getFeaturedMotorcycles } from "@/data/motorcycles"
import { MotorcycleCard } from "@/components/MotorcycleCard"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

export function FeaturedMotorcycles() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -scrollRef.current.clientWidth : scrollRef.current.clientWidth
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[var(--honda-red)] text-sm font-bold uppercase tracking-widest block mb-2">
            Ofertas Exclusivas
          </span>
          <h2 className="text-2xl md:text-5xl font-black uppercase text-gray-900 tracking-tighter italic">
            Nuestras motocicletas <span className="text-[var(--honda-red)]">más vendidas</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Descubre las motocicletas más buscadas por nuestros clientes. Elige la que mejor va con tu estilo.
          </p>
        </motion.div>

        <div className="relative group">
          {/* Left Button */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 md:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-50 bg-white border border-gray-200 text-gray-800 p-2 md:p-3 rounded-full shadow-lg hover:bg-[var(--honda-red)] hover:text-white hover:border-[var(--honda-red)] hover:shadow-[0_0_30px_rgba(204,0,0,0.6)] active:bg-[var(--honda-red)] active:text-white active:border-[var(--honda-red)] active:shadow-[0_0_30px_rgba(204,0,0,0.6)] transition-all opacity-90 md:opacity-0 md:group-hover:opacity-100 flex hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mb-8 pt-4 -mt-4 scroll-smooth hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {getFeaturedMotorcycles().map((moto, index) => (
              <motion.div 
                key={moto.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start"
              >
                <MotorcycleCard motorcycle={moto} />
              </motion.div>
            ))}
          </div>

          {/* Right Button */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 md:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-50 bg-white border border-gray-200 text-gray-800 p-2 md:p-3 rounded-full shadow-lg hover:bg-[var(--honda-red)] hover:text-white hover:border-[var(--honda-red)] hover:shadow-[0_0_30px_rgba(204,0,0,0.6)] active:bg-[var(--honda-red)] active:text-white active:border-[var(--honda-red)] active:shadow-[0_0_30px_rgba(204,0,0,0.6)] transition-all opacity-90 md:opacity-0 md:group-hover:opacity-100 flex hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Siguiente"
          >
            <ChevronRight size={24} className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
