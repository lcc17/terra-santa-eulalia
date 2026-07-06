-- ============================================================
-- Terra Santa Eulalia — Fase 1A: esquema base
-- Idempotente: ejecutable múltiples veces sin error.
-- Ejecutar en el SQL Editor de Supabase ANTES de 002_rls.sql.
-- ============================================================

create extension if not exists "pgcrypto";

-- Catálogo de productos (contenido multi-idioma en JSONB)
-- i18n = { ca: {name, category, type, desc, ingredients, usage, precautions}, es: {...}, en: {...} }
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  price numeric(10,2),
  img text,
  video text,
  sort_order integer not null default 0,
  featured boolean not null default false,
  active boolean not null default true,
  i18n jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- FAQs — i18n = { ca: {q, a}, es: {q, a}, en: {q, a} }
-- "key" da idempotencia al seed y estabilidad a las referencias.
create table if not exists public.faqs (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  sort_order integer not null default 0,
  active boolean not null default true,
  i18n jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Textos del sitio: una fila por sección e idioma
-- (nav, hero, footer, philosophy, treatmentsPage, capillaryPage, etc.)
create table if not exists public.site_content (
  id uuid primary key default gen_random_uuid(),
  section_key text not null,
  locale text not null check (locale in ('ca', 'es', 'en')),
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (section_key, locale)
);

-- Administradores: vinculados a auth.users.
-- El alta se hace manualmente desde el SQL Editor (ver supabase/README.md).
create table if not exists public.admin_users (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  role text not null default 'admin',
  permissions text[] not null default '{}',
  created_at timestamptz not null default now()
);

-- Auditoría best-effort de mutaciones del panel admin
create table if not exists public.admin_logs (
  id bigint generated always as identity primary key,
  admin_id uuid,
  action text not null,
  table_name text,
  record_id text,
  old_values jsonb,
  new_values jsonb,
  created_at timestamptz not null default now()
);

-- Trigger updated_at automático
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_products_updated_at on public.products;
create trigger trg_products_updated_at
  before update on public.products
  for each row execute function public.set_updated_at();

drop trigger if exists trg_faqs_updated_at on public.faqs;
create trigger trg_faqs_updated_at
  before update on public.faqs
  for each row execute function public.set_updated_at();

drop trigger if exists trg_site_content_updated_at on public.site_content;
create trigger trg_site_content_updated_at
  before update on public.site_content
  for each row execute function public.set_updated_at();

-- Índices sobre claves de consulta frecuente
create index if not exists idx_products_active_sort on public.products (active, sort_order);
create index if not exists idx_faqs_active_sort on public.faqs (active, sort_order);
create index if not exists idx_site_content_key on public.site_content (section_key, locale);
create index if not exists idx_admin_logs_created on public.admin_logs (created_at desc);
