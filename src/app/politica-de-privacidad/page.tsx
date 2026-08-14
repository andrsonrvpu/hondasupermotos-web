import { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad | Honda Motos",
  description: "Conoce nuestra Política de Privacidad y el manual de Tratamiento de Datos Personales de Honda Motos Colombia.",
};

export default function PoliticaDePrivacidadPage() {
  return (
    <div className="flex min-h-screen flex-col w-full overflow-x-hidden bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gray-900 text-white pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
              Política de <span className="text-[var(--honda-red)]">Privacidad</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Manual de Políticas de Tratamiento de Datos Personales
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl py-16">
          <div className="prose prose-lg prose-red max-w-none text-gray-700 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Objetivo y Alcance</h2>
              <p>
                Dando cumplimiento a la Ley Estatutaria 1581 de 2012 y el Decreto 1377 de 2013 en Colombia, 
                Honda (en adelante, "la Empresa") adopta y publica la presente Política de 
                Tratamiento de Datos Personales, con el propósito de proteger y garantizar el derecho de Habeas Data 
                de sus clientes, usuarios, empleados, proveedores y cualquier persona cuyos datos reposen en nuestras bases de datos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Recolección de la Información</h2>
              <p>
                La Empresa recolecta datos personales a través de los diferentes canales de atención, tales como:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-600">
                <li>Formularios de registro, cotización o solicitud de crédito en nuestro sitio web.</li>
                <li>Líneas de atención vía telefónica y canales de WhatsApp.</li>
                <li>Redes sociales oficiales (Facebook, Instagram, etc.).</li>
                <li>Ferias, eventos, patrocinios y activaciones de marca.</li>
                <li>Ingreso a nuestros concesionarios y talleres autorizados.</li>
              </ul>
              <p className="mt-4">
                La información recolectada puede incluir, pero no se limita a: nombre completo, número de documento de identidad, 
                correo electrónico, dirección de residencia, números de contacto, información financiera para créditos y placa 
                del vehículo (para temas de posventa).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalidades del Tratamiento</h2>
              <p>
                Los datos personales recolectados contarán con la debida autorización del Titular y serán tratados para los 
                siguientes propósitos comerciales y operativos:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-600">
                <li>Proveer productos y/o servicios solicitados y cumplir con las obligaciones contraídas con el Titular.</li>
                <li>Enviar notificaciones y campañas relacionadas con promociones, nuevos productos, accesorios o servicios de Honda Motos.</li>
                <li>Realizar llamados de seguridad o de revisión técnica preventiva de las motocicletas en nombre de Honda o del fabricante.</li>
                <li>Evaluar la calidad de los servicios de venta y posventa mediante encuestas de satisfacción.</li>
                <li>Gestionar solicitudes, quejas, reclamos y sugerencias (PQRS).</li>
                <li>Facilitar el proceso de aprobación de créditos con entidades financieras aliadas.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Derechos de los Titulares</h2>
              <p>
                De acuerdo con la legislación colombiana aplicable (Ley 1581 de 2012), los Titulares de los datos personales 
                tienen los siguientes derechos:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-600">
                <li>Conocer, actualizar y rectificar sus datos personales frente a la Empresa.</li>
                <li>Solicitar prueba de la autorización otorgada, salvo en aquellos casos en que la Ley lo exceptúe expresamente.</li>
                <li>Ser informado, previa solicitud, respecto al uso que se le ha dado a sus datos.</li>
                <li>Presentar ante la Superintendencia de Industria y Comercio quejas por infracciones a lo dispuesto en la ley.</li>
                <li>Revocar la autorización y/o solicitar la supresión del dato cuando no se respeten los principios, derechos y garantías legales.</li>
                <li>Acceder en forma gratuita a sus datos personales que hayan sido objeto de Tratamiento.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Seguridad de la Información</h2>
              <p>
                Honda está fuertemente comprometida con la protección y seguridad de los datos de sus clientes. 
                Utilizamos sistemas informáticos, barreras cortafuegos, encriptación y protocolos de seguridad física y electrónica 
                para prevenir el acceso no autorizado, la pérdida o la alteración indebida de la información. 
                Los datos no serán comercializados ni transferidos a terceros para fines ajenos a la operación sin el 
                consentimiento expreso del titular, exceptuando autoridades judiciales cuando la ley así lo exija.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies y Navegación Web</h2>
              <p>
                Nuestro sitio web puede utilizar <em>cookies</em> y tecnologías similares para mejorar la experiencia de 
                navegación del usuario, recordar sus preferencias, y generar estadísticas de tráfico. El usuario tiene 
                la potestad de configurar su navegador para rechazar todas las cookies, aunque esto podría afectar la 
                funcionalidad de ciertas secciones de nuestro portal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Procedimiento para Consultas y Reclamos</h2>
              <p>
                Los titulares de la información que deseen realizar consultas, actualizar sus datos, o solicitar la eliminación 
                de su información de nuestras bases de datos, pueden hacerlo a través de nuestros canales autorizados de servicio 
                al cliente o escribiendo una solicitud detallada al correo electrónico que aparece en la sección de Contacto. 
                Las solicitudes serán atendidas dentro de los plazos establecidos por la Ley Estatutaria 1581 de 2012 (10 a 15 días hábiles).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Vigencia de la Política</h2>
              <p>
                La presente política rige a partir de su fecha de publicación. Las bases de datos tendrán una vigencia 
                igual al tiempo en que se mantenga y utilice la información para las finalidades descritas, 
                o de acuerdo a las disposiciones legales vigentes en Colombia.
              </p>
            </section>
            
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
