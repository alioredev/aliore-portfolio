"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

// ── Icon components ──────────────────────────────────────────────────────────
function EmailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1.5" y="3.5" width="13" height="9" rx="1"/>
      <path d="M1.5 5.5l6.5 4 6.5-4"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38v-1.33C3.72 14.46 3.25 13 3.25 13c-.36-.92-.88-1.16-.88-1.16-.72-.49.05-.48.05-.48.8.06 1.22.82 1.22.82.71 1.21 1.86.86 2.31.66.07-.52.28-.86.5-1.06-1.77-.2-3.63-.89-3.63-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82A7.67 7.67 0 0 1 8 4.07c.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.27.82 2.14 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38A8 8 0 0 0 8 0z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
      <path d="M0 1.15C0 .52.54 0 1.2 0h13.6C15.46 0 16 .52 16 1.15v13.7c0 .63-.54 1.15-1.2 1.15H1.2C.54 16 0 15.48 0 14.85V1.15zM4.79 13.5V6.17H2.47V13.5H4.79zm-1.16-8.33a1.35 1.35 0 1 0 0-2.7 1.35 1.35 0 0 0 0 2.7zM13.5 13.5v-4.02c0-2.14-.46-3.79-2.97-3.79-1.2 0-2.01.66-2.34 1.29h-.03V6.17H5.87V13.5h2.32V9.91c0-.98.19-1.93 1.4-1.93 1.2 0 1.21 1.12 1.21 1.99V13.5h2.7z"/>
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 13.982l-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.96.577z"/>
    </svg>
  );
}

function RubikaIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
    </svg>
  );
}

// ── Contact link row ─────────────────────────────────────────────────────────
function ContactRow({
  icon,
  label,
  value,
  href,
  index,
  external = true,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  index: number;
  external?: boolean;
}) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      whileHover={{ x: 5 }}
      className="group flex items-center gap-4 py-3.5 border-b transition-colors duration-200"
      style={{ borderColor: "var(--border)", color: "var(--text-muted)", textDecoration: "none" }}
    >
      {/* Icon */}
      <span className="flex-shrink-0 transition-colors duration-200 group-hover:text-primary w-4"
        style={{ color: "var(--text-muted)" }}>
        {icon}
      </span>

      {/* Label */}
      <span className="text-xs tracking-[0.1em] uppercase flex-shrink-0 w-20"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-muted)" }}>
        {label}
      </span>

      {/* Value */}
      <span className="text-sm flex-1 transition-colors duration-200 group-hover:text-text truncate"
        style={{ color: "var(--text-muted)" }}>
        {value}
      </span>

      {/* Arrow */}
      <motion.span
        className="flex-shrink-0 text-sm transition-colors duration-200 group-hover:text-primary"
        style={{ color: "var(--text-muted)" }}
      >
        →
      </motion.span>
    </motion.a>
  );
}

// ── Main section ─────────────────────────────────────────────────────────────
export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="section-padding px-4 sm:px-6 md:px-10 lg:px-14 max-w-6xl mx-auto border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <SectionHeading label={t("label")} title={t("heading")} titleItalic={t("heading_italic")} />

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* ── Left: links ── */}
        <div>
          <p className="text-base mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {t("subtext")}
          </p>

          <div className="flex flex-col">
            <ContactRow icon={<EmailIcon />}    label={t("email_label")}    value={siteConfig.email}           href={`mailto:${siteConfig.email}`} index={0} external={false} />
            <ContactRow icon={<GitHubIcon />}   label={t("github_label")}   value={siteConfig.githubHandle}    href={siteConfig.github}            index={1} />
            <ContactRow icon={<LinkedInIcon />} label={t("linkedin_label")} value={siteConfig.linkedinHandle}  href={siteConfig.linkedin}          index={2} />
            <ContactRow icon={<TelegramIcon />} label={t("telegram_label")} value={siteConfig.telegramHandle}  href={siteConfig.telegram}          index={3} />
            <ContactRow icon={<RubikaIcon />}   label={t("rubika_label")}   value={siteConfig.rubikaHandle}    href={siteConfig.rubika}            index={4} />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xs mt-8"
            style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.05em" }}
          >
            {t("location")}
          </motion.p>
        </div>

        {/* ── Right: decorative outlined wordmark ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="hidden md:flex flex-col justify-center items-center"
          style={{ minHeight: "340px" }}
        >
          <div className="w-px flex-1" style={{ background: "linear-gradient(to bottom, transparent, var(--border), transparent)" }} />
          <p
            className="py-8 text-center italic leading-none select-none"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(4rem, 8vw, 7rem)",
              color: "transparent",
              WebkitTextStroke: "1px var(--border)",
            }}
          >
            Aliore
          </p>
          <div className="w-px flex-1" style={{ background: "linear-gradient(to bottom, var(--border), transparent)" }} />
        </motion.div>
      </div>
    </section>
  );
}
