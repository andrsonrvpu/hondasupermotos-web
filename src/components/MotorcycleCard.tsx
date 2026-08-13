"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Motorcycle } from "@/data/motorcycles";

interface MotorcycleCardProps {
  motorcycle: Motorcycle;
  className?: string;
}

export function MotorcycleCard({ motorcycle, className }: MotorcycleCardProps) {
  return (
    <div className="group relative block w-full">
      <div
        className={cn(
          "relative flex flex-col h-full bg-white border border-gray-100 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/30 hover:-translate-y-2 hover:border-[var(--honda-red)]",
          className
        )}
      >
        {/* Category Badge & Price */}
        <div className="flex justify-between items-start p-4 z-30 absolute w-full pointer-events-none">
          <span className="bg-[var(--honda-red)] text-white text-[10px] font-bold px-2 py-1 rounded tracking-wider shadow-sm">
            {motorcycle.category}
          </span>
          <div className="flex flex-col items-end bg-white/50 backdrop-blur-md rounded-full px-4 py-1.5 shadow-sm border border-white/50 pointer-events-auto">
            {motorcycle.price === null ? (
              <span className="text-[var(--honda-red)] font-black text-sm uppercase leading-none mt-1">
                {motorcycle.priceLabel}
              </span>
            ) : (
              <>
                <span className="text-[10px] text-gray-600 font-bold uppercase">Desde</span>
                <span className="text-[var(--honda-red)] font-black text-lg leading-none">
                  ${(motorcycle.price).toLocaleString("es-CO")}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Image Container */}
        <div className="relative w-full aspect-[4/3] bg-gray-50 flex items-center justify-center p-6 mt-4">
          <div className="relative w-full h-full transition-all duration-500 group-hover:scale-[1.35] group-hover:-translate-y-2 group-hover:drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)] z-20">
            <Image
              src={motorcycle.image}
              alt={motorcycle.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          
          {/* Hover "Ver Detalles" Pill */}
          <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <span className="bg-white/90 backdrop-blur-sm text-[var(--honda-red)] text-sm font-bold px-6 py-2.5 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              Ver Detalles
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="font-black text-xl mb-2 uppercase text-black group-hover:text-[var(--honda-red)] transition-colors">
            {motorcycle.name}
          </h3>
          
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            La mejor opción para la ciudad y carretera. {motorcycle.specifications?.engine || "Poder Honda"} de puro poder.
          </p>

          {motorcycle.highlights && motorcycle.highlights.length > 0 ? (
            <div className="flex flex-wrap gap-1.5 mb-6 h-[22px] overflow-hidden">
              {motorcycle.highlights.slice(0, 3).map((highlight, idx) => (
                <span key={idx} className="bg-gray-200 text-gray-700 text-[9px] uppercase tracking-wider font-bold px-2 py-1 rounded-full whitespace-nowrap">
                  {highlight}
                </span>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-1.5 mb-6 opacity-0 h-[22px]">
              <span className="bg-gray-200 text-[9px] px-2 py-1 rounded-full">Placeholder</span>
            </div>
          )}

          {/* Invisible Link covering the card */}
          <Link href={`/motos/${motorcycle.slug}`} className="absolute inset-0 z-40" aria-label={`Ver detalles de ${motorcycle.name}`} />

          {/* Actions */}
          <div className="mt-auto flex gap-2 relative z-50">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const whatsappUrl = `https://wa.me/573173057943?text=${encodeURIComponent(motorcycle.whatsappMessage || `Hola! Me interesa la ${motorcycle.name}`)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="flex-1 flex items-center justify-center bg-[#25D366] text-white text-center font-bold uppercase text-sm py-3 px-4 rounded-lg transition-all duration-300 hover:bg-[#1DA851] hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(37,211,102,0.4)] cursor-pointer"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                className="w-5 h-5 mr-2"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Consultar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
