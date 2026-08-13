import { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Honda Motos",
  description: "Términos y condiciones legales, políticas de privacidad, manejo de datos y uso del sitio web oficial de Honda Motos.",
};

export default function TerminosYCondicionesPage() {
  return (
    <div className="flex min-h-screen flex-col w-full overflow-x-hidden bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gray-900 text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
              Términos y <span className="text-[var(--honda-red)]">Condiciones</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Última actualización: Agosto de 2026
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl py-16">
          <div className="prose prose-lg prose-red max-w-none text-gray-700 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
              <p>
                Al acceder y utilizar el sitio web oficial de Honda (en adelante, "el Sitio"), 
                usted acepta estar sujeto a estos Términos y Condiciones, a nuestra Política de Privacidad y a la 
                Política de Tratamiento de Datos Personales (Habeas Data). Si no está de acuerdo con alguno de 
                estos términos, le solicitamos que no utilice nuestro Sitio ni nuestros formularios de contacto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Uso del Sitio Web</h2>
              <p>
                El contenido de este Sitio, incluyendo pero no limitándose a textos, imágenes, logotipos, diseños, 
                catálogos y especificaciones de motocicletas, es propiedad exclusiva de Honda Motos Colombia y/o de sus 
                respectivos dueños, estando protegidos por las leyes de propiedad intelectual. El usuario se compromete a 
                utilizar la información únicamente para fines informativos y personales, quedando prohibida su reproducción, 
                modificación o distribución con fines comerciales sin autorización previa por escrito.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cotizaciones y Precios</h2>
              <p>
                Los precios de las motocicletas, accesorios, repuestos y servicios mostrados en este Sitio son referenciales, 
                incluyen IVA, y están sujetos a cambios sin previo aviso. Los valores pueden variar dependiendo de la zona 
                geográfica, costos de matrícula, SOAT, e impuestos locales vigentes al momento de la facturación en el concesionario. 
                Las solicitudes de cotización enviadas a través del Sitio no constituyen una oferta comercial vinculante.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Garantía de Motocicletas</h2>
              <p>
                Todas nuestras motocicletas nuevas cuentan con el respaldo y la garantía oficial de Honda. 
                Los periodos y condiciones de garantía varían según el modelo y cilindraje, y están estrictamente 
                sujetos a la realización de los mantenimientos preventivos en la red de talleres autorizados Honda, 
                utilizando repuestos genuinos. Las modificaciones no autorizadas o el uso inadecuado del vehículo invalidan 
                automáticamente la garantía.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Tratamiento de Datos Personales (Habeas Data)</h2>
              <p>
                En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013, le informamos que los datos personales 
                suministrados mediante nuestros formularios de cotización, contacto o PQRS, serán incorporados a una 
                base de datos bajo la responsabilidad de Honda. La finalidad del tratamiento de estos datos incluye:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-600">
                <li>Gestión comercial, envío de cotizaciones y atención al cliente.</li>
                <li>Envío de comunicaciones publicitarias, campañas promocionales y lanzamientos.</li>
                <li>Realización de encuestas de satisfacción y estudios de mercado.</li>
                <li>Recordatorios de mantenimientos preventivos y revisiones técnicas.</li>
              </ul>
              <p className="mt-4">
                El usuario tiene derecho a conocer, actualizar, rectificar y solicitar la supresión de sus datos personales 
                en cualquier momento, enviando una solicitud a través de nuestros canales oficiales de contacto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Campañas y Actividades Promocionales</h2>
              <p>
                Cualquier concurso, sorteo, bono de descuento o actividad promocional publicada en el Sitio o en nuestras 
                redes sociales oficiales, se regirá por un reglamento específico (Términos y Condiciones de la Actividad) 
                que será publicado de manera simultánea. Es responsabilidad del usuario leer detalladamente las condiciones 
                particulares de cada promoción, incluyendo vigencias, concesionarios participantes y requisitos para reclamar premios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modificaciones a los Términos</h2>
              <p>
                Honda se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento y 
                sin necesidad de notificación previa. Le sugerimos revisar periódicamente esta página para mantenerse informado 
                sobre cualquier cambio. Su uso continuado del Sitio después de la publicación de las modificaciones constituirá 
                su aceptación de las mismas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Ley Aplicable y Jurisdicción</h2>
              <p>
                Estos Términos y Condiciones se rigen por las leyes de la República de Colombia. Cualquier controversia 
                o conflicto que surja en relación con el uso de este Sitio será resuelto por las autoridades colombianas 
                competentes.
              </p>
            </section>
            
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
