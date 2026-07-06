"use client";

export default function NotConfigured() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-lg bg-white border border-sand-light p-10 text-center">
        <h1 className="font-serif text-2xl text-earth-brown mb-4">
          Supabase sin configurar
        </h1>
        <p className="text-earth-brown/70 font-light leading-relaxed mb-6">
          El panel de administración necesita credenciales reales de Supabase.
          Completá <code className="text-olive-green">NEXT_PUBLIC_SUPABASE_URL</code> y{" "}
          <code className="text-olive-green">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> en{" "}
          <code className="text-olive-green">.env.local</code>.
        </p>
        <p className="text-xs uppercase tracking-widest text-sand-dark">
          Guía completa en supabase/README.md
        </p>
      </div>
    </div>
  );
}
