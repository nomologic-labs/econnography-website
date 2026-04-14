import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/providers";
import { BackToTop } from "@/components/BackToTop";
import { ThemeToggle } from "@/components/ThemeToggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Econography",
    template: "%s · Econography",
  },
  description: "Editorial economics and finance analysis.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="bg-[#F8FAFC] font-sans text-zinc-900 dark:bg-[#0F1115] dark:text-editorial-ink">
        <Providers>
          <Header />
          <hr className="h-px w-full border-0 bg-slate-200/80 dark:bg-slate-800/70" />
          <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">{children}</main>
          <hr className="h-px w-full border-0 bg-slate-200/80 dark:bg-slate-800/70" />
          <Footer />
          <ThemeToggle />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
