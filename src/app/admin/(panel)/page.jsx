"use client";
import { useEffect, useState } from "react";
import { Package, PackageX, HelpCircle, FileText } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { supabase } from "@/lib/supabase";
import { contentGeneratedAt } from "@/lib/content";

const CHART_COLORS = ["#9A8F3D", "#B87A5E", "#C4B480", "#4A3A24", "#D8CC9A", "#7A7030"];

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function load() {
      const [productsRes, faqsRes, sectionsRes, logsRes] = await Promise.all([
        supabase.from("products").select("active, i18n"),
        supabase.from("faqs").select("id", { count: "exact", head: true }),
        supabase.from("site_content").select("id", { count: "exact", head: true }),
        supabase
          .from("admin_logs")
          .select("action, table_name, record_id, created_at")
          .order("created_at", { ascending: false })
          .limit(8),
      ]);

      const products = productsRes.data || [];
      const byCategory = {};
      for (const p of products.filter((p) => p.active)) {
        const cat = p.i18n?.es?.category || "Sin categoría";
        byCategory[cat] = (byCategory[cat] || 0) + 1;
      }

      setStats({
        productsActive: products.filter((p) => p.active).length,
        productsInactive: products.filter((p) => !p.active).length,
        faqs: faqsRes.count ?? 0,
        sections: sectionsRes.count ?? 0,
        categoryData: Object.entries(byCategory).map(([name, value]) => ({
          name,
          value,
        })),
        logs: logsRes.data || [],
      });
    }
    load();
  }, []);

  if (!stats) {
    return (
      <p className="font-serif text-earth-brown/60 animate-pulse tracking-widest uppercase text-sm">
        Cargando dashboard…
      </p>
    );
  }

  const cards = [
    { label: "Productos activos", value: stats.productsActive, icon: Package },
    { label: "Productos inactivos", value: stats.productsInactive, icon: PackageX },
    { label: "FAQs", value: stats.faqs, icon: HelpCircle },
    { label: "Secciones de texto", value: stats.sections, icon: FileText },
  ];

  return (
    <div>
      <h1 className="font-serif text-3xl text-earth-brown mb-2">Dashboard</h1>
      <p className="text-sm text-earth-brown/60 font-light mb-10">
        {contentGeneratedAt
          ? `Último contenido horneado en la web: ${new Date(contentGeneratedAt).toLocaleString("es-ES")}`
          : "La web todavía sirve el contenido local (translations.js) — ejecutá el deploy para hornear la base de datos."}
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {cards.map(({ label, value, icon: Icon }) => (
          <div key={label} className="bg-white border border-sand-light p-6">
            <Icon size={18} className="text-olive-green mb-3" />
            <p className="text-3xl font-serif text-earth-brown">{value}</p>
            <p className="text-[10px] uppercase tracking-widest text-sand-dark mt-1">
              {label}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white border border-sand-light p-6">
          <h2 className="font-serif text-lg text-earth-brown mb-4">
            Productos por categoría
          </h2>
          {stats.categoryData.length === 0 ? (
            <p className="text-sm text-earth-brown/50 font-light">
              Sin datos — ejecutá <code>npm run seed</code> para cargar el catálogo.
            </p>
          ) : (
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={stats.categoryData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={50}
                    outerRadius={90}
                  >
                    {stats.categoryData.map((entry, i) => (
                      <Cell key={entry.name} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        <div className="bg-white border border-sand-light p-6">
          <h2 className="font-serif text-lg text-earth-brown mb-4">
            Actividad reciente
          </h2>
          {stats.logs.length === 0 ? (
            <p className="text-sm text-earth-brown/50 font-light">
              Todavía no hay actividad registrada.
            </p>
          ) : (
            <ul className="divide-y divide-sand-light/40">
              {stats.logs.map((log, i) => (
                <li key={i} className="py-3 flex justify-between gap-4 text-sm">
                  <span className="text-earth-brown/80">
                    <span className="text-olive-green">{log.action}</span>
                    {log.table_name ? ` · ${log.table_name}` : ""}
                    {log.record_id ? ` · ${log.record_id}` : ""}
                  </span>
                  <span className="text-earth-brown/40 whitespace-nowrap text-xs">
                    {new Date(log.created_at).toLocaleString("es-ES")}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
