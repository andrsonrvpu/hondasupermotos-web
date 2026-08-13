import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PromoBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-[var(--honda-red)] rounded-xl overflow-hidden relative shadow-2xl">
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          
          <div className="relative z-10 p-10 md:p-16 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic mb-4">
              ¡Promoción por tiempo limitado!
            </h2>
            <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mb-8">
              Aprovecha nuestros bonos especiales de descuento. Cupos limitados.
            </p>
            
            <Button asChild variant="secondary" size="lg" className="bg-white text-[var(--honda-red)] hover:bg-gray-100 active:bg-gray-100 uppercase tracking-widest font-black transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] active:shadow-[0_0_30px_rgba(255,255,255,0.6)] cursor-pointer">
              <a href="https://wa.me/573173057943?text=Hola,%20vengo%20de%20la%20página%20web%20y%20me%20gustaría%20recibir%20información%20general." target="_blank" rel="noopener noreferrer">
                Solicitar información <span className="ml-2">→</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
