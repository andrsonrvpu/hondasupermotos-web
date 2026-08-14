import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motorcycles } from "@/data/motorcycles";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { MotorcycleGallery } from "@/components/motorcycle/MotorcycleGallery";
import { MotorcycleSpecs } from "@/components/motorcycle/MotorcycleSpecs";
import { RelatedMotorcycles } from "@/components/motorcycle/RelatedMotorcycles";
import { QuoteModal } from "@/components/motorcycle/QuoteModal";

type Props = {
  params: Promise<{ slug: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const motorcycle = motorcycles.find((m) => m.slug === slug);
  
  if (!motorcycle) {
    return {
      title: "Motocicleta no encontrada",
    };
  }

  return {
    title: `Honda ${motorcycle.name} | Catálogo Oficial`,
    description: motorcycle.description || `Descubre todo sobre la Honda ${motorcycle.name}. ${motorcycle.category}. La mejor opción para la ciudad y carretera.`,
  };
}

export function generateStaticParams() {
  return motorcycles.map((moto) => ({
    slug: moto.slug,
  }));
}

export default async function MotorcyclePage({ params }: Props) {
  const { slug } = await params;
  const motorcycle = motorcycles.find((m) => m.slug === slug);

  if (!motorcycle) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <Header />
      <main className="flex-1 bg-white">
        {/* Main Content Area */}
        <div className="container mx-auto px-4 pt-24 pb-8 lg:pt-32 lg:pb-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* LEFT COLUMN: Gallery & Image */}
            <div className="lg:col-span-7">
              <div className="sticky top-24">
                
                <MotorcycleGallery motorcycle={motorcycle} />
              </div>
            </div>

            {/* RIGHT COLUMN: Info & Specs */}
            <div className="lg:col-span-5 flex flex-col">
              
              <div className="bg-white rounded-3xl lg:p-8 lg:shadow-[0_0_40px_rgba(0,0,0,0.03)] lg:border lg:border-gray-100">
                <h1 className="text-4xl md:text-5xl font-black uppercase text-gray-900 mb-2">
                  {motorcycle.name}
                </h1>
                
                <div className="mb-6">
                  {motorcycle.price === null ? (
                    <span className="text-2xl font-black text-[var(--honda-red)] uppercase">
                      {motorcycle.priceLabel}
                    </span>
                  ) : (
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl text-[var(--honda-red)] font-bold">Desde</span>
                      <span className="text-3xl font-black text-[var(--honda-red)]">
                        ${motorcycle.price.toLocaleString("es-CO")}
                      </span>
                    </div>
                  )}
                </div>
                
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  {motorcycle.description || "Descubre el poder y la confiabilidad de Honda en cada recorrido. Diseñada para ofrecer el mejor rendimiento y confort."}
                </p>

                {/* Actions */}
                <div className="flex flex-col gap-4 mb-8">
                  <a
                    href={`https://wa.me/573173057943?text=${encodeURIComponent(motorcycle.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center bg-[#25D366] text-white text-center font-bold uppercase text-sm py-4 px-6 rounded-lg transition-all duration-300 hover:bg-[#1DA851] hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(37,211,102,0.4)] active:bg-[#1DA851] active:-translate-y-1 active:shadow-[0_8px_16px_rgba(37,211,102,0.4)]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 mr-3" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Contactar por WhatsApp
                  </a>
                  <QuoteModal motorcycle={motorcycle}>
                    <button className="w-full flex items-center justify-center bg-[var(--honda-red)] text-white text-center font-bold uppercase text-sm py-4 px-6 rounded-lg transition-all duration-300 hover:bg-red-700 hover:-translate-y-1 hover:shadow-lg active:bg-red-700 active:-translate-y-1 active:shadow-lg cursor-pointer">
                      Solicitar cotización
                    </button>
                  </QuoteModal>
                </div>

                {/* Highlights */}
                {motorcycle.highlights && motorcycle.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {motorcycle.highlights.map((highlight, idx) => (
                      <span key={idx} className="bg-gray-200 text-gray-700 text-xs font-bold px-4 py-2 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}

                {/* Specifications */}
                <MotorcycleSpecs motorcycle={motorcycle} />
                
              </div>
            </div>
          </div>
        </div>

        <RelatedMotorcycles currentMotorcycleId={motorcycle.id} category={motorcycle.category} />

        {/* CTA Final */}
        <section className="bg-gray-900 text-white py-20 text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 text-white">¿Ya elegiste tu Honda?</h2>
            <p className="text-xl text-gray-400 mb-10">Obtén información sobre disponibilidad, precio y opciones de compra de forma rápida y sencilla.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`https://wa.me/573173057943?text=${encodeURIComponent(motorcycle.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center bg-[#25D366] text-white font-bold uppercase text-sm py-4 px-8 rounded-lg transition-all duration-300 hover:bg-[#1DA851] hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(37,211,102,0.4)] active:bg-[#1DA851] active:-translate-y-1 active:shadow-[0_8px_16px_rgba(37,211,102,0.4)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 mr-3" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Contactar por WhatsApp
              </a>
              <QuoteModal motorcycle={motorcycle}>
                <button className="w-full sm:w-auto flex items-center justify-center bg-[var(--honda-red)] text-white font-bold uppercase text-sm py-4 px-8 rounded-lg transition-all duration-300 hover:bg-red-700 hover:-translate-y-1 hover:shadow-lg active:bg-red-700 active:-translate-y-1 active:shadow-lg cursor-pointer">
                  Solicitar cotización
                </button>
              </QuoteModal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
