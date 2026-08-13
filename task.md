# Tareas: Integración de Sanity CMS

- [ ] Instalar dependencias (`next-sanity`, `sanity`, `@sanity/image-url`, `@sanity/vision`)
- [ ] Configurar variables de entorno (`.env.local`) con el `projectId` `96ghvt23` y el dataset `production`
- [ ] Configurar Next.js para permitir imágenes de `cdn.sanity.io`
- [ ] Crear archivos de configuración de Sanity (`sanity.config.ts`, `sanity.client.ts`)
- [ ] Crear la ruta embebida del Studio en `src/app/admin/[[...index]]/page.tsx`
- [ ] Crear esquemas de Sanity
  - [ ] Esquema `motorcycle`
  - [ ] Esquema `colorVariant`
  - [ ] Esquema `siteSettings` (textos y datos de contacto)
- [ ] Migrar datos estáticos (`motorcycles.ts`, `mockData.ts`) a Sanity
- [ ] Actualizar componentes de la página (Hero, Featured, Footer, etc.) para que consuman datos de Sanity
