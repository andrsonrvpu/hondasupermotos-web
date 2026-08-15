import Link from "next/link"
import { ShieldCheck, Wrench, Star, Award, TrendingUp, Handshake } from "lucide-react"

export const metadata = {
  title: "Sobre Nosotros | Honda",
  description: "Conoce más sobre Honda, tu concesionario oficial de confianza. Nuestra historia, valores y por qué elegirnos para tu próxima motocicleta.",
}

export default function NosotrosPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-black text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--honda-red)] opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--honda-red)] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--honda-red)] rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6">
            Sobre Nosotros
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto">
            Somos tu <span className="font-bold text-white">concesionario oficial Honda</span> de confianza. Llevamos la pasión por las dos ruedas a cada rincón de la ciudad.
          </p>
        </div>
      </section>

      {/* Historia y Presentación */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-gray-900 uppercase mb-6 relative inline-block">
              Nuestra Historia
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[var(--honda-red)]"></div>
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                En <strong>Honda</strong> llevamos años consolidándonos como el principal referente para los amantes de las motocicletas en la región. Nacimos con el propósito de acercar la tecnología, innovación y durabilidad que solo la marca líder a nivel mundial puede ofrecer.
              </p>
              <p>
                Como <strong>distribuidores autorizados y oficiales</strong> de Honda, no solo vendemos vehículos; entregamos experiencias, seguridad y un respaldo absoluto a cada uno de nuestros clientes.
              </p>
              <p>
                Contamos con un equipo de asesores comerciales y técnicos altamente capacitados y certificados directamente por la marca para garantizar que tu experiencia, desde la compra hasta el mantenimiento, sea inigualable.
              </p>
            </div>
          </div>
          <div className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex items-center justify-center">
            {/* Placeholder de imagen: El usuario podrá colocar una foto real del concesionario luego */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-gray-600 opacity-80 mix-blend-multiply"></div>
            <div className="relative z-10 text-center p-8">
              <Award className="w-16 h-16 text-[var(--honda-red)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Distribuidor Autorizado</h3>
              <p className="text-gray-300 mt-2">Garantía y Respaldo Oficial</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-white py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 uppercase mb-4">Nuestros Valores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Nuestra filosofía de trabajo se basa en principios sólidos que garantizan tu satisfacción.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <Star className="w-7 h-7 text-[var(--honda-red)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase">Calidad</h3>
              <p className="text-gray-600">Representamos a la marca número uno del mundo, entregando productos que superan los más altos estándares de durabilidad e innovación.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-[var(--honda-red)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase">Confianza</h3>
              <p className="text-gray-600">Construimos relaciones a largo plazo con transparencia. Te asesoramos con honestidad para que elijas la moto perfecta para ti.</p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <Handshake className="w-7 h-7 text-[var(--honda-red)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase">Compromiso</h3>
              <p className="text-gray-600">Nuestro servicio no termina con la venta. Te acompañamos kilómetro a kilómetro con el mejor servicio postventa del mercado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-black text-white uppercase mb-8">¿Por qué elegirnos?</h2>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-[var(--honda-red)] p-1.5 rounded-full shrink-0">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Financiación Flexible</h4>
                    <p className="text-gray-400 mt-1">Trabajamos con ProgreSER y aliados financieros para ofrecerte crédito rápido, con tasas competitivas y plazos a tu medida.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-[var(--honda-red)] p-1.5 rounded-full shrink-0">
                    <Wrench className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Taller Especializado</h4>
                    <p className="text-gray-400 mt-1">Técnicos certificados por Honda, herramientas de última tecnología y repuestos 100% originales para tu motocicleta.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-[var(--honda-red)] p-1.5 rounded-full shrink-0">
                    <ShieldCheck className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Garantía Total</h4>
                    <p className="text-gray-400 mt-1">Tranquilidad absoluta. Todas nuestras motos cuentan con el respaldo directo de fábrica en todo el territorio nacional.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-[var(--honda-red)] p-12 lg:p-16 flex flex-col justify-center items-center text-center">
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-6">
                Encuentra la moto de tus sueños
              </h3>
              <p className="text-red-100 text-lg mb-10 max-w-sm">
                Déjanos asesorarte y llévate tu motocicleta hoy mismo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <Link href="/motos" className="bg-white text-[var(--honda-red)] px-8 py-4 rounded-xl font-bold uppercase transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1 hover:shadow-lg text-center">
                  Ver Motos
                </Link>
                <Link href="/contacto" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold uppercase transition-all duration-300 hover:bg-white hover:text-[var(--honda-red)] hover:-translate-y-1 hover:shadow-lg text-center">
                  Contáctanos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
