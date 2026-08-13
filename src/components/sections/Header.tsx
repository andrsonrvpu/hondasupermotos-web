"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { categories, getMotorcyclesByCategory, MotorcycleCategory } from "@/data/motorcycles"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<MotorcycleCategory>("SPORT")
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // Mobile accordion state
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false)

  // Auto close on scroll or escape
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaMenuOpen(false)
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById("servicios");
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white",
        isScrolled ? "shadow-md py-2" : "py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 relative z-50 group flex-shrink-0">
            <Image 
              src="/honda-logo.svg"
              alt="Honda Logo" 
              width={180} 
              height={45} 
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 h-full">
            <div 
              className="relative group h-full flex items-center"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button
                className="flex items-center text-xs lg:text-sm font-bold text-gray-900 group-hover:text-[var(--honda-red)] transition-colors uppercase tracking-wide whitespace-nowrap py-4"
                aria-expanded={megaMenuOpen}
              >
                Motocicletas
                <ChevronDown className={cn("ml-1 w-4 h-4 transition-transform duration-200", megaMenuOpen ? "rotate-180" : "")} />
              </button>
              
              {/* Mega Menu Dropdown */}
              <div 
                className={cn(
                  "absolute top-full left-0 w-[760px] bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 transition-all duration-200 transform z-50",
                  megaMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                )}
                // Centering slightly or keeping left based on layout
                style={{ left: '-200px' }}
              >
                <div className="flex gap-6 p-6">
                  {/* Left Column: Categories */}
                  <div className="w-1/3 border-r border-gray-100 pr-4 space-y-2 flex flex-col">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onMouseEnter={() => setActiveCategory(cat)}
                        className={cn(
                          "w-full text-left px-4 py-3 rounded-lg font-semibold text-sm uppercase tracking-wide transition-all duration-200",
                          activeCategory === cat 
                            ? "bg-[var(--honda-red)] text-white shadow-lg shadow-red-500/30" 
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        )}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                  
                  {/* Right Column: Motorcycles Grid */}
                  <div className="w-2/3 max-h-[400px] overflow-y-auto pr-1 custom-scrollbar">
                    <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                      {activeCategory}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {getMotorcyclesByCategory(activeCategory).map((moto) => (
                        <Link 
                          key={moto.id} 
                          href={`/motos/${moto.slug}`}
                          className="group/card flex items-center gap-3 rounded-lg border border-gray-200 bg-white hover:border-transparent hover:bg-[var(--honda-red)] transition-all duration-200 p-2.5 shadow-sm hover:shadow-lg"
                        >
                          <div className="w-20 h-16 bg-white rounded-md border border-gray-100 overflow-hidden flex items-center justify-center flex-shrink-0 p-1">
                            <Image 
                              src={moto.image}
                              alt={moto.name}
                              width={80}
                              height={64}
                              className="h-full w-full object-contain transition-transform duration-300 group-hover/card:scale-105"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="block text-sm font-semibold uppercase tracking-wide text-black group-hover/card:text-white leading-tight truncate">
                              {moto.name}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Mega Menu Footer */}
                <div className="border-t px-6 py-3 bg-gray-50 rounded-b-lg">
                  <Link href="/motos" className="inline-block text-sm font-semibold text-[var(--honda-red)] hover:underline">
                    VER TODAS LAS MOTOCICLETAS
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/motos"
              className="text-xs lg:text-sm font-bold text-gray-900 hover:text-[var(--honda-red)] transition-colors uppercase tracking-wide whitespace-nowrap"
            >
              Ver Todas Las Motocicletas
            </Link>
            <Link
              href="/#servicios"
              onClick={handleServicesClick}
              className="text-xs lg:text-sm font-bold text-gray-900 hover:text-[var(--honda-red)] transition-colors uppercase tracking-wide whitespace-nowrap"
            >
              Servicios y Accesorios
            </Link>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <Link 
              href="https://wa.me/573000000000?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n"
              className="bg-[var(--honda-red)] text-white px-6 py-2.5 rounded-full text-xs lg:text-sm font-bold hover:bg-[var(--honda-red-hover)] transition-colors uppercase tracking-wide hover:shadow-lg hover:shadow-red-500/50 hover:scale-105"
            >
              Contáctanos
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-900 hover:text-[var(--honda-red)] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-4 max-h-[80vh] overflow-y-auto">
          <div className="space-y-2">
            {/* Mobile Accordion for Motocicletas */}
            <div className="border-b border-gray-100 pb-2">
              <button 
                onClick={() => setMobileCategoriesOpen(!mobileCategoriesOpen)}
                className="w-full flex items-center justify-between text-gray-900 font-bold uppercase text-sm py-2"
              >
                Motocicletas
                {mobileCategoriesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              
              {mobileCategoriesOpen && (
                <div className="pl-4 pr-2 py-2 space-y-4">
                  {categories.map((cat) => (
                    <div key={cat} className="mb-2">
                      <h5 className="text-sm font-bold text-gray-800 mb-2">{cat}</h5>
                      <ul className="space-y-1">
                        {getMotorcyclesByCategory(cat).map(moto => (
                          <li key={moto.id}>
                            <Link 
                              href={`/motos/${moto.slug}`}
                              className="text-gray-700 block px-2 py-1.5 rounded hover:bg-gray-100 text-sm"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {moto.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <Link 
                    href="/motos"
                    className="inline-block mt-4 text-sm font-semibold text-[var(--honda-red)]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    VER TODAS LAS MOTOCICLETAS
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/motos"
              className="block text-gray-900 font-bold uppercase text-sm border-b border-gray-100 py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ver Todas Las Motocicletas
            </Link>
            <Link
              href="/#servicios"
              className="block text-gray-900 font-bold uppercase text-sm border-b border-gray-100 py-3"
              onClick={handleServicesClick}
            >
              Servicios y Accesorios
            </Link>
            
            <div className="pt-4 pb-2">
              <Link 
                href="https://wa.me/573000000000"
                className="bg-[var(--honda-red)] text-white text-center py-3 rounded-full font-bold uppercase flex justify-center w-full shadow-lg"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
