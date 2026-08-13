"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full flex items-start md:items-center justify-center md:justify-start overflow-hidden bg-gray-900 mt-[72px] pt-8 pb-10 md:py-20 min-h-[650px] md:min-h-screen">
      {/* Background Image / Video Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute inset-0 w-full h-full bg-[#111]"
        >
          {/* 
            Placeholder background prepared for future video/image. 
            Removed the text placeholder to leave a clean dark background.
          */}
          <Image
            src="https://placehold.co/1920x1080/111111/111111/png?text=%20"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        {/* Gradient Overlay: Darker on left, transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20 md:from-black/80 md:via-black/50 md:to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-[18px] md:px-6 lg:px-8 flex flex-col items-center md:items-start text-center md:text-left h-full">
        <div className="w-full max-w-[350px] md:max-w-3xl flex flex-col items-center md:items-start mx-auto md:mx-0 h-full">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 md:px-5 md:py-2 mb-auto md:mb-6 mt-2 md:mt-0 mx-auto md:mx-0"
          >
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[var(--honda-red)] rounded-full animate-pulse"></span>
            <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.15em]">
              CONCESIONARIO HONDA
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black text-white uppercase tracking-tighter mb-5 md:mb-4 mt-12 md:mt-0 italic leading-[1.1] drop-shadow-lg text-center md:text-left"
            style={{ fontSize: "clamp(2.5rem, 10vw, 4.5rem)" }}
          >
            EL PODER DE<br />
            <span className="text-[var(--honda-red)] drop-shadow-md">TUS SUEÑOS</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[13px] leading-snug md:text-lg md:leading-relaxed text-gray-200 mb-8 md:mb-10 w-full max-w-[340px] md:max-w-lg font-medium drop-shadow-md line-clamp-3 md:line-clamp-none text-center md:text-left mx-auto md:mx-0"
          >
            Descubre las motocicletas Honda más innovadoras de 2027. Diseño, tecnología y rendimiento en perfecta armonía.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-[10px] md:gap-4 mb-6 md:mb-0 w-full max-w-[350px] md:max-w-none mx-auto md:mx-0"
          >
            <Button 
              className="w-full sm:w-auto h-[48px] md:h-[52px] px-6 uppercase tracking-wide rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(204,0,0,0.6)] cursor-pointer active:scale-95 text-[13px] md:text-sm font-bold"
              onClick={() => window.location.href = '/motos'}
            >
              Ver Modelos <span className="ml-2">→</span>
            </Button>
          
            <WhatsAppButton 
              className="w-full sm:w-auto h-[48px] md:h-[52px] px-6 uppercase tracking-wide bg-transparent border-2 border-white hover:bg-white hover:text-[#25D366] rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] active:scale-95 text-[13px] md:text-sm font-bold flex items-center justify-center" 
              message="Hola, vengo de la página web y me gustaría recibir información general."
            />
          </motion.div>

          {/* Inline Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-2 sm:gap-8 pt-5 md:pt-8 mt-2 md:mt-12 border-t border-gray-400/30 w-full max-w-[350px] md:max-w-none mx-auto md:mx-0 text-center md:text-left"
          >
            <div className="flex flex-col items-center md:items-start">
              <div className="text-2xl md:text-3xl font-black text-white drop-shadow-md">75+</div>
              <div className="text-[9px] md:text-xs text-white/80 uppercase tracking-wider font-bold mt-0.5 md:mt-1">Años<br className="md:hidden"/> Historia</div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="text-2xl md:text-3xl font-black text-white drop-shadow-md">400M+</div>
              <div className="text-[9px] md:text-xs text-white/80 uppercase tracking-wider font-bold mt-0.5 md:mt-1">Motos<br className="md:hidden"/> Vendidas</div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="text-2xl md:text-3xl font-black text-white drop-shadow-md">#1</div>
              <div className="text-[9px] md:text-xs text-white/80 uppercase tracking-wider font-bold mt-0.5 md:mt-1">En El<br className="md:hidden"/> Mundo</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
