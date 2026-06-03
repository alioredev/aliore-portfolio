import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

export const metadata: Metadata = {
  title: "Ali Gholami — Web Designer & AI Specialist | Aliore",
  description:
    "Personal portfolio of Ali Gholami. Web designer and AI specialist building intelligent digital experiences. Available for freelance projects worldwide.",
  keywords: ["web designer", "AI specialist", "frontend developer", "Next.js", "React", "Python", "aliore", "طراح وب", "هوش مصنوعی"],
  metadataBase: new URL("https://aliore.ir"),
  alternates: { canonical: "https://aliore.ir" },
  openGraph: {
    title: "Ali Gholami — Aliore",
    description: "Web Designer & AI Specialist",
    url: "https://aliore.ir",
    siteName: "Aliore",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

const RTL_LOCALES = ["fa", "ar", "he"];
type Locale = "en" | "fa" | "zh" | "fr" | "de";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) notFound();

  const messages = await getMessages();
  const dir = RTL_LOCALES.includes(locale) ? "rtl" : "ltr";
  const isPersian = locale === "fa";
  const isChinese = locale === "zh";

  const googleFonts = [
    "Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500",
    "DM+Sans:wght@300;400;500",
    "JetBrains+Mono:wght@400;500",
    isPersian ? "Vazirmatn:wght@300;400;500;700" : null,
    isChinese ? "Noto+Sans+SC:wght@300;400;500" : null,
  ].filter(Boolean).join("&family=");

  return (
    <html lang={locale} dir={dir}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href={`https://fonts.googleapis.com/css2?family=${googleFonts}&display=swap`}
          rel="stylesheet"
        />
      </head>
      <body style={{
        fontFamily: isPersian
          ? "'Vazirmatn', Tahoma, sans-serif"
          : isChinese
          ? "'Noto Sans SC', 'DM Sans', system-ui, sans-serif"
          : "'DM Sans', system-ui, sans-serif",
      }}>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
