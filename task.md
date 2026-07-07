# Fases 1A y 1B — Checklist de ejecución

Plan aprobado: build-time content, placeholders Supabase, arranque autorizado (2026-07-06).
Detalle en `skills/roadmap-fases.md`. **Código completado y build verificado (44 rutas).**

- [x] Dependencias: +@supabase/supabase-js +recharts +react-hot-toast, −mongoose
- [x] `supabase/migrations/001_schema.sql` — tablas products, faqs, site_content, admin_users, admin_logs
- [x] `supabase/migrations/002_rls.sql` — is_admin() + políticas RLS
- [x] `supabase/README.md` — guía de setup del proyecto Supabase
- [x] `src/lib/supabase.js` — cliente + flag isSupabaseConfigured
- [x] `src/lib/content-generated.json` — snapshot por defecto (vacío)
- [x] `src/lib/content.js` — deepMerge translations + snapshot generado
- [x] `scripts/fetch-content.mjs` — fetch build-time (prebuild), nunca rompe el build
- [x] `scripts/seed-supabase.mjs` — seed inicial desde translations.js (service role)
- [x] `src/lib/context.js` — t servido vía getContent(lang)
- [x] `src/app/domesticos/productos/[id]/page.jsx` — generateStaticParams desde contenido merged
- [x] `SiteChrome` — ocultar Navbar/Footer/Cookies en /admin
- [x] Admin: login, guard, shell/sidebar, dashboard (gráficos), CRUD productos, CRUD faqs, editor textos
- [x] `package.json` — scripts prebuild + seed
- [x] `.github/workflows/deploy.yml` — workflow_dispatch + secrets Supabase en build
- [x] `npm run build` verde (todas las rutas + /admin/*)
- [x] Actualizar `skills/roadmap-fases.md` + memoria

## Activación (actualizado 2026-07-06, sesión con Chrome)

- [x] Proyecto Supabase conectado — ref `pvvpfxjeupvvexdnpycj` (nombre "tokshopy", org "Projects TokToks"; BD estaba vacía)
- [x] `001_schema.sql` y `002_rls.sql` ejecutados en el SQL Editor ("Success" ambos, con RLS habilitado)
- [x] Credenciales reales en `.env.local` (URL + publishable + secret, formato nuevo sb_*)
- [x] `npm run seed` — 20 productos, 4 FAQs, 51 secciones (ca/es/en)
- [x] Pipeline verificado: prebuild descarga de la DB y hornea el snapshot; build 44 rutas OK

### Activación final (2026-07-06)

- [x] Secrets `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` añadidos en GitHub (usuario)
- [x] Usuario admin creado (tokshopy@gmail.com, UUID e587f0a4-…) y registrado en `admin_users` con rol admin
- [x] Test de seguridad RLS: INSERT anónimo denegado (42501), catálogo público legible, admin_logs filtrado
- [x] Proyecto confirmado por el usuario: "tokshopy" / org "Projects TokToks"

### Cierre Fase 1A (2026-07-07)

- [x] Login en `/admin` probado por el usuario: funciona
- [x] Merge `backend` → `main` (fast-forward a f0f3efd) + push → deploy a IONOS disparado

## Fase 1B — Storage de imágenes (2026-07-07)

- [x] `supabase/migrations/003_storage.sql` — bucket `product-images` público + políticas admin (ejecutada en SQL Editor)
- [x] `scripts/upload-images.mjs` — 20 imágenes migradas de `/public` a Storage, `products.img` actualizado a URLs públicas (HTTP 200 verificado)
- [x] Formulario de producto del admin: botón "Subir imagen a Storage"
- [x] Build verde: el snapshot horneado ya usa las URLs de Storage

### Hosting y deploys (descubierto 2026-07-07)

- El sitio corre en DOS lados: **Netlify** (terrasantaeulalia.netlify.app, auto-deploy desde GitHub, al día) e **IONOS** (terrasantaeulalia.com, subido a mano, congelado — el workflow FTP nunca funcionó: los 17 runs fallaron).
- [x] Causa raíz del deploy IONOS: `protocol: sftp` no es válido en SamKirkland/FTP-Deploy-Action → cambiado a `ftps` puerto 21 (commit 511c5a9)
- [x] Netlify sin env de Supabase (por eso /admin decía "sin configurar") → `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` (publishable, pública por diseño) añadidas a `netlify.toml`
- [x] Fase 1B commiteada (511c5a9) + merge a `main` + push → deploys en marcha

### Resolución deploys (2026-07-07)

- [x] Netlify: /admin funciona y el catálogo sirve las 20 imágenes desde Storage
- [x] IONOS: causa raíz final = el host exige SFTP y FTP-Deploy-Action no lo soporta.
      Cadena de errores: `protocol: sftp` inválido → FTPS `500 AUTH unrecognized` →
      FTP plano `421 FTP has been disabled` → **cambio a wlixcc/SFTP-Deploy-Action
      (puerto 22, sftp_only) → run #20 SUCCESS** (primer deploy exitoso en 20 runs)
- [x] terrasantaeulalia.com actualizado: contenido nuevo + admin + imágenes Storage (verificado por HTTP)

### Pendiente

- [ ] **HTTPS roto en terrasantaeulalia.com** (`tlsv1 alert internal error`, pre-existente):
      activar/renovar el certificado SSL en el panel de IONOS — el sitio solo responde por HTTP
- [ ] EmailJS: decidir si se activa envío por email en /contact (hoy va por WhatsApp; no hay credenciales EmailJS en el código)
