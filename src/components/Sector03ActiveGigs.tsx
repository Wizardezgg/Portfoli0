"use client";

import React, { useState } from "react";
import SkillBadge from "@/components/SkillBadge";

interface Sector03Props {
  onSound: (freq?: number, type?: OscillatorType, duration?: number) => void;
}

const GIGS = [
  {
    id: "bazar-dor",
    code: "CONTRACT 01",
    title: "BAZAR DOR",
    subtitle: "Bangladesh Commodity & Grocery Price Tracker",
    desc: "Real-time price ticker, daily top movers, 7-category market comparison, and social + email login via BetterAuth.",
    categories: ["all", "nextjs", "fullstack"],
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "BetterAuth"],
    liveUrl: "https://bazardor-wi-z1.vercel.app/",
    repoUrl: "https://github.com/Wizardezgg/MyA-07",
    previewImg: "/previews/bazar-dor.svg",
  },
  {
    id: "fitlog",
    code: "CONTRACT 02",
    title: "FITLOG",
    subtitle: "High-Intensity Workout Planner & Logger",
    desc: "Dynamic REST API workout library, 5-lift smart daily quota cap, live navbar pill counters, and real-time calorie & duration metrics.",
    categories: ["all", "nextjs"],
    stack: ["Next.js 15", "React 19", "TypeScript", "Sonner"],
    liveUrl: "https://ftlog.vercel.app",
    repoUrl: "https://github.com/Wizardezgg/MyB-06",
    previewImg: "/previews/fitlog.png",
  },
  {
    id: "dev-stack",
    code: "CONTRACT 03",
    title: "DEV STACK BUILDER",
    subtitle: "Interactive Developer Stack Curator",
    desc: "Zero-roundtrip technology stack exploration and curation utility built with React 19, Vite 8, and instant toast notifications.",
    categories: ["all", "react", "fullstack"],
    stack: ["React 19", "Vite 8", "Tailwind CSS", "React-Toastify"],
    liveUrl: "https://devstack-wiz.vercel.app/",
    repoUrl: "https://github.com/Wizardezgg/MyA-05",
    previewImg: "/previews/dev-stack.png",
  },
];

export default function Sector03ActiveGigs({ onSound }: Sector03Props) {
  const [filter, setFilter] = useState<"all" | "fullstack" | "nextjs" | "react">("all");

  const filteredGigs = GIGS.filter((g) => g.categories.includes(filter));

  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto px-gutter md:px-margin py-3 lg:py-4 gap-4">
      {/* Clean Header & Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-3 border-b border-surface-variant/30">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container font-bold">
            SECTOR 03 // DEPLOYED ARSENAL
          </span>
          <h1 className="font-headline-md sm:text-headline-lg uppercase text-primary mt-0.5">
            SHIPPED CONTRACTS
          </h1>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {[
            { id: "all" as const, label: "ALL [03]" },
            { id: "fullstack" as const, label: "FULL-STACK" },
            { id: "nextjs" as const, label: "NEXT.JS 15" },
            { id: "react" as const, label: "REACT 19 / VITE" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setFilter(tab.id);
                onSound(560, "triangle", 0.07);
              }}
              className={`px-space-md py-space-xs rounded font-label-md text-label-md uppercase transition-all whitespace-nowrap ${
                filter === tab.id
                  ? "bg-primary-container text-on-primary-container font-bold"
                  : "bg-surface-container-low text-on-surface-variant hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clean Project Grid with Live Screenshot Previews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
        {filteredGigs.map((gig) => (
          <article
            key={gig.id}
            className="bg-surface-container-low rounded-xl overflow-hidden flex flex-col justify-between border border-surface-variant/30 hud-card-hover group shadow-xl"
          >
            {/* Top Live Screenshot Viewport */}
            <a
              href={gig.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="relative aspect-[16/9] w-full bg-surface-container-lowest border-b border-surface-variant/30 overflow-hidden block"
            >
              <img
                src={gig.previewImg}
                alt={`${gig.title} Preview`}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent opacity-80" />
              <div className="absolute top-2.5 left-3 right-3 flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-surface-container-lowest/90 backdrop-blur-md text-primary-container font-label-sm text-label-sm font-bold uppercase border border-surface-variant/40">
                  {gig.code}
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-container-lowest/90 backdrop-blur-md flex items-center gap-1.5 font-label-sm text-label-sm text-secondary border border-surface-variant/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-pulse" />
                  LIVE PREVIEW
                </span>
              </div>
            </a>

            <div className="p-space-lg flex-1 flex flex-col justify-between gap-space-md">
              <div className="flex flex-col gap-space-sm">
                <div>
                  <h2 className="font-headline-md text-headline-md uppercase text-primary group-hover:text-primary-container transition-colors">
                    {gig.title}
                  </h2>
                  <div className="font-label-sm text-label-sm text-secondary mt-0.5">
                    {gig.subtitle}
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                    {gig.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-space-xs">
                  {gig.stack.map((tech) => (
                    <SkillBadge key={tech} name={tech} size="sm" />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-space-sm border-t border-surface-variant/30">
                <div className="flex items-center gap-space-xs">
                  <a
                    href={gig.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-space-sm py-space-xs rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase flex items-center gap-1 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      code
                    </span>
                    SOURCE
                  </a>
                </div>

                <a
                  href={gig.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-space-md py-space-xs rounded bg-primary-container text-on-primary-container hover:bg-secondary-container hover:text-on-secondary font-label-md text-label-md uppercase font-bold flex items-center gap-1 transition-colors"
                >
                  <span>LAUNCH</span>
                  <span className="material-symbols-outlined text-[14px]">
                    north_east
                  </span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
