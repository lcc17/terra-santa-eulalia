"use client";
import { useApp } from "@/lib/context";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { cookiesPolicy, COOKIES_TABLE } from "@/lib/legal-content";

export default function CookiesPolicyPage() {
  const { t, lang } = useApp();
  const content = cookiesPolicy[lang] || cookiesPolicy.es;
  const purposeLang = lang in { es: 1, en: 1, ca: 1 } ? lang : "es";

  return (
    <LegalPageLayout
      title={t?.legal?.cookiesTitle || "Política de Cookies"}
      intro={content.intro}
      sections={content.sections}
      extra={
        <section className="mt-10">
          <h2 className="font-serif text-earth-brown text-xl md:text-2xl mb-4">
            {lang === "en" ? "Cookies used" : lang === "ca" ? "Cookies utilitzades" : "Cookies utilizadas"}
          </h2>
          <div className="overflow-x-auto rounded-xl border border-sand-light">
            <table className="w-full text-sm">
              <thead className="bg-sand-light/40 text-earth-brown">
                <tr>
                  <th className="text-left px-4 py-3 font-serif font-normal">Cookie</th>
                  <th className="text-left px-4 py-3 font-serif font-normal">
                    {lang === "en" ? "Type" : lang === "ca" ? "Tipus" : "Tipo"}
                  </th>
                  <th className="text-left px-4 py-3 font-serif font-normal">
                    {lang === "en" ? "Duration" : lang === "ca" ? "Durada" : "Duración"}
                  </th>
                  <th className="text-left px-4 py-3 font-serif font-normal">
                    {lang === "en" ? "Purpose" : lang === "ca" ? "Finalitat" : "Finalidad"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {COOKIES_TABLE.map((c, idx) => (
                  <tr
                    key={c.name}
                    className={idx % 2 === 0 ? "bg-white" : "bg-sand-light/10"}
                  >
                    <td className="px-4 py-3 font-mono text-earth-brown">
                      {c.name}
                    </td>
                    <td className="px-4 py-3 text-earth-brown/70">{c.type}</td>
                    <td className="px-4 py-3 text-earth-brown/70">{c.duration}</td>
                    <td className="px-4 py-3 text-earth-brown/70">
                      {c.purpose[purposeLang]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      }
    />
  );
}
