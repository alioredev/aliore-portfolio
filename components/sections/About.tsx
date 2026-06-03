"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { stats, siteConfig } from "@/lib/data";
import dynamic from "next/dynamic";

const FloatingGeometry = dynamic(() => import("@/components/three/FloatingGeometry"), { ssr: false });

function StatCard({ value, labelKey, index }: { value: string; labelKey: string; index: number }) {
  const t = useTranslations();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(value.replace(/\D/g, ""), 10);
    const suffix = value.replace(/[0-9]/g, "");
    if (isNaN(num)) { setDisplayed(value); return; }
    let s = 0;
    const step = 800 / num;
    const timer = setInterval(() => {
      s++;
      setDisplayed(`${s}${suffix}`);
      if (s >= num) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="p-6 border flex flex-col gap-1"
      style={{ background: "var(--surface)", borderColor: "var(--primary-muted)" }}
    >
      <span className="text-3xl font-medium" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--primary)" }}>
        {displayed}
      </span>
      <span className="text-sm" style={{ color: "var(--text-muted)" }}>{t(labelKey)}</span>
    </motion.div>
  );
}

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="section-padding px-6 md:px-12 max-w-6xl mx-auto relative">
      {/* Subtle 3D floaters in background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <FloatingGeometry />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs tracking-[0.18em] uppercase mb-4 relative z-10"
        style={{ color: "var(--primary)", fontFamily: "'JetBrains Mono', monospace" }}
      >
        — {t("label")}
      </motion.p>

      <div className="grid md:grid-cols-2 gap-16 items-start relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-normal leading-snug mb-8"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--text)" }}>
            {t("heading")}{" "}
            <em className="italic" style={{ color: "var(--text-muted)" }}>{t("heading_italic")}</em>
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
            {t("bio")}
          </p>
          <div className="flex gap-6">
            {[{ label: t("github"), href: siteConfig.github }, { label: t("linkedin"), href: siteConfig.linkedin }].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="text-sm transition-colors duration-200 hover:text-primary"
                style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.06em" }}>
                {label} ↗
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.labelKey} value={stat.value} labelKey={stat.labelKey} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
