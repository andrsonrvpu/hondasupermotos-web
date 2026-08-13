import { motorcycles } from "@/data/motorcycles";
import { MotorcycleCard } from "@/components/MotorcycleCard";

interface Props {
  currentMotorcycleId: string;
  category: string;
}

export function RelatedMotorcycles({ currentMotorcycleId, category }: Props) {
  // Find related motorcycles by category, excluding the current one
  const related = motorcycles
    .filter((m) => m.category === category && m.id !== currentMotorcycleId)
    .slice(0, 3); // Take up to 3

  // If we don't have enough in the same category, grab some featured ones
  if (related.length < 3) {
    const featured = motorcycles
      .filter((m) => m.featured && m.id !== currentMotorcycleId && !related.find(r => r.id === m.id))
      .slice(0, 3 - related.length);
    related.push(...featured);
  }

  if (related.length === 0) return null;

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black text-center uppercase text-gray-900 mb-12">También te puede interesar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {related.map((moto) => (
            <MotorcycleCard key={moto.id} motorcycle={moto} />
          ))}
        </div>
      </div>
    </section>
  );
}
