"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { trackContactFormSubmit } from "@/lib/analytics";

interface ContactFormProps {
  whatsappPhone: string;
}

export function ContactForm({ whatsappPhone }: ContactFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const moto = formData.get('motocicleta') as string;
    const message = formData.get('message') as string;

    const text = `*Nuevo contacto desde la web* 🏍️\n\n*Nombre:* ${name}\n*Teléfono:* ${phone}\n*Correo:* ${email}\n*Moto de Interés:* ${moto || 'No especificada'}\n*Mensaje:* ${message}`;

    // Disparamos la conversión
    trackContactFormSubmit();

    // Redirigir a WhatsApp
    window.open(`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(text)}`, '_blank');

    // Limpiar formulario
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
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
        className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-600 text-white font-bold uppercase py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        <Send className="w-5 h-5" />
        Enviar por WhatsApp
      </button>
    </form>
  );
}
