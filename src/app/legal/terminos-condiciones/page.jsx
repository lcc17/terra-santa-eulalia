"use client";
import { useApp } from "@/lib/context";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { termsConditions } from "@/lib/legal-content";

export default function TermsPage() {
  const { t, lang } = useApp();
  const content = termsConditions[lang] || termsConditions.es;

  return (
    <LegalPageLayout
      title={t?.legal?.termsTitle || "Términos y Condiciones"}
      intro={content.intro}
      sections={content.sections}
    />
  );
}
