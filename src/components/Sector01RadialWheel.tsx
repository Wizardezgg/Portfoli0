"use client";

import React, { useState } from "react";
import { toast } from "sonner";

interface Sector01Props {
  onNavigateSector: (sector: number) => void;
  onSound: (freq?: number, type?: OscillatorType, duration?: number) => void;
}

interface WheelSectorItem {
  name: string;
  role: string;
  meta: string;
  icon: string;
  targetSector: number;
}

interface WheelSector {
  id: number;
  shortName: string;
  title: string;
  code: string;
  icon: string;
  subtitle: string;
  desc: string;
  stats: [
    { label: string; value: string; color: string },
    { label: string; value: string; color: string },
    { label: string; value: string; color: string },
  ];
  ctaLabel: string;
  targetSector: number;
  items: WheelSectorItem[];
}

const WHEEL_SECTORS: WheelSector[] = [
  {
    id: 0,
    shortName: "ARSENAL",
    title: "ARSENAL // SLOTTED TECH",
    code: "SECTOR 01 // OVERVIEW",
    icon: "terminal",
    subtitle: "CORE TECH MATRIX",
    desc: "Autonomous multi-model AI routing, low-latency microservices, and reactive distributed frontends.",
    stats: [
      { label: "PARSE LATENCY", value: "142ms", color: "text-primary-container" },
      { label: "FAILOVER", value: "99.98%", color: "text-secondary-container" },
      { label: "LIGHTHOUSE", value: "98/100", color: "text-primary" },
    ],
    ctaLabel: "INSPECT FULL TECH LOADOUT (SEC 04)",
    targetSector: 4,
    items: [
      {
        name: "Next.js 15 & React 19",
        role: "SSR & Edge Runtime UI",
        meta: "Production Grade",
        icon: "deployed_code",
        targetSector: 4,
      },
      {
        name: "FastAPI & Node.js / Express",
        role: "High-Throughput Microservices",
        meta: "Dual Runtime",
        icon: "bolt",
        targetSector: 4,
      },
      {
        name: "Supabase & PostgreSQL / MongoDB",
        role: "Row-Level Security & Cloud Clusters",
        meta: "Zero-Cold Start",
        icon: "database",
        targetSector: 4,
      },
      {
        name: "Multi-Agent Gemini Pool",
        role: "Dynamic Fallback LLM Arbitration",
        meta: "8.5s SLA",
        icon: "psychology",
        targetSector: 2,
      },
    ],
  },
  {
    id: 1,
    shortName: "BOSSES",
    title: "BOSS CRUCIBLES // SHIPPED SYSTEMS",
    code: "SECTOR 02 // HEAVYWEIGHT BUILDS",
    icon: "military_tech",
    subtitle: "FLAGSHIP CRUCIBLES",
    desc: "Flagship production systems engineered for zero-disk AI document parsing and P2P studio booking.",
    stats: [
      { label: "BOSSES FELLED", value: "2 / 2", color: "text-primary-container" },
      { label: "E2E SUITE", value: "18/18 PASS", color: "text-secondary-container" },
      { label: "LIGHTHOUSE", value: "98/100", color: "text-primary" },
    ],
    ctaLabel: "OPEN BOSS CRUCIBLES (SEC 02)",
    targetSector: 2,
    items: [
      {
        name: "MatchPoint AI — ATS Optimizer",
        role: "Zero-Disk Resume Parser & Mock Interviewer",
        meta: "React 19 + Gemini",
        icon: "document_scanner",
        targetSector: 2,
      },
      {
        name: "Aperture (StudioSpace)",
        role: "P2P Creative Studio Marketplace & Escrow",
        meta: "Next.js 15 + MongoDB",
        icon: "view_in_ar",
        targetSector: 2,
      },
    ],
  },
  {
    id: 2,
    shortName: "GIGS",
    title: "ACTIVE GIGS // DEPLOYMENTS",
    code: "SECTOR 03 // LIVE PROJECTS",
    icon: "work",
    subtitle: "UTILITY PIPELINES",
    desc: "Production web applications serving market price tracking, athletic workout logging, and developer stack curation.",
    stats: [
      { label: "LIVE APPS", value: "3 / 3", color: "text-primary-container" },
      { label: "API LATENCY", value: "12.4ms", color: "text-secondary-container" },
      { label: "UPTIME", value: "99.9%", color: "text-primary" },
    ],
    ctaLabel: "EXPLORE ALL 3 GIGS (SEC 03)",
    targetSector: 3,
    items: [
      {
        name: "Bazar Dor Commodity Ticker",
        role: "Real-Time Bangladesh Market Price Tracker",
        meta: "Next.js 15 + BetterAuth",
        icon: "show_chart",
        targetSector: 3,
      },
      {
        name: "FitLog Workout Planner",
        role: "5-Lift Smart Quota & Calorie Ledger",
        meta: "Next.js 15 + React 19",
        icon: "fitness_center",
        targetSector: 3,
      },
      {
        name: "Dev Stack Builder",
        role: "Interactive Developer Stack Curator",
        meta: "React 19 + Vite 8",
        icon: "deployed_code",
        targetSector: 3,
      },
    ],
  },
  {
    id: 3,
    shortName: "DOSSIER",
    title: "OPERATOR DOSSIER // VICTOR MALLICK",
    code: "SECTOR 04 // IDENTITY MATRIX",
    icon: "badge",
    subtitle: "LEVEL 24 OPERATOR",
    desc: "Computer Science Undergrad (Class of 2026) and Full-Stack & AI Engineer stationed in Khulna, Bangladesh.",
    stats: [
      { label: "OPERATOR", value: "LVL 24", color: "text-primary-container" },
      { label: "SKILLS", value: "24 MODULES", color: "text-secondary-container" },
      { label: "GRADUATION", value: "CLASS 2026", color: "text-primary" },
    ],
    ctaLabel: "OPEN OPERATOR DOSSIER & RESUME (SEC 04)",
    targetSector: 4,
    items: [
      {
        name: "Victor Mallick (Wizardezgg)",
        role: "Full-Stack & AI Systems Engineer",
        meta: "Khulna, BD",
        icon: "person",
        targetSector: 4,
      },
      {
        name: "Academic Clearance",
        role: "B.Sc. in Computer Science & Engineering",
        meta: "Class of 2026",
        icon: "school",
        targetSector: 4,
      },
      {
        name: "24 Equipped Tech Skills",
        role: "Frontend, Backend, Databases, AI & QA",
        meta: "Full Loadout",
        icon: "deployed_code",
        targetSector: 4,
      },
    ],
  },
  {
    id: 4,
    shortName: "BEACON",
    title: "MULTIPLAYER BEACON // TRANSMIT",
    code: "SECTOR 05 // COMMS & DISPATCH",
    icon: "broadcast_on_personal",
    subtitle: "OPEN FREQUENCY",
    desc: "Establish direct transmission for full-time roles, freelance contracts, or engineering collaborations.",
    stats: [
      { label: "RESPONSE", value: "INSTANT", color: "text-primary-container" },
      { label: "MODE", value: "REMOTE", color: "text-secondary-container" },
      { label: "REGION", value: "WORLDWIDE", color: "text-primary" },
    ],
    ctaLabel: "OPEN MULTIPLAYER BEACON (SEC 05)",
    targetSector: 5,
    items: [
      {
        name: "Direct Email Uplink",
        role: "victormallick19@gmail.com",
        meta: "Primary Inbox",
        icon: "mail",
        targetSector: 5,
      },
      {
        name: "GitHub & LinkedIn",
        role: "github.com/Wizardezgg • /in/victor-mallick",
        meta: "Verified Profiles",
        icon: "code",
        targetSector: 5,
      },
      {
        name: "Discord Direct Comms",
        role: "Callsign: w1zard_gg",
        meta: "Instant Chat",
        icon: "forum",
        targetSector: 5,
      },
    ],
  },
];

export default function Sector01RadialWheel({
  onNavigateSector,
  onSound,
}: Sector01Props) {
  const [selectedSlice, setSelectedSlice] = useState<number>(0);
  const activeData = WHEEL_SECTORS[selectedSlice];

  const handleSelectSlice = (idx: number, freq: number = 520) => {
    setSelectedSlice(idx);
    onSound(freq, "triangle", 0.08);
  };

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-gutter md:px-margin py-space-lg gap-space-lg">
      {/* Main Centerpiece Canvas: Radial Loadout (Left) + Operator Portrait & Inspector (Right) */}
      <div className="w-full flex flex-col xl:flex-row gap-space-lg items-stretch">
        {/* LEFT & CENTER: Interactive 360 Tactical Radial Wheel */}
        <div className="flex-1 bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between relative overflow-hidden shadow-2xl border border-surface-variant/30 min-h-[540px] hud-card-hover">
          {/* Scanlines & Blueprint Background */}
          <div className="pointer-events-none absolute inset-0 opacity-15 bg-[radial-gradient(#7df4ff_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Top Bracket Metrics */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
              <span className="w-2 h-2 bg-secondary-container rounded-sm shrink-0" />
              <span>RADIAL_LINK // READY</span>
              <span className="text-primary-container font-label-md ml-space-xs">
                SECTOR [0{selectedSlice + 1}] {activeData.shortName}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-space-sm font-label-sm text-label-sm text-secondary">
              <span>CLICK SLICE TO INSPECT</span>
              <span className="text-outline-variant">/</span>
              <span>CHAMBER: ENGAGED</span>
            </div>
          </div>

          {/* Centerpiece Radial SVG Wheel Assembly */}
          <div className="relative w-full flex-1 flex items-center justify-center my-space-sm z-10">
            {/* Rotating Background Decorative Reticle */}
            <svg
              className="absolute w-[310px] h-[310px] sm:w-[440px] sm:h-[440px] pointer-events-none opacity-40 animate-[spin_60s_linear_infinite]"
              viewBox="0 0 500 500"
            >
              <circle
                cx="250"
                cy="250"
                fill="none"
                r="230"
                stroke="#353439"
                strokeDasharray="4 8"
                strokeWidth="1"
              />
              <circle
                cx="250"
                cy="250"
                fill="none"
                r="200"
                stroke="#00eefc"
                strokeDasharray="12 24"
                strokeOpacity="0.3"
                strokeWidth="1"
              />
              <circle
                cx="250"
                cy="250"
                fill="none"
                r="160"
                stroke="#959177"
                strokeDasharray="2 6"
                strokeWidth="1"
              />
              <line
                stroke="#353439"
                strokeOpacity="0.4"
                strokeWidth="1"
                x1="250"
                x2="250"
                y1="10"
                y2="490"
              />
              <line
                stroke="#353439"
                strokeOpacity="0.4"
                strokeWidth="1"
                x1="10"
                x2="490"
                y1="250"
                y2="250"
              />
            </svg>

            {/* Center Holographic Core Hub */}
            <div className="absolute z-20 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-surface-container-highest/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-space-sm shadow-2xl border border-surface-variant/50 transition-all duration-300">
              <span className="material-symbols-outlined text-primary-container text-[30px] sm:text-[36px] mb-space-xs">
                {activeData.icon}
              </span>
              <span className="font-headline-sm text-headline-sm text-primary uppercase tracking-tight">
                {activeData.shortName}
              </span>
              <span className="font-label-sm text-label-sm text-secondary uppercase mt-0.5">
                {activeData.subtitle}
              </span>
              <div className="w-10 h-0.5 bg-primary-container mt-space-xs" />
            </div>

            {/* 5-Sector Polygonal Weapon Wheel Click Targets (SVG) */}
            <svg
              className="w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] z-10 transition-transform duration-300 ease-out"
              viewBox="0 0 440 440"
            >
              <g transform="translate(220, 220)">
                {/* Sector 1: Top (ARSENAL) */}
                <path
                  onClick={() => handleSelectSlice(0, 520)}
                  className={
                    selectedSlice === 0
                      ? "wheel-slice cursor-pointer fill-primary-container/40 stroke-primary-container stroke-[2px]"
                      : "wheel-slice cursor-pointer fill-surface-container-high/80 stroke-surface-variant hover:fill-secondary-container/25 hover:stroke-secondary-container"
                  }
                  d="M 0,-100 L 0,-200 A 200,200 0 0,1 190.2,-61.8 L 95.1,-30.9 A 100,100 0 0,0 0,-100 Z"
                />
                {/* Sector 2: Right-Down (CRUCIBLES) */}
                <path
                  onClick={() => handleSelectSlice(1, 580)}
                  className={
                    selectedSlice === 1
                      ? "wheel-slice cursor-pointer fill-primary-container/40 stroke-primary-container stroke-[2px]"
                      : "wheel-slice cursor-pointer fill-surface-container-high/80 stroke-surface-variant hover:fill-secondary-container/25 hover:stroke-secondary-container"
                  }
                  d="M 95.1,-30.9 L 190.2,-61.8 A 200,200 0 0,1 117.5,161.8 L 58.7,80.9 A 100,100 0 0,0 95.1,-30.9 Z"
                />
                {/* Sector 3: Bottom (ACTIVE GIGS) */}
                <path
                  onClick={() => handleSelectSlice(2, 660)}
                  className={
                    selectedSlice === 2
                      ? "wheel-slice cursor-pointer fill-primary-container/40 stroke-primary-container stroke-[2px]"
                      : "wheel-slice cursor-pointer fill-surface-container-high/80 stroke-surface-variant hover:fill-secondary-container/25 hover:stroke-secondary-container"
                  }
                  d="M 58.7,80.9 L 117.5,161.8 A 200,200 0 0,1 -117.5,161.8 L -58.7,80.9 A 100,100 0 0,0 58.7,80.9 Z"
                />
                {/* Sector 4: Bottom-Left (OPERATOR DOSSIER) */}
                <path
                  onClick={() => handleSelectSlice(3, 740)}
                  className={
                    selectedSlice === 3
                      ? "wheel-slice cursor-pointer fill-primary-container/40 stroke-primary-container stroke-[2px]"
                      : "wheel-slice cursor-pointer fill-surface-container-high/80 stroke-surface-variant hover:fill-secondary-container/25 hover:stroke-secondary-container"
                  }
                  d="M -58.7,80.9 L -117.5,161.8 A 200,200 0 0,1 -190.2,-61.8 L -95.1,-30.9 A 100,100 0 0,0 -58.7,80.9 Z"
                />
                {/* Sector 5: Top-Left (MULTIPLAYER BEACON) */}
                <path
                  onClick={() => handleSelectSlice(4, 820)}
                  className={
                    selectedSlice === 4
                      ? "wheel-slice cursor-pointer fill-primary-container/40 stroke-primary-container stroke-[2px]"
                      : "wheel-slice cursor-pointer fill-surface-container-high/80 stroke-surface-variant hover:fill-secondary-container/25 hover:stroke-secondary-container"
                  }
                  d="M -95.1,-30.9 L -190.2,-61.8 A 200,200 0 0,1 0,-200 L 0,-100 A 100,100 0 0,0 -95.1,-30.9 Z"
                />

                {/* SVG Sector Glyphs & Badges in arc */}
                <text
                  fill="#f4e700"
                  fontFamily="'Space Mono'"
                  fontSize="11"
                  fontWeight="700"
                  pointerEvents="none"
                  textAnchor="middle"
                  x="70"
                  y="-120"
                >
                  01 // ARSENAL
                </text>
                <text
                  fill="#00eefc"
                  fontFamily="'Space Mono'"
                  fontSize="11"
                  fontWeight="700"
                  pointerEvents="none"
                  textAnchor="middle"
                  x="135"
                  y="45"
                >
                  02 // CRUCIBLE
                </text>
                <text
                  fill="#d3fbff"
                  fontFamily="'Space Mono'"
                  fontSize="11"
                  fontWeight="700"
                  pointerEvents="none"
                  textAnchor="middle"
                  x="0"
                  y="145"
                >
                  03 // GIGS
                </text>
                <text
                  fill="#f4e700"
                  fontFamily="'Space Mono'"
                  fontSize="11"
                  fontWeight="700"
                  pointerEvents="none"
                  textAnchor="middle"
                  x="-135"
                  y="45"
                >
                  04 // DOSSIER
                </text>
                <text
                  fill="#ffb4ab"
                  fontFamily="'Space Mono'"
                  fontSize="11"
                  fontWeight="700"
                  pointerEvents="none"
                  textAnchor="middle"
                  x="-70"
                  y="-120"
                >
                  05 // BEACON
                </text>
              </g>
            </svg>
          </div>

          {/* Quick Selector Bar */}
          <div className="grid grid-cols-5 gap-space-xs z-10 pt-space-xs">
            {WHEEL_SECTORS.map((sec, idx) => (
              <button
                key={sec.id}
                onClick={() => handleSelectSlice(idx, 440 + idx * 40)}
                className={
                  selectedSlice === idx
                    ? "flex flex-col items-center py-space-xs px-1 rounded bg-primary-container text-on-primary-container font-bold shadow-md transition-all"
                    : "flex flex-col items-center py-space-xs px-1 rounded bg-surface-container-high text-on-surface-variant hover:text-primary transition-all"
                }
              >
                <span className="font-label-sm text-label-sm">0{idx + 1}</span>
                <span className="font-label-sm text-[10px] uppercase truncate w-full text-center">
                  {sec.shortName}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Operator Portrait Card + Dynamic Sector Inspector */}
        <div className="w-full xl:w-[480px] flex flex-col gap-space-md">
          {/* CARD 1: Operator Portrait Slate Frame */}
          <div className="bg-surface-container-low rounded-xl p-space-md shadow-xl border border-primary-container/30 relative overflow-hidden group hud-card-hover">
            <div className="flex items-center justify-between pb-space-xs border-b border-surface-variant/40 mb-space-sm relative z-10">
              <div className="flex items-center gap-2 font-label-sm text-label-sm">
                <span className="w-2 h-2 rounded-full bg-secondary-container shrink-0" />
                <span className="text-secondary uppercase font-bold tracking-wider">
                  AVAILABLE FOR HIRE
                </span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="font-label-sm text-[10px] text-primary-container bg-surface-container px-2 py-0.5 rounded font-mono">
                  FULL-STACK &amp; AI
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch gap-space-md relative z-10 pt-1">
              {/* Clean Framed Avatar Portrait aligned top-to-bottom with bio */}
              <div className="relative flex-shrink-0 w-full sm:w-36">
                <div className="w-full h-44 sm:h-full rounded-lg border-2 border-primary-container/80 overflow-hidden bg-surface-container-lowest">
                  <img
                    src="https://avatars.githubusercontent.com/u/298356245?v=4"
                    alt="Victor Mallick"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bio & Role Blocks strictly left-aligned */}
              <div className="flex-1 flex flex-col justify-between w-full min-w-0">
                <div className="flex flex-col items-start text-left">
                  <span className="font-label-sm text-label-sm uppercase text-primary-container font-bold tracking-wider">
                    WIZARDEZGG // CORE BIO
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary uppercase font-bold tracking-tight mt-0.5">
                    VICTOR MALLICK
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Autonomous AI Architect &amp; Full-Stack Systems Engineer
                    stationed at Khulna, BD. Class of 2026 Undergrad.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-space-xs mt-space-sm pt-space-xs border-t border-surface-variant/40">
                  <div className="bg-surface-container px-2.5 py-1.5 rounded">
                    <span className="font-label-sm text-[9px] text-on-surface-variant block uppercase">
                      TACTICAL ROLE
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary font-bold truncate block">
                      FULL-STACK &amp; AI
                    </span>
                  </div>
                  <div className="bg-surface-container px-2.5 py-1.5 rounded">
                    <span className="font-label-sm text-[9px] text-on-surface-variant block uppercase">
                      CLEARANCE LEVEL
                    </span>
                    <span className="font-label-sm text-label-sm text-primary-container font-bold truncate block">
                      TIER-S VERIFIED
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: Selected Sector Overview & Live Inspector List */}
          <div className="flex-1 bg-surface-container-low rounded-xl p-space-md shadow-xl flex flex-col justify-between gap-space-md border border-surface-variant/30 hud-card-hover">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between pb-space-xs border-b border-surface-variant/50">
                <div className="flex items-center gap-space-xs">
                  <span className="w-2 h-2 bg-primary-container rounded-none" />
                  <span className="font-label-sm text-label-sm text-primary uppercase font-bold">
                    {activeData.code}
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-secondary-container bg-surface-container px-space-xs py-0.5 rounded">
                  ICE 99.4%
                </span>
              </div>

              <div>
                <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-tight">
                  {activeData.title}
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  {activeData.desc}
                </p>
              </div>

              {/* 3 Stat Blocks */}
              <div className="grid grid-cols-3 gap-space-xs">
                {activeData.stats.map((st) => (
                  <div
                    key={st.label}
                    className="bg-surface-container p-space-xs rounded"
                  >
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">
                      {st.label}
                    </span>
                    <span
                      className={`font-headline-sm text-headline-sm ${st.color}`}
                    >
                      {st.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Clean Inspector Rows */}
              <div className="space-y-space-xs pt-space-xs">
                {activeData.items.map((item) => (
                  <div
                    key={item.name}
                    onClick={() => {
                      onSound(620, "sine", 0.08);
                      onNavigateSector(item.targetSector);
                    }}
                    className="flex items-center justify-between p-space-sm bg-surface-container hover:bg-surface-container-high hover:translate-x-1.5 hover:shadow-[inset_3px_0_0_#f4e700] rounded transition-all duration-200 group cursor-pointer"
                  >
                    <div className="flex items-center gap-space-sm min-w-0">
                      <div className="w-8 h-8 rounded bg-surface-container-lowest flex items-center justify-center text-primary-container group-hover:text-secondary-container group-hover:scale-110 transition-all duration-200 shrink-0">
                        <span className="material-symbols-outlined text-[20px]">
                          {item.icon}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <div className="font-headline-sm text-[15px] leading-tight text-primary truncate group-hover:text-primary-container transition-colors">
                          {item.name}
                        </div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant truncate">
                          {item.role}
                        </div>
                      </div>
                    </div>
                    <div className="text-right pl-space-xs shrink-0">
                      <span className="font-label-sm text-label-sm text-secondary bg-surface-container-low px-space-xs py-0.5 rounded">
                        {item.meta}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Sector Action Bar */}
            <div className="flex items-center gap-space-sm pt-space-xs border-t border-surface-variant/40">
              {selectedSlice === 4 ? (
                <>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("victormallick19@gmail.com");
                      onSound(880, "square", 0.12);
                      toast.success("COPIED: victormallick19@gmail.com");
                    }}
                    className="hud-btn-hover flex-1 py-space-xs bg-primary-container text-on-primary-container font-headline-sm text-headline-sm uppercase rounded flex items-center justify-center gap-space-xs hover:bg-secondary-container hover:text-on-secondary font-bold"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      content_copy
                    </span>
                    <span>COPY EMAIL</span>
                  </button>
                  <button
                    onClick={() => {
                      onSound(680, "triangle", 0.08);
                      onNavigateSector(5);
                    }}
                    className="hud-btn-hover px-space-md py-space-xs bg-surface-container-high text-primary hover:text-secondary rounded font-label-md text-label-md uppercase flex items-center gap-space-xs"
                  >
                    <span>OPEN BEACON</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    onSound(680, "triangle", 0.08);
                    onNavigateSector(activeData.targetSector);
                  }}
                  className="hud-btn-hover group w-full py-space-xs bg-primary-container text-on-primary-container hover:bg-secondary-container hover:text-on-secondary font-label-md text-label-md uppercase font-bold rounded flex items-center justify-center gap-space-xs"
                >
                  <span>{activeData.ctaLabel}</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
