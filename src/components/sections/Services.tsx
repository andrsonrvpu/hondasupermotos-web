import { services } from "@/data/mockData"
import * as Icons from "lucide-react"

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[var(--honda-red)] text-sm font-bold uppercase tracking-widest block mb-2">
            Talleres
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-gray-900 tracking-tighter italic">
            Nuestros <span className="text-[var(--honda-red)]">Servicios</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Servicio técnico especializado para llevar tu experiencia al siguiente nivel y con garantía de fábrica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = Icons[service.icon as keyof typeof Icons] as React.ElementType

            return (
              <div 
                key={service.id} 
                className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--honda-red)]"
              >
                <div className="w-14 h-14 bg-red-50 text-[var(--honda-red)] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-3 uppercase tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700 font-medium">
                      <Icons.Check className="w-4 h-4 text-[var(--honda-red)] mr-3 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <a 
                  href={`https://wa.me/573173057943?text=${encodeURIComponent(service.whatsappMessage)}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center text-sm font-bold text-[var(--honda-red)] hover:text-[var(--honda-red-hover)] uppercase tracking-wider"
                >
                  {service.ctaText}
                  <Icons.ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
