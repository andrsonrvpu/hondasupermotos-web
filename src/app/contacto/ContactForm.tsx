"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { trackContactFormSubmit } from "@/lib/analytics";

interface ContactFormProps {
  email: string;
}

export function ContactForm({ email }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
        
        // ------------------------------------------------------------------
        // IMPORTANTE: Disparamos la conversión SÓLO cuando el envío es exitoso
        // ------------------------------------------------------------------
        trackContactFormSubmit();
      } else {
        alert("Ocurrió un error al enviar el formulario. Intenta nuevamente.");
      }
    } catch (error) {
      alert("Ocurrió un error de conexión.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-green-800 mb-2">¡Mensaje Enviado!</h3>
        <p className="text-green-700">Gracias por escribirnos. Un asesor se pondrá en contacto contigo muy pronto.</p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-sm font-bold uppercase text-green-700 hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Ocultos para FormSubmit */}
      <input type="hidden" name="_subject" value="Nuevo contacto desde la página web" />
      <input type="hidden" name="_captcha" value="false" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-bold text-gray-700 uppercase">Nombre Completo</label>
          <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--honda-red)] focus:border-transparent outline-none transition-all" placeholder="Juan Pérez" />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-bold text-gray-700 uppercase">Teléfono / Celular</label>
          <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--honda-red)] focus:border-transparent outline-none transition-all" placeholder="300 123 4567" />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-bold text-gray-700 uppercase">Correo Electrónico</label>
        <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--honda-red)] focus:border-transparent outline-none transition-all" placeholder="juan@correo.com" />
      </div>

      <div className="space-y-2">
        <label htmlFor="motocicleta" className="block text-sm font-bold text-gray-700 uppercase">¿Moto de Interés? (Opcional)</label>
        <input type="text" id="motocicleta" name="motocicleta" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--honda-red)] focus:border-transparent outline-none transition-all" placeholder="Ej: CB 100, Navi..." />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-bold text-gray-700 uppercase">Mensaje</label>
        <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--honda-red)] focus:border-transparent outline-none transition-all resize-none" placeholder="Escribe tu consulta aquí..."></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-[var(--honda-red)] hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold uppercase py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        <Send className="w-5 h-5" />
        {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
      </button>
    </form>
  );
}
