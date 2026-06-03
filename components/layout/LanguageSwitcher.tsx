"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const LOCALES = [
  { code: "en", label: "EN", full: "English",    flag: "🇬🇧" },
  { code: "fa", label: "FA", full: "فارسی",      flag: "🇮🇷" },
  { code: "zh", label: "ZH", full: "中文",        flag: "🇨🇳" },
  { code: "fr", label: "FR", full: "Français",   flag: "🇫🇷" },
  { code: "de", label: "DE", full: "Deutsch",    flag: "🇩🇪" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const switchLocale = (next: string) => {
    if (next === locale) { setOpen(false); return; }
    const newPath = pathname.replace(`/${locale}`, `/${next}`);
    router.push(newPath);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-1.5 px-2.5 py-1.5 border text-xs transition-colors duration-200"
        style={{
          borderColor: open ? "var(--primary)" : "var(--border)",
          color: open ? "var(--primary)" : "var(--text-muted)",
          background: "transparent",
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "0.08em",
          minWidth: "52px",
        }}
      >
        <span>{current.flag}</span>
        <span>{current.label}</span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          width="8" height="8" viewBox="0 0 8 8" fill="currentColor"
        >
          <path d="M4 6L0.5 2h7L4 6z"/>
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-1 border overflow-hidden z-50"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
              minWidth: "130px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            {LOCALES.map((l) => (
              <button
                key={l.code}
                onClick={() => switchLocale(l.code)}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 text-xs transition-colors duration-150 text-left"
                style={{
                  background: l.code === locale ? "rgba(201,169,110,0.08)" : "transparent",
                  color: l.code === locale ? "var(--primary)" : "var(--text-muted)",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.06em",
                  borderLeft: l.code === locale ? "2px solid var(--primary)" : "2px solid transparent",
                }}
                onMouseEnter={(e) => {
                  if (l.code !== locale) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                }}
                onMouseLeave={(e) => {
                  if (l.code !== locale) (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <span>{l.flag}</span>
                <span>{l.label}</span>
                <span className="ml-auto opacity-50 text-xs" style={{ fontFamily: "inherit" }}>{l.full}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
