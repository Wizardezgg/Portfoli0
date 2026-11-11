"use client";

import React from "react";
import { toast } from "sonner";
import { downloadVictorResumePdf } from "@/utils/resume";
import SkillBadge from "@/components/SkillBadge";

interface Sector04Props {
  onSound: (freq?: number, type?: OscillatorType, duration?: number) => void;
  onAddRunes: (amount: number) => void;
}

export default function Sector04OperatorDossier({
  onSound,
  onAddRunes,
}: Sector04Props) {
  const handleDownloadResume = () => {
    onSound(880, "triangle", 0.12);
    onAddRunes(100);
    downloadVictorResumePdf();
    toast.success("PDF RESUME DOWNLOADED (+100 RUNES)");
  };

  return (
    <div className="flex flex-col justify-between w-full max-w-6xl mx-auto px-gutter md:px-margin py-3 lg:py-4 lg:h-[calc(100vh-5rem)] lg:overflow-hidden gap-3">
      {/* Compact Top Operator Bar (Fits Header + Bio + Socials + Resume CTA in one sleek card) */}
      <div className="bg-surface-container-low px-4 py-3 rounded-xl border border-surface-variant/30 flex flex-col lg:flex-row lg:items-center justify-between gap-3 shrink-0">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 min-w-0">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border border-primary-container/60 shrink-0">
            <img
              src="https://avatars.githubusercontent.com/u/298356245?v=4"
              alt="Victor Mallick"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-label-sm text-[10px] uppercase tracking-widest text-primary-container font-bold">
                SECTOR 04 // OPERATOR DOSSIER
              </span>
              <span className="px-2 py-0.5 bg-surface-container text-secondary font-label-sm text-[9px] font-bold uppercase rounded">
                B.SC. CSE &apos;26 • KHULNA, BD
              </span>
            </div>
            <h1 className="font-headline-md text-headline-md text-primary uppercase leading-tight mt-0.5">
              VICTOR MALLICK{" "}
              <span className="text-on-surface-variant font-body-sm text-body-sm normal-case font-normal hidden xl:inline">
                — Full-Stack Software Engineer &amp; AI Web Systems Builder
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
              <a
                href="https://www.linkedin.com/in/victor-mallick"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-0.5 bg-surface-container hover:bg-surface-container-high rounded font-label-sm text-[10px] text-primary flex items-center gap-1.5 border border-surface-variant/40 transition-colors"
              >
                <svg className="w-3 h-3 fill-[#0A66C2]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>LINKEDIN</span>
              </a>
              <a
                href="https://github.com/Wizardezgg"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-0.5 bg-surface-container hover:bg-surface-container-high rounded font-label-sm text-[10px] text-primary flex items-center gap-1.5 border border-surface-variant/40 transition-colors"
              >
                <img
                  src="https://cdn.simpleicons.org/github/ffffff"
                  alt="GitHub"
                  className="w-3 h-3"
                />
                <span>@WIZARDEZGG</span>
              </a>
              <a
                href="https://www.facebook.com/wizardezgg"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-0.5 bg-surface-container hover:bg-surface-container-high rounded font-label-sm text-[10px] text-primary flex items-center gap-1.5 border border-surface-variant/40 transition-colors"
              >
                <img
                  src="https://cdn.simpleicons.org/facebook/0866FF"
                  alt="Facebook"
                  className="w-3 h-3"
                />
                <span>FACEBOOK</span>
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("w1zard_gg");
                  onSound(800, "triangle", 0.09);
                  toast.success("DISCORD TAG COPIED: w1zard_gg");
                }}
                className="px-2.5 py-0.5 bg-surface-container hover:bg-surface-container-high rounded font-label-sm text-[10px] text-secondary flex items-center gap-1.5 border border-surface-variant/40 transition-colors"
              >
                <img
                  src="https://cdn.simpleicons.org/discord/5865F2"
                  alt="Discord"
                  className="w-3 h-3"
                />
                <span>w1zard_gg</span>
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={handleDownloadResume}
          className="hud-btn-hover px-4 py-2.5 bg-primary-container text-on-primary-container font-label-md text-label-md font-bold uppercase rounded-lg flex items-center justify-center gap-2 hover:bg-secondary-container hover:text-on-secondary shrink-0 w-full sm:w-auto"
        >
          <span className="material-symbols-outlined text-[16px]">
            picture_as_pdf
          </span>
          <span>DOWNLOAD ATS RESUME (PDF)</span>
        </button>
      </div>

      {/* Full-Screen 2x2 Tech Loadout Grid (Fits 100% in viewport without scrolling on desktop) */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 min-h-0">
        {/* 01 Frontend */}
        <div className="bg-surface-container-low p-4 lg:p-5 rounded-xl flex flex-col justify-center gap-3 border border-surface-variant/30 hud-card-hover">
          <div className="flex items-center justify-between border-b border-surface-variant/30 pb-2">
            <div className="flex items-center gap-2 font-headline-sm text-headline-sm text-secondary uppercase font-bold">
              <span className="material-symbols-outlined text-[20px]">
                layers
              </span>
              <span>01 // FRONTEND VANGUARD</span>
            </div>
            <span className="font-label-sm text-[9px] text-on-surface-variant uppercase">
              6 MODULES
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js 15 (App Router)",
              "React 19",
              "TypeScript 5",
              "Tailwind CSS",
              "Vite 8",
              "Recharts",
            ].map((s) => (
              <SkillBadge key={s} name={s} size="lg" />
            ))}
          </div>
        </div>

        {/* 02 Backend & DB */}
        <div className="bg-surface-container-low p-4 lg:p-5 rounded-xl flex flex-col justify-center gap-3 border border-surface-variant/30 hud-card-hover">
          <div className="flex items-center justify-between border-b border-surface-variant/30 pb-2">
            <div className="flex items-center gap-2 font-headline-sm text-headline-sm text-primary-container uppercase font-bold">
              <span className="material-symbols-outlined text-[20px]">
                database
              </span>
              <span>02 // BACKEND &amp; CITADEL DB</span>
            </div>
            <span className="font-label-sm text-[9px] text-on-surface-variant uppercase">
              6 MODULES
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Node.js",
              "Express.js",
              "Python FastAPI",
              "PostgreSQL",
              "Supabase (RLS)",
              "MongoDB Atlas",
            ].map((s) => (
              <SkillBadge key={s} name={s} size="lg" />
            ))}
          </div>
        </div>

        {/* 03 AI & Document Engines */}
        <div className="bg-surface-container-low p-4 lg:p-5 rounded-xl flex flex-col justify-center gap-3 border border-surface-variant/30 hud-card-hover">
          <div className="flex items-center justify-between border-b border-surface-variant/30 pb-2">
            <div className="flex items-center gap-2 font-headline-sm text-headline-sm text-secondary uppercase font-bold">
              <span className="material-symbols-outlined text-[20px]">
                auto_awesome
              </span>
              <span>03 // AI &amp; DOCUMENT ENGINES</span>
            </div>
            <span className="font-label-sm text-[9px] text-on-surface-variant uppercase">
              6 MODULES
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Google Gemini Pool",
              "OpenAI Codex",
              "Claude AI",
              "pdfjs-dist",
              "mammoth",
              "jsPDF",
            ].map((s) => (
              <SkillBadge key={s} name={s} size="lg" />
            ))}
          </div>
        </div>

        {/* 04 Security, QA & Cloud */}
        <div className="bg-surface-container-low p-4 lg:p-5 rounded-xl flex flex-col justify-center gap-3 border border-surface-variant/30 hud-card-hover">
          <div className="flex items-center justify-between border-b border-surface-variant/30 pb-2">
            <div className="flex items-center gap-2 font-headline-sm text-headline-sm text-primary-container uppercase font-bold">
              <span className="material-symbols-outlined text-[20px]">
                shield_locked
              </span>
              <span>04 // SECURITY, QA &amp; CLOUD</span>
            </div>
            <span className="font-label-sm text-[9px] text-on-surface-variant uppercase">
              6 MODULES
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Playwright E2E",
              "HTTPOnly JWT",
              "BetterAuth",
              "Vercel",
              "Render",
              "Git & GitHub",
            ].map((s) => (
              <SkillBadge key={s} name={s} size="lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
