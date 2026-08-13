export type MotorcycleCategory = 
  | "SPORT"
  | "SUPER SPORT"
  | "SCOOTER Y SEMIAUTOMATICA"
  | "ENDURO Y MOTOCROSS"
  | "TODO TERRENO"
  | "SCRAMBLER"
  | "NAVI";

export type Motorcycle = {
  id: string;
  slug: string;
  name: string;
  category: MotorcycleCategory;
  price: number | null;
  priceLabel: string;
  image: string;
  gallery?: string[];
  colors?: { name: string; hex: string; image?: string }[];
  highlights?: string[];
  specifications?: {
    engine?: string;
    power?: string;
    weight?: string;
    topSpeed?: string;
    [key: string]: string | undefined;
  };
  featured: boolean;
  whatsappMessage: string;
  description?: string;
  available?: boolean;
};

export const motorcycles: Motorcycle[] = [
  // SPORT
  {
    id: "cb650r",
    slug: "cb650r",
    name: "CB650R",
    category: "SPORT",
    price: 54990000,
    priceLabel: "Desde $54.990.000 COP",
    image: "/assets/bikes/SPORT/CB650R/imgi_52_imgi_50_CB-650R-NEGRA.png",
    gallery: [
      "/assets/bikes/SPORT/CB650R/imgi_52_imgi_50_CB-650R-NEGRA.png"
    ],


    colors: [
      { name: "Negro", hex: "#1F2937", image: "/assets/bikes/SPORT/CB650R/imgi_52_imgi_50_CB-650R-NEGRA.png" },
      { name: "Rojo", hex: "#DC2626", image: "/assets/bikes/SPORT/CB650R/imgi_50_imgi_51_CB-650R-ROJA.png" },
      { name: "Gris", hex: "#6B7280", image: "/assets/bikes/SPORT/CB650R/imgi_51_imgi_49_CB-650R-GRIS.png" },
      { name: "Azul", hex: "#2563EB", image: "/assets/bikes/SPORT/CB650R/imgi_31_imgi_30_CB-650R-AZUL.png" },
    ],
    highlights: [
      "Frenos ABS",
      "4 Cilindros",
      "Full LED",
      "Control de Tracción"
    ],
    specifications: {
      engine: "649cc, 4 cilindros en línea, DOHC",
      power: "94 HP @ 12,000 rpm",
      weight: "202 kg",
      topSpeed: "210 km/h"
    },
    featured: true,
    description: "Naked premium con motor de 4 cilindros en línea. Estilo neo-retro con tecnología moderna.",
    whatsappMessage: "Hola, estoy interesado en la Honda CB650R. Quisiera conocer disponibilidad, precio y opciones de compra.",
    available: true
  },
  {
    id: "cb125f",
    slug: "cb125f",
    name: "CB125F",
    category: "SPORT",
    price: 7500000,
    priceLabel: "Desde $7.500.000 COP",
    image: "/assets/bikes/SPORT/CB125F/imgi_17_honda-cb125f-20-std-rojo1.png",

    colors: [
      { name: "Rojo", hex: "#DC2626", image: "/assets/bikes/SPORT/CB125F/imgi_17_honda-cb125f-20-std-rojo1.png" },
      { name: "Negro", hex: "#1F2937", image: "/assets/bikes/SPORT/CB125F/imgi_51_honda-cb125f-20-std-negro1.png" },
    ],
    featured: false,
    specifications: {
      engine: "124cc, OHC, monocilíndrico",
      power: "8.4 HP @ 7,500 rpm",
      weight: "117 kg",
      topSpeed: "105 km/h"
    },
    highlights: [
      "Motor OHC",
      "Diseño Deportivo",
      "Rines de Aleación"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda CB125F. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },
  {
    id: "cb100",
    slug: "cb100",
    name: "CB100",
    category: "SPORT",
    price: 5700000,
    priceLabel: "Desde $5.700.000 COP",
    image: "/assets/bikes/SPORT/CB100/imgi_15_honda-cb-100-negra.png",

    colors: [
      { name: "Negro", hex: "#1F2937", image: "/assets/bikes/SPORT/CB100/imgi_15_honda-cb-100-negra.png" },
      { name: "Rojo", hex: "#DC2626", image: "/assets/bikes/SPORT/CB100/imgi_50_honda-cb-100-rojo.png" },
      { name: "Azul", hex: "#2563EB", image: "/assets/bikes/SPORT/CB100/imgi_51_honda-cb-100-azul.png" },
    ],
    featured: false,
    specifications: {
      engine: "99cc, OHC, monocilíndrico",
      power: "7 HP @ 7,500 rpm",
      weight: "105 kg",
      topSpeed: "90 km/h"
    },
    highlights: [
      "Económica",
      "Confiable",
      "Freno de Tambor"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda CB100. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },
  {
    id: "cb1000r",
    slug: "cb1000r",
    name: "CB1000R",
    category: "SPORT",
    price: 69990000,
    priceLabel: "Desde $69.990.000 COP",
    image: "/assets/bikes/SPORT/CB1000R/imgi_35_Hornet-modulo-color.png",
    featured: false,
    specifications: {
      engine: "998cc, 4 cilindros en línea, DOHC",
      power: "143 HP @ 10,500 rpm",
      weight: "212 kg",
      topSpeed: "230+ km/h"
    },
    highlights: [
      "Frenos ABS",
      "Acelerador Electrónico",
      "Quick Shifter",
      "Riding Modes"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda CB1000R. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },
  {
    id: "cb125f-dlx",
    slug: "cb125f-dlx",
    name: "CB125F DLX",
    category: "SPORT",
    price: 7150000,
    priceLabel: "Desde $7.150.000 COP",
    image: "/assets/bikes/SPORT/CB125FDLX/imgi_21_honda-cb125f-20-dlx-rojo.png",

    colors: [
      { name: "Rojo", hex: "#DC2626", image: "/assets/bikes/SPORT/CB125FDLX/imgi_21_honda-cb125f-20-dlx-rojo.png" },
      { name: "Gris", hex: "#6B7280", image: "/assets/bikes/SPORT/CB125FDLX/imgi_50_honda-cb125f-20-dlx-gris2.png" },
    ],
    featured: false,
    specifications: {
      engine: "124cc, OHC, monocilíndrico",
      power: "8.4 HP @ 7,500 rpm",
      weight: "117 kg",
      topSpeed: "105 km/h"
    },
    highlights: [
      "Freno de Disco",
      "Arranque Eléctrico",
      "Rines de Aleación"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda CB125F DLX. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },
  {
    id: "cb125f-max",
    slug: "cb125f-max",
    name: "CB125F MAX",
    category: "SPORT",
    price: 7130000,
    priceLabel: "Desde $7.130.000 COP",
    image: "/assets/bikes/SPORT/CB125FMAX/imgi_50_cb125f-max-rojo.png",

    colors: [
      { name: "Rojo", hex: "#DC2626", image: "/assets/bikes/SPORT/CB125FMAX/imgi_50_cb125f-max-rojo.png" },
      { name: "Negro", hex: "#1F2937", image: "/assets/bikes/SPORT/CB125FMAX/imgi_19_honda-cb125f-max.png" },
    ],
    featured: false,
    specifications: {
      engine: "124.7cc, OHC, monocilíndrico",
      power: "8.5 HP @ 7,000 rpm",
      weight: "117 kg",
      topSpeed: "105 km/h"
    },
    highlights: [
      "Inyección Electrónica",
      "Freno de Disco",
      "Rines de Aleación"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda CB125F MAX. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },
  {
    id: "cb190r-2-0",
    slug: "cb190r",
    name: "CB190R 2.0",
    category: "SPORT",
    price: 12600000,
    priceLabel: "Desde $12.600.000 COP",
    image: "/assets/bikes/SPORT/CB190R2.0/imgi_25_honda-cb190r-gris.png",
    colors: [
      { name: "Gris", hex: "#6B7280", image: "/assets/bikes/SPORT/CB190R2.0/imgi_25_honda-cb190r-gris.png" },
      { name: "Rojo", hex: "#DC2626", image: "/assets/bikes/SPORT/CB190R2.0/imgi_51_honda-cb190r-rojo.png" },
    ],
    featured: true,
    specifications: {
      engine: "184.4cc 4 tiempos, monocilíndrico",
      power: "16.4 HP @ 8,500 rpm",
      weight: "141 kg",
      topSpeed: "130 km/h"
    },
    highlights: [
      "Frenos ABS Doble Canal",
      "Inyección Electrónica PGM-FI",
      "Tablero Digital TFT",
      "Iluminación LED"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda CB190R 2.0. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },
  {
    id: "cb300f",
    slug: "cb300f",
    name: "CB300F",
    category: "SPORT",
    price: 17800000,
    priceLabel: "Desde $17.800.000 COP",
    image: "/assets/bikes/SPORT/CB300F/imgi_29_Nueva-CB-300F-rojo.png",

    colors: [
      { name: "Rojo", hex: "#DC2626", image: "/assets/bikes/SPORT/CB300F/imgi_29_Nueva-CB-300F-rojo.png" },
      { name: "Azul", hex: "#2563EB", image: "/assets/bikes/SPORT/CB300F/imgi_49_Nueva-CB-300F-azul-mate.png" },
      { name: "Gris", hex: "#6B7280", image: "/assets/bikes/SPORT/CB300F/imgi_50_gris-mate-CB300F.png" },
    ],
    featured: false,
    specifications: {
      engine: "293.5cc, OHC, monocilíndrico",
      power: "24 HP @ 7,500 rpm",
      weight: "153 kg",
      topSpeed: "145 km/h"
    },
    highlights: [
      "Frenos ABS Doble Canal",
      "Inyección Electrónica",
      "Iluminación LED",
      "Embrague Antirrebote"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda CB300F. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },
  {
    id: "nx190",
    slug: "nx190",
    name: "NX190",
    category: "SPORT",
    price: 14500000,
    priceLabel: "Desde $14.500.000 COP",
    image: "/assets/bikes/SPORT/NX190/imgi_27_nx-190-negro.png",

    colors: [
      { name: "Negro", hex: "#1F2937", image: "/assets/bikes/SPORT/NX190/imgi_27_nx-190-negro.png" },
      { name: "Rojo", hex: "#DC2626", image: "/assets/bikes/SPORT/NX190/imgi_50_nx-190-rojo.png" },
    ],
    featured: true,
    specifications: {
      engine: "184.4cc, OHC, monocilíndrico",
      power: "16.1 HP @ 8,500 rpm",
      weight: "146 kg",
      topSpeed: "125 km/h"
    },
    highlights: [
      "Inyección Electrónica",
      "Frenos ABS",
      "Suspensión de largo recorrido"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda NX190. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },
  {
    id: "xblade160",
    slug: "xblade160",
    name: "XBLADE 160",
    category: "SPORT",
    price: 10100000,
    priceLabel: "Desde $10.100.000 COP",
    image: "/assets/bikes/SPORT/XBLADE160/imgi_23_xblade-rojo.png",

    colors: [
      { name: "Rojo", hex: "#DC2626", image: "/assets/bikes/SPORT/XBLADE160/imgi_23_xblade-rojo.png" },
      { name: "Gris", hex: "#6B7280", image: "/assets/bikes/SPORT/XBLADE160/imgi_50_xblade-gris-454eb.png" },
      { name: "Naranja", hex: "#F97316", image: "/assets/bikes/SPORT/XBLADE160/imgi_51_xblade-naranja.png" },
    ],
    featured: false,
    specifications: {
      engine: "162.7cc, OHC, monocilíndrico",
      power: "13.7 HP @ 8,000 rpm",
      weight: "142 kg",
      topSpeed: "115 km/h"
    },
    highlights: [
      "Freno ABS Trasero",
      "Tablero Digital",
      "Faro LED"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda XBLADE 160. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },

  // SUPER SPORT
  {
    id: "cbr650r",
    slug: "cbr650r",
    name: "CBR650R",
    category: "SUPER SPORT",
    price: 54990000,
    priceLabel: "Desde $54.990.000 COP",
    image: "/assets/bikes/SUPER SPORT/CBR 650R/imgi_51_CBR-650R-2024-nueva.png",
    featured: false,
    specifications: {
      engine: "649cc, 4 cilindros en línea",
      power: "94 HP @ 12,000 rpm",
      weight: "207 kg",
      topSpeed: "220 km/h"
    },
    highlights: [
      "Frenos ABS",
      "Control de Tracción HSTC",
      "Full LED",
      "Embrague Antirrebote"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda CBR650R. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },
  {
    id: "cbr1000rrr",
    slug: "cbr1000rrr",
    name: "CBR1000RR-R Fireblade",
    category: "SUPER SPORT",
    price: 159990000,
    priceLabel: "Desde $159.990.000 COP",
    image: "/assets/bikes/SUPER SPORT/CBR1000RRR/imgi_52_CBR-1000-RRR-honda.png",
    featured: false,
    specifications: {
      engine: "999cc, 4 cilindros en línea, DOHC",
      power: "214 HP @ 14,500 rpm",
      weight: "201 kg",
      topSpeed: "299 km/h"
    },
    highlights: [
      "Frenos ABS",
      "Aerodinámica HRC",
      "Electrónica Avanzada",
      "Suspensión Showa"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda CBR1000RR-R Fireblade. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },

  // SCOOTER Y SEMIAUTOMATICA
  {
    id: "dio-led-dlx",
    slug: "dio-led-dlx",
    name: "Dio LED DLX",
    category: "SCOOTER Y SEMIAUTOMATICA",
    price: 7650000,
    priceLabel: "Desde $7.650.000 COP",
    image: "/assets/bikes/SCOOTER Y SEMIAUTOMATICA/Dio LED DLX/imgi_50_nueva-dio-dlx-gris.png",
    featured: true,
    specifications: {
      engine: "109.2cc, OHC, monocilíndrico",
      power: "7.7 HP @ 8,000 rpm",
      weight: "105 kg",
      topSpeed: "85 km/h"
    },
    highlights: [
      "Frenos CBS",
      "Iluminación LED",
      "Tablero Digital"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda Dio LED DLX. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },
  {
    id: "dio-led-std",
    slug: "dio-led-std",
    name: "Dio LED STD",
    category: "SCOOTER Y SEMIAUTOMATICA",
    price: 7500000,
    priceLabel: "Desde $7.500.000 COP",
    image: "/assets/bikes/SCOOTER Y SEMIAUTOMATICA/Dio LED STD/imgi_50_nueva-dio-std-azul.png",

    colors: [
      { name: "Azul", hex: "#2563EB", image: "/assets/bikes/SCOOTER Y SEMIAUTOMATICA/Dio LED STD/imgi_50_nueva-dio-std-azul.png" },
      { name: "Rojo", hex: "#DC2626", image: "/assets/bikes/SCOOTER Y SEMIAUTOMATICA/Dio LED STD/imgi_51_nueva-dio-std-rojo.png" },
    ],
    featured: false,
    specifications: {
      engine: "109.2cc, OHC, monocilíndrico",
      power: "7.7 HP @ 8,000 rpm",
      weight: "105 kg",
      topSpeed: "85 km/h"
    },
    highlights: [
      "Frenos CBS",
      "Arranque Eléctrico",
      "Faro Halógeno"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda Dio LED STD. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },
  {
    id: "wave110s",
    slug: "wave110s",
    name: "Wave 110S",
    category: "SCOOTER Y SEMIAUTOMATICA",
    price: 7550000,
    priceLabel: "Desde $7.550.000 COP",
    image: "/assets/bikes/SCOOTER Y SEMIAUTOMATICA/Wave 110S/imgi_51_nueva-honda-wave-110-gris.png",

    colors: [
      { name: "Gris", hex: "#6B7280", image: "/assets/bikes/SCOOTER Y SEMIAUTOMATICA/Wave 110S/imgi_51_nueva-honda-wave-110-gris.png" },
      { name: "Blanco", hex: "#FFFFFF", image: "/assets/bikes/SCOOTER Y SEMIAUTOMATICA/Wave 110S/imgi_52_nueva-honda-wave-110-blanca.png" },
      { name: "Rojo", hex: "#DC2626", image: "/assets/bikes/SCOOTER Y SEMIAUTOMATICA/Wave 110S/imgi_53_nueva-honda-wave-110-roja.png" },
      { name: "Negro", hex: "#1F2937", image: "/assets/bikes/SCOOTER Y SEMIAUTOMATICA/Wave 110S/imgi_54_nueva-honda-wave-110-negra3.png" },
    ],
    featured: false,
    specifications: {
      engine: "109.1cc, OHC, monocilíndrico",
      power: "8 HP @ 7,500 rpm",
      weight: "101 kg",
      topSpeed: "90 km/h"
    },
    highlights: [
      "Freno de Disco",
      "Arranque Eléctrico",
      "Transmisión Semiautomática"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda Wave 110S. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },

  // ENDURO Y MOTOCROSS
  {
    id: "crf250f",
    slug: "crf250f",
    name: "CRF250F",
    category: "ENDURO Y MOTOCROSS",
    price: 22990000,
    priceLabel: "Desde $22.990.000 COP",
    image: "/assets/bikes/ENDURO Y MOTOCROSS/CRF250F/imgi_66_honda-crf-250r.png",
    featured: false,
    specifications: {
      engine: "250cc, SOHC, monocilíndrico",
      power: "22.8 HP @ 7,500 rpm",
      weight: "114 kg",
      topSpeed: "115 km/h"
    },
    highlights: [
      "Motor Inyectado",
      "Arranque Eléctrico",
      "Chasis Liviano"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda CRF250F. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },
  {
    id: "crf110f",
    slug: "crf110f",
    name: "CRF110F",
    category: "ENDURO Y MOTOCROSS",
    price: 15990000,
    priceLabel: "Desde $15.990.000 COP",
    image: "/assets/bikes/ENDURO Y MOTOCROSS/CRF110F/imgi_51_honda-crf-110.png",
    featured: false,
    specifications: {
      engine: "109cc, SOHC, monocilíndrico",
      power: "7.2 HP @ 7,500 rpm",
      weight: "77 kg",
      topSpeed: "75 km/h"
    },
    highlights: [
      "Inyección Electrónica",
      "Embrague Automático",
      "Arranque Eléctrico"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda CRF110F. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },
  {
    id: "crf250r",
    slug: "crf250r",
    name: "CRF250R",
    category: "ENDURO Y MOTOCROSS",
    price: 43990000,
    priceLabel: "Desde $43.990.000 COP",
    image: "/assets/bikes/ENDURO Y MOTOCROSS/CRF250R/imgi_68_CRF250RX.png",
    featured: false,
    specifications: {
      engine: "249cc, DOHC, monocilíndrico",
      power: "43 HP @ 12,000 rpm",
      weight: "104 kg",
      topSpeed: "125 km/h"
    },
    highlights: [
      "Launch Control",
      "Mapas de Motor",
      "Suspensión Showa"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda CRF250R. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },
  {
    id: "crf250rx",
    slug: "crf250rx",
    name: "CRF250RX",
    category: "ENDURO Y MOTOCROSS",
    price: 44990000,
    priceLabel: "Desde $44.990.000 COP",
    image: "/assets/bikes/ENDURO Y MOTOCROSS/CRF250RX/imgi_51_CRF250RX.png",
    featured: false,
    specifications: {
      engine: "249cc, DOHC, monocilíndrico",
      power: "43 HP @ 12,000 rpm",
      weight: "108 kg",
      topSpeed: "125 km/h"
    },
    highlights: [
      "Tanque de 8 litros",
      "Suspensión Enduro",
      "Mapas de Motor"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda CRF250RX. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },
  {
    id: "crf450r",
    slug: "crf450r",
    name: "CRF450R",
    category: "ENDURO Y MOTOCROSS",
    price: null,
    priceLabel: "Consultar precio",
    image: "/assets/bikes/ENDURO Y MOTOCROSS/CRF450R/imgi_72_CRF-450-RX.png",
    featured: false,
    specifications: {
      engine: "449cc, Unicam, monocilíndrico",
      power: "55 HP @ 9,000 rpm",
      weight: "111 kg",
      topSpeed: "135 km/h"
    },
    highlights: [
      "Launch Control",
      "HSTC",
      "Arranque Eléctrico"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda CRF450R. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },
  {
    id: "crf450rx",
    slug: "crf450rx",
    name: "CRF450RX",
    category: "ENDURO Y MOTOCROSS",
    price: 46990000,
    priceLabel: "Desde $46.990.000 COP",
    image: "/assets/bikes/ENDURO Y MOTOCROSS/CRF450RX/imgi_51_CRF-450-RX.png",
    featured: false,
    specifications: {
      engine: "449cc, Unicam, monocilíndrico",
      power: "55 HP @ 9,000 rpm",
      weight: "114 kg",
      topSpeed: "140 km/h"
    },
    highlights: [
      "Suspensión Enduro",
      "Rueda Trasera 18 Pulgadas",
      "HSTC"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda CRF450RX. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },

  // TODO TERRENO
  {
    id: "xr150l",
    slug: "xr150l",
    name: "XR150L",
    category: "TODO TERRENO",
    price: 10850000,
    priceLabel: "Desde $10.850.000 COP",
    image: "/assets/bikes/TODO TERRENO/XR150L/imgi_52_XR150L-20-blanco-version.png",

    colors: [
      { name: "Blanco", hex: "#FFFFFF", image: "/assets/bikes/TODO TERRENO/XR150L/imgi_52_XR150L-20-blanco-version.png" },
      { name: "Negro", hex: "#1F2937", image: "/assets/bikes/TODO TERRENO/XR150L/imgi_53_XR150L-20-negro.png" },
      { name: "Rojo", hex: "#DC2626", image: "/assets/bikes/TODO TERRENO/XR150L/imgi_54_XR150L-20-rojo.png" },
    ],
    featured: false,
    specifications: {
      engine: "149cc, OHC, monocilíndrico",
      power: "12.1 HP @ 7,750 rpm",
      weight: "129 kg",
      topSpeed: "110 km/h"
    },
    highlights: [
      "Arranque Eléctrico",
      "Freno de Disco Delantero",
      "Suspensión Trasera Pro-Link"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda XR150L. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },
  {
    id: "xr190l",
    slug: "xr190l",
    name: "XR190L ABS",
    category: "TODO TERRENO",
    price: 13800000,
    priceLabel: "Desde $13.800.000 COP",
    image: "/assets/bikes/TODO TERRENO/XR190L/imgi_52_nueva-xr190l-abs-20-blanca.png",

    colors: [
      { name: "Blanco", hex: "#FFFFFF", image: "/assets/bikes/TODO TERRENO/XR190L/imgi_52_nueva-xr190l-abs-20-blanca.png" },
      { name: "Beige", hex: "#DC2626", image: "/assets/bikes/TODO TERRENO/XR190L/imgi_53_xr-190l-abs-beige.png" },
      { name: "Rojo", hex: "#DC2626", image: "/assets/bikes/TODO TERRENO/XR190L/imgi_54_xr-190l-abs-rojo.png" },
    ],
    featured: false,
    specifications: {
      engine: "184cc, OHC, monocilíndrico",
      power: "15.6 HP @ 8,500 rpm",
      weight: "133 kg",
      topSpeed: "120 km/h"
    },
    highlights: [
      "Inyección Electrónica PGM-FI",
      "Frenos ABS",
      "Tablero Digital"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda XR190L ABS. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },
  {
    id: "xre300-sahara-dlx",
    slug: "xre300-sahara-dlx",
    name: "XRE 300 Sahara DLX",
    category: "TODO TERRENO",
    price: 33890000,
    priceLabel: "Desde $33.890.000 COP",
    image: "/assets/bikes/TODO TERRENO/XRE 300 SAHARA DLX/imgi_52_xre-300-sahara-rally-245bb.png",
    featured: false,
    specifications: {
      engine: "291.6cc, DOHC, monocilíndrico",
      power: "25.4 HP @ 7,500 rpm",
      weight: "146 kg",
      topSpeed: "140 km/h"
    },
    highlights: [
      "Inyección Electrónica",
      "Frenos ABS Doble Canal",
      "Iluminación Full LED",
      "Embrague Antirrebote"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda XRE 300 Sahara DLX. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },
  {
    id: "xre300-sahara-std",
    slug: "xre300-sahara-std",
    name: "XRE 300 Sahara STD",
    category: "TODO TERRENO",
    price: 33500000,
    priceLabel: "Desde $33.500.000 COP",
    image: "/assets/bikes/TODO TERRENO/XRE 300 SAHARA STD/imgi_52_xre-300-sahara-std.png",
    featured: true,
    specifications: {
      engine: "291.6cc, DOHC, monocilíndrico",
      power: "25.4 HP @ 7,500 rpm",
      weight: "146 kg",
      topSpeed: "140 km/h"
    },
    highlights: [
      "Inyección Electrónica",
      "Frenos ABS Doble Canal",
      "Iluminación Full LED"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda XRE 300 Sahara STD. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },
  {
    id: "xr300l-2026",
    slug: "xr300l-2026",
    name: "XR 300L Tornado 2027",
    category: "TODO TERRENO",
    price: 30490000,
    priceLabel: "Desde $30.490.000 COP",
    image: "/assets/bikes/TODO TERRENO/XR 300L 2026/imgi_52_imgi_1_xr-300l-tornado-gris.png",

    colors: [
      { name: "Gris", hex: "#6B7280", image: "/assets/bikes/TODO TERRENO/XR 300L 2026/imgi_52_imgi_1_xr-300l-tornado-gris.png" },
      { name: "Blanco", hex: "#FFFFFF", image: "/assets/bikes/TODO TERRENO/XR 300L 2026/imgi_53_imgi_1_xr-300l-tornado-blanco.png" },
      { name: "Rojo", hex: "#DC2626", image: "/assets/bikes/TODO TERRENO/XR 300L 2026/imgi_91_xr-300l-tornado-roja.png" },
    ],
    featured: false,
    specifications: {
      engine: "291.6cc, DOHC, monocilíndrico",
      power: "25.4 HP @ 7,500 rpm",
      weight: "144 kg",
      topSpeed: "135 km/h"
    },
    highlights: [
      "Inyección Electrónica",
      "Suspensión de largo recorrido",
      "Caja de 6 velocidades"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda XR 300L Tornado 2027. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },

  // SCRAMBLER
  {
    id: "cb350-scrambler",
    slug: "cb350-scrambler",
    name: "CB350 Scrambler",
    category: "SCRAMBLER",
    price: null,
    priceLabel: "Consultar precio",
    image: "/assets/bikes/SCRAMBLER/imgi_51_honda-cb350d-rojo.png",
    featured: true,
    specifications: {
      engine: "348.3cc, monocilíndrico",
      power: "20.7 HP @ 5,500 rpm",
      weight: "181 kg",
      topSpeed: "130 km/h"
    },
    highlights: [
      "Frenos ABS Doble Canal",
      "Iluminación Full LED",
      "Embrague Antirrebote"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda CB350 Scrambler. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },

  // NAVI
  {
    id: "navi",
    slug: "navi",
    name: "NAVI",
    category: "NAVI",
    price: 6990000,
    priceLabel: "Desde $6.990.000 COP",
    image: "/assets/bikes/NAVI/NAVI/imgi_51_navi-rojo-n.png",

    colors: [
      { name: "Red-n", hex: "#DC2626", image: "/assets/bikes/NAVI/NAVI/imgi_51_navi-rojo-n.png" },
      { name: "Red-ne", hex: "#DC2626", image: "/assets/bikes/NAVI/NAVI/imgi_52_navi-rojo-ne.png" },
      { name: "Red-b", hex: "#DC2626", image: "/assets/bikes/NAVI/NAVI/imgi_53_navi-rojo-b.png" },
    ],
    featured: true,
    specifications: {
      engine: "109.19cc, HET, monocilíndrico",
      power: "7.92 HP @ 7,000 rpm",
      weight: "101 kg",
      topSpeed: "85 km/h"
    },
    highlights: [
      "Automática",
      "Espacio de Carga",
      "Diseño Crossover"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda NAVI. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },
  {
    id: "navi-adventure",
    slug: "navi-adventure",
    name: "NAVI Adventure",
    category: "NAVI",
    price: 7340000,
    priceLabel: "Desde $7.340.000 COP",
    image: "/assets/bikes/NAVI/NAVI ADVENTURE/imgi_50_Navi_Lateral_Derecha_Cafe2.png",
    featured: true,
    specifications: {
      engine: "109.19cc, HET, monocilíndrico",
      power: "7.92 HP @ 7,000 rpm",
      weight: "101 kg",
      topSpeed: "85 km/h"
    },
    highlights: [
      "Accesorios Adventure",
      "Automática",
      "Espacio de Carga"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda NAVI Adventure. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },
  {
    id: "navi-mix",
    slug: "navi-mix",
    name: "NAVI Mix",
    category: "NAVI",
    price: 7290000,
    priceLabel: "Desde $7.290.000 COP",
    image: "/assets/bikes/NAVI/NAVI MIX/imgi_50_navi-mix-negro.png",

    colors: [
      { name: "Negro", hex: "#1F2937", image: "/assets/bikes/NAVI/NAVI MIX/imgi_50_navi-mix-negro.png" },
      { name: "Blanco", hex: "#FFFFFF", image: "/assets/bikes/NAVI/NAVI MIX/imgi_51_Web_Lateral_De.png" },
    ],
    featured: true,
    specifications: {
      engine: "109.19cc, HET, monocilíndrico",
      power: "7.92 HP @ 7,000 rpm",
      weight: "101 kg",
      topSpeed: "85 km/h"
    },
    highlights: [
      "Colores Exclusivos",
      "Automática",
      "Espacio de Carga"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda NAVI Mix. Quisiera conocer disponibilidad, precio y opciones de compra.",
  },
  {
    id: "navi-rally",
    slug: "navi-rally",
    name: "NAVI Rally",
    category: "NAVI",
    price: 7340000,
    priceLabel: "Desde $7.340.000 COP",
    image: "/assets/bikes/NAVI/NAVI RALLY/imgi_50_honda-navi-rally.png",
    featured: true,
    specifications: {
      engine: "109.19cc, HET, monocilíndrico",
      power: "7.92 HP @ 7,000 rpm",
      weight: "101 kg",
      topSpeed: "85 km/h"
    },
    highlights: [
      "Gráficos Deportivos",
      "Automática",
      "Diseño Único"
    ],
    whatsappMessage: "Hola, estoy interesado en la Honda NAVI Rally. Quisiera conocer disponibilidad, precio y opciones de compra.",
  }
];

export const getFeaturedMotorcycles = () => {
  return motorcycles.filter(moto => moto.featured);
};

export const getMotorcyclesByCategory = (category: MotorcycleCategory) => {
  return motorcycles.filter(moto => moto.category === category);
};

export const categories: MotorcycleCategory[] = [
  "SPORT",
  "SUPER SPORT",
  "SCOOTER Y SEMIAUTOMATICA",
  "ENDURO Y MOTOCROSS",
  "TODO TERRENO",
  "SCRAMBLER",
  "NAVI"
];
