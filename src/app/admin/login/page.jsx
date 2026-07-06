"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabase";
import { checkIsAdmin } from "@/lib/adminApi";
import NotConfigured from "@/components/admin/NotConfigured";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!supabase) return;
    checkIsAdmin().then(({ isAdmin }) => {
      if (isAdmin) router.replace("/admin");
    });
  }, [router]);

  if (!supabase) return <NotConfigured />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        toast.error("Credenciales incorrectas");
        return;
      }
      const { isAdmin } = await checkIsAdmin();
      if (!isAdmin) {
        await supabase.auth.signOut();
        toast.error("Esta cuenta no tiene permisos de administrador");
        return;
      }
      router.replace("/admin");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white border border-sand-light p-10"
      >
        <h1 className="font-serif text-2xl text-earth-brown mb-1">Acceso admin</h1>
        <p className="text-xs uppercase tracking-widest text-sand-dark mb-8">
          Terra Santa Eulalia
        </p>
        <label className="block mb-4">
          <span className="text-xs uppercase tracking-widest text-earth-brown/60">
            Email
          </span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full border border-sand-light bg-cream/50 px-4 py-3 text-sm focus:outline-none focus:border-olive-green"
          />
        </label>
        <label className="block mb-8">
          <span className="text-xs uppercase tracking-widest text-earth-brown/60">
            Contraseña
          </span>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full border border-sand-light bg-cream/50 px-4 py-3 text-sm focus:outline-none focus:border-olive-green"
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-olive-green text-cream py-3 text-xs uppercase tracking-widest hover:bg-earth-brown transition-colors disabled:opacity-50"
        >
          {loading ? "Entrando…" : "Entrar"}
        </button>
      </form>
    </div>
  );
}
