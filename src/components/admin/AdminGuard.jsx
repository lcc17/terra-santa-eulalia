"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabase";
import { checkIsAdmin } from "@/lib/adminApi";
import NotConfigured from "./NotConfigured";

// Guardia client-side del panel. La barrera de seguridad real es RLS:
// aunque este guard se manipule, la base de datos deniega las escrituras.
export default function AdminGuard({ children }) {
  const router = useRouter();
  const [status, setStatus] = useState(supabase ? "checking" : "unconfigured");

  useEffect(() => {
    if (!supabase) return;
    let cancelled = false;

    async function verify() {
      const { session, isAdmin } = await checkIsAdmin();
      if (cancelled) return;
      if (!session) {
        router.replace("/admin/login");
        return;
      }
      if (!isAdmin) {
        await supabase.auth.signOut();
        toast.error("Esta cuenta no tiene permisos de administrador");
        router.replace("/admin/login");
        return;
      }
      setStatus("ok");
    }
    verify();

    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") router.replace("/admin/login");
    });
    return () => {
      cancelled = true;
      sub.subscription.unsubscribe();
    };
  }, [router]);

  if (status === "unconfigured") return <NotConfigured />;
  if (status !== "ok") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-serif text-earth-brown/60 animate-pulse tracking-widest uppercase text-sm">
          Verificando acceso…
        </p>
      </div>
    );
  }
  return children;
}
