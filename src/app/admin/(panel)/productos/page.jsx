"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Plus, Pencil, RotateCcw, Trash2, Search } from "lucide-react";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabase";
import { LOCALES, LOCALE_LABELS, logAction } from "@/lib/adminApi";
import ConfirmModal from "@/components/admin/ConfirmModal";

const I18N_FIELDS = [
  { key: "name", label: "Nombre", rows: 1 },
  { key: "category", label: "Categoría", rows: 1 },
  { key: "type", label: "Tipo", rows: 1 },
  { key: "desc", label: "Descripción", rows: 3 },
  { key: "ingredients", label: "Ingredientes (INCI)", rows: 3 },
  { key: "usage", label: "Modo de empleo", rows: 5 },
  { key: "precautions", label: "Precauciones", rows: 5 },
];

const EMPTY_FORM = {
  slug: "",
  price: "",
  img: "",
  video: "",
  sort_order: 0,
  featured: false,
  active: true,
  i18n: { ca: {}, es: {}, en: {} },
};

export default function AdminProductos() {
  const [products, setProducts] = useState(null);
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState(null); // null | { ...producto } | { ...EMPTY_FORM }
  const [toDeactivate, setToDeactivate] = useState(null);
  const [refresh, setRefresh] = useState(0);
  const load = () => setRefresh((k) => k + 1);

  useEffect(() => {
    let cancelled = false;
    async function fetchProducts() {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("sort_order");
      if (error) toast.error(`Error cargando productos: ${error.message}`);
      if (!cancelled) setProducts(data || []);
    }
    fetchProducts();
    return () => {
      cancelled = true;
    };
  }, [refresh]);

  const save = async (form) => {
    const payload = {
      slug: form.slug.trim(),
      price: form.price === "" || form.price == null ? null : Number(form.price),
      img: form.img?.trim() || null,
      video: form.video?.trim() || null,
      sort_order: Number(form.sort_order) || 0,
      featured: Boolean(form.featured),
      active: Boolean(form.active),
      i18n: form.i18n,
    };
    if (!payload.slug) {
      toast.error("El slug es obligatorio");
      return;
    }
    if (payload.price != null && payload.price < 0) {
      toast.error("El precio no puede ser negativo");
      return;
    }

    if (form.id) {
      const old = products.find((p) => p.id === form.id);
      const { error } = await supabase.from("products").update(payload).eq("id", form.id);
      if (error) {
        toast.error(`No se pudo guardar: ${error.message}`);
        return;
      }
      logAction("update_product", "products", payload.slug, old, payload);
    } else {
      const { error } = await supabase.from("products").insert(payload);
      if (error) {
        // 23505 = slug duplicado
        toast.error(
          error.code === "23505"
            ? "Ya existe un producto con ese slug"
            : `No se pudo crear: ${error.message}`
        );
        return;
      }
      logAction("create_product", "products", payload.slug, null, payload);
    }
    toast.success("Producto guardado");
    setEditing(null);
    load();
  };

  const setActive = async (product, active) => {
    const { error } = await supabase
      .from("products")
      .update({ active })
      .eq("id", product.id);
    if (error) {
      toast.error(`No se pudo actualizar: ${error.message}`);
      return;
    }
    logAction(active ? "reactivate_product" : "deactivate_product", "products", product.slug);
    toast.success(active ? "Producto reactivado" : "Producto desactivado");
    setToDeactivate(null);
    load();
  };

  if (!products) {
    return (
      <p className="font-serif text-earth-brown/60 animate-pulse tracking-widest uppercase text-sm">
        Cargando productos…
      </p>
    );
  }

  const visible = products.filter((p) => {
    const q = search.toLowerCase();
    return (
      !q ||
      p.slug.includes(q) ||
      (p.i18n?.es?.name || "").toLowerCase().includes(q) ||
      (p.i18n?.es?.category || "").toLowerCase().includes(q)
    );
  });

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <h1 className="font-serif text-3xl text-earth-brown">Productos</h1>
        <button
          onClick={() => setEditing({ ...EMPTY_FORM, sort_order: products.length })}
          className="flex items-center gap-2 bg-olive-green text-cream px-5 py-2.5 text-xs uppercase tracking-widest hover:bg-earth-brown transition-colors"
        >
          <Plus size={14} /> Nuevo producto
        </button>
      </div>

      <div className="relative max-w-sm mb-6">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-sand-dark" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por nombre, slug o categoría…"
          className="w-full border border-sand-light bg-white pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-olive-green"
        />
      </div>

      <div className="bg-white border border-sand-light overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-[10px] uppercase tracking-widest text-sand-dark border-b border-sand-light">
              <th className="px-4 py-3">Producto</th>
              <th className="px-4 py-3">Categoría</th>
              <th className="px-4 py-3">Precio</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-sand-light/40">
            {visible.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-earth-brown/50 font-light">
                  {products.length === 0
                    ? "Catálogo vacío — ejecutá npm run seed para importar translations.js"
                    : "Sin resultados para la búsqueda"}
                </td>
              </tr>
            )}
            {visible.map((p) => (
              <tr key={p.id} className={p.active ? "" : "opacity-50"}>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    {p.img && (
                      <Image
                        src={p.img}
                        alt=""
                        width={40}
                        height={40}
                        className="object-cover border border-sand-light"
                      />
                    )}
                    <div>
                      <p className="text-earth-brown">{p.i18n?.es?.name || p.slug}</p>
                      <p className="text-[10px] text-sand-dark">{p.slug}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-earth-brown/70">
                  {p.i18n?.es?.category || "—"}
                </td>
                <td className="px-4 py-3 text-earth-brown/70">
                  {p.price != null ? `${Number(p.price).toFixed(2)}€` : "—"}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`text-[10px] uppercase tracking-widest px-2 py-1 ${
                      p.active
                        ? "bg-olive-green/10 text-olive-green"
                        : "bg-terracotta/10 text-terracotta"
                    }`}
                  >
                    {p.active ? "Activo" : "Inactivo"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => setEditing(p)}
                      className="text-earth-brown/60 hover:text-olive-green transition-colors"
                      title="Editar"
                    >
                      <Pencil size={15} />
                    </button>
                    {p.active ? (
                      <button
                        onClick={() => setToDeactivate(p)}
                        className="text-earth-brown/60 hover:text-terracotta transition-colors"
                        title="Desactivar (soft delete)"
                      >
                        <Trash2 size={15} />
                      </button>
                    ) : (
                      <button
                        onClick={() => setActive(p, true)}
                        className="text-earth-brown/60 hover:text-olive-green transition-colors"
                        title="Reactivar"
                      >
                        <RotateCcw size={15} />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editing && (
        <ProductForm product={editing} onSave={save} onClose={() => setEditing(null)} />
      )}

      {toDeactivate && (
        <ConfirmModal
          title="Desactivar producto"
          message={`"${toDeactivate.i18n?.es?.name || toDeactivate.slug}" desaparecerá de la web en el próximo deploy, pero no se borra: podés reactivarlo cuando quieras.`}
          confirmLabel="Desactivar"
          onConfirm={() => setActive(toDeactivate, false)}
          onCancel={() => setToDeactivate(null)}
        />
      )}
    </div>
  );
}

function ProductForm({ product, onSave, onClose }) {
  const [form, setForm] = useState({
    ...product,
    price: product.price ?? "",
    i18n: { ca: {}, es: {}, en: {}, ...product.i18n },
  });
  const [tab, setTab] = useState("ca");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const setField = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const uploadImage = async (file) => {
    if (!file) return;
    setUploading(true);
    try {
      const ext = (file.name.split(".").pop() || "png").toLowerCase();
      const base = (form.slug || `producto-${Date.now()}`)
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "-");
      const key = `${base}.${ext}`;
      const { error } = await supabase.storage
        .from("product-images")
        .upload(key, file, { upsert: true, contentType: file.type || "image/png" });
      if (error) {
        toast.error(`No se pudo subir: ${error.message}`);
        return;
      }
      const { data } = supabase.storage.from("product-images").getPublicUrl(key);
      setField("img", data.publicUrl);
      toast.success("Imagen subida a Storage");
    } finally {
      setUploading(false);
    }
  };
  const setI18nField = (key, value) =>
    setForm((f) => ({
      ...f,
      i18n: { ...f.i18n, [tab]: { ...f.i18n[tab], [key]: value } },
    }));

  const submit = async (e) => {
    e.preventDefault();
    setSaving(true);
    await onSave(form);
    setSaving(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-earth-brown/40 p-4 overflow-y-auto">
      <form
        onSubmit={submit}
        className="bg-cream border border-sand-light max-w-3xl w-full p-8 my-8"
      >
        <h3 className="font-serif text-2xl text-earth-brown mb-6">
          {form.id ? "Editar producto" : "Nuevo producto"}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Field label="Slug (URL, sin espacios)">
            <input
              value={form.slug}
              onChange={(e) => setField("slug", e.target.value)}
              disabled={Boolean(form.id)}
              className="admin-input"
              placeholder="planta-fortalecedora"
            />
          </Field>
          <Field label="Precio (€, vacío = próximamente)">
            <input
              type="number"
              step="0.01"
              min="0"
              value={form.price}
              onChange={(e) => setField("price", e.target.value)}
              className="admin-input"
            />
          </Field>
          <Field label="Imagen (subir archivo o pegar URL)">
            <div className="flex items-center gap-3">
              {form.img && (
                <Image
                  src={form.img}
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover border border-sand-light shrink-0"
                />
              )}
              <input
                value={form.img || ""}
                onChange={(e) => setField("img", e.target.value)}
                className="admin-input"
                placeholder="https://… o /images/products/…"
              />
            </div>
            <label className="inline-block mt-2 text-xs uppercase tracking-widest text-olive-green hover:text-earth-brown transition-colors cursor-pointer">
              {uploading ? "Subiendo…" : "↑ Subir imagen a Storage"}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                disabled={uploading}
                onChange={(e) => uploadImage(e.target.files?.[0])}
              />
            </label>
          </Field>
          <Field label="Vídeo (URL YouTube)">
            <input
              value={form.video || ""}
              onChange={(e) => setField("video", e.target.value)}
              className="admin-input"
            />
          </Field>
          <Field label="Orden">
            <input
              type="number"
              value={form.sort_order}
              onChange={(e) => setField("sort_order", e.target.value)}
              className="admin-input"
            />
          </Field>
          <div className="flex items-end gap-6 pb-1">
            <label className="flex items-center gap-2 text-sm text-earth-brown/80">
              <input
                type="checkbox"
                checked={form.active}
                onChange={(e) => setField("active", e.target.checked)}
              />
              Activo
            </label>
            <label className="flex items-center gap-2 text-sm text-earth-brown/80">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(e) => setField("featured", e.target.checked)}
              />
              Destacado
            </label>
          </div>
        </div>

        <div className="flex border-b border-sand-light mb-4">
          {LOCALES.map((locale) => (
            <button
              key={locale}
              type="button"
              onClick={() => setTab(locale)}
              className={`px-5 py-2 text-xs uppercase tracking-widest transition-colors ${
                tab === locale
                  ? "bg-olive-green text-cream"
                  : "text-earth-brown/60 hover:text-earth-brown"
              }`}
            >
              {LOCALE_LABELS[locale]}
            </button>
          ))}
        </div>

        <div className="space-y-4 mb-8">
          {I18N_FIELDS.map(({ key, label, rows }) => (
            <Field key={key} label={label}>
              {rows === 1 ? (
                <input
                  value={form.i18n[tab]?.[key] || ""}
                  onChange={(e) => setI18nField(key, e.target.value)}
                  className="admin-input"
                />
              ) : (
                <textarea
                  rows={rows}
                  value={form.i18n[tab]?.[key] || ""}
                  onChange={(e) => setI18nField(key, e.target.value)}
                  className="admin-input resize-y"
                />
              )}
            </Field>
          ))}
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 text-xs uppercase tracking-widest text-earth-brown/70 hover:text-earth-brown transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-8 py-2 text-xs uppercase tracking-widest bg-olive-green text-cream hover:bg-earth-brown transition-colors disabled:opacity-50"
          >
            {saving ? "Guardando…" : "Guardar"}
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-widest text-earth-brown/60">
        {label}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
