# Supabase — guía de puesta en marcha (Fase 1A)

## 1. Crear el proyecto

1. Entrar en [supabase.com](https://supabase.com) → **New project** (free tier).
2. Región recomendada: `eu-west` (más cercana a Barcelona).
3. Guardar la contraseña de la base de datos en un lugar seguro.

## 2. Ejecutar migraciones

En el **SQL Editor** del dashboard, ejecutar en orden:

1. `migrations/001_schema.sql` — tablas, triggers e índices.
2. `migrations/002_rls.sql` — función `is_admin()` y políticas RLS.

Ambos scripts son idempotentes: se pueden re-ejecutar sin error.

## 3. Credenciales

En **Project Settings → API**:

| Valor del dashboard | Dónde va |
|---|---|
| Project URL | `NEXT_PUBLIC_SUPABASE_URL` en `.env.local` y secret de GitHub |
| `anon` `public` key | `NEXT_PUBLIC_SUPABASE_ANON_KEY` en `.env.local` y secret de GitHub |
| `service_role` key | `SUPABASE_SERVICE_ROLE_KEY` **solo** en `.env.local` (para el seed). Nunca en el cliente ni en GitHub. |

Secrets de GitHub (Settings → Secrets and variables → Actions):
`NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` — los usa el build de deploy.

## 4. Crear el primer administrador

1. **Authentication → Users → Add user**: email + contraseña de la directora
   (desmarcar "Send email invite" si se prefiere entregarla en mano).
2. Copiar el UUID del usuario creado y ejecutar en el SQL Editor:

```sql
insert into public.admin_users (id, email, role)
values ('UUID-DEL-USUARIO', 'email@ejemplo.com', 'admin')
on conflict (id) do nothing;
```

## 5. Seed inicial del contenido

Con `.env.local` completo (incluida la `service_role`):

```bash
npm run seed
```

Vuelca `src/lib/translations.js` a las tablas: productos, FAQs y secciones de texto
en los tres idiomas (ca/es/en). Es idempotente (upsert por slug/key/sección).

## 6. Flujo de publicación (estrategia build-time)

1. Un admin edita contenido en `/admin`.
2. Para publicar: GitHub → Actions → **Deploy to IONOS** → *Run workflow*
   (el trigger `workflow_dispatch` ya está configurado).
3. El `prebuild` descarga el contenido de Supabase y lo hornea en el HTML estático.

Si Supabase no está configurado o no responde, el build usa el fallback
(`src/lib/translations.js`) y el sitio nunca se rompe.
