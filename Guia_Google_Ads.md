# Guía Paso a Paso: Crear una Campaña de Conversiones en Google Ads

Esta guía está diseñada para configurar desde cero una campaña publicitaria enfocada en conseguir clientes reales (clics en WhatsApp, llamadas y formularios), enlazando correctamente la cuenta con la página web construida a la medida.

---

## PASO 1: Crear la cuenta de Google Ads
1. Ve a [ads.google.com](https://ads.google.com/) e inicia sesión con un correo de Gmail del negocio.
2. Si te pide crear una campaña inteligente ("Smart Campaign") de forma automática, busca un botón en la parte inferior que diga **"Cambiar a modo experto"** o **"Omitir la creación de la campaña"**. Es vital entrar al modo experto para configurar las conversiones.
3. Configura los datos de facturación (tarjeta de crédito) para que la cuenta quede activa.

---

## PASO 2: Crear las Acciones de Conversión (Crucial)
Antes de crear los anuncios, debemos decirle a Google qué es lo que consideramos un "éxito" (Conversión).

1. En el menú de la izquierda o superior, ve a **Objetivos (Goals) > Conversiones > Resumen**.
2. Haz clic en el botón azul **"+ Nueva acción de conversión"**.
3. Selecciona **Sitio web**.
4. Ingresa el dominio de tu página web (ej. `www.tupagina.com`) y haz clic en "Escanear".
5. Desplázate hacia abajo y elige **"Agregar una acción de conversión manualmente"**.

**Configura el evento de WhatsApp así:**
- **Categoría:** Contacto
- **Nombre de la conversión:** `Clic en WhatsApp`
- **Valor:** "No usar un valor para esta acción de conversión" (ya que un chat no es dinero garantizado aún).
- **Recuento:** Una (si la misma persona hace clic 3 veces en un día, cuenta como 1 cliente).
- Haz clic en **Guardar y continuar**.

**Cómo obtener los códigos para el programador:**
1. Al terminar de crear la acción, se abrirá una ventana que dice "Configurar etiqueta".
2. Haz clic en **"Usar Google Tag Manager"** o **"Instalar la etiqueta manualmente"**.
3. Verás dos códigos que necesitas copiar y **pasárselos a tu programador**:
   - **ID de conversión:** Es un número que empieza por `AW-` (Ej: `AW-123456789`). Este es el mismo para toda la cuenta.
   - **Etiqueta de conversión (Conversion Label):** Es un código alfanumérico que identifica esta conversión exacta (Ej: `xYzA-BcDeFg123`).

> **Repite el PASO 2** creando acciones de conversión manuales para:
> - **Llamadas Telefónicas:** (Nombre: Clic en Llamada)
> - **Formulario de Contacto:** (Nombre: Envío de Formulario)
> - **Solicitud de Cotización:** (Nombre: Cotización de Moto)
> 
> *Anota la "Etiqueta" (Label) de cada una y envíaselas a tu desarrollador. Él las conectará en la página web en 5 minutos.*

---

## PASO 3: Crear la Campaña de Búsqueda
Una vez que el programador te confirme que los códigos ya están puestos en la página, crea la campaña.

1. En el menú izquierdo ve a **Campañas** y haz clic en el botón azul **"+" > Nueva campaña**.
2. **Objetivo:** Selecciona **Clientes potenciales** (Leads) o **Tráfico del sitio web**.
3. **Tipo de campaña:** Selecciona **Búsqueda** (Search). Esto hará que tus anuncios salgan cuando alguien busque en Google "comprar moto Honda".
4. **Resultados esperados:** Selecciona "Visitas al sitio web" y pon tu dominio. Haz clic en Continuar.

## PASO 4: Presupuesto y Ofertas (Bidding)
1. **Presupuesto:** Ingresa cuánto quieres gastar al día (Ej: $20.000 COP o lo que tengas presupuestado).
2. **Ofertas (Bidding):** ¿En qué quieres enfocarte? Elige **Conversiones**. (Esto hará que la inteligencia artificial de Google busque personas propensas a escribirte al WhatsApp).

## PASO 5: Segmentación y Público
1. **Ubicaciones:** Selecciona las ciudades donde vendes (Ej: Manizales, Pereira, Armenia, etc.). No lo dejes en "Todo el país" si tu concesionario es local.
2. **Idiomas:** Español e Inglés (muchos celulares en Colombia están configurados en inglés).

## PASO 6: Palabras Clave y Anuncios
1. **Palabras clave:** ¿Qué buscaría tu cliente ideal? Escribe frases separadas por renglones. Ejemplos:
   - *motos honda manizales*
   - *comprar moto honda a credito*
   - *concesionario honda*
   - *motos honda baratas*
   - *honda navi precio*
   - *cotizar moto honda*

2. **Crear el anuncio:**
   - **URL final:** La dirección de tu página web.
   - **Títulos (Agrega al menos 5):** "Motos Honda en Manizales", "Crédito para tu Moto Hoy", "Concesionario Oficial Honda", "Estrena Moto sin Codeudor".
   - **Descripciones:** "Visítanos o escríbenos al WhatsApp. Te aprobamos el crédito fácil y rápido. ¡Cotiza hoy mismo tu motocicleta Honda!"
   - *Opcional:* Agrega "Recursos de llamada" poniendo tu número telefónico para que la gente llame directo desde el anuncio.

## PASO 7: Revisar y Publicar
Revisa que todo esté correcto y haz clic en **Publicar campaña**. 

Tus anuncios pasarán a un estado de revisión (suele tardar unas horas). Una vez aprobados, comenzarán a aparecer en Google. Cada vez que alguien entre y toque el botón de WhatsApp, el desarrollador ya lo dejó programado para que tu panel de Google Ads marque un "+1 en Conversiones".
