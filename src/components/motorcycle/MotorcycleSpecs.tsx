import { Settings, Zap, Scale, Gauge } from "lucide-react";
import type { Motorcycle } from "@/data/motorcycles";

interface Props {
  motorcycle: Motorcycle;
}

export function MotorcycleSpecs({ motorcycle }: Props) {
  const specs = motorcycle.specifications;

  if (!specs || Object.keys(specs).length === 0) {
    return null; // Return nothing if no specs are defined
  }

  // Define icon mapping for known specs
  const specConfig: Record<string, { label: string; icon: React.ReactNode }> = {
    engine: { label: "MOTOR", icon: <Settings className="w-5 h-5 text-[var(--honda-red)]" /> },
    power: { label: "POTENCIA", icon: <Zap className="w-5 h-5 text-[var(--honda-red)]" /> },
    weight: { label: "PESO", icon: <Scale className="w-5 h-5 text-[var(--honda-red)]" /> },
    topSpeed: { label: "VELOCIDAD MÁX", icon: <Gauge className="w-5 h-5 text-[var(--honda-red)]" /> },
  };

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-black text-gray-900 mb-6 uppercase">Especificaciones Técnicas</h2>
      <div className="flex flex-col gap-3">
        {Object.entries(specs).map(([key, value]) => {
          if (!value) return null;
          
          const config = specConfig[key] || { 
            label: key.toUpperCase(), 
            icon: <div className="w-2 h-2 rounded-full bg-[var(--honda-red)]" /> 
          };

          return (
            <div key={key} className="bg-gray-50 rounded-xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                {config.icon}
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold mb-1 uppercase tracking-wider">{config.label}</p>
                <p className="font-bold text-gray-900">{value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
