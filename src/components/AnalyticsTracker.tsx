"use client";

import { useEffect } from "react";
import { 
  trackPhoneClick, 
  trackWhatsappClick, 
  trackViewModelsClick, 
  trackMotorcycleClick, 
  trackRequestInformationClick 
} from "@/lib/analytics";

export function AnalyticsTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest('[data-event]');
      if (!target) return;

      const eventType = target.getAttribute('data-event');
      
      switch (eventType) {
        case 'click_phone':
          trackPhoneClick();
          break;
        case 'click_whatsapp':
          const context = target.getAttribute('data-context') || "general";
          trackWhatsappClick(context);
          break;
        case 'click_view_models':
          trackViewModelsClick();
          break;
        case 'click_motorcycle':
          const motoName = target.getAttribute('data-motorcycle') || 'unknown';
          trackMotorcycleClick(motoName);
          break;
        case 'click_request_information':
          trackRequestInformationClick();
          break;
      }
    };

    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}
