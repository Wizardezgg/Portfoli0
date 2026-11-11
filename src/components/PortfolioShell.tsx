"use client";

import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { playHoloTone } from "@/utils/sound";
import { downloadVictorResumePdf } from "@/utils/resume";
import Sector01RadialWheel from "@/components/Sector01RadialWheel";
import Sector02BossCrucibles from "@/components/Sector02BossCrucibles";
import Sector03ActiveGigs from "@/components/Sector03ActiveGigs";
import Sector04OperatorDossier from "@/components/Sector04OperatorDossier";
import Sector05MultiplayerBeacon from "@/components/Sector05MultiplayerBeacon";
import CyberBackground from "@/components/CyberBackground";

const NAV_SECTORS = [
  { id: 1, title: "01 // COMMAND DECK", tag: "HOME", icon: "radar" },
  { id: 2, title: "02 // CRUCIBLES", tag: "BOSSES", icon: "swords" },
  { id: 3, title: "03 // QUEST LOG", tag: "GIGS", icon: "deployed_code" },
  { id: 4, title: "04 // DOSSIER", tag: "SKILLS", icon: "badge" },
  { id: 5, title: "05 // BEACON", tag: "UPLINK", icon: "sensors" },
];

interface CommandItem {
  id: string;
  group: string;
  title: string;
  subtitle: string;
  icon: string;
  badge: string;
  action: () => void;
}

export default function PortfolioShell() {
  const [activeSector, setActiveSector] = useState<number>(1);
  const [runes, setRunes] = useState<number>(94820);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [cmdOpen, setCmdOpen] = useState<boolean>(false);
  const [cmdQuery, setCmdQuery] = useState<string>("");
  const [cmdSelectedIndex, setCmdSelectedIndex] = useState<number>(0);

  const triggerSound = (
    freq: number = 440,
    type: OscillatorType = "sine",
    duration: number = 0.08
  ) => {
    playHoloTone(freq, type, duration, audioEnabled);
  };

  const handleNavigateSector = (sector: number) => {
    setActiveSector(sector);
    setMobileMenuOpen(false);
    setCmdOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddRunes = (amount: number) => {
    setRunes((prev) => prev + amount);
  };

  const commandItems: CommandItem[] = [
    {
      id: "resume",
      group: "QUICK ACTIONS",
      title: "Download ATS Resume (PDF)",
      subtitle: "Generate & download Victor_Mallick_Resume.pdf",
      icon: "picture_as_pdf",
      badge: "PDF",
      action: () => {
        triggerSound(880, "triangle", 0.12);
        handleAddRunes(100);
        downloadVictorResumePdf();
        toast.success("PDF RESUME DOWNLOADED (+100 RUNES)");
        setCmdOpen(false);
      },
    },
    {
      id: "copy-email",
      group: "QUICK ACTIONS",
      title: "Copy Email Address",
      subtitle: "victormallick19@gmail.com",
      icon: "mail",
      badge: "COPY",
      action: () => {
        navigator.clipboard.writeText("victormallick19@gmail.com");
        triggerSound(820, "triangle", 0.1);
        handleAddRunes(50);
        toast.success("EMAIL COPIED: victormallick19@gmail.com");
        setCmdOpen(false);
      },
    },
    {
      id: "copy-discord",
      group: "QUICK ACTIONS",
      title: "Copy Discord Callsign",
      subtitle: "w1zard_gg",
      icon: "forum",
      badge: "COPY",
      action: () => {
        navigator.clipboard.writeText("w1zard_gg");
        triggerSound(780, "triangle", 0.1);
        handleAddRunes(50);
        toast.success("DISCORD TAG COPIED: w1zard_gg");
        setCmdOpen(false);
      },
    },
    ...NAV_SECTORS.map((s) => ({
      id: `sec-${s.id}`,
      group: "NAVIGATION SECTORS",
      title: s.title,
      subtitle: `Switch viewport to ${s.tag}`,
      icon: s.icon,
      badge: `KEY [${s.id}]`,
      action: () => {
        triggerSound(460 + s.id * 50, "triangle", 0.08);
        handleNavigateSector(s.id);
      },
    })),
    {
      id: "app-matchpoint",
      group: "LIVE PRODUCTION APPS",
      title: "Launch MatchPoint AI",
      subtitle: "Autonomous ATS Resume Optimizer & AI Mock Interviewer",
      icon: "bolt",
      badge: "LIVE ↗",
      action: () => {
        window.open("https://matchpointai.vercel.app", "_blank");
        setCmdOpen(false);
      },
    },
    {
      id: "app-aperture",
      group: "LIVE PRODUCTION APPS",
      title: "Launch Aperture (StudioSpace)",
      subtitle: "P2P Creative Production Studio Marketplace",
      icon: "hub",
      badge: "LIVE ↗",
      action: () => {
        window.open("https://aperture-studio-olive.vercel.app", "_blank");
        setCmdOpen(false);
      },
    },
    {
      id: "app-bazardor",
      group: "LIVE PRODUCTION APPS",
      title: "Launch Bazar Dor",
      subtitle: "Bangladesh Commodity & Grocery Price Tracker",
      icon: "show_chart",
      badge: "LIVE ↗",
      action: () => {
        window.open("https://bazardor-wi-z1.vercel.app/", "_blank");
        setCmdOpen(false);
      },
    },
    {
      id: "app-fitlog",
      group: "LIVE PRODUCTION APPS",
      title: "Launch FitLog",
      subtitle: "High-Intensity Workout Planner & Logger",
      icon: "fitness_center",
      badge: "LIVE ↗",
      action: () => {
        window.open("https://ftlog.vercel.app", "_blank");
        setCmdOpen(false);
      },
    },
    {
      id: "app-devstack",
      group: "LIVE PRODUCTION APPS",
      title: "Launch Dev Stack Builder",
      subtitle: "Interactive Developer Stack Curator",
      icon: "deployed_code",
      badge: "LIVE ↗",
      action: () => {
        window.open("https://devstack-wiz.vercel.app/", "_blank");
        setCmdOpen(false);
      },
    },
  ];

  const filteredCommands = commandItems.filter(
    (item) =>
      item.title.toLowerCase().includes(cmdQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(cmdQuery.toLowerCase()) ||
      item.group.toLowerCase().includes(cmdQuery.toLowerCase())
  );

  useEffect(() => {
    setCmdSelectedIndex(0);
  }, [cmdQuery, cmdOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        playHoloTone(680, "triangle", 0.08, audioEnabled);
        setCmdOpen((prev) => !prev);
        setCmdQuery("");
        return;
      }

      if (cmdOpen) {
        if (e.key === "Escape") {
          e.preventDefault();
          setCmdOpen(false);
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          setCmdSelectedIndex((prev) =>
            filteredCommands.length === 0
              ? 0
              : (prev + 1) % filteredCommands.length
          );
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setCmdSelectedIndex((prev) =>
            filteredCommands.length === 0
              ? 0
              : (prev - 1 + filteredCommands.length) % filteredCommands.length
          );
        } else if (e.key === "Enter" && filteredCommands[cmdSelectedIndex]) {
          e.preventDefault();
          filteredCommands[cmdSelectedIndex].action();
        }
        return;
      }

      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (e.key >= "1" && e.key <= "5") {
        const num = parseInt(e.key, 10);
        playHoloTone(440 + num * 50, "triangle", 0.08, audioEnabled);
        setActiveSector(num);
      } else if (e.key.toLowerCase() === "q") {
        playHoloTone(480, "sine", 0.07, audioEnabled);
        setActiveSector((prev) => (prev <= 1 ? 5 : prev - 1));
      } else if (e.key.toLowerCase() === "e") {
        playHoloTone(580, "sine", 0.07, audioEnabled);
        setActiveSector((prev) => (prev >= 5 ? 1 : prev + 1));
      } else if (e.key === "Escape") {
        playHoloTone(400, "triangle", 0.08, audioEnabled);
        setActiveSector(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [audioEnabled, cmdOpen, filteredCommands, cmdSelectedIndex]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* 3D Warp Starfield + Interactive Cursor Hex Spotlight Canvas */}
      <CyberBackground activeSector={activeSector} />
      {/* FLOATING GLASS HUD PILL DOCK NAVBAR */}
      <header className="fixed top-3 left-0 right-0 z-50 px-gutter md:px-margin pointer-events-none">
        <div className="w-full max-w-6xl mx-auto h-14 px-3.5 rounded-2xl bg-surface-container-lowest/85 backdrop-blur-xl border border-primary-container/35 shadow-[0_10px_35px_rgba(0,0,0,0.75),0_0_20px_rgba(244,231,0,0.1)] flex items-center justify-between gap-3 pointer-events-auto">
          {/* Left: Operator Avatar & Brand */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-1.5 rounded-lg bg-surface-container text-primary hover:bg-surface-container-high"
              aria-label="Toggle Menu"
            >
              <span className="material-symbols-outlined text-[20px]">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>

            <button
              onClick={() => {
                triggerSound(520, "triangle");
                handleNavigateSector(1);
              }}
              className="flex items-center gap-2.5 text-left group"
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-primary-container/70 shrink-0">
                <img
                  src="https://avatars.githubusercontent.com/u/298356245?v=4"
                  alt="Victor Mallick"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-[14px] leading-tight uppercase text-primary group-hover:text-primary-container transition-colors font-bold">
                  WIZARDEZGG
                </span>
                <span className="font-label-sm text-[9px] text-secondary uppercase">
                  VICTOR MALLICK
                </span>
              </div>
            </button>
          </div>

          {/* Center: Floating Pill Sector Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-surface-container/90 p-1 rounded-xl border border-surface-variant/40">
            {NAV_SECTORS.map((sec) => {
              const isActive = activeSector === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => {
                    triggerSound(460 + sec.id * 50, "triangle", 0.08);
                    handleNavigateSector(sec.id);
                  }}
                  className={`px-3.5 py-1.5 rounded-lg font-label-md text-label-md uppercase transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap ${
                    isActive
                      ? "bg-primary-container text-on-primary-container font-bold shadow-[0_0_14px_rgba(244,231,0,0.35)]"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-container-high"
                  }`}
                >
                  <span className="material-symbols-outlined text-[15px]">
                    {sec.icon}
                  </span>
                  <span>{sec.tag}</span>
                </button>
              );
            })}
          </nav>

          {/* Right: Ctrl+K Launcher + Social Quick Links + Audio + Hire Me CTA */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => {
                triggerSound(680, "triangle", 0.08);
                setCmdOpen(true);
                setCmdQuery("");
              }}
              className="px-2.5 py-1.5 rounded-xl bg-surface-container hover:bg-surface-container-high border border-surface-variant/40 hover:border-primary-container/60 text-on-surface-variant hover:text-primary flex items-center gap-1.5 transition-all"
              title="Open Tactical Command Palette (Ctrl + K)"
            >
              <span className="material-symbols-outlined text-[15px] text-primary-container">
                search
              </span>
              <span className="hidden md:inline font-label-sm text-[10px] text-primary-container font-bold">
                CTRL+K
              </span>
            </button>

            <div className="hidden sm:flex items-center gap-1 bg-surface-container px-2 py-1 rounded-xl border border-surface-variant/30">
              <a
                href="https://github.com/Wizardezgg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded-lg hover:bg-surface-container-high hover:-translate-y-0.5 transition-all"
                title="GitHub (@Wizardezgg)"
              >
                <img
                  src="https://cdn.simpleicons.org/github/ffffff"
                  alt="GitHub"
                  className="w-3.5 h-3.5"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/victor-mallick"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded-lg hover:bg-surface-container-high hover:-translate-y-0.5 transition-all"
                title="LinkedIn (Victor Mallick)"
              >
                <svg className="w-3.5 h-3.5 fill-[#0A66C2]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/wizardezgg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded-lg hover:bg-surface-container-high hover:-translate-y-0.5 transition-all"
                title="Facebook (@wizardezgg)"
              >
                <img
                  src="https://cdn.simpleicons.org/facebook/0866FF"
                  alt="Facebook"
                  className="w-3.5 h-3.5"
                />
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("w1zard_gg");
                  triggerSound(780, "triangle");
                  toast.success("DISCORD COPIED: w1zard_gg");
                }}
                className="p-1 rounded-lg hover:bg-surface-container-high hover:-translate-y-0.5 transition-all"
                title="Copy Discord: w1zard_gg"
              >
                <img
                  src="https://cdn.simpleicons.org/discord/5865F2"
                  alt="Discord"
                  className="w-3.5 h-3.5"
                />
              </button>
            </div>

            <button
              onClick={() => setAudioEnabled((prev) => !prev)}
              className="p-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center"
              title={`Tactical Audio (${runes.toLocaleString()} Runes)`}
            >
              <span className="material-symbols-outlined text-[16px]">
                {audioEnabled ? "volume_up" : "volume_off"}
              </span>
            </button>

            <button
              onClick={() => {
                triggerSound(780, "triangle");
                handleNavigateSector(5);
              }}
              className="hud-btn-hover px-3.5 py-1.5 rounded-xl bg-secondary-container text-on-secondary font-label-md text-label-md uppercase font-bold hover:bg-primary-container hover:text-on-primary-container flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[15px]">bolt</span>
              <span>HIRE ME</span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="w-full max-w-6xl mx-auto mt-2 p-2.5 rounded-2xl bg-surface-container-lowest/95 backdrop-blur-xl border border-primary-container/35 shadow-2xl flex flex-col gap-1.5 lg:hidden pointer-events-auto">
            {NAV_SECTORS.map((sec) => {
              const isActive = activeSector === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => {
                    triggerSound(460 + sec.id * 50, "triangle", 0.08);
                    handleNavigateSector(sec.id);
                  }}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl font-label-md text-label-md uppercase ${
                    isActive
                      ? "bg-primary-container text-on-primary-container font-bold"
                      : "text-on-surface-variant hover:bg-surface-container-high"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">
                      {sec.icon}
                    </span>
                    {sec.title}
                  </span>
                  <span>{sec.tag}</span>
                </button>
              );
            })}

            {/* Mobile Quick Social Row */}
            <div className="grid grid-cols-4 gap-1.5 pt-1.5 border-t border-surface-variant/30 sm:hidden">
              <a
                href="https://github.com/Wizardezgg"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 rounded-xl bg-surface-container flex items-center justify-center"
              >
                <img
                  src="https://cdn.simpleicons.org/github/ffffff"
                  alt="GitHub"
                  className="w-4 h-4"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/victor-mallick"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 rounded-xl bg-surface-container flex items-center justify-center"
              >
                <svg className="w-4 h-4 fill-[#0A66C2]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/wizardezgg"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 rounded-xl bg-surface-container flex items-center justify-center"
              >
                <img
                  src="https://cdn.simpleicons.org/facebook/0866FF"
                  alt="Facebook"
                  className="w-4 h-4"
                />
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("w1zard_gg");
                  triggerSound(780, "triangle");
                  toast.success("DISCORD COPIED: w1zard_gg");
                }}
                className="py-2 rounded-xl bg-surface-container flex items-center justify-center"
              >
                <img
                  src="https://cdn.simpleicons.org/discord/5865F2"
                  alt="Discord"
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* CTRL + K TACTICAL COMMAND PALETTE MODAL */}
      {cmdOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
          onClick={() => setCmdOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-surface-container-lowest border border-primary-container/50 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_25px_rgba(244,231,0,0.15)] overflow-hidden animate-hud-enter"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-2.5 px-4 py-3 border-b border-surface-variant/40 bg-surface-container-low">
              <span className="material-symbols-outlined text-primary-container text-[20px]">
                terminal
              </span>
              <input
                autoFocus
                type="text"
                value={cmdQuery}
                onChange={(e) => setCmdQuery(e.target.value)}
                placeholder="Type a command, project, or action (e.g. 'resume', 'matchpoint', 'discord')..."
                className="flex-1 bg-transparent text-primary font-body-md text-body-md focus:outline-none placeholder:text-on-surface-variant/60"
              />
              <button
                onClick={() => setCmdOpen(false)}
                className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant hover:text-primary font-label-sm text-[10px] uppercase"
              >
                ESC
              </button>
            </div>

            {/* Command List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filteredCommands.length === 0 ? (
                <div className="py-8 text-center font-label-md text-label-md text-on-surface-variant">
                  NO MATCHING COMMANDS FOUND
                </div>
              ) : (
                filteredCommands.map((item, idx) => {
                  const isSelected = idx === cmdSelectedIndex;
                  return (
                    <button
                      key={item.id}
                      onMouseEnter={() => setCmdSelectedIndex(idx)}
                      onClick={item.action}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all ${
                        isSelected
                          ? "bg-primary-container text-on-primary-container font-bold"
                          : "hover:bg-surface-container text-on-surface"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className={`material-symbols-outlined text-[18px] shrink-0 ${
                            isSelected
                              ? "text-on-primary-container"
                              : "text-primary-container"
                          }`}
                        >
                          {item.icon}
                        </span>
                        <div className="min-w-0">
                          <div className="font-headline-sm text-[14px] leading-tight truncate">
                            {item.title}
                          </div>
                          <div
                            className={`font-label-sm text-[10px] truncate ${
                              isSelected
                                ? "text-on-primary-container/80"
                                : "text-on-surface-variant"
                            }`}
                          >
                            {item.subtitle}
                          </div>
                        </div>
                      </div>
                      <span
                        className={`font-label-sm text-[10px] px-2 py-0.5 rounded shrink-0 ml-2 ${
                          isSelected
                            ? "bg-on-primary-container/15 text-on-primary-container font-bold"
                            : "bg-surface-container-high text-secondary"
                        }`}
                      >
                        {item.badge}
                      </span>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Hints */}
            <div className="px-4 py-2 bg-surface-container-low border-t border-surface-variant/40 flex items-center justify-between font-label-sm text-[10px] text-on-surface-variant">
              <span>↑↓ TO NAVIGATE • ENTER TO EXECUTE</span>
              <span className="text-primary-container">WIZARDEZGG OS</span>
            </div>
          </div>
        </div>
      )}

      {/* MAIN SECTOR VIEWPORT (Full Width) */}
      <div className="flex-1 relative z-10">
        <main className="w-full pt-20 bg-transparent min-h-screen">
          <div key={activeSector} className="animate-hud-enter">
            {activeSector === 1 && (
              <Sector01RadialWheel
                onNavigateSector={handleNavigateSector}
                onSound={triggerSound}
              />
            )}
            {activeSector === 2 && (
              <Sector02BossCrucibles onSound={triggerSound} />
            )}
            {activeSector === 3 && (
              <Sector03ActiveGigs onSound={triggerSound} />
            )}
            {activeSector === 4 && (
              <Sector04OperatorDossier
                onSound={triggerSound}
                onAddRunes={handleAddRunes}
              />
            )}
            {activeSector === 5 && (
              <Sector05MultiplayerBeacon
                onSound={triggerSound}
                onAddRunes={handleAddRunes}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
