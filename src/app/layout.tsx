import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-space-grotesk",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "VICTOR MALLICK // WIZARDEZGG — Tactical Command Deck & Portfolio",
  description:
    "Full-Stack Architect & Autonomous AI Systems Builder (LVL 24 Operator). Creator of MatchPoint AI, Aperture (StudioSpace), Bazar Dor, FitLog, and Smart Expense Tracker.",
  keywords: [
    "Victor Mallick",
    "Wizardezgg",
    "Full-Stack Developer",
    "AI Engineer",
    "Next.js 15",
    "React 19",
    "TypeScript",
    "MatchPoint AI",
    "Aperture StudioSpace",
    "Khulna Bangladesh",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-background font-body-md text-body-md text-on-surface min-h-screen selection:bg-secondary-container selection:text-on-secondary relative overflow-x-hidden">
        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,238,252,0.06),transparent_70%)]" />
        {children}
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#1b1b20",
              border: "1px solid #f4e700",
              color: "#e4e1e8",
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "12px",
            },
          }}
        />
      </body>
    </html>
  );
}
