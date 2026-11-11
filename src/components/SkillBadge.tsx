"use client";

import React from "react";

const SKILL_ICON_MAP: Record<string, { iconUrl?: string; materialIcon?: string; color?: string }> = {
  // Frontend
  "Next.js 15 (App Router)": { iconUrl: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
  "Next.js 15": { iconUrl: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
  "Next.js": { iconUrl: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
  "React 19": { iconUrl: "https://cdn.simpleicons.org/react/61DAFB" },
  "TypeScript 5": { iconUrl: "https://cdn.simpleicons.org/typescript/3178C6" },
  "TypeScript": { iconUrl: "https://cdn.simpleicons.org/typescript/3178C6" },
  "Tailwind CSS": { iconUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  "Tailwind v4": { iconUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  "Tailwind": { iconUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  "Vite 8": { iconUrl: "https://cdn.simpleicons.org/vite/646CFF" },
  "Vite": { iconUrl: "https://cdn.simpleicons.org/vite/646CFF" },
  "Recharts": { materialIcon: "bar_chart", color: "text-secondary" },
  "Sonner": { materialIcon: "notifications_active", color: "text-primary-container" },
  "React-Toastify": { materialIcon: "bolt", color: "text-primary-container" },

  // Backend & Databases
  "Node.js": { iconUrl: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  "Node/Express": { iconUrl: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  "Express.js": { iconUrl: "https://cdn.simpleicons.org/express/ffffff" },
  "Express": { iconUrl: "https://cdn.simpleicons.org/express/ffffff" },
  "Python FastAPI": { iconUrl: "https://cdn.simpleicons.org/fastapi/009688" },
  "FastAPI": { iconUrl: "https://cdn.simpleicons.org/fastapi/009688" },
  "SQLAlchemy": { iconUrl: "https://cdn.simpleicons.org/sqlalchemy/D71F00" },
  "PostgreSQL": { iconUrl: "https://cdn.simpleicons.org/postgresql/4169E1" },
  "Supabase (RLS)": { iconUrl: "https://cdn.simpleicons.org/supabase/3ECF8E" },
  "Supabase RLS": { iconUrl: "https://cdn.simpleicons.org/supabase/3ECF8E" },
  "MongoDB Atlas": { iconUrl: "https://cdn.simpleicons.org/mongodb/47A248" },
  "MongoDB": { iconUrl: "https://cdn.simpleicons.org/mongodb/47A248" },

  // AI & Document Engines
  "Google Gemini Pool": { iconUrl: "https://cdn.simpleicons.org/googlegemini/8E75B2" },
  "Google Gemini": { iconUrl: "https://cdn.simpleicons.org/googlegemini/8E75B2" },
  "Gemini Pool": { iconUrl: "https://cdn.simpleicons.org/googlegemini/8E75B2" },
  "Gemini API": { iconUrl: "https://cdn.simpleicons.org/googlegemini/8E75B2" },
  "OpenAI Codex": { materialIcon: "psychology", color: "text-secondary" },
  "Claude AI": { iconUrl: "https://cdn.simpleicons.org/anthropic/D97757" },
  "pdfjs-dist": { materialIcon: "picture_as_pdf", color: "text-error" },
  "mammoth": { materialIcon: "description", color: "text-secondary" },
  "jsPDF": { materialIcon: "receipt_long", color: "text-primary-container" },

  // Security, QA & Cloud
  "Playwright E2E": { materialIcon: "verified_user", color: "text-secondary-container" },
  "Playwright": { materialIcon: "verified_user", color: "text-secondary-container" },
  "HTTPOnly JWT": { iconUrl: "https://cdn.simpleicons.org/jsonwebtokens/ffffff" },
  "JWT Cookies": { iconUrl: "https://cdn.simpleicons.org/jsonwebtokens/ffffff" },
  "BetterAuth": { materialIcon: "shield_lock", color: "text-primary-container" },
  "Vercel": { iconUrl: "https://cdn.simpleicons.org/vercel/ffffff" },
  "Render": { iconUrl: "https://cdn.simpleicons.org/render/46E3B7" },
  "Git & GitHub": { iconUrl: "https://cdn.simpleicons.org/github/ffffff" },
};

interface SkillBadgeProps {
  name: string;
  size?: "sm" | "md" | "lg";
}

export default function SkillBadge({ name, size = "md" }: SkillBadgeProps) {
  const entry = SKILL_ICON_MAP[name];

  const paddingClass =
    size === "sm"
      ? "px-2 py-0.5 text-label-sm gap-1.5"
      : size === "lg"
      ? "px-3.5 py-2 text-body-md font-semibold gap-2 rounded-lg"
      : "px-3 py-1.5 text-label-md gap-2";
  const iconSizeClass =
    size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4";
  const matIconSize =
    size === "sm" ? "text-[14px]" : size === "lg" ? "text-[20px]" : "text-[16px]";

  return (
    <span
      className={`group inline-flex items-center bg-surface-container-highest/90 hover:bg-surface-variant text-on-surface hover:text-primary font-label-sm rounded border border-surface-variant/40 hover:border-primary-container/70 hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(244,231,0,0.18)] transition-all duration-200 cursor-default ${paddingClass}`}
    >
      {entry?.iconUrl ? (
        <img
          src={entry.iconUrl}
          alt={name}
          className={`${iconSizeClass} object-contain shrink-0 group-hover:scale-110 transition-transform duration-200`}
          loading="lazy"
        />
      ) : entry?.materialIcon ? (
        <span
          className={`material-symbols-outlined ${matIconSize} leading-none shrink-0 group-hover:scale-110 transition-transform duration-200 ${
            entry.color || "text-primary-container"
          }`}
        >
          {entry.materialIcon}
        </span>
      ) : (
        <span className="w-2 h-2 rounded-full bg-primary-container shrink-0 group-hover:scale-125 transition-transform duration-200" />
      )}
      <span>{name}</span>
    </span>
  );
}
