"use client";

import React, { useState } from "react";
import SkillBadge from "@/components/SkillBadge";

interface Sector02Props {
  onSound: (freq?: number, type?: OscillatorType, duration?: number) => void;
}

export default function Sector02BossCrucibles({ onSound }: Sector02Props) {
  const [activeBoss, setActiveBoss] = useState<1 | 2>(1);
  const [interactivePreview, setInteractivePreview] = useState<boolean>(false);

  const switchBoss = (bossId: 1 | 2) => {
    setActiveBoss(bossId);
    setInteractivePreview(false);
    onSound(bossId === 1 ? 540 : 620, "triangle", 0.09);
  };

  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto px-gutter md:px-margin py-3 lg:py-4 gap-3">
      {/* Clean Header + Boss Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 pb-2.5 border-b border-surface-variant/30">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container font-bold">
            SECTOR 02 // FLAGSHIP PRODUCTION SYSTEMS
          </span>
          <h1 className="font-headline-md sm:text-headline-lg uppercase text-primary mt-0.5">
            BOSS CRUCIBLES
          </h1>
        </div>

        {/* Clean 2-Tab Switcher (Responsive Full-Width on Mobile) */}
        <div className="grid grid-cols-2 sm:flex gap-1 bg-surface-container-lowest p-1 rounded-lg border border-surface-variant/30 w-full sm:w-auto">
          <button
            onClick={() => switchBoss(1)}
            className={`px-3 sm:px-space-md py-1.5 rounded font-label-md text-label-md uppercase transition-all flex items-center justify-center gap-1.5 ${
              activeBoss === 1
                ? "bg-primary-container text-on-primary-container font-bold"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            <span className="material-symbols-outlined text-[15px]">swords</span>
            <span className="truncate">01 // MATCHPOINT AI</span>
          </button>
          <button
            onClick={() => switchBoss(2)}
            className={`px-3 sm:px-space-md py-1.5 rounded font-label-md text-label-md uppercase transition-all flex items-center justify-center gap-1.5 ${
              activeBoss === 2
                ? "bg-primary-container text-on-primary-container font-bold"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            <span className="material-symbols-outlined text-[15px]">hub</span>
            <span className="truncate">02 // APERTURE</span>
          </button>
        </div>
      </div>

      {/* BOSS 01: MATCHPOINT AI */}
      {activeBoss === 1 && (
        <div key="boss-1" className="flex flex-col gap-space-lg animate-hud-enter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg bg-surface-container-low p-space-lg rounded-xl border border-surface-variant/30 items-center">
            <div className="lg:col-span-6 flex flex-col justify-between gap-space-md">
              <div>
                <span className="px-space-xs py-0.5 bg-primary-container/20 text-primary-container font-label-sm text-label-sm font-bold uppercase rounded">
                  MYTHIC TIER // AI &amp; CAREER ENGINE
                </span>
                <h2 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl uppercase text-primary tracking-tight mt-space-xs">
                  MATCHPOINT AI
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                  Autonomous ATS Resume Optimizer, Job Matching Engine &amp; AI
                  Mock Interview Simulator. Streams PDF/DOCX files directly in
                  memory and routes requests across a multi-key Gemini failover
                  pool.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {[
                  "React 19",
                  "Vite",
                  "Tailwind v4",
                  "Node/Express",
                  "Supabase RLS",
                  "Gemini API",
                  "Playwright E2E",
                ].map((t) => (
                  <SkillBadge key={t} name={t} size="sm" />
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                <a
                  className="px-space-lg py-space-sm bg-primary-container text-on-primary-container font-headline-sm text-headline-sm uppercase font-bold flex items-center gap-space-xs [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)] hover:bg-secondary-container hover:text-on-secondary transition-colors"
                  href="https://matchpointai.vercel.app"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    bolt
                  </span>
                  <span>LIVE DEMO</span>
                </a>
                <a
                  className="px-space-md py-space-sm bg-surface-container hover:bg-surface-container-high text-secondary font-label-md text-label-md uppercase font-bold flex items-center gap-space-xs rounded transition-colors"
                  href="https://github.com/victormallick/cse4104-7a-t05-matchpointai"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    code
                  </span>
                  <span>GITHUB REPO</span>
                </a>
                <a
                  className="px-space-md py-space-sm bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary font-label-md text-label-md uppercase flex items-center gap-space-xs rounded transition-colors"
                  href="https://matchpointai.onrender.com/api/health"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px] text-primary-container">
                    vital_signs
                  </span>
                  <span>API HEALTH</span>
                </a>
              </div>
            </div>

            {/* Right: Live Framed Project Viewport */}
            <div className="lg:col-span-6 bg-surface-container-lowest rounded-xl border border-primary-container/40 overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-3 py-2 bg-surface-container border-b border-surface-variant/40">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-error" />
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-container" />
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary-container" />
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant truncate">
                    matchpointai.vercel.app
                  </span>
                </div>
                <button
                  onClick={() => {
                    onSound(680, "triangle", 0.07);
                    setInteractivePreview((prev) => !prev);
                  }}
                  className="px-2 py-0.5 rounded bg-surface-container-highest text-secondary hover:bg-primary-container hover:text-on-primary-container font-label-sm text-[9px] uppercase font-bold transition-colors shrink-0"
                >
                  {interactivePreview ? "SHOW SCREENSHOT" : "INTERACTIVE DEMO"}
                </button>
              </div>
              <div className="relative aspect-[16/10] w-full bg-surface-container-low overflow-hidden group">
                {interactivePreview ? (
                  <iframe
                    src="https://matchpointai.vercel.app"
                    title="MatchPoint AI Live Preview"
                    className="w-full h-full border-0"
                  />
                ) : (
                  <a
                    href="https://matchpointai.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full relative"
                  >
                    <img
                      src="/previews/matchpoint.png"
                      alt="MatchPoint AI Screenshot"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                      <span className="font-label-md text-label-md text-primary-container font-bold uppercase">
                        CLICK TO LAUNCH LIVE APP
                      </span>
                      <span className="material-symbols-outlined text-primary-container">
                        open_in_new
                      </span>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Visual System Architecture Strip */}
          <div className="bg-surface-container-low p-space-md rounded-xl border border-surface-variant/30 flex flex-col gap-space-sm">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container font-bold">
                // SYSTEM ARCHITECTURE PIPELINE
              </span>
              <span className="font-label-sm text-[10px] text-secondary uppercase">
                ZERO-DISK STREAMING FLOW
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {[
                {
                  step: "01 // INGEST",
                  title: "PDF / DOCX Stream",
                  sub: "In-Memory ArrayBuffer",
                  icon: "upload_file",
                },
                {
                  step: "02 // PARSE",
                  title: "Zero-Disk Engine",
                  sub: "142ms pdfjs & mammoth",
                  icon: "memory",
                },
                {
                  step: "03 // ARBITRATE",
                  title: "Gemini Key Pool",
                  sub: "8.5s SLA Auto-Failover",
                  icon: "hub",
                },
                {
                  step: "04 // SYNTHESIZE",
                  title: "XYZ & STAR Output",
                  sub: "ATS Score + Certified PDF",
                  icon: "verified",
                },
              ].map((node, i) => (
                <div
                  key={node.step}
                  className="bg-surface-container p-3 rounded-lg border border-surface-variant/30 flex items-center justify-between gap-2 relative hud-card-hover"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded bg-surface-container-lowest flex items-center justify-center text-primary-container shrink-0">
                      <span className="material-symbols-outlined text-[18px]">
                        {node.icon}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <span className="font-label-sm text-[9px] text-secondary block uppercase">
                        {node.step}
                      </span>
                      <span className="font-headline-sm text-[14px] text-primary font-bold truncate block">
                        {node.title}
                      </span>
                      <span className="font-label-sm text-[10px] text-on-surface-variant truncate block">
                        {node.sub}
                      </span>
                    </div>
                  </div>
                  {i < 3 && (
                    <span className="hidden lg:inline-block material-symbols-outlined text-outline text-[16px] shrink-0">
                      arrow_forward
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 3 Concise Feature Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <div className="bg-surface-container-low p-space-md rounded-lg border border-surface-variant/20 hud-card-hover">
              <div className="font-headline-sm text-headline-sm text-primary uppercase mb-1">
                01 // Zero-Disk Privacy (142ms)
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Streams PDF and DOCX uploads in-memory via{" "}
                <code>pdfjs-dist</code> and <code>mammoth</code> with zero
                server disk writes.
              </p>
            </div>
            <div className="bg-surface-container-low p-space-md rounded-lg border border-surface-variant/20 hud-card-hover">
              <div className="font-headline-sm text-headline-sm text-primary uppercase mb-1">
                02 // 8.5s AI Failover Pool
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Multi-key Google Gemini pool automatically hot-swaps channels on
                rate limits without interrupting the user session.
              </p>
            </div>
            <div className="bg-surface-container-low p-space-md rounded-lg border border-surface-variant/20 hud-card-hover">
              <div className="font-headline-sm text-headline-sm text-primary uppercase mb-1">
                03 // 18/18 Playwright E2E
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                1-click Google XYZ bullet point synthesis, STAR mock interview
                simulator, and certified PDF assessment export.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* BOSS 02: APERTURE (STUDIOSPACE) */}
      {activeBoss === 2 && (
        <div key="boss-2" className="flex flex-col gap-space-lg animate-hud-enter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg bg-surface-container-low p-space-lg rounded-xl border border-surface-variant/30 items-center">
            <div className="lg:col-span-6 flex flex-col justify-between gap-space-md">
              <div>
                <span className="px-space-xs py-0.5 bg-secondary-container/20 text-secondary font-label-sm text-label-sm font-bold uppercase rounded">
                  LEGENDARY TIER // FULL-STACK P2P MARKETPLACE
                </span>
                <h2 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl uppercase text-primary tracking-tight mt-space-xs">
                  APERTURE (STUDIOSPACE)
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                  Peer-to-Peer Creative Workspace &amp; Production Studio
                  Platform for film stages, photo lofts, and audio suites.
                  Built with Next.js 15, Express/TypeScript, and MongoDB Atlas.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {[
                  "Next.js 15",
                  "React 19",
                  "TypeScript",
                  "Express",
                  "MongoDB",
                  "HTTPOnly JWT",
                  "jsPDF",
                ].map((t) => (
                  <SkillBadge key={t} name={t} size="sm" />
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                <a
                  className="px-space-lg py-space-sm bg-primary-container text-on-primary-container font-headline-sm text-headline-sm uppercase font-bold flex items-center gap-space-xs [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)] hover:bg-secondary-container hover:text-on-secondary transition-colors"
                  href="https://aperture-studio-olive.vercel.app"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    bolt
                  </span>
                  <span>LIVE DEMO</span>
                </a>
                <a
                  className="px-space-md py-space-sm bg-surface-container hover:bg-surface-container-high text-secondary font-label-md text-label-md uppercase font-bold flex items-center gap-space-xs rounded transition-colors"
                  href="https://github.com/Wizardezgg/cat-harry-frontend"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    code
                  </span>
                  <span>FRONTEND REPO</span>
                </a>
                <a
                  className="px-space-md py-space-sm bg-surface-container hover:bg-surface-container-high text-primary-container font-label-md text-label-md uppercase font-bold flex items-center gap-space-xs rounded transition-colors"
                  href="https://github.com/Wizardezgg/cat-harry-backend"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    dns
                  </span>
                  <span>BACKEND REPO</span>
                </a>
              </div>
            </div>

            {/* Right: Live Framed Project Viewport */}
            <div className="lg:col-span-6 bg-surface-container-lowest rounded-xl border border-secondary-container/40 overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-3 py-2 bg-surface-container border-b border-surface-variant/40">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-error" />
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-container" />
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary-container" />
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant truncate">
                    aperture-studio-olive.vercel.app
                  </span>
                </div>
                <button
                  onClick={() => {
                    onSound(680, "triangle", 0.07);
                    setInteractivePreview((prev) => !prev);
                  }}
                  className="px-2 py-0.5 rounded bg-surface-container-highest text-secondary hover:bg-primary-container hover:text-on-primary-container font-label-sm text-[9px] uppercase font-bold transition-colors shrink-0"
                >
                  {interactivePreview ? "SHOW SCREENSHOT" : "INTERACTIVE DEMO"}
                </button>
              </div>
              <div className="relative aspect-[16/10] w-full bg-surface-container-low overflow-hidden group">
                {interactivePreview ? (
                  <iframe
                    src="https://aperture-studio-olive.vercel.app"
                    title="Aperture StudioSpace Live Preview"
                    className="w-full h-full border-0"
                  />
                ) : (
                  <a
                    href="https://aperture-studio-olive.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full relative"
                  >
                    <img
                      src="/previews/aperture.png"
                      alt="Aperture StudioSpace Screenshot"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                      <span className="font-label-md text-label-md text-secondary font-bold uppercase">
                        CLICK TO LAUNCH LIVE APP
                      </span>
                      <span className="material-symbols-outlined text-secondary">
                        open_in_new
                      </span>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Visual System Architecture Strip */}
          <div className="bg-surface-container-low p-space-md rounded-xl border border-surface-variant/30 flex flex-col gap-space-sm">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                // SYSTEM ARCHITECTURE PIPELINE
              </span>
              <span className="font-label-sm text-[10px] text-primary-container uppercase">
                P2P MARKETPLACE &amp; ESCROW FLOW
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {[
                {
                  step: "01 // DISCOVERY",
                  title: "Next.js 15 Edge UI",
                  sub: "City, Rate & Spec Filters",
                  icon: "travel_explore",
                },
                {
                  step: "02 // AUTH GUARD",
                  title: "HTTPOnly JWT",
                  sub: "Hydration-Safe Route Guard",
                  icon: "shield_lock",
                },
                {
                  step: "03 // ESCROW API",
                  title: "Express + TypeScript",
                  sub: "Deposit & Booking Engine",
                  icon: "payments",
                },
                {
                  step: "04 // PERSIST & SEAL",
                  title: "MongoDB + jsPDF",
                  sub: "30d Sparklines & Invoice",
                  icon: "receipt_long",
                },
              ].map((node, i) => (
                <div
                  key={node.step}
                  className="bg-surface-container p-3 rounded-lg border border-surface-variant/30 flex items-center justify-between gap-2 relative hud-card-hover"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded bg-surface-container-lowest flex items-center justify-center text-secondary shrink-0">
                      <span className="material-symbols-outlined text-[18px]">
                        {node.icon}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <span className="font-label-sm text-[9px] text-primary-container block uppercase">
                        {node.step}
                      </span>
                      <span className="font-headline-sm text-[14px] text-primary font-bold truncate block">
                        {node.title}
                      </span>
                      <span className="font-label-sm text-[10px] text-on-surface-variant truncate block">
                        {node.sub}
                      </span>
                    </div>
                  </div>
                  {i < 3 && (
                    <span className="hidden lg:inline-block material-symbols-outlined text-outline text-[16px] shrink-0">
                      arrow_forward
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 3 Concise Feature Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <div className="bg-surface-container-low p-space-md rounded-lg border border-surface-variant/20 hud-card-hover">
              <div className="font-headline-sm text-headline-sm text-primary uppercase mb-1">
                01 // Studio Discovery &amp; Specs
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Live category, metro city, and hourly rate filtering with
                authentic production telemetry (Cam-Lok 3-Phase, STC ratings).
              </p>
            </div>
            <div className="bg-surface-container-low p-space-md rounded-lg border border-surface-variant/20 hud-card-hover">
              <div className="font-headline-sm text-headline-sm text-primary uppercase mb-1">
                02 // Sticky Escrow &amp; Sparklines
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Interactive booking calculator with deposit holds, 30-day inline
                SVG sparklines, and slug-verified studio deletion modals.
              </p>
            </div>
            <div className="bg-surface-container-low p-space-md rounded-lg border border-surface-variant/20 hud-card-hover">
              <div className="font-headline-sm text-headline-sm text-primary uppercase mb-1">
                03 // 1-Click PDF Invoicing
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Instant client-side invoice generation powered by{" "}
                <code>jspdf</code> and <code>jspdf-autotable</code>.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
