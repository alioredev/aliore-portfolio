"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { projects, siteConfig } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  const t = useTranslations("projects");
  return (
    <section id="projects" className="section-padding px-6 md:px-12 max-w-6xl mx-auto">
      <SectionHeading label={t("label")} title={t("heading")} titleItalic={t("heading_italic")} />
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 text-center"
      >
        <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
          className="text-sm transition-colors duration-200 hover:text-primary"
          style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}>
          {t("more")}
        </a>
      </motion.div>
    </section>
  );
}
