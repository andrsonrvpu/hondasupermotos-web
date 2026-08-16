"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Globe, Camera, Video, Phone, MapPin } from "lucide-react"

export function Footer() {
  const pathname = usePathname();

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Solo interceptar el clic si es un enlace ancla hacia la página de inicio
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const hash = href.substring(1); // Quitar el '/'
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <footer id="contacto" className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div>
            <Link href="/" className="inline-block mb-6 group">
              <Image 
                src="/honda-logo.svg"
                alt="Honda Logo" 
                width={180} 
                height={45} 
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Tu concesionario de confianza. Encuentra la moto de tus sueños con la mejor asesoría y servicio técnico especializado.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-100 text-gray-600 hover:bg-[var(--honda-red)] hover:text-white active:bg-[var(--honda-red)] active:text-white rounded-full flex items-center justify-center transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 text-gray-600 hover:bg-[var(--honda-red)] hover:text-white active:bg-[var(--honda-red)] active:text-white rounded-full flex items-center justify-center transition-colors">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 text-gray-600 hover:bg-[var(--honda-red)] hover:text-white active:bg-[var(--honda-red)] active:text-white rounded-full flex items-center justify-center transition-colors">
                <Video className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-black text-gray-900 uppercase tracking-wide mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              {[
                { label: "Motocicletas", href: "/motos" },
                { label: "Servicios", href: "/#servicios" },
                { label: "Nosotros", href: "/nosotros" },
                { label: "Contacto", href: "/contacto" }
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    onClick={(e) => handleHashClick(e, link.href)}
                    className="text-gray-600 hover:text-[var(--honda-red)] active:text-[var(--honda-red)] transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-black text-gray-900 uppercase tracking-wide mb-6">Servicios</h4>
            <ul className="space-y-4">
              {[
                { label: "Mantenimiento", href: "/#servicios" },
                { label: "Reparaciones", href: "/#servicios" },
                { label: "Repuestos", href: "/#servicios" },
                { label: "Personalización", href: "/#servicios" },
                { label: "Garantía", href: "/terminos-y-condiciones#garantia-de-motocicletas" }
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    onClick={(e) => handleHashClick(e, link.href)}
                    className="text-gray-600 hover:text-[var(--honda-red)] active:text-[var(--honda-red)] transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-black text-gray-900 uppercase tracking-wide mb-6">Contacto</h4>
            <ul className="space-y-4">
          <li className="flex items-start gap-3 text-gray-600">
                <MapPin className="w-5 h-5 text-[var(--honda-red)] shrink-0 mt-0.5" />
                <span>
                  <strong className="block text-gray-900">Sede Principal</strong>
                  Manizales, Caldas
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-[var(--honda-red)] shrink-0" />
                <a href="https://wa.me/573173057943" target="_blank" rel="noopener noreferrer" data-event="click_whatsapp" data-context="footer" className="hover:text-[var(--honda-red)] active:text-[var(--honda-red)] transition-colors">WhatsApp: +57 317 305 7943</a>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Text Block */}
        <div className="border-t border-gray-100 pt-8 pb-4 text-xs text-gray-400 text-center max-w-4xl mx-auto">
          <p>
            Venta de motos Honda nuevas. Encuentra tu motocicleta ideal tipo sport, scooter, todoterreno y Navi. Somos tu concesionario de confianza con servicio técnico especializado y sede principal en Manizales, con atención y distribución para Manizales, Quindío y Risaralda. Cotiza aquí tu nueva moto Honda y haz tus sueños realidad.
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 font-medium">
          <p>© 2026 Honda. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end">
            <Link href="/politica-de-privacidad" className="hover:text-[var(--honda-red)] active:text-[var(--honda-red)] transition-colors">Política de Privacidad</Link>
            <Link href="/terminos-y-condiciones" className="hover:text-[var(--honda-red)] active:text-[var(--honda-red)] transition-colors">Términos y Condiciones</Link>
            <Link href="/politica-cookies" className="hover:text-[var(--honda-red)] active:text-[var(--honda-red)] transition-colors">Política de Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
