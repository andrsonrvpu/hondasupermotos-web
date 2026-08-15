export const metadata = {
  title: "Política de Cookies | Honda Supermotos",
  description: "Conoce nuestra política de cookies y cómo manejamos tu información al navegar por nuestra página web.",
}

export default function PoliticaCookiesPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Política de Cookies
          </h1>
          <p className="text-gray-400">Última actualización: Agosto 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 prose prose-red max-w-none text-gray-700">
          <h2>1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web que visitas colocan en tu ordenador, smartphone u otro dispositivo. Se utilizan ampliamente para hacer que los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
          </p>

          <h2>2. ¿Cómo utilizamos las cookies?</h2>
          <p>
            En <strong>Honda Supermotos</strong> utilizamos cookies para mejorar tu experiencia de navegación, ofrecerte contenido y anuncios personalizados, proporcionar funciones de redes sociales y analizar nuestro tráfico.
          </p>
          <p>Los tipos de cookies que utilizamos incluyen:</p>
          <ul>
            <li><strong>Cookies Estrictamente Necesarias:</strong> Son esenciales para que puedas moverte por el sitio web y utilizar sus funciones, como acceder a áreas seguras del sitio web.</li>
            <li><strong>Cookies de Rendimiento:</strong> Recopilan información sobre cómo utilizas nuestro sitio web, por ejemplo, qué páginas visitas con más frecuencia. Estos datos nos ayudan a optimizar nuestro sitio y hacerlo más fácil de navegar.</li>
            <li><strong>Cookies de Funcionalidad:</strong> Permiten que el sitio web recuerde las elecciones que haces (como tu nombre de usuario, idioma o la región en la que te encuentras) y proporcionan funciones mejoradas y más personales.</li>
            <li><strong>Cookies de Publicidad o Segmentación:</strong> Se utilizan para ofrecerte anuncios más relevantes para ti y tus intereses. También se utilizan para limitar el número de veces que ves un anuncio, así como para ayudar a medir la efectividad de las campañas publicitarias.</li>
          </ul>

          <h2>3. Cookies de Terceros</h2>
          <p>
            Además de nuestras propias cookies, también podemos utilizar cookies de terceros, como Google Analytics, Google Ads y Facebook Pixel, para generar estadísticas de uso del sitio web, analizar métricas de marketing y entregar anuncios publicitarios relevantes.
          </p>

          <h2>4. ¿Cómo puedes gestionar tus cookies?</h2>
          <p>
            Puedes restringir, bloquear o borrar las cookies de este sitio web en cualquier momento modificando la configuración de tu navegador. Aunque cada navegador está parametrizado de forma diferente, la configuración de las cookies se realiza normalmente en el menú de "Preferencias" o "Herramientas". 
          </p>
          <p>
            Para más detalles sobre la configuración de las cookies en tu navegador, consulta el menú de "Ayuda" del mismo. Ten en cuenta que si desactivas las cookies, es posible que no puedas utilizar todas las funciones interactivas de nuestro sitio web.
          </p>

          <h2>5. Cambios en la Política de Cookies</h2>
          <p>
            Podemos actualizar nuestra Política de Cookies de vez en cuando. Cualquier cambio será publicado en esta página y, si los cambios son significativos, proporcionaremos un aviso más destacado.
          </p>

          <h2>6. Contacto</h2>
          <p>
            Si tienes alguna pregunta sobre el uso de cookies en nuestro sitio web, por favor contáctanos a través de nuestra página de <a href="/contacto" className="text-[var(--honda-red)] font-bold hover:underline">Contacto</a> o enviando un correo a info@hondasupermotos.com.
          </p>
        </div>
      </section>
    </div>
  )
}
