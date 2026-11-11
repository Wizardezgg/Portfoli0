import { jsPDF } from "jspdf";

export function downloadVictorResumePdf() {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const left = 44;
  const right = 551;
  let y = 48;

  // Header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("VICTOR MALLICK", left, y);
  y += 16;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(60, 60, 60);
  doc.text(
    "Full-Stack Software Engineer & AI Web Systems Builder (Wizardezgg)",
    left,
    y
  );
  y += 14;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(80, 80, 80);
  doc.text(
    "Khulna, BD  |  victormallick19@gmail.com  |  Portfolio: victormallick.is-a.dev",
    left,
    y
  );
  y += 13;
  doc.text(
    "GitHub: github.com/Wizardezgg  |  LinkedIn: linkedin.com/in/victor-mallick  |  Discord: w1zard_gg",
    left,
    y
  );
  y += 12;

  doc.setDrawColor(180, 180, 180);
  doc.line(left, y, right, y);
  y += 18;

  const addSectionTitle = (title: string) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(20, 20, 20);
    doc.text(title.toUpperCase(), left, y);
    y += 5;
    doc.setDrawColor(210, 210, 210);
    doc.line(left, y, right, y);
    y += 14;
  };

  const addBullet = (text: string) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(40, 40, 40);
    const lines = doc.splitTextToSize(`•  ${text}`, right - left);
    doc.text(lines, left, y);
    y += lines.length * 13 + 2;
  };

  // Technical Skills
  addSectionTitle("Technical Arsenal");
  addBullet(
    "Frontend Vanguard: Next.js 15 (App Router), React 19, TypeScript 5, Tailwind CSS, Vite 8, Recharts, Responsive UI"
  );
  addBullet(
    "Backend & APIs: Node.js, Express.js, Python 3.12, FastAPI, SQLAlchemy, RESTful Microservices"
  );
  addBullet(
    "Databases & Security: PostgreSQL, Supabase (Row-Level Security / RLS), MongoDB Atlas, HTTPOnly JWT, BetterAuth"
  );
  addBullet(
    "AI, Document Engines & QA: Google Gemini Multi-Key Failover Pool, OpenAI Codex, Claude AI, pdfjs-dist, mammoth, jsPDF, Playwright E2E"
  );
  y += 6;

  // Flagship Production Systems
  addSectionTitle("Flagship Production Projects");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(20, 20, 20);
  doc.text(
    "1. MatchPoint AI — Autonomous ATS Resume Optimizer & AI Mock Interviewer",
    left,
    y
  );
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(80, 80, 80);
  doc.text("https://matchpointai.vercel.app", right, y, { align: "right" });
  y += 14;
  addBullet(
    "Engineered a zero-disk in-memory PDF/DOCX parsing pipeline using pdfjs-dist and mammoth (~142ms parse time) with zero server disk writes."
  );
  addBullet(
    "Built a multi-key Google Gemini failover pool with an 8.5s latency budget that hot-swaps channels on rate limits without session drops."
  );
  addBullet(
    "Implemented 1-click Google XYZ bullet point rewriter, STAR mock interview simulator, and 18/18 passing Playwright E2E tests."
  );
  y += 4;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(20, 20, 20);
  doc.text(
    "2. Aperture (StudioSpace) — P2P Creative Studio Marketplace",
    left,
    y
  );
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(80, 80, 80);
  doc.text("https://aperture-studio-olive.vercel.app", right, y, {
    align: "right",
  });
  y += 14;
  addBullet(
    "Architected a full-stack marketplace using Next.js 15, Express/TypeScript, and MongoDB Atlas with HTTPOnly JWT authentication."
  );
  addBullet(
    "Built an interactive booking & escrow calculator, 30-day SVG revenue sparklines, and 1-click PDF invoice export via jsPDF."
  );
  y += 4;

  // Additional Deployed Projects
  addSectionTitle("Shipped Web Applications");
  addBullet(
    "Bazar Dor (https://bazardor-wi-z1.vercel.app/): Real-time Bangladesh commodity & grocery price tracker built with Next.js 15, TypeScript, and BetterAuth."
  );
  addBullet(
    "FitLog (https://ftlog.vercel.app): High-intensity workout planner & logger with 5-lift smart daily quota caps and live calorie/duration counters."
  );
  addBullet(
    "Dev Stack Builder (https://devstack-wiz.vercel.app/): Interactive zero-roundtrip developer stack curator built with React 19 and Vite 8."
  );
  y += 6;

  // Education
  addSectionTitle("Education");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(20, 20, 20);
  doc.text(
    "Bachelor of Science in Computer Science & Engineering (B.Sc. in CSE)",
    left,
    y
  );
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(80, 80, 80);
  doc.text("Class of 2026 | Khulna, Bangladesh", right, y, {
    align: "right",
  });

  doc.save("Victor_Mallick_Resume.pdf");
}
