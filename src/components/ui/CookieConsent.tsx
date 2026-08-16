"use client";

import { useState, useEffect } from "react";
import { updateConsentMode } from "@/lib/analytics";
import Link from "next/link";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Por defecto, iniciamos con denegado para cumplir GDPR/Google Consent Mode v2
      updateConsentMode(false);
      setShowBanner(true);
    } else {
      updateConsentMode(consent === "granted");
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "granted");
    updateConsentMode(true);
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "denied");
    updateConsentMode(false);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-2xl border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-300">
          <p>
            Utilizamos cookies propias y de terceros para fines analíticos, de personalización y para mostrarte publicidad personalizada en base a un perfil elaborado a partir de tus hábitos de navegación. 
            Puedes aceptar todas las cookies pulsando el botón "Aceptar", o leer más en nuestra{" "}
            <Link href="/politica-cookies" className="text-[var(--honda-red)] hover:underline font-bold">
              Política de Cookies
            </Link>.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button 
            onClick={handleDecline}
            className="px-6 py-2 text-sm font-bold text-gray-400 hover:text-white transition-colors"
          >
            Rechazar
          </button>
          <button 
            onClick={handleAccept}
            className="px-6 py-2 text-sm font-bold bg-[var(--honda-red)] text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
