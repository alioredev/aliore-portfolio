"use client";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Project } from "@/lib/data";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const t = useTranslations("projects");
  const locale = useLocale();

  const desc =
    locale === "fa" ? project.descriptionFa :
    locale === "zh" ? project.descriptionZh :
    locale === "fr" ? project.descriptionFr :
    locale === "de" ? project.descriptionDe :
    project.description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.012, transition: { duration: 0.2 } }}
      className="group relative p-6 sm:p-8 border flex flex-col gap-5 transition-colors duration-300"
      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--primary-muted)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
    >
      {/* Index */}
      <span className="absolute top-5 left-6 text-xs"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--primary)", opacity: 0.55, letterSpacing: "0.12em" }}>
        {project.id}
      </span>

      {/* Content */}
      <div className="mt-5">
        <h3 className="text-xl sm:text-2xl font-normal mb-2.5 leading-snug"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--text)" }}>
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {desc}
        </p>
      </div>

      {/* Stack */}
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="px-2.5 py-1 text-xs border rounded"
            style={{ fontFamily: "'JetBrains Mono', monospace", background: "var(--background)", borderColor: "var(--border)", color: "var(--text-muted)" }}>
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 mt-auto pt-3 border-t" style={{ borderColor: "var(--border)" }}>
        {[
          { label: t("live"),   href: project.live },
          { label: t("github"), href: project.github },
        ].map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer"
            className="text-xs px-4 py-2 border transition-all duration-200"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--primary)";
              (e.currentTarget as HTMLElement).style.color = "var(--primary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
            }}>
            {label}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
