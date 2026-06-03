import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ali Gholami — Web Designer & AI Specialist | Aliore",
  description:
    "Personal portfolio of Ali Gholami. Web designer and AI specialist building intelligent digital experiences. Available for freelance projects worldwide.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
