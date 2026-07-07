-- ============================================================
-- Terra Santa Eulalia — Fase 1B: Supabase Storage
-- Idempotente. Ejecutar DESPUÉS de 002_rls.sql.
-- Bucket público de solo lectura para imágenes de producto;
-- subida/borrado restringidos a administradores.
-- ============================================================

insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true)
on conflict (id) do update set public = true;

-- Lectura pública (el bucket es público, pero la política habilita
-- también el listado vía API)
drop policy if exists "public_read_product_images" on storage.objects;
create policy "public_read_product_images" on storage.objects
  for select using (bucket_id = 'product-images');

-- Escrituras solo para admins (public.is_admin() de 002_rls.sql)
drop policy if exists "admin_insert_product_images" on storage.objects;
create policy "admin_insert_product_images" on storage.objects
  for insert with check (bucket_id = 'product-images' and public.is_admin());

drop policy if exists "admin_update_product_images" on storage.objects;
create policy "admin_update_product_images" on storage.objects
  for update using (bucket_id = 'product-images' and public.is_admin());

drop policy if exists "admin_delete_product_images" on storage.objects;
create policy "admin_delete_product_images" on storage.objects
  for delete using (bucket_id = 'product-images' and public.is_admin());
