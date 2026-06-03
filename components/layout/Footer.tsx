"use client";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer
      className="border-t py-5 px-4 sm:px-6 md:px-10 lg:px-14
                 flex flex-col sm:flex-row items-center justify-between gap-2 relative z-10"
      style={{ borderColor: "var(--border)" }}
    >
      <p className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}>
        {t("copy")}
      </p>
      <p className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}>
        {t("domain")}
      </p>
    </footer>
  );
}
