export interface RadialInspectorData {
  id: number;
  code: string;
  coreIcon: string;
  coreTitle: string;
  coreSubtitle: string;
  panelTitle: string;
  panelDesc: string;
  stats: [
    { label: string; value: string; colorClass: string },
    { label: string; value: string; colorClass: string },
    { label: string; value: string; colorClass: string },
  ];
  cards: {
    tag: string;
    title: string;
    subtitle: string;
    desc: string;
    badges: string[];
    actionLabel: string;
    targetSector: number;
    externalUrl?: string;
  }[];
}

export const RADIAL_WHEEL_SECTORS: RadialInspectorData[] = [
  {
    id: 0,
    code: "SECTOR 01 // OVERVIEW",
    coreIcon: "terminal",
    coreTitle: "ARSENAL",
    coreSubtitle: "CORE TECH MATRIX",
    panelTitle: "ARSENAL // SLOTTED TECH",
    panelDesc:
      "Autonomous multi-model AI routing, low-latency microservices, and reactive distributed frontends. Built for fault-tolerant high-throughput operations.",
    stats: [
      { label: "PARSE LATENCY", value: "142ms", colorClass: "text-primary-container" },
      { label: "FAILOVER", value: "99.98%", colorClass: "text-secondary-container" },
      { label: "LIGHTHOUSE", value: "98/100", colorClass: "text-primary" },
    ],
    cards: [
      {
        tag: "VANGUARD // FRONTEND",
        title: "NEXT.JS 15 & REACT 19 CORE",
        subtitle: "Zero-Hydration Mismatch Architecture",
        desc: "Server & Client Component orchestration with strict TypeScript 5.7, Tailwind CSS design tokens, Sonner feedback systems, and Recharts/SVG telemetry.",
        badges: ["Next.js 15", "React 19", "TypeScript 5", "Tailwind CSS", "Vite"],
        actionLabel: "INSPECT GIGS IN SECTOR 03",
        targetSector: 3,
      },
      {
        tag: "BASTION // BACKEND & DATA",
        title: "POLYGLOT RUNTIME & CITADEL DB",
        subtitle: "Express.js + Python FastAPI + RLS",
        desc: "Dual-stack backend mastery across Node/Express and Python FastAPI with PostgreSQL (Supabase RLS), MongoDB Atlas, HTTPOnly JWT cookies, and BetterAuth.",
        badges: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB", "Supabase RLS"],
        actionLabel: "LAUNCH BOSS CRUCIBLES (SEC 02)",
        targetSector: 2,
      },
      {
        tag: "ARCANE // AI & AUTOMATION",
        title: "MULTI-KEY GEMINI SUPERVISOR",
        subtitle: "8.5s Latency Budget & Zero-Disk Streamer",
        desc: "In-memory PDF/DOCX byte buffer parsing via pdfjs-dist and mammoth, rotating LLM key failover pools, and 18/18 Playwright E2E verification.",
        badges: ["Google Gemini", "OpenAI Codex", "Playwright E2E", "pdfjs-dist", "jsPDF"],
        actionLabel: "VIEW OPERATOR DOSSIER (SEC 04)",
        targetSector: 4,
      },
    ],
  },
  {
    id: 1,
    code: "SECTOR 02 // CRUCIBLE PREVIEW",
    coreIcon: "swords",
    coreTitle: "CRUCIBLES",
    coreSubtitle: "FELLED DEMIGODS",
    panelTitle: "BOSS RAIDS // FLAGSHIP SYSTEMS",
    panelDesc:
      "Production-hardened flagship architectures engineered to eliminate algorithmic ATS rejection and multi-tenant booking race conditions.",
    stats: [
      { label: "DEMIGODS FELLED", value: "2 / 2", colorClass: "text-primary-container" },
      { label: "E2E COVERAGE", value: "100%", colorClass: "text-secondary-container" },
      { label: "RACE COLLISIONS", value: "0.00%", colorClass: "text-primary" },
    ],
    cards: [
      {
        tag: "CRUCIBLE 01 // MYTHIC TIER",
        title: "MATCHPOINT AI",
        subtitle: "Autonomous ATS & AI Mock Interview Platform",
        desc: "Zero-disk in-memory PDF/DOCX resume parser, multi-key Google Gemini failover pool with 8.5s latency budget, Google XYZ bullet rewriter, and certified PDF export.",
        badges: ["React 19", "Node.js", "Supabase RLS", "Gemini Pool", "Playwright"],
        actionLabel: "ENTER BOSS CRUCIBLE (SEC 02)",
        targetSector: 2,
        externalUrl: "https://matchpointai.vercel.app",
      },
      {
        tag: "CRUCIBLE 02 // LEGENDARY TIER",
        title: "APERTURE (STUDIOSPACE)",
        subtitle: "P2P Creative Production Studio Marketplace",
        desc: "Full-stack Next.js 15 + Express/MongoDB platform featuring sticky booking/escrow calculator, 30-day SVG telemetry sparklines, and 1-click jsPDF invoicing.",
        badges: ["Next.js 15", "TypeScript", "Express", "MongoDB", "JWT Cookies", "jsPDF"],
        actionLabel: "ENTER BOSS CRUCIBLE (SEC 02)",
        targetSector: 2,
        externalUrl: "https://aperture-studio-olive.vercel.app",
      },
    ],
  },
  {
    id: 2,
    code: "SECTOR 03 // SHIPPED GIGS",
    coreIcon: "deployed_code",
    coreTitle: "ACTIVE GIGS",
    coreSubtitle: "DEPLOYED ARSENAL",
    panelTitle: "QUEST LOG // 4 LIVE CONTRACTS",
    panelDesc:
      "Metropolitan price intelligence, high-intensity athletic logging, algorithmic fiscal ledgers, and interactive developer stack curation.",
    stats: [
      { label: "LIVE NODES", value: "4 / 4", colorClass: "text-primary-container" },
      { label: "QUERY LATENCY", value: "12.4ms", colorClass: "text-secondary-container" },
      { label: "SYNC DRIFT", value: "0ms", colorClass: "text-primary" },
    ],
    cards: [
      {
        tag: "CONTRACT 01 // RECON MARKET",
        title: "BAZAR DOR",
        subtitle: "Bangladesh Commodity & Grocery Price Tracker",
        desc: "Real-time price ticker, daily top movers, 7-category market comparison, and BetterAuth social + email authentication.",
        badges: ["Next.js 15", "TypeScript", "BetterAuth", "Tailwind"],
        actionLabel: "OPEN QUEST LOG (SEC 03)",
        targetSector: 3,
        externalUrl: "https://bazardor-wi-z1.vercel.app",
      },
      {
        tag: "CONTRACT 02 & 03 // FITLOG & EXPENSE TRACKER",
        title: "FITLOG + SMART EXPENSE TRACKER",
        subtitle: "Next.js 15 PWA & Python FastAPI Analytics",
        desc: "5-lift daily workout planner with live calorie/duration metrics alongside a Python FastAPI + SQLAlchemy + Recharts financial ledger.",
        badges: ["Next.js 15", "Python FastAPI", "SQLAlchemy", "PostgreSQL", "Recharts"],
        actionLabel: "EXPLORE ALL 4 CONTRACTS (SEC 03)",
        targetSector: 3,
        externalUrl: "https://ftlog.vercel.app",
      },
    ],
  },
  {
    id: 3,
    code: "SECTOR 04 // OPERATOR DOSSIER",
    coreIcon: "badge",
    coreTitle: "DOSSIER",
    coreSubtitle: "LVL 24 OPERATOR",
    panelTitle: "VICTOR MALLICK // WIZARDEZGG",
    panelDesc:
      "CS Undergraduate & Full-Stack Systems Builder in Khulna, Bangladesh (GMT+6). Equipped with 3 Great Runes and 4 Verified Cyberware Modules.",
    stats: [
      { label: "VIGOR (UPTIME)", value: "96/99", colorClass: "text-primary-container" },
      { label: "FAITH (RLS)", value: "98/99", colorClass: "text-secondary-container" },
      { label: "ATS SCORE", value: "98/100", colorClass: "text-primary" },
    ],
    cards: [
      {
        tag: "OPERATOR IDENTITY // KHULNA, BD",
        title: "B.SC. IN COMPUTER SCIENCE & ENG.",
        subtitle: "Class of 2026 • Full-Stack & AI Specialist",
        desc: "Specializing in zero-disk document parsing, resilient multi-key LLM pipelines, and hydration-safe Next.js 15 / Node.js / FastAPI architectures.",
        badges: ["Distributed Systems", "DBMS", "DSA", "Networks", "AI Engineering"],
        actionLabel: "OPEN FULL OPERATOR DOSSIER (SEC 04)",
        targetSector: 4,
      },
    ],
  },
  {
    id: 4,
    code: "SECTOR 05 // MULTIPLAYER UPLINK",
    coreIcon: "sensors",
    coreTitle: "BEACON",
    coreSubtitle: "CO-OP DISPATCH",
    panelTitle: "SUMMONING PROTOCOL // READY",
    panelDesc:
      "Open for full-time engineering roles, high-impact architecture overhauls, and autonomous AI pipeline contracts. Direct comms frequency active.",
    stats: [
      { label: "PING", value: "0.14ms", colorClass: "text-primary-container" },
      { label: "SLA RESPONSE", value: "< 12H", colorClass: "text-secondary-container" },
      { label: "ENCRYPTION", value: "AES-256", colorClass: "text-primary" },
    ],
    cards: [
      {
        tag: "DIRECT CARRIER FREQUENCY",
        title: "VICTORMALLICK19@GMAIL.COM",
        subtitle: "Global Remote & Co-Op Ready",
        desc: "Transmit an encrypted dispatch directly to Sector 05 or inspect dual GitHub chronicles (@Wizardezgg & @victormallick).",
        badges: ["@Wizardezgg", "@victormallick", "Khulna GMT+6", "Unrestricted Clearance"],
        actionLabel: "OPEN MULTIPLAYER BEACON (SEC 05)",
        targetSector: 5,
      },
    ],
  },
];
