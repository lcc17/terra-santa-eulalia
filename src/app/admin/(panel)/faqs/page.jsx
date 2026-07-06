"use client";
import { useEffect, useState } from "react";
import { Plus, Pencil, RotateCcw, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabase";
import { LOCALES, LOCALE_LABELS, logAction } from "@/lib/adminApi";
import ConfirmModal from "@/components/admin/ConfirmModal";

export default function AdminFaqs() {
  const [faqs, setFaqs] = useState(null);
  const [editing, setEditing] = useState(null);
  const [toDeactivate, setToDeactivate] = useState(null);
  const [refresh, setRefresh] = useState(0);
  const load = () => setRefresh((k) => k + 1);

  useEffect(() => {
    let cancelled = false;
    async function fetchFaqs() {
      const { data, error } = await supabase
        .from("faqs")
        .select("*")
        .order("sort_order");
      if (error) toast.error(`Error cargando FAQs: ${error.message}`);
      if (!cancelled) setFaqs(data || []);
    }
    fetchFaqs();
    return () => {
      cancelled = true;
    };
  }, [refresh]);

  const save = async (form) => {
    const payload = {
      key: form.key?.trim() || `faq-${Date.now()}`,
      sort_order: Number(form.sort_order) || 0,
      active: Boolean(form.active),
      i18n: form.i18n,
    };
    if (form.id) {
      const old = faqs.find((f) => f.id === form.id);
      const { error } = await supabase.from("faqs").update(payload).eq("id", form.id);
      if (error) return toast.error(`No se pudo guardar: ${error.message}`);
      logAction("update_faq", "faqs", payload.key, old, payload);
    } else {
      const { error } = await supabase.from("faqs").insert(payload);
      if (error) return toast.error(`No se pudo crear: ${error.message}`);
      logAction("create_faq", "faqs", payload.key, null, payload);
    }
    toast.success("FAQ guardada");
    setEditing(null);
    load();
  };

  const setActive = async (faq, active) => {
    const { error } = await supabase.from("faqs").update({ active }).eq("id", faq.id);
    if (error) return toast.error(`No se pudo actualizar: ${error.message}`);
    logAction(active ? "reactivate_faq" : "deactivate_faq", "faqs", faq.key);
    toast.success(active ? "FAQ reactivada" : "FAQ desactivada");
    setToDeactivate(null);
    load();
  };

  if (!faqs) {
    return (
      <p className="font-serif text-earth-brown/60 animate-pulse tracking-widest uppercase text-sm">
        Cargando FAQs…
      </p>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <h1 className="font-serif text-3xl text-earth-brown">FAQs</h1>
        <button
          onClick={() =>
            setEditing({
              key: "",
              sort_order: faqs.length,
              active: true,
              i18n: { ca: {}, es: {}, en: {} },
            })
          }
          className="flex items-center gap-2 bg-olive-green text-cream px-5 py-2.5 text-xs uppercase tracking-widest hover:bg-earth-brown transition-colors"
        >
          <Plus size={14} /> Nueva FAQ
        </button>
      </div>

      <div className="bg-white border border-sand-light divide-y divide-sand-light/40">
        {faqs.length === 0 && (
          <p className="px-6 py-10 text-center text-earth-brown/50 font-light">
            Sin FAQs — ejecutá npm run seed para importar translations.js
          </p>
        )}
        {faqs.map((f) => (
          <div
            key={f.id}
            className={`px-6 py-4 flex items-center justify-between gap-4 ${f.active ? "" : "opacity-50"}`}
          >
            <div className="min-w-0">
              <p className="text-earth-brown truncate">{f.i18n?.es?.q || f.key}</p>
              <p className="text-xs text-earth-brown/50 font-light truncate">
                {f.i18n?.es?.a || "—"}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setEditing(f)}
                className="text-earth-brown/60 hover:text-olive-green transition-colors"
                title="Editar"
              >
                <Pencil size={15} />
              </button>
              {f.active ? (
                <button
                  onClick={() => setToDeactivate(f)}
                  className="text-earth-brown/60 hover:text-terracotta transition-colors"
                  title="Desactivar"
                >
                  <Trash2 size={15} />
                </button>
              ) : (
                <button
                  onClick={() => setActive(f, true)}
                  className="text-earth-brown/60 hover:text-olive-green transition-colors"
                  title="Reactivar"
                >
                  <RotateCcw size={15} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {editing && <FaqForm faq={editing} onSave={save} onClose={() => setEditing(null)} />}

      {toDeactivate && (
        <ConfirmModal
          title="Desactivar FAQ"
          message={`"${toDeactivate.i18n?.es?.q || toDeactivate.key}" desaparecerá de la web en el próximo deploy. Podés reactivarla cuando quieras.`}
          confirmLabel="Desactivar"
          onConfirm={() => setActive(toDeactivate, false)}
          onCancel={() => setToDeactivate(null)}
        />
      )}
    </div>
  );
}

function FaqForm({ faq, onSave, onClose }) {
  const [form, setForm] = useState({ ...faq, i18n: { ca: {}, es: {}, en: {}, ...faq.i18n } });
  const [tab, setTab] = useState("ca");
  const [saving, setSaving] = useState(false);

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
      <form onSubmit={submit} className="bg-cream border border-sand-light max-w-xl w-full p-8 my-8">
        <h3 className="font-serif text-2xl text-earth-brown mb-6">
          {form.id ? "Editar FAQ" : "Nueva FAQ"}
        </h3>

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

        <label className="block mb-4">
          <span className="text-[10px] uppercase tracking-widest text-earth-brown/60">
            Pregunta
          </span>
          <input
            value={form.i18n[tab]?.q || ""}
            onChange={(e) => setI18nField("q", e.target.value)}
            className="admin-input mt-1"
          />
        </label>
        <label className="block mb-8">
          <span className="text-[10px] uppercase tracking-widest text-earth-brown/60">
            Respuesta
          </span>
          <textarea
            rows={4}
            value={form.i18n[tab]?.a || ""}
            onChange={(e) => setI18nField("a", e.target.value)}
            className="admin-input mt-1 resize-y"
          />
        </label>

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
