"use client";
import { motion } from "framer-motion";

interface Props { label: string; title: string; titleItalic?: string; }

export default function SectionHeading({ label, title, titleItalic }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-16"
    >
      <p className="text-xs font-medium tracking-[0.18em] uppercase mb-4"
        style={{ color: "var(--primary)", fontFamily: "'JetBrains Mono', monospace" }}>
        — {label}
      </p>
      <h2 className="text-4xl md:text-5xl font-normal leading-tight"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--text)" }}>
        {title}
        {titleItalic && (
          <> <em className="italic" style={{ color: "var(--text-muted)" }}>{titleItalic}</em></>
        )}
      </h2>
    </motion.div>
  );
}
