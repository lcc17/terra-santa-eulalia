import React from "react";
import Link from "next/link";
import Image from "next/image";
import { translations } from "@/lib/translations";
import { ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

export function generateStaticParams() {
  const products = translations.es?.productsList || [];
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetail({ params }) {
  const { id } = await params;
  const products = translations.es?.productsList || [];
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="pt-40 text-center min-h-[50vh] flex flex-col justify-center items-center">
        <h2 className="text-2xl font-serif text-earth-brown mb-4">
          Producto no encontrado
        </h2>
        <Link
          href="/domesticos/productos"
          className="text-olive-green underline"
        >
          Volver al catálogo
        </Link>
      </div>
    );
  }

  // Lógica simple de Stock para el detalle
  const hasStock = product.price && product.price > 0;

  return (
    <section className="min-h-screen bg-cream/30 text-earth-brown font-sans">
      {/* ESPACIO HEADER (Padding superior para salvar el Navbar fijo) */}
      <div className="pt-28 lg:pt-36"></div>

      {/* BREADCRUMB (Navegación de migas de pan) */}
      <div className="max-w-[1400px] mx-auto px-6 mb-12">
        <nav className="flex items-center text-xs tracking-widest uppercase opacity-60">
          <Link href="/" className="hover:text-olive-green transition-colors">
            Inicio
          </Link>
          <ChevronRight size={12} className="mx-2" />
          <Link
            href="/domesticos/productos"
            className="hover:text-olive-green transition-colors"
          >
            Catálogo
          </Link>
          <ChevronRight size={12} className="mx-2" />
          <span className="font-semibold underline underline-offset-4 decoration-olive-green">
            {product.name}
          </span>
        </nav>
      </div>

      {/* HERO GRID (Layout Principal) */}
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* COLUMNA IZQUIERDA: IMAGEN */}
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/5] bg-white border border-sand-light/20 overflow-hidden shadow-sm">
            <Image
              src={product.img}
              alt={product.name}
              fill
              priority
              className={`object-cover ${!hasStock ? "grayscale opacity-90" : ""}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Badge de estado si no hay stock */}
            {!hasStock && (
              <div className="absolute inset-0 flex items-center justify-center bg-cream/50">
                <span className="bg-earth-brown text-cream px-6 py-3 text-xl font-serif tracking-widest">
                  PRÓXIMAMENTE
                </span>
              </div>
            )}
          </div>
        </div>

        {/* COLUMNA DERECHA: INFO PRINCIPAL */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="text-xs font-bold tracking-widest uppercase text-olive-green mb-2">
            {product.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-serif mb-4 leading-tight text-earth-brown">
            {product.name}
          </h1>

          <p className="italic text-olive-green mb-6 opacity-80 text-lg">
            Cosmética vegetal · {product.type || "Natural & Orgánica"}
          </p>

          {/* Precio (Si existe) */}
          {hasStock && (
            <div className="text-3xl font-light mb-6 text-earth-brown">
              {product.price.toFixed(2)}€
            </div>
          )}

          <p className="leading-relaxed opacity-80 max-w-xl text-lg font-light mb-8">
            {product.desc}
          </p>

          <div className="mt-8 border-t border-sand-light pt-8">
            <Link href="/contact">
              <Button
                variant="primary"
                className={`px-12 h-14 text-xs uppercase tracking-widest shadow-none flex items-center justify-center
                  ${hasStock ? "hover:bg-earth-brown" : "bg-sand-light text-earth-brown cursor-not-allowed opacity-70"}`}
              >
                {hasStock
                  ? "Solicitar información / Diagnóstico"
                  : "Avísame cuando esté disponible"}
              </Button>
            </Link>
            <p className="text-[10px] opacity-50 mt-3 text-center md:text-left max-w-xs">
              {hasStock
                ? "Al hacer clic, contactarás con tienda para confirmar recogida en C/ Provença 213."
                : "Te contactaremos cuando recibamos nuevo stock artesanal."}
            </p>
          </div>
        </div>
      </div>

      {/* INFORMACIÓN EXTENDIDA – BLOQUES VERTICALES (Diseño solicitado) */}
      <div className="max-w-[1000px] mx-auto px-6 mt-32 space-y-24 pb-40">
        {product.ingredients && (
          <InfoBlock title="Ingredientes (INCI)">
            <span className="italic">{product.ingredients}</span>
          </InfoBlock>
        )}

        {product.usage && (
          <InfoBlock title="Modo de empleo">{product.usage}</InfoBlock>
        )}

        {product.precautions && (
          <InfoBlock title="Precauciones">{product.precautions}</InfoBlock>
        )}

        <InfoBlock title="Origen & Elaboración">
          Elaborado artesanalmente en{" "}
          {product.origin || "nuestros laboratorios"}. Fórmulas vegetales puras,
          respetando los ciclos de la tierra, sin oxidantes ni químicos
          blanqueadores.
        </InfoBlock>
      </div>
    </section>
  );
}

// Subcomponente Auxiliar para los bloques de texto
function InfoBlock({ title, children }) {
  return (
    <div className="border-t border-sand-light pt-12">
      <h2 className="font-serif text-lg text-olive-green uppercase tracking-widest mb-6">
        {title}
      </h2>
      <p className="leading-8 text-earth-brown/80 max-w-3xl text-lg font-light">
        {children}
      </p>
    </div>
  );
}
