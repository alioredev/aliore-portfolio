"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/data";
import LanguageSwitcher from "./LanguageSwitcher";
import LogoMark from "./LogoMark";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 40);
    if (!menuOpen) setHidden(latest > prev && latest > 100);
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { label: t("about"), href: "#about" },
    { label: t("projects"), href: "#projects" },
    { label: t("skills"), href: "#skills" },
    { label: t("contact"), href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        animate={{ y: hidden && !menuOpen ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between
                   px-4 sm:px-6 md:px-10 lg:px-14 py-3 sm:py-4 md:py-5"
        style={{
          background: scrolled
            ? "rgba(var(--bg-rgb, 8,8,8),0.88)"
            : "transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--border)"
            : "1px solid transparent",
          transition: "background 0.4s, border-color 0.4s",
        }}
      >
        {/* ── Logo wordmark ── */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 sm:gap-3 group"
          aria-label="Aliore home"
        >
          {/* Logo mark — swap to your image in components/layout/LogoMark.tsx */}
          <div
            className="transition-transform duration-300 group-hover:scale-105 flex-shrink-0"
            style={{
              width: "clamp(44px, 8vw, 84px)",
              height: "clamp(44px, 8vw, 84px)",
            }}
          >
            <LogoMark size={72} />
          </div>

          {/* Wordmark */}
          <span
            className="tracking-wider italic leading-none"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "var(--primary)",
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            }}
          >
            aliore
          </span>
        </motion.a>

        {/* ── Desktop nav ── */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="hidden md:flex items-center gap-6 lg:gap-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm group transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "var(--text-muted)")
              }
            >
              {link.label}
              <span
                className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                style={{ background: "var(--primary)" }}
              />
            </a>
          ))}

          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-4 py-2 border transition-all duration-200"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-muted)",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.06em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--primary)";
              (e.currentTarget as HTMLElement).style.color = "var(--primary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--border)";
              (e.currentTarget as HTMLElement).style.color =
                "var(--text-muted)";
            }}
          >
            {t("resume")}
          </a>

          <ThemeToggle />
          <LanguageSwitcher />
        </motion.div>

        {/* ── Mobile right controls ── */}
        <div className="md:hidden flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            className="flex flex-col gap-1.5 p-1.5 ml-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={
                  menuOpen
                    ? i === 0
                      ? { rotate: 45, y: 7 }
                      : i === 1
                        ? { opacity: 0 }
                        : { rotate: -45, y: -7 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                className="block w-5 h-px"
                style={{ background: "var(--text)" }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 flex flex-col pt-20 sm:pt-24 px-6 sm:px-8 pb-12 md:hidden"
            style={{ background: "var(--surface)" }}
          >
            <div className="flex flex-col gap-6 sm:gap-7">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                  onClick={() => setMenuOpen(false)}
                  className="font-normal leading-tight"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    color: "var(--text)",
                    fontSize: "clamp(1.6rem, 6vw, 2.2rem)",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <motion.a
              href={siteConfig.resumeUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto text-sm border w-fit px-5 py-3"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-muted)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {t("resume")}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
