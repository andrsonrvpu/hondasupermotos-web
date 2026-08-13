"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Search, X } from "lucide-react";
import type { Motorcycle } from "@/data/motorcycles";

interface Props {
  motorcycle: Motorcycle;
}

export function MotorcycleGallery({ motorcycle }: Props) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLightboxOpen]);

  // If colors exist, we can use the image of the selected color if it has one.
  // Otherwise, fallback to the main image or gallery[0].
  const colors = motorcycle.colors || [];
  const currentImage = colors[selectedColor]?.image || motorcycle.image;

  return (
    <>
      <div className="w-full flex flex-col items-center">
        {/* Main Image Container */}
        <div 
          className="relative w-full aspect-[4/3] max-w-3xl bg-white rounded-3xl shadow-md border border-gray-100 p-8 md:p-12 mb-8 group cursor-zoom-in" 
          onClick={() => setIsLightboxOpen(true)}
        >
          <div className="relative w-full h-full">
            <Image
              src={currentImage}
              alt={motorcycle.name}
              fill
              priority
              className="object-contain transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
          {/* Zoom Button */}
          <button className="absolute bottom-4 right-4 bg-gray-900/60 hover:bg-gray-900/80 text-white backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-xs md:text-sm font-medium transition-colors">
            <Search className="w-4 h-4" />
            Click para ampliar
          </button>
        </div>

        {/* Colors Selector */}
        {colors.length > 0 && (
          <div className="w-full flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">Colores disponibles:</span>
            <div className="flex items-center gap-2">
              {colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    selectedColor === index ? "ring-2 ring-offset-2 ring-[var(--honda-red)]" : "hover:scale-110"
                  }`}
                  aria-label={`Seleccionar color ${color.name}`}
                  title={color.name}
                >
                  <span
                    className="w-6 h-6 rounded-full shadow-sm border border-black/10"
                    style={{ backgroundColor: color.hex }}
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-[60]"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-11/12 h-5/6 max-w-6xl cursor-default" onClick={e => e.stopPropagation()}>
            <Image
              src={currentImage}
              alt={motorcycle.name}
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        </div>
      )}
    </>
  );
}
