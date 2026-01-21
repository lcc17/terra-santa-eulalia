"use client";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { translations } from "../../../../lib/translations";

import { useApp } from "@/lib/context";
import Button from "../../../../components/ui/Button";

export default function ProductDetail() {
  const { id } = useParams();
  const { lang, t } = useApp();

  // Buscar producto en la lista (Simulado)
  const list =
    lang === "es" ? translations.es.productsList : translations.en.productsList;
  const product = list?.find((p) => p.id == id);

  if (!product)
    return <div className="pt-32 text-center">Producto no encontrado</div>;

  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Imagen con forma orgánica */}
        <div className="relative h-[500px] w-full bg-sand-light/50 rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-xl">
          <Image
            src={product.img}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="space-y-6">
          <h1 className="text-5xl font-serif text-earth-brown">
            {product.name}
          </h1>
          <p className="text-xl text-olive-green font-light italic">
            Ritual de tierra para tu cabello
          </p>
          <div className="w-20 h-1 bg-earth-brown mb-6" />
          <p className="text-lg leading-relaxed opacity-80">
            {product.desc} Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed do eiusmod tempor incididunt ut labore.
          </p>

          <div className="pt-8 flex gap-4">
            {/* Botón Contactar solicitado */}
            <Link href="/contact">
              {" "}
              {/* Asumiendo que crearás o tienes ruta de contacto */}
              <Button variant="primary">Contactar para comprar</Button>
            </Link>
            <Link href="/domesticos">
              <Button variant="outline">Volver</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
