"use client";

/**
 * LogoMark — renders your uploaded logo if /public/logo.png exists,
 * otherwise falls back to the SVG diamond mark.
 *
 * To use your own logo:
 *   1. Drop your image into /public/logo.png (or .svg / .webp)
 *   2. Change USE_CUSTOM_LOGO to true below
 */

const USE_CUSTOM_LOGO = true; // ← set to true after adding your logo file

export default function LogoMark({
  size = 36,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  if (USE_CUSTOM_LOGO) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logo.png"
        alt="Aliore logo"
        width={size}
        height={size}
        className={className}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    );
  }

  // Default SVG diamond mark
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: "100%", height: "100%" }}
    >
      <path
        d="M20 2 L38 20 L20 38 L2 20 Z"
        stroke="var(--primary)"
        strokeWidth="1.2"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M20 8 L32 20 L20 32 L8 20 Z"
        stroke="var(--primary)"
        strokeWidth="0.8"
        fill="none"
        opacity="0.5"
      />
      <circle cx="20" cy="20" r="2.5" fill="var(--primary)" opacity="0.9" />
      <path d="M20 2 L20 6" stroke="var(--primary)" strokeWidth="1.5" />
      <path d="M38 20 L34 20" stroke="var(--primary)" strokeWidth="1.5" />
      <path d="M20 38 L20 34" stroke="var(--primary)" strokeWidth="1.5" />
      <path d="M2 20 L6 20" stroke="var(--primary)" strokeWidth="1.5" />
    </svg>
  );
}
