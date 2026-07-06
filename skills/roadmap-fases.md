# Roadmap por fases — Terra Santa Eulalia

> Documento de referencia para las etapas de evolución del proyecto.
> Regla operativa: **preguntar al usuario antes de iniciar cualquier etapa.**
> Última actualización: 2026-07-06 (Fase 1A definida, pendiente de arranque).

## Contexto de negocio

Sitio de presentación exclusiva de un centro wellness en Barcelona:
**Terra Santa Eulalia**, by Laia Salomon (directora de Manolo Green Zone).

- **No hay ventas online ni carrito.** Las conversiones son:
  - Contacto auténtico por WhatsApp (`wa.me/34602468686`, con horario vía `useSchedule`).
  - Ubicación de la tienda en Google Maps.
  - Correo electrónico de contacto visible en el footer.
- Formaciones para peluqueros, terapeutas y profesionales wellness (área `/profesionales`).

## Qué se mantiene (invariantes)

| Aspecto | Estado |
|---|---|
| React 19 + Tailwind + Framer Motion | Se mantiene |
| EmailJS para `/contact` | Se mantiene |
| i18n CA/ES/EN, catalán por defecto | Se mantiene |
| Deploy estático a IONOS por SFTP vía GitHub Actions | Se mantiene |
| Next.js `output: "export"` (sin SSR/API routes/middleware en producción) | Se mantiene |
| Paleta custom (cream, earth-brown, olive-green, sand, terracotta) y tipografías serif/sans | Se mantiene |

## Restricción arquitectónica clave

IONOS sirve archivos estáticos: **no ejecuta middleware, API routes ni SSR**.
Consecuencias:

1. El `middleware.js` actual (JWT para `/profesionales`) **no corre en producción** — la protección real debe migrar a Supabase Auth + RLS.
2. El panel admin debe ser 100% client-side; la barrera de seguridad real es **RLS en la base de datos** (patrón `is_admin()` SECURITY DEFINER), no el guard del cliente.
3. La clave usada en el navegador es la *anon/publishable* de Supabase — segura porque la autorización vive en RLS.

---

## Fase 1A — Backend Supabase + Panel Admin (CÓDIGO COMPLETADO 2026-07-06)

> Estado: implementación terminada y build verificado. Decisiones tomadas:
> **estrategia build-time** (contenido horneado en `prebuild`, rebuild manual vía
> `workflow_dispatch`) y **arranque con placeholders** (falta conectar credenciales
> reales — pendientes del usuario en `task.md`).

**Objetivo:** pasar el contenido hardcodeado de `src/lib/translations.js` (~2.150 líneas, 3 locales) a una base de datos gratuita (Supabase free tier) y crear un panel de administración.

### Alcance

1. **Base de datos (PostgreSQL/Supabase)** — esquema derivado de las secciones reales de `translations.js`:
   - `products` (productsList: multi-idioma ca/es/en, precio, descripción, categoría, imagen, activo/soft-delete).
   - `treatments` / `rituals` (treatmentsPage, capillaryPage, services).
   - `faqs` (faqList multi-idioma).
   - `site_content` (secciones de UI: nav, hero, footer, philosophy, cta, whatsapp, legal… como key/locale/valor JSONB).
   - `admin_users` (vinculada a `auth.users`, rol + permisos).
   - `admin_logs` (auditoría JSONB best-effort, nunca bloquea la operación principal).
   - Migraciones SQL idempotentes versionadas en el repo (`supabase/migrations/`).
2. **Auth admin:** Supabase Auth (email/password) solo para administradores. Login en `/admin/login`. Guard client-side + RLS como barrera real. Sustituye al JWT/`middleware.js` actual para lo que aplique.
3. **Panel `/admin`:**
   - Dashboard con gráficos (visitas/contactos/contenido — Recharts o similar).
   - CRUD de productos, tratamientos, FAQs y textos del sitio con pestañas por idioma (ca/es/en).
   - Layout responsive (sidebar desktop / drawer móvil), toasts, estados vacíos.
4. **Estado global:** adaptar `AppProvider`/`useApp()` para servir contenido desde la DB con **fallback a `translations.js`** si la DB no responde (el sitio nunca se rompe).
5. **`.env.local`:** `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` + credenciales EmailJS. No existía `.env` — se creó con placeholders comentados `# REVISAR`.
6. **Limpieza de dependencias:** quitar `mongoose` (sin uso), evaluar `bcryptjs`/`jose` (solo los usa el auth JWT legacy); añadir `@supabase/supabase-js`.

### Decisión tomada: estrategia build-time (Opción A)

El contenido de la DB se descarga en `prebuild` (`scripts/fetch-content.mjs`) y se
hornea en `src/lib/content-generated.json` → HTML estático con SEO completo.
El panel admin lee/escribe en runtime (híbrido de facto). Para publicar cambios:
GitHub → Actions → Deploy to IONOS → Run workflow (`workflow_dispatch`).
Si Supabase no responde o no está configurado, el build usa el fallback
`translations.js` — el sitio nunca se rompe.

### Criterio de finalización

`npm run build` genera todas las rutas sin errores; el admin permite editar un producto y el cambio se refleja en el sitio según la estrategia elegida.

---

## Fase 1B — Storage de imágenes (FUTURA)

- Migrar imágenes de `/public` a **Supabase Storage** (bucket público de solo lectura; subida/borrado restringidos a admins por política sobre `storage.objects`).
- Subida múltiple desde el panel admin con URL pública + registro en DB (`product_images` con imagen principal y orden).
- Mantener `unoptimized: true`; las URLs de Storage funcionan con `<Image>` sin dominios extra al ser `unoptimized`.

---

## Fase 2 — Usuarios de cursos y formaciones (FUTURA)

- Base de datos para usuarios inscritos en cursos/formaciones de Terra Santa Eulalia (peluqueros, terapeutas, profesionales wellness).
- Cuentas de usuario con Supabase Auth (separadas del rol admin).
- Tablas previstas: `courses` (multi-idioma), `enrollments`, `profiles`.
- El área `/profesionales` pasa a autenticarse contra Supabase (reemplazo definitivo del JWT cookie actual).

---

## Variables de entorno

| Variable | Uso | Fase |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | URL del proyecto Supabase | 1A |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Clave pública (anon) — segura en cliente con RLS | 1A |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` / `TEMPLATE_ID` / `PUBLIC_KEY` | Formulario de contacto | actual |
| `JWT_SECRET` | Auth legacy `/profesionales` (a extinguir en Fase 2) | actual |
