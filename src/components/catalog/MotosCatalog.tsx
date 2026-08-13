"use client";

import { useState, useMemo, useEffect } from "react";
import { MotorcycleCard } from "@/components/MotorcycleCard";
import { motorcycles, MotorcycleCategory } from "@/data/motorcycles";
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES: ("TODAS" | MotorcycleCategory)[] = [
  "TODAS",
  "SPORT",
  "SUPER SPORT",
  "SCOOTER Y SEMIAUTOMATICA",
  "ENDURO Y MOTOCROSS",
  "TODO TERRENO",
  "SCRAMBLER",
  "NAVI"
];

type SortOption = "featured" | "price-asc" | "price-desc" | "name-asc" | "name-desc";

export function MotosCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<"TODAS" | MotorcycleCategory>("TODAS");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 9;

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, sortBy]);

  const filteredAndSortedMotos = useMemo(() => {
    // 1. Filter
    let filtered = motorcycles.filter((moto) => {
      const matchesCategory = selectedCategory === "TODAS" || moto.category === selectedCategory;
      const matchesSearch = moto.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            moto.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // 2. Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          if (a.price === null) return 1;
          if (b.price === null) return -1;
          return a.price - b.price;
        case "price-desc":
          if (a.price === null) return 1;
          if (b.price === null) return -1;
          return b.price - a.price;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "featured":
        default:
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, searchQuery, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedMotos.length / ITEMS_PER_PAGE);
  const currentMotos = filteredAndSortedMotos.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-100 pt-20 pb-12 md:pt-28 md:pb-20 relative z-0">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase mb-6 tracking-tighter italic leading-none">
              Encuentra tu <span className="text-[var(--honda-red)]">Honda</span> ideal
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Explora nuestro catálogo completo de motocicletas. Desde opciones perfectas para la ciudad hasta máquinas de alto rendimiento y aventura.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Floating Controls Section */}
        <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 md:p-8 max-w-6xl mx-auto -mt-8 mb-16">
          <h4 className="text-center text-sm font-bold text-gray-800 uppercase tracking-widest mb-6">
            Filtrar por categoría
          </h4>
          
          <div className="flex flex-col gap-6">
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold uppercase transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    selectedCategory === category
                      ? "bg-[#cc0000] text-white shadow-[0_8px_16px_rgba(204,0,0,0.4)] hover:-translate-y-1"
                      : "bg-gray-100 text-gray-700 border border-transparent hover:bg-white hover:text-[#cc0000] hover:border-[#cc0000] hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(204,0,0,0.2)]"
                  }`}
                >
                  {category === "TODAS" ? "Ver todas las motos" : category}
                </button>
              ))}
            </div>

            <div className="w-full h-px bg-gray-100"></div>

            {/* Search & Sort */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="relative w-full sm:w-80">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar motocicleta..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--honda-red)] focus:bg-white transition-all text-gray-800"
                />
              </div>
              
              <div className="relative w-full sm:w-64">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <SlidersHorizontal className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="w-full pl-11 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--honda-red)] focus:bg-white transition-all text-gray-800 appearance-none cursor-pointer font-medium"
                >
                  <option value="featured">Relevancia</option>
                  <option value="price-asc">Precio: Menor a Mayor</option>
                  <option value="price-desc">Precio: Mayor a Menor</option>
                  <option value="name-asc">Nombre: A - Z</option>
                  <option value="name-desc">Nombre: Z - A</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-8 flex justify-between items-end max-w-[1400px] mx-auto">
          <h2 className="text-2xl font-bold text-gray-800">
            {selectedCategory === "TODAS" ? "Catálogo Completo" : selectedCategory}
          </h2>
          <p className="text-gray-500 font-medium">
            {filteredAndSortedMotos.length} {filteredAndSortedMotos.length === 1 ? "modelo" : "modelos"}
          </p>
        </div>

        {/* Grid */}
        {filteredAndSortedMotos.length > 0 ? (
          <div className="max-w-[1400px] mx-auto">
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              <AnimatePresence>
                {currentMotos.map((moto) => (
                  <motion.div
                    key={moto.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MotorcycleCard motorcycle={moto} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <button
                  onClick={() => {
                    setCurrentPage(p => Math.max(1, p - 1));
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  disabled={currentPage === 1}
                  className="w-12 h-10 flex items-center justify-center rounded-md border border-gray-200 bg-white text-gray-500 disabled:bg-gray-200/60 disabled:text-gray-400 hover:bg-white hover:text-[#cc0000] hover:border-[#cc0000] hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(204,0,0,0.2)] transition-all shadow-sm cursor-pointer disabled:cursor-default"
                  aria-label="Página anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className={`w-10 h-10 flex items-center justify-center rounded-md font-bold transition-all shadow-sm cursor-pointer ${
                      currentPage === page 
                        ? "bg-[#cc0000] text-white shadow-[0_4px_10px_rgba(204,0,0,0.3)] hover:-translate-y-1" 
                        : "bg-white text-gray-700 border border-gray-200 hover:bg-white hover:text-[#cc0000] hover:border-[#cc0000] hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(204,0,0,0.2)]"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => {
                    setCurrentPage(p => Math.min(totalPages, p + 1));
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  disabled={currentPage === totalPages}
                  className="w-12 h-10 flex items-center justify-center rounded-md border border-gray-200 bg-white text-gray-500 disabled:bg-gray-200/60 disabled:text-gray-400 hover:bg-white hover:text-[#cc0000] hover:border-[#cc0000] hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(204,0,0,0.2)] transition-all shadow-sm cursor-pointer disabled:cursor-default"
                  aria-label="Página siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-100 p-16 flex flex-col items-center justify-center text-center max-w-[1400px] mx-auto">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No se encontraron resultados</h3>
            <p className="text-gray-500 max-w-md">
              No pudimos encontrar motocicletas que coincidan con "{searchQuery}" en esta categoría.
            </p>
            <button 
              onClick={() => { setSearchQuery(""); setSelectedCategory("TODAS"); }}
              className="mt-6 text-[var(--honda-red)] font-bold hover:underline"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
