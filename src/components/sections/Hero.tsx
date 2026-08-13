"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full min-h-[75vh] md:min-h-[90vh] lg:min-h-screen flex items-center justify-start overflow-hidden bg-gray-900 mt-[72px]">
      {/* Background Image / Overlay (Ready for video) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="https://placehold.co/1920x1080/111111/444444?text=Hero+Motorcycle+Background"
          alt="Hero Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-20 text-left">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 md:px-5 md:py-2 mb-4 md:mb-6"
          >
            <span className="w-2 h-2 bg-[var(--honda-red)] rounded-full animate-pulse"></span>
            <span className="text-white text-xs font-bold uppercase tracking-[0.15em]">
              CONCESIONARIO HONDA
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-3 md:mb-4 italic leading-none drop-shadow-lg"
          >
            El poder de <br />
            <span className="text-[var(--honda-red)] drop-shadow-md">tus sueños</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm md:text-lg text-gray-200 mb-6 md:mb-10 max-w-lg font-medium leading-relaxed drop-shadow-md"
          >
            Descubre las motocicletas Honda más innovadoras de 2027. Diseño, tecnología y rendimiento en perfecta armonía.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-start gap-4"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto uppercase tracking-wide rounded-full hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-[0_0_30px_rgba(204,0,0,0.6)] cursor-pointer"
              onClick={() => window.location.href = '/motos'}
            >
              Ver Modelos <span className="ml-2">→</span>
            </Button>
          
            <WhatsAppButton 
              size="lg" 
              className="w-full sm:w-auto uppercase tracking-wide bg-transparent border-2 border-white hover:bg-white hover:text-[#25D366] rounded-full hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]" 
              message="Hola, vengo de la página web y me gustaría recibir información general."
            />
          </motion.div>

          {/* Inline Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4 sm:gap-8 justify-start pt-6 mt-6 md:pt-8 md:mt-12 border-t border-gray-400/30"
          >
            <div>
              <div className="text-3xl font-black text-white drop-shadow-md">75+</div>
              <div className="text-xs text-white/80 uppercase tracking-wider font-bold mt-1">Años de Historia</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white drop-shadow-md">400M+</div>
              <div className="text-xs text-white/80 uppercase tracking-wider font-bold mt-1">Motos Vendidas</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white drop-shadow-md">#1</div>
              <div className="text-xs text-white/80 uppercase tracking-wider font-bold mt-1">En El Mundo</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
