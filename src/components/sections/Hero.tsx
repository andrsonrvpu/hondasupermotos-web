"use client"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { Button } from "@/components/ui/button"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Preload images
    const totalFrames = 110
    const images: HTMLImageElement[] = []
    let loaded = 0
    
    for (let i = 1; i <= totalFrames; i++) {
      const img = new window.Image()
      const num = i.toString().padStart(3, '0')
      img.src = `/ezgif-8830cb8dcc6b8410-jpg/ezgif-frame-${num}.jpg`
      img.onload = () => { loaded++ }
      images.push(img)
    }

    let frame = 0
    let lastTime = 0
    const fps = 11
    const interval = 1000 / fps
    let animationFrameId: number

    const resize = () => {
      if (canvas) {
        canvas.width = canvas.clientWidth
        canvas.height = canvas.clientHeight
      }
    }
    
    window.addEventListener('resize', resize)
    resize()

    const draw = (time: number) => {
      animationFrameId = requestAnimationFrame(draw)
      
      if (time - lastTime < interval) return
      lastTime = time

      // Only start drawing if at least some images are loaded
      if (images[frame] && images[frame].complete) {
        const img = images[frame]
        
        // Calculate object-cover dimensions
        const canvasRatio = canvas.width / canvas.height
        const imgRatio = img.width / img.height
        let drawWidth = canvas.width
        let drawHeight = canvas.height
        let offsetX = 0
        let offsetY = 0

        if (canvasRatio > imgRatio) {
          drawHeight = canvas.width / imgRatio
          offsetY = (canvas.height - drawHeight) / 2
        } else {
          drawWidth = canvas.height * imgRatio
          offsetX = (canvas.width - drawWidth) / 2
        }
        
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
        
        frame = (frame + 1) % totalFrames
      }
    }
    
    animationFrameId = requestAnimationFrame(draw)
    
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resize)
    }
  }, [])

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
          <canvas
            ref={canvasRef}
            className="w-full h-full"
          />
        </motion.div>
        {/* Gradient Overlay: Darker on left, transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20 md:from-black/80 md:via-black/50 md:to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-[18px] md:px-6 lg:px-8 flex flex-col items-center md:items-start text-center md:text-left h-full">
        <div className="w-full max-w-[350px] md:max-w-3xl flex flex-col items-center md:items-start mx-auto md:mx-0 h-full pt-4 md:pt-0">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/40 rounded-full px-4 py-1.5 md:px-5 md:py-2 mb-12 md:mb-6 mx-auto md:mx-0"
          >
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[var(--honda-red)] rounded-full animate-pulse"></span>
            <span className="text-white text-[11px] md:text-xs font-bold uppercase tracking-wider">
              CONCESIONARIO OFICIAL HONDA
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black text-white uppercase tracking-tighter mb-8 md:mb-4 italic leading-[0.9] md:leading-[0.9] drop-shadow-xl text-center md:text-left text-[2.8rem] sm:text-5xl md:text-7xl w-full"
          >
            <span className="drop-shadow-md">EL PODER DE</span><br />
            <span className="relative inline-block mt-1">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-black/80 to-transparent blur-md -mx-8"></span>
              <span className="relative text-[var(--honda-red)] drop-shadow-[0_2px_10px_rgba(204,0,0,0.5)] z-10">TUS SUEÑOS</span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[15px] leading-snug md:text-lg md:leading-relaxed text-gray-100 mb-10 md:mb-10 w-full font-medium drop-shadow-md text-center md:text-left mx-auto md:mx-0"
          >
            Descubre las motocicletas Honda más<br className="hidden sm:block"/> innovadoras de 2027. Diseño, tecnología y<br className="hidden sm:block"/> rendimiento en perfecta armonía.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row w-full items-center justify-center md:justify-start gap-4 md:gap-4 mx-auto md:mx-0"
          >
            <Button 
              className="w-full h-[56px] md:h-[60px] rounded-[28px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(204,0,0,0.6)] active:shadow-[0_0_30px_rgba(204,0,0,0.6)] cursor-pointer active:scale-95 text-[17px] md:text-lg font-bold bg-[#cc0000] hover:bg-[#a30000] active:bg-[#a30000] text-white"
              onClick={() => window.location.href = '/motos'}
            >
              Ver Modelos <span className="ml-2 font-normal">→</span>
            </Button>
          
            <WhatsAppButton 
              className="w-full h-[56px] md:h-[60px] bg-transparent border-[1.5px] border-white hover:bg-white active:bg-white hover:text-[#25D366] active:text-[#25D366] rounded-[28px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] active:shadow-[0_0_30px_rgba(255,255,255,0.6)] active:scale-95 text-[17px] md:text-lg font-bold flex items-center justify-center !text-white hover:!text-[#25D366] active:!text-[#25D366]" 
              message="Hola, vengo de la página web y me gustaría recibir información general."
            />
          </motion.div>

          {/* Divider */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="w-full h-px bg-white/20 mt-10 mb-8 md:my-8 max-w-[350px] md:max-w-none mx-auto md:mx-0"
          />

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 w-full mx-auto md:mx-0 text-center md:text-left pb-4 md:pb-0"
          >
            <div className="flex flex-col items-center md:items-start col-span-1">
              <div className="text-3xl md:text-4xl font-black text-white drop-shadow-md">75+</div>
              <div className="text-[10px] md:text-xs text-gray-300 uppercase tracking-widest font-medium mt-1">Años de historia</div>
            </div>
            <div className="flex flex-col items-center md:items-start col-span-1">
              <div className="text-3xl md:text-4xl font-black text-white drop-shadow-md">400M+</div>
              <div className="text-[10px] md:text-xs text-gray-300 uppercase tracking-widest font-medium mt-1">Motos vendidas</div>
            </div>
            <div className="flex flex-col items-center md:items-start col-span-2 md:col-span-1 mt-2 md:mt-0">
              <div className="text-3xl md:text-4xl font-black text-white drop-shadow-md">#1</div>
              <div className="text-[10px] md:text-xs text-gray-300 uppercase tracking-widest font-medium mt-1">Del mundo</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
