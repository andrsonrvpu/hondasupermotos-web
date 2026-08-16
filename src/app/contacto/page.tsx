import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "./ContactForm"

export const metadata = {
  title: "Contacto | Honda Supermotos",
  description: "Ponte en contacto con Honda Supermotos. Solicita información sobre una motocicleta, agenda una cita o resuelve tus dudas.",
}

// Datos de ejemplo (el usuario podrá editarlos luego)
const contactData = {
  phone: "+57 317 305 7943",
  whatsappPhone: "573173057943",
  email: "info@hondasupermotos.com",
  address: "Manizales, Caldas",
  hours: "Lunes a Viernes: 8:00 AM - 6:00 PM\nSábados: 9:00 AM - 2:00 PM",
  facebookUrl: "https://facebook.com/hondasupermotos",
  instagramUrl: "https://instagram.com/hondasupermotos"
}

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--honda-red)] opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--honda-red)] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--honda-red)] rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6">
            Contáctanos
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-300 max-w-2xl mx-auto">
            ¿Listo para acelerar tu sueño? <br/>
            <span className="font-bold text-white">Solicita información sobre una motocicleta</span> y nuestros asesores te ayudarán.
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Llamadas */}
          <a href={`tel:${contactData.phone.replace(/\s+/g, '')}`} data-event="click_phone" className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[var(--honda-red)] transition-colors duration-300">
              <Phone className="w-8 h-8 text-[var(--honda-red)] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase">Llámanos</h3>
            <p className="text-gray-600 mb-4 text-sm">Hablemos directamente sobre tu próxima moto.</p>
            <p className="text-lg font-bold text-[var(--honda-red)]">{contactData.phone}</p>
          </a>

          {/* WhatsApp */}
          <a href={`https://wa.me/${contactData.whatsappPhone}?text=Hola,%20quisiera%20solicitar%20información%20sobre%20una%20motocicleta.`} data-event="click_whatsapp" data-context="contact_page" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#25D366] transition-colors duration-300">
              <MessageCircle className="w-8 h-8 text-[#25D366] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase">WhatsApp</h3>
            <p className="text-gray-600 mb-4 text-sm">Escríbenos rápido y sin complicaciones.</p>
            <p className="text-lg font-bold text-[#25D366]">Chat Directo</p>
          </a>

          {/* Email */}
          <a href={`mailto:${contactData.email}`} className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-900 transition-colors duration-300">
              <Mail className="w-8 h-8 text-gray-900 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase">Correo</h3>
            <p className="text-gray-600 mb-4 text-sm">Envíanos tus dudas o documentación.</p>
            <p className="text-sm font-bold text-gray-900">{contactData.email}</p>
          </a>
        </div>
      </section>

      {/* Main Content: Form and Info */}
      <section className="max-w-7xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Formulario */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="mb-8">
              <h2 className="text-3xl font-black uppercase text-gray-900 mb-2">Envíanos un Mensaje</h2>
              <div className="w-16 h-1 bg-[var(--honda-red)] mb-4"></div>
              <p className="text-gray-600 text-sm">Déjanos tus datos y un asesor se pondrá en contacto contigo en breve para brindarte toda la información que necesites.</p>
            </div>

            <ContactForm email={contactData.email} />
          </div>

          {/* Información de la Empresa */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-black uppercase text-gray-900 mb-6">Nuestra Información</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--honda-red)]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 uppercase">Ubicación y Cobertura</h4>
                    <p className="text-gray-600 mt-1">{contactData.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[var(--honda-red)]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 uppercase">Horario de Atención</h4>
                    <p className="text-gray-600 mt-1 whitespace-pre-line">{contactData.hours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="text-sm font-bold text-gray-900 uppercase mb-4">Síguenos en Redes</h4>
                <div className="flex gap-4">
                  <a href={contactData.facebookUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors duration-300 text-gray-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                  </a>
                  <a href={contactData.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-colors duration-300 text-gray-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Mapa Placeholder (Iframe genérico o banner) */}
            <div className="bg-gray-200 rounded-2xl shadow-lg overflow-hidden h-[300px] relative flex items-center justify-center border border-gray-100">
              {/* Aquí se puede reemplazar por un iframe de Google Maps real cuando el cliente pase la URL */}
              <div className="absolute inset-0 z-0">
                 <iframe 
                  src="https://maps.google.com/maps?q=Manizales,Caldas&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="opacity-70 grayscale"
                ></iframe>
              </div>
              <div className="relative z-10 bg-white/90 backdrop-blur-sm p-4 rounded-xl text-center shadow-sm">
                <MapPin className="w-8 h-8 text-[var(--honda-red)] mx-auto mb-2" />
                <p className="font-bold text-gray-900 uppercase text-sm">Tu Concesionario Honda</p>
                <p className="text-xs text-gray-600 mt-1">Ubicación de referencia</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
