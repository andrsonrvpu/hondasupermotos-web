import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import Script from "next/script";

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
    "Quindío", "Risaralda", "Concesionario Honda", "Comprar Motos", "Servicio Técnico"
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
        <CookieConsent />
        <AnalyticsTracker />

        {/* --- INICIO: ARQUITECTURA DE ANALÍTICA --- */}
        <Script id="gtag-base" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            // Consent Mode v2 por defecto
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'wait_for_update': 500
            });
            gtag('js', new Date());
            
            ${process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ? `gtag('config', '${process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID}');` : ''}
            ${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ? `gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}');` : ''}
          `}
        </Script>

        {/* Script asíncrono principal (Solo se inyecta si existen IDs) */}
        {(process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || process.env.NEXT_PUBLIC_GOOGLE_ADS_ID) && (
          <Script 
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}`} 
            strategy="afterInteractive" 
          />
        )}

        {/* Google Tag Manager (Solo se inyecta si existe ID) */}
        {process.env.NEXT_PUBLIC_GTM_CONTAINER_ID && (
          <Script id="gtm-base" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_CONTAINER_ID}');
            `}
          </Script>
        )}
        {/* --- FIN: ARQUITECTURA DE ANALÍTICA --- */}
      </body>
    </html>
  );
}
