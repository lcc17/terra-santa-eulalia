"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  HelpCircle,
  FileText,
  LogOut,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/productos", label: "Productos", icon: Package },
  { href: "/admin/faqs", label: "FAQs", icon: HelpCircle },
  { href: "/admin/textos", label: "Textos del sitio", icon: FileText },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const signOut = async () => {
    await supabase?.auth.signOut();
    router.replace("/admin/login");
  };

  const nav = (
    <nav className="flex flex-col h-full">
      <div className="px-6 py-8 border-b border-cream/10">
        <p className="font-serif text-cream text-lg leading-tight">Terra Santa Eulalia</p>
        <p className="text-[10px] uppercase tracking-widest text-sand-light mt-1">
          Panel de administración
        </p>
      </div>
      <ul className="flex-1 px-3 py-6 space-y-1">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                  active
                    ? "bg-olive-green text-cream"
                    : "text-sand-light hover:bg-cream/10 hover:text-cream"
                }`}
              >
                <Icon size={16} />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="px-6 py-4 border-t border-cream/10">
        <p className="text-[10px] leading-relaxed text-sand-light/70 mb-4">
          Para publicar los cambios en la web: GitHub → Actions →{" "}
          <span className="text-sand-light">Deploy to IONOS</span> → Run workflow
          <ExternalLink size={10} className="inline ml-1" />
        </p>
        <button
          onClick={signOut}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-sand-light hover:text-terracotta transition-colors"
        >
          <LogOut size={14} />
          Cerrar sesión
        </button>
      </div>
    </nav>
  );

  return (
    <>
      {/* Barra superior móvil */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-40 bg-earth-brown text-cream flex items-center justify-between px-4 h-14">
        <p className="font-serif">Admin — Terra Santa Eulalia</p>
        <button onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {/* Drawer móvil */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-30 pt-14 bg-earth-brown">{nav}</div>
      )}
      {/* Sidebar fija desktop */}
      <aside className="hidden lg:block fixed inset-y-0 left-0 w-64 bg-earth-brown z-30">
        {nav}
      </aside>
    </>
  );
}
