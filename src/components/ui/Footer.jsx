"use client";
import { useApp } from "@/lib/context";

export default function Footer() {
  const { t } = useApp();
  return (
    <footer className="bg-earth-brown text-sand-light py-12 rounded-t-[50px] mt-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-serif text-2xl mb-4 text-cream">
            Terra Santa Eulalia
          </h2>
          <p className="text-sm opacity-80">{t.hero.subtitle}</p>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-cream">Contact</h3>
          <p className="text-sm opacity-80">info@terrasantaeulalia.com</p>
          <p className="text-sm opacity-80">+34 900 000 000</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs opacity-50">
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
