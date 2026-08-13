import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: import("next").Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Comprar Honda Motos | Concesionario Oficial",
  description: "Encuentra tu próxima motocicleta con nosotros. Servicio técnico especializado, repuestos originales, y la mejor asesoría en Manizales, Quindío y Risaralda.",
  keywords: [
    "Motos", "Honda", "Comprar motos Honda", "Manizales", "Caldas", 
    "Quindío", "Risaralda", "Concesionario Honda", "Supermotos", "Servicio Técnico"
  ],
  openGraph: {
    title: "Comprar Honda Motos | Concesionario Oficial",
    description: "Encuentra tu próxima motocicleta con nosotros. Servicio técnico especializado y repuestos.",
    url: "https://www.comprarhondamotos.com",
    siteName: "Comprar Honda Motos",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <WhatsAppButton size="floating" />
      </body>
    </html>
  );
}
