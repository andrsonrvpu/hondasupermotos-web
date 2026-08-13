import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { FeaturedMotorcycles } from "@/components/sections/FeaturedMotorcycles";
import { PromoBanner } from "@/components/sections/PromoBanner";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { RegionalCoverage } from "@/components/sections/RegionalCoverage";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <Header />
      <Hero />
      <FeaturedMotorcycles />
      <PromoBanner />
      <Services />
      <Testimonials />
      <RegionalCoverage />
      <Footer />
    </main>
  );
}
