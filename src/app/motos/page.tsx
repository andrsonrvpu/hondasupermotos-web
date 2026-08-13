import { Metadata } from "next";
import { MotosCatalog } from "@/components/catalog/MotosCatalog";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Catálogo de Motocicletas Honda | Concesionario Oficial",
  description: "Explora nuestro catálogo completo de motocicletas Honda. Encuentra motos deportivas, scooter, enduro, todo terreno y más con los mejores precios.",
};

export default function MotosPage() {
  return (
    <div className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <MotosCatalog />
      </main>
      <Footer />
    </div>
  );
}
