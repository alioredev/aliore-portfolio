"use client";
import { motion } from "framer-motion";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
}

export default function Button({ children, href, variant = "primary", className = "", external = false }: ButtonProps) {
  const base = "inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer select-none";
  const variants = {
    primary: "bg-primary text-background hover:opacity-90",
    ghost: "border border-border text-text-base hover:border-primary hover:text-primary bg-transparent",
  };
  const cls = `${base} ${variants[variant]} ${className}`;

  return (
    <motion.a
      href={href}
      className={cls}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </motion.a>
  );
}
