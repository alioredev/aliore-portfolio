"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { skillGroups } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import dynamic from "next/dynamic";

const SkillsOrb = dynamic(() => import("@/components/three/SkillsOrb"), { ssr: false });

export default function Skills() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="section-padding px-6 md:px-12 max-w-6xl mx-auto">
      <SectionHeading label={t("label")} title={t("heading")} titleItalic={t("heading_italic")} />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: categorized skill list */}
        <div className="flex flex-col gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.07 }}
              className="border-t pt-6"
              style={{ borderColor: "var(--border)" }}
            >
              <p className="text-xs tracking-[0.14em] uppercase mb-3"
                style={{ color: "var(--primary)", fontFamily: "'JetBrains Mono', monospace" }}>
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.06 + si * 0.035 }}
                    className="px-3 py-1.5 text-xs border rounded-full"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      background: "var(--surface)",
                      borderColor: "var(--border)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: interactive 3D tag cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
          style={{ height: "420px" }}
        >
          <div
            className="absolute inset-0 rounded-sm border"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
            }}
          />
          <SkillsOrb />
          <p
            className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs"
            style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}
          >
            drag to rotate
          </p>
        </motion.div>
      </div>
    </section>
  );
}
