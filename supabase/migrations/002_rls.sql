-- ============================================================
-- Terra Santa Eulalia — Fase 1A: Row Level Security
-- Idempotente. Ejecutar DESPUÉS de 001_schema.sql.
-- La autorización real vive aquí, no en el cliente:
-- aunque se manipule el frontend, la BD deniega.
-- ============================================================

-- SECURITY DEFINER evita recursión infinita: una política de
-- admin_users no puede hacer subquery a admin_users directamente.
create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.admin_users where id = auth.uid()
  );
$$;

alter table public.products enable row level security;
alter table public.faqs enable row level security;
alter table public.site_content enable row level security;
alter table public.admin_users enable row level security;
alter table public.admin_logs enable row level security;

-- Catálogo público: anónimos solo ven filas activas; admins ven todo
drop policy if exists "public_read_active_products" on public.products;
create policy "public_read_active_products" on public.products
  for select using (active = true or public.is_admin());

drop policy if exists "admin_write_products" on public.products;
create policy "admin_write_products" on public.products
  for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "public_read_active_faqs" on public.faqs;
create policy "public_read_active_faqs" on public.faqs
  for select using (active = true or public.is_admin());

drop policy if exists "admin_write_faqs" on public.faqs;
create policy "admin_write_faqs" on public.faqs
  for all using (public.is_admin()) with check (public.is_admin());

-- Textos del sitio: lectura pública (se hornean en el build), escritura admin
drop policy if exists "public_read_site_content" on public.site_content;
create policy "public_read_site_content" on public.site_content
  for select using (true);

drop policy if exists "admin_write_site_content" on public.site_content;
create policy "admin_write_site_content" on public.site_content
  for all using (public.is_admin()) with check (public.is_admin());

-- admin_users: cada admin lee su propia fila (para el guard del panel).
-- Sin política de escritura: las altas se hacen desde el SQL Editor.
drop policy if exists "admin_read_own_row" on public.admin_users;
create policy "admin_read_own_row" on public.admin_users
  for select using (id = auth.uid() or public.is_admin());

-- Auditoría: solo admins escriben y leen
drop policy if exists "admin_insert_logs" on public.admin_logs;
create policy "admin_insert_logs" on public.admin_logs
  for insert with check (public.is_admin());

drop policy if exists "admin_read_logs" on public.admin_logs;
create policy "admin_read_logs" on public.admin_logs
  for select using (public.is_admin());
