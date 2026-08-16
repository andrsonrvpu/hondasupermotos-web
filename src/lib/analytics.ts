// Tipos globales para GTM y gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Configuración centralizada leyendo desde variables de entorno
export const analyticsConfig = {
  ga4Id: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "",
  gtmId: process.env.NEXT_PUBLIC_GTM_CONTAINER_ID || "",
  gadsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "",
  labels: {
    phone: process.env.NEXT_PUBLIC_GADS_CONV_LABEL_PHONE || "",
    whatsapp: process.env.NEXT_PUBLIC_GADS_CONV_LABEL_WHATSAPP || "",
    form: process.env.NEXT_PUBLIC_GADS_CONV_LABEL_FORM || "",
    quote: process.env.NEXT_PUBLIC_GADS_CONV_LABEL_QUOTE || "",
  }
};

/**
 * Función base para empujar eventos al dataLayer (GTM)
 * y hacer ping a gtag si está disponible (GA4 / Google Ads)
 */
export const trackEvent = (eventName: string, eventParams: Record<string, any> = {}) => {
  if (typeof window === "undefined") return;

  // 1. GTM: Enviar al dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...eventParams
  });

  // 2. GTAG: Enviar evento directamente a gtag si está inicializado
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
  }
};

/**
 * Dispara un evento de conversión a Google Ads si las IDs están configuradas.
 * Adicionalmente trackea el evento general para GA4.
 */
const trackGoogleAdsConversion = (eventName: string, label: string, extraParams: Record<string, any> = {}) => {
  // Siempre trackeamos el evento general
  trackEvent(eventName, extraParams);

  // Si existe Google Ads ID y la etiqueta de conversión específica, disparamos conversion de Ads
  if (analyticsConfig.gadsId && label && typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag('event', 'conversion', {
      'send_to': `${analyticsConfig.gadsId}/${label}`,
      ...extraParams
    });
  }
};

// ==========================================
// Eventos Principales (Conversiones)
// ==========================================

export const trackPhoneClick = () => {
  trackGoogleAdsConversion('click_phone', analyticsConfig.labels.phone);
};

export const trackWhatsappClick = (context: string = "general") => {
  trackGoogleAdsConversion('click_whatsapp', analyticsConfig.labels.whatsapp, { context });
};

export const trackContactFormSubmit = () => {
  trackGoogleAdsConversion('contact_form_submit', analyticsConfig.labels.form);
};

export const trackQuoteRequest = (motorcycleName: string, financialOption: string) => {
  trackGoogleAdsConversion('quote_request', analyticsConfig.labels.quote, {
    motorcycle: motorcycleName,
    financial_option: financialOption
  });
};

// ==========================================
// Eventos Secundarios (GA4 / Comportamiento)
// ==========================================

export const trackViewModelsClick = () => {
  trackEvent('click_view_models');
};

export const trackMotorcycleClick = (motorcycleName: string) => {
  trackEvent('click_motorcycle', { motorcycle: motorcycleName });
};

export const trackRequestInformationClick = () => {
  trackEvent('click_request_information');
};

// ==========================================
// Consent Mode
// ==========================================

export const updateConsentMode = (granted: boolean) => {
  if (typeof window === "undefined") return;
  
  const status = granted ? 'granted' : 'denied';
  
  // Actualizar gtag consent
  if (typeof window.gtag === "function") {
    window.gtag('consent', 'update', {
      'analytics_storage': status,
      'ad_storage': status,
      'ad_user_data': status,
      'ad_personalization': status
    });
  }

  // Push para GTM
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'consent_update',
    consent_status: status
  });
};
