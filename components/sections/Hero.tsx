"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/data";
import Button from "@/components/ui/Button";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden"
    >
      {/* 3D canvas background */}
      <HeroScene />

      {/* Dark gradient at base for text legibility */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
        style={{
          background: "linear-gradient(to top, var(--background), transparent)",
          zIndex: 1,
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative flex flex-col items-center gap-5 max-w-4xl"
        style={{ zIndex: 2 }}
      >
        <motion.p
          variants={item}
          className="text-xs tracking-[0.2em] uppercase px-4 py-1.5 border border-dashed"
          style={{
            color: "var(--primary)",
            fontFamily: "'JetBrains Mono', monospace",
            borderColor: "rgba(201,169,110,0.3)",
            background: "rgba(201,169,110,0.05)",
          }}
        >
          {t("role")}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-normal leading-none tracking-tight"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(3.2rem, 9vw, 7.5rem)",
            color: "var(--hero-name)",
            letterSpacing: "-0.02em",
            textShadow: "0 0 80px rgba(201,169,110,0.12)",
          }}
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl font-light max-w-lg"
          style={{ color: "var(--text-muted)" }}
        >
          {t("tagline")}
        </motion.p>

        <motion.p
          variants={item}
          className="text-sm tracking-[0.3em] italic"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "var(--primary)",
            opacity: 0.75,
          }}
        >
          — {t("brand")}
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap gap-4 justify-center mt-2"
        >
          <Button href="#projects" variant="primary">
            {t("cta_projects")}
          </Button>
          <Button href="#contact" variant="ghost">
            {t("cta_contact")}
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 2 }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <span
            className="text-xs tracking-[0.15em]"
            style={{
              color: "var(--text-muted)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {t("scroll")}
          </span>
          <svg
            width="14"
            height="22"
            viewBox="0 0 14 22"
            fill="none"
            style={{ color: "var(--text-muted)" }}
          >
            <rect
              x="1"
              y="1"
              width="12"
              height="20"
              rx="6"
              stroke="currentColor"
              strokeWidth="1"
            />
            <motion.circle
              cx="7"
              cy="7"
              r="2.5"
              fill="currentColor"
              animate={{ cy: [7, 14, 7] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
