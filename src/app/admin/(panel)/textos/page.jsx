"use client";
import { useEffect, useMemo, useState } from "react";
import { Save } from "lucide-react";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabase";
import { LOCALES, LOCALE_LABELS, logAction } from "@/lib/adminApi";

// Editor de secciones de texto del sitio (site_content).
// Cada sección/idioma es un JSON: editar con cuidado y guardar por partes.
export default function AdminTextos() {
  const [rows, setRows] = useState(null);
  const [section, setSection] = useState("");
  const [locale, setLocale] = useState("ca");
  // null = sin edición en curso: el textarea muestra el contenido guardado
  const [draft, setDraft] = useState(null);
  const [saving, setSaving] = useState(false);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    let cancelled = false;
    async function fetchRows() {
      const { data, error } = await supabase
        .from("site_content")
        .select("*")
        .order("section_key");
      if (error) toast.error(`Error cargando textos: ${error.message}`);
      if (!cancelled) setRows(data || []);
    }
    fetchRows();
    return () => {
      cancelled = true;
    };
  }, [refresh]);

  const sections = useMemo(
    () => [...new Set((rows || []).map((r) => r.section_key))],
    [rows]
  );

  const activeSection = section || sections[0] || "";

  const current = useMemo(
    () =>
      (rows || []).find((r) => r.section_key === activeSection && r.locale === locale),
    [rows, activeSection, locale]
  );

  const shown = draft ?? (current ? JSON.stringify(current.data, null, 2) : "");

  const save = async () => {
    let parsed;
    try {
      parsed = JSON.parse(shown);
    } catch {
      toast.error("El JSON no es válido — revisá comas y comillas");
      return;
    }
    setSaving(true);
    const { error } = await supabase
      .from("site_content")
      .upsert(
        { section_key: activeSection, locale, data: parsed },
        { onConflict: "section_key,locale" }
      );
    setSaving(false);
    if (error) {
      toast.error(`No se pudo guardar: ${error.message}`);
      return;
    }
    logAction(
      "update_site_content",
      "site_content",
      `${activeSection}:${locale}`,
      current?.data,
      parsed
    );
    toast.success(`Sección "${activeSection}" (${locale}) guardada`);
    setDraft(null);
    setRefresh((k) => k + 1);
  };

  if (!rows) {
    return (
      <p className="font-serif text-earth-brown/60 animate-pulse tracking-widest uppercase text-sm">
        Cargando textos…
      </p>
    );
  }

  return (
    <div>
      <h1 className="font-serif text-3xl text-earth-brown mb-2">Textos del sitio</h1>
      <p className="text-sm text-earth-brown/60 font-light mb-8 max-w-2xl">
        Cada sección guarda sus textos como JSON por idioma. Editá los valores (lo que
        está a la derecha de los dos puntos) sin cambiar los nombres de las claves.
      </p>

      {rows.length === 0 ? (
        <p className="text-earth-brown/50 font-light">
          Sin secciones — ejecutá <code>npm run seed</code> para importar translations.js
        </p>
      ) : (
        <>
          <div className="flex flex-wrap gap-4 mb-6">
            <select
              value={activeSection}
              onChange={(e) => {
                setSection(e.target.value);
                setDraft(null);
              }}
              className="admin-input max-w-xs"
            >
              {sections.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <div className="flex border border-sand-light bg-white">
              {LOCALES.map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLocale(l);
                    setDraft(null);
                  }}
                  className={`px-5 py-2 text-xs uppercase tracking-widest transition-colors ${
                    locale === l
                      ? "bg-olive-green text-cream"
                      : "text-earth-brown/60 hover:text-earth-brown"
                  }`}
                >
                  {LOCALE_LABELS[l]}
                </button>
              ))}
            </div>
          </div>

          {!current && (
            <p className="text-earth-brown/50 font-light text-sm mb-3">
              Esta sección todavía no existe en {LOCALE_LABELS[locale]} — se creará al
              guardar.
            </p>
          )}
          <textarea
            value={shown}
            onChange={(e) => setDraft(e.target.value)}
            rows={22}
            spellCheck={false}
            className="w-full border border-sand-light bg-white p-4 text-sm font-mono text-earth-brown focus:outline-none focus:border-olive-green resize-y"
          />
          <div className="flex justify-end mt-4">
            <button
              onClick={save}
              disabled={saving || !activeSection}
              className="flex items-center gap-2 px-8 py-2.5 text-xs uppercase tracking-widest bg-olive-green text-cream hover:bg-earth-brown transition-colors disabled:opacity-50"
            >
              <Save size={14} />
              {saving ? "Guardando…" : "Guardar sección"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
