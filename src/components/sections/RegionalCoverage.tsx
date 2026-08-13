import { MapPin } from "lucide-react"

export function RegionalCoverage() {
  return (
    <section className="py-16 bg-gray-900 text-white border-b border-gray-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4">
              Venta de Motos Honda en <span className="text-[var(--honda-red)]">Bogotá y Región Central</span>
            </h2>
            <p className="text-gray-300">
              Encuentra la motocicleta de tus sueños. Brindamos asesoría, ventas y despachos a todos los municipios de Cundinamarca y departamentos limítrofes, con sede principal en Bogotá.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {["Bogotá D.C.", "Cundinamarca", "Boyacá", "Meta", "Huila", "Tolima", "Caldas"].map((region) => (
              <div 
                key={region}
                className="flex items-center gap-2 bg-gray-800 border border-gray-700 px-6 py-3 rounded-full"
              >
                <MapPin className="w-5 h-5 text-[var(--honda-red)]" />
                <span className="font-bold uppercase tracking-wide text-sm">{region}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
