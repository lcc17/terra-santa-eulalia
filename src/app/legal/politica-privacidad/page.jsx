"use client";
import { useApp } from "@/lib/context";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { privacyPolicy } from "@/lib/legal-content";

export default function PrivacyPolicyPage() {
  const { t, lang } = useApp();
  const content = privacyPolicy[lang] || privacyPolicy.es;

  return (
    <LegalPageLayout
      title={t?.legal?.privacyTitle || "Política de Privacidad"}
      intro={content.intro}
      sections={content.sections}
    />
  );
}
