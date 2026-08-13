export type Motorcycle = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  engine: string;
  transmission: string;
  image: string;
  featured: boolean;
  whatsappMessage: string;
};

export const featuredMotorcycles: Motorcycle[] = [
  {
    id: "1",
    slug: "modelo-sport-x",
    name: "MODELO SPORT X",
    category: "SPORT",
    price: 15400000,
    engine: "250cc",
    transmission: "Manual 6 vel.",
    image: "https://placehold.co/600x400/eeeeee/333333?text=Moto+Sport+X",
    featured: true,
    whatsappMessage: "Hola, estoy interesado en la MODELO SPORT X. Quisiera recibir información.",
  },
  {
    id: "2",
    slug: "modelo-touring-y",
    name: "MODELO TOURING Y",
    category: "TOURING",
    price: 22800000,
    engine: "500cc",
    transmission: "Manual 6 vel.",
    image: "https://placehold.co/600x400/eeeeee/333333?text=Moto+Touring+Y",
    featured: true,
    whatsappMessage: "Hola, estoy interesado en la MODELO TOURING Y. Quisiera recibir información.",
  },
  {
    id: "3",
    slug: "modelo-scooter-z",
    name: "MODELO SCOOTER Z",
    category: "SCOOTER",
    price: 8900000,
    engine: "150cc",
    transmission: "Automática",
    image: "https://placehold.co/600x400/eeeeee/333333?text=Moto+Scooter+Z",
    featured: true,
    whatsappMessage: "Hola, estoy interesado en la MODELO SCOOTER Z. Quisiera recibir información.",
  },
  {
    id: "4",
    slug: "modelo-adventure-w",
    name: "MODELO ADVENTURE W",
    category: "ADVENTURE",
    price: 18500000,
    engine: "300cc",
    transmission: "Manual 6 vel.",
    image: "https://placehold.co/600x400/eeeeee/333333?text=Moto+Adventure+W",
    featured: true,
    whatsappMessage: "Hola, estoy interesado en la MODELO ADVENTURE W. Quisiera recibir información.",
  },
];

export const services = [
  {
    id: "mantenimiento",
    title: "Mantenimiento Preventivo",
    description: "Mantén tu moto en óptimas condiciones con nuestro mantenimiento especializado.",
    benefits: ["Cambio de aceite y filtros", "Revisión general de 20 puntos", "Ajuste de frenos y cadena"],
    icon: "Wrench",
    ctaText: "Agendar cita",
    whatsappMessage: "Hola, me gustaría agendar una cita para el servicio de Mantenimiento Preventivo.",
  },
  {
    id: "reparaciones",
    title: "Reparaciones Especializadas",
    description: "Atención experta para devolverle la vida a tu motocicleta.",
    benefits: ["Motor y transmisión", "Sistema eléctrico completo", "Chasis y suspensión"],
    icon: "Cog",
    ctaText: "Cotizar reparación",
    whatsappMessage: "Hola, necesito cotizar una reparación especializada para mi motocicleta.",
  },
  {
    id: "repuestos",
    title: "Repuestos Originales",
    description: "Solo utilizamos repuestos originales para garantizar la vida de tu moto.",
    benefits: ["Garantía de fábrica", "Larga durabilidad", "Rendimiento óptimo"],
    icon: "PackageSearch",
    ctaText: "Consultar disponibilidad",
    whatsappMessage: "Hola, me gustaría consultar la disponibilidad de repuestos originales para mi moto.",
  },
  {
    id: "personalizacion",
    title: "Personalización",
    description: "Dale un toque único a tu moto con accesorios y detalles exclusivos.",
    benefits: ["Accesorios deportivos", "Pintura y diseño", "Iluminación LED"],
    icon: "PaintBucket",
    ctaText: "Ver catálogo",
    whatsappMessage: "Hola, me gustaría ver el catálogo de opciones para personalizar mi moto.",
  }
];

export const statistics = [
  { value: "20+", label: "Años de experiencia" },
  { value: "5000+", label: "Clientes satisfechos" },
  { value: "30+", label: "Modelos disponibles" },
  { value: "3", label: "Departamentos atendidos" },
];

export const testimonials = [
  {
    id: "1",
    name: "Carlos Ramírez",
    profile: "Bogotá D.C.",
    rating: 5,
    comment: "Excelente servicio y atención. Compré mi moto hace un mes y el acompañamiento ha sido genial. Muy recomendados en toda la ciudad.",
  },
  {
    id: "2",
    name: "Daniela Gómez",
    profile: "Cundinamarca",
    rating: 5,
    comment: "Encontré exactamente lo que buscaba. Me asesoraron muy bien sobre los planes de financiación y me entregaron la moto rápido.",
  },
  {
    id: "3",
    name: "Javier Rodríguez",
    profile: "Boyacá",
    rating: 5,
    comment: "El servicio técnico es de primera. Siempre traigo mi moto a revisión y queda como nueva. Excelentes mecánicos.",
  },
  {
    id: "4",
    name: "María Fernanda López",
    profile: "Meta",
    rating: 5,
    comment: "Me encantó la transparencia en el proceso de compra. Todo fue muy rápido y la moto es una maravilla. 10/10.",
  },
  {
    id: "5",
    name: "Andrés Felipe Vargas",
    profile: "Tolima",
    rating: 5,
    comment: "La atención al cliente es excepcional. Resolvieron todas mis dudas por WhatsApp y el proceso fue súper sencillo.",
  },
];
