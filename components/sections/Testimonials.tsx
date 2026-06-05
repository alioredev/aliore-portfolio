"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { testimonials, testimonialsAlt, Testimonial } from "@/lib/data";

// ── Star rating ──────────────────────────────────────────────────────────────
function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M6 1l1.236 2.506 2.764.402-2 1.949.472 2.752L6 7.506l-2.472 1.103.472-2.752-2-1.949 2.764-.402z"
            fill={i < count ? "var(--primary)" : "var(--border2, #2a2a2a)"}
          />
        </svg>
      ))}
    </div>
  );
}

// ── Single testimonial card ──────────────────────────────────────────────────
function TestimonialCard({ t: testimonial }: { t: Testimonial }) {
  const locale = useLocale();

  const text =
    locale === "fa" && testimonial.textFa
      ? testimonial.textFa
      : locale === "zh" && testimonial.textZh
        ? testimonial.textZh
        : locale === "fr" && testimonial.textFr
          ? testimonial.textFr
          : locale === "de" && testimonial.textDe
            ? testimonial.textDe
            : testimonial.text;

  return (
    <div
      className="flex-shrink-0 flex flex-col gap-4 p-6 border"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
        width: "320px",
        borderRadius: "2px",
      }}
    >
      {/* Stars */}
      <Stars count={testimonial.rating} />

      {/* Quote */}
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: "var(--text-muted)", lineHeight: 1.75 }}
      >
        &ldquo;{text}&rdquo;
      </p>

      {/* Author */}
      <div
        className="flex items-center gap-3 pt-3 border-t"
        style={{ borderColor: "var(--border)" }}
      >
        {/* Avatar — initials */}
        <div
          className="flex-shrink-0 w-9 h-9 flex items-center justify-center text-xs font-medium"
          style={{
            background: "rgba(201,169,110,0.12)",
            border: "1px solid rgba(201,169,110,0.25)",
            color: "var(--primary)",
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.04em",
          }}
        >
          {testimonial.avatar}
        </div>
        <div>
          <p
            className="text-sm font-medium leading-tight"
            style={{ color: "var(--text)" }}
          >
            {testimonial.name}
          </p>
          <p
            className="text-xs leading-tight mt-0.5"
            style={{
              color: "var(--text-muted)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Infinite scrolling track ─────────────────────────────────────────────────
function ScrollTrack({
  items,
  reversed = false,
}: {
  items: Testimonial[];
  reversed?: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);
  const SPEED = 0.4; // px per frame
  const GAP = 20; // gap between cards in px

  // Triple the testimonials for a smoother endless loop
  const trackItems = [...items, ...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cardWidth = 320 + GAP;
    const totalWidth = cardWidth * items.length;

    const animate = () => {
      posRef.current += reversed ? -SPEED : SPEED;

      // Loop seamlessly
      if (!reversed && posRef.current >= totalWidth)
        posRef.current -= totalWidth;
      if (reversed && posRef.current <= -totalWidth)
        posRef.current += totalWidth;

      track.style.transform = `translateX(${reversed ? posRef.current : -posRef.current}px)`;
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [reversed, items.length]);

  return (
    <div
      className="overflow-hidden"
      style={{
        direction: "ltr",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        ref={trackRef}
        className="flex"
        style={{ direction: "ltr", gap: `${GAP}px`, willChange: "transform" }}
      >
        {trackItems.map((item, i) => (
          <TestimonialCard key={`${item.id}-${i}`} t={item} />
        ))}
      </div>
    </div>
  );
}

// ── Section ─────────────────────────────────────────────────────────────────
export default function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section
      id="testimonials"
      className="section-padding px-4 sm:px-6 md:px-10 lg:px-14 overflow-hidden"
    >
      {/* Heading */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-14 max-w-6xl mx-auto mb-14">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.18em] uppercase mb-4"
          style={{
            color: "var(--primary)",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          — {t("label")}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl md:text-5xl font-normal leading-tight"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "var(--text)",
          }}
        >
          {t("heading")}{" "}
          <em className="italic" style={{ color: "var(--text-muted)" }}>
            {t("heading_italic")}
          </em>
        </motion.h2>
      </div>

      {/* Scrolling rows */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-5"
      >
        {/* Row 1 — left to right */}
        <ScrollTrack items={testimonials} reversed={false} />
        {/* Row 2 — right to left */}
        <ScrollTrack items={testimonialsAlt} reversed={true} />
      </motion.div>

      {/* Note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-10 text-xs"
        style={{
          color: "var(--text-muted)",
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "0.06em",
        }}
      >
        {t("note")}
      </motion.p>
    </section>
  );
}
