"use client";
import { useApp } from "@/lib/context";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { legalNotice } from "@/lib/legal-content";

export default function LegalNoticePage() {
  const { t, lang } = useApp();
  const content = legalNotice[lang] || legalNotice.es;

  return (
    <LegalPageLayout
      title={t?.legal?.noticeTitle || "Aviso Legal"}
      intro={content.intro}
      sections={content.sections}
    />
  );
}
