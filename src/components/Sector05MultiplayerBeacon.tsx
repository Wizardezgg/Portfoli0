"use client";

import React, { useState } from "react";
import { toast } from "sonner";

interface Sector05Props {
  onSound: (freq?: number, type?: OscillatorType, duration?: number) => void;
  onAddRunes: (amount: number) => void;
}

export default function Sector05MultiplayerBeacon({
  onSound,
  onAddRunes,
}: Sector05Props) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);
  const [summonerName, setSummonerName] = useState("");
  const [summonerEmail, setSummonerEmail] = useState("");
  const [objective, setObjective] = useState("Full-Stack Role");
  const [payload, setPayload] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("victormallick19@gmail.com");
    onSound(820, "triangle", 0.1);
    onAddRunes(50);
    setCopiedEmail(true);
    toast.success("COMMS COPIED: victormallick19@gmail.com (+50 RUNES)");
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText("w1zard_gg");
    onSound(780, "triangle", 0.1);
    onAddRunes(50);
    setCopiedDiscord(true);
    toast.success("DISCORD TAG COPIED: w1zard_gg (+50 RUNES)");
    setTimeout(() => setCopiedDiscord(false), 3000);
  };

  const handleDispatchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!summonerName.trim() || !summonerEmail.trim() || !payload.trim()) return;

    onSound(680, "square", 0.12);
    setSubmitting(true);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/victormallick19@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: summonerName,
            email: summonerEmail,
            inquiry_type: objective,
            message: payload,
            _subject: `[Portfolio Dispatch] ${objective} — from ${summonerName}`,
          }),
        }
      );

      if (res.ok) {
        setSubmitted(true);
        onAddRunes(250);
        toast.success("TRANSMISSION DELIVERED TO VICTOR MALLICK (+250 RUNES)");
        setSummonerName("");
        setSummonerEmail("");
        setPayload("");
      } else {
        throw new Error("Fallback to mailto");
      }
    } catch {
      const subject = encodeURIComponent(
        `[Portfolio Inquiry: ${objective}] from ${summonerName}`
      );
      const body = encodeURIComponent(
        `Name: ${summonerName}\nEmail: ${summonerEmail}\nRole / Inquiry: ${objective}\n\n${payload}`
      );
      window.location.href = `mailto:victormallick19@gmail.com?subject=${subject}&body=${body}`;
      setSubmitted(true);
      onAddRunes(250);
      toast.success("OPENING MAIL CLIENT TO TRANSMIT MESSAGE (+250 RUNES)");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto px-gutter md:px-margin py-3 lg:py-4 gap-4">
      {/* Clean Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 pb-2.5 border-b border-surface-variant/30">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container font-bold">
            SECTOR 05 // OPEN UPLINK
          </span>
          <h1 className="font-headline-md sm:text-headline-lg uppercase text-primary mt-0.5">
            MULTIPLAYER BEACON
          </h1>
        </div>
        <span className="font-label-sm text-label-sm text-secondary uppercase">
          STATUS: AVAILABLE FOR REMOTE &amp; FULL-TIME ROLES
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        {/* Left: Direct Channels (5 Cols) */}
        <div className="lg:col-span-5 bg-surface-container-low rounded-xl p-space-lg flex flex-col gap-space-md border border-surface-variant/30">
          <span className="font-label-sm text-label-sm text-primary-container font-bold uppercase tracking-widest">
            // DIRECT COMMS CHANNELS
          </span>

          {/* Email Copy Card */}
          <div className="bg-surface-container rounded-lg p-space-md flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
              PRIMARY EMAIL
            </span>
            <div className="flex items-center gap-space-xs">
              <div className="flex-1 bg-surface-container-lowest px-space-sm py-space-xs rounded font-label-md text-label-md text-secondary truncate">
                victormallick19@gmail.com
              </div>
              <button
                onClick={handleCopyEmail}
                className="bg-primary-container text-on-primary-container px-space-md py-space-xs rounded font-label-md text-label-md uppercase font-bold hover:bg-secondary-container hover:text-on-secondary transition-all"
              >
                {copiedEmail ? "COPIED" : "COPY"}
              </button>
            </div>
          </div>

          {/* Discord Copy Card */}
          <div className="bg-surface-container rounded-lg p-space-md flex flex-col gap-space-xs">
            <div className="flex items-center gap-1.5">
              <img
                src="https://cdn.simpleicons.org/discord/5865F2"
                alt="Discord"
                className="w-3.5 h-3.5"
              />
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                DISCORD CALLSIGN
              </span>
            </div>
            <div className="flex items-center gap-space-xs">
              <div className="flex-1 bg-surface-container-lowest px-space-sm py-space-xs rounded font-label-md text-label-md text-primary truncate">
                w1zard_gg
              </div>
              <button
                onClick={handleCopyDiscord}
                className="bg-surface-container-highest text-primary hover:bg-primary-container hover:text-on-primary-container px-space-md py-space-xs rounded font-label-md text-label-md uppercase font-bold transition-all"
              >
                {copiedDiscord ? "COPIED" : "COPY TAG"}
              </button>
            </div>
          </div>

          {/* Social & GitHub Portals (Clean Full-Width Rows) */}
          <div className="flex flex-col gap-space-xs">
            <a
              href="https://github.com/Wizardezgg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container px-space-md py-3 rounded-lg hover:bg-surface-container-high flex items-center justify-between gap-space-sm border border-surface-variant/30 hud-card-hover group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded bg-surface-container-lowest flex items-center justify-center shrink-0">
                  <img
                    src="https://cdn.simpleicons.org/github/ffffff"
                    alt="GitHub"
                    className="w-4 h-4 group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="min-w-0">
                  <span className="font-label-md text-label-md text-primary-container font-bold block">
                    GITHUB
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant block truncate">
                    github.com/Wizardezgg
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary-container group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0">
                north_east
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/victor-mallick"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container px-space-md py-3 rounded-lg hover:bg-surface-container-high flex items-center justify-between gap-space-sm border border-surface-variant/30 hud-card-hover group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded bg-surface-container-lowest flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 fill-[#0A66C2] group-hover:scale-110 transition-transform"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <span className="font-label-md text-label-md text-primary font-bold block">
                    LINKEDIN
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant block truncate">
                    linkedin.com/in/victor-mallick
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0">
                north_east
              </span>
            </a>

            <a
              href="https://www.facebook.com/wizardezgg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container px-space-md py-3 rounded-lg hover:bg-surface-container-high flex items-center justify-between gap-space-sm border border-surface-variant/30 hud-card-hover group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded bg-surface-container-lowest flex items-center justify-center shrink-0">
                  <img
                    src="https://cdn.simpleicons.org/facebook/0866FF"
                    alt="Facebook"
                    className="w-4 h-4 group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="min-w-0">
                  <span className="font-label-md text-label-md text-primary font-bold block">
                    FACEBOOK
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant block truncate">
                    facebook.com/wizardezgg
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0">
                north_east
              </span>
            </a>
          </div>

          {/* Location */}
          <div className="bg-surface-container rounded-lg p-space-md flex items-center justify-between">
            <div>
              <span className="font-label-sm text-label-sm text-on-surface-variant block">
                BASE LOCATION
              </span>
              <span className="font-body-md text-body-md text-primary font-bold">
                Khulna, Bangladesh (GMT+6)
              </span>
            </div>
            <span className="px-2 py-0.5 bg-surface-container-highest text-secondary font-label-sm text-label-sm rounded">
              REMOTE READY
            </span>
          </div>
        </div>

        {/* Right: Clean Contact Form (7 Cols) */}
        <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-space-lg flex flex-col gap-space-md border border-surface-variant/30">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-primary-container font-bold uppercase tracking-widest">
              // SEND DISPATCH TO VICTORMALLICK19@GMAIL.COM
            </span>
            <a
              href="mailto:victormallick19@gmail.com"
              className="font-label-sm text-label-sm text-secondary hover:underline uppercase"
            >
              DIRECT MAILTO ↗
            </a>
          </div>

          <form
            onSubmit={handleDispatchSubmit}
            className="flex flex-col gap-space-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <label className="font-label-sm text-label-sm uppercase text-secondary">
                  YOUR NAME *
                </label>
                <input
                  value={summonerName}
                  onChange={(e) => setSummonerName(e.target.value)}
                  className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md px-space-md py-space-sm rounded focus:outline-none focus:ring-1 focus:ring-primary-container"
                  placeholder="Sarah Chen"
                  required
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-space-xs">
                <label className="font-label-sm text-label-sm uppercase text-secondary">
                  YOUR EMAIL *
                </label>
                <input
                  value={summonerEmail}
                  onChange={(e) => setSummonerEmail(e.target.value)}
                  className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md px-space-md py-space-sm rounded focus:outline-none focus:ring-1 focus:ring-primary-container"
                  placeholder="sarah@company.com"
                  required
                  type="email"
                />
              </div>
            </div>

            <div className="flex flex-col gap-space-xs">
              <label className="font-label-sm text-label-sm uppercase text-primary-container">
                ROLE / INQUIRY TYPE
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs">
                {[
                  "Full-Stack Role",
                  "AI Engineering",
                  "Freelance / Project",
                ].map((label) => (
                  <label
                    key={label}
                    className="flex items-center gap-space-xs p-space-sm bg-surface-container rounded cursor-pointer hover:bg-surface-container-high transition-colors"
                  >
                    <input
                      checked={objective === label}
                      onChange={() => setObjective(label)}
                      className="accent-primary-container"
                      name="objective"
                      type="radio"
                      value={label}
                    />
                    <span className="font-label-sm text-label-sm text-primary">
                      {label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-space-xs">
              <label className="font-label-sm text-label-sm uppercase text-secondary">
                MESSAGE *
              </label>
              <textarea
                value={payload}
                onChange={(e) => setPayload(e.target.value)}
                className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md p-space-md rounded focus:outline-none focus:ring-1 focus:ring-primary-container resize-none"
                placeholder="Tell me about your team, project, or role..."
                required
                rows={5}
              />
            </div>

            <button
              disabled={submitting}
              className="w-full bg-primary-container text-on-primary-container hover:bg-secondary-container hover:text-on-secondary disabled:opacity-60 font-headline-sm text-headline-sm uppercase py-space-sm rounded font-bold transition-all flex items-center justify-center gap-space-xs"
              type="submit"
            >
              <span className="material-symbols-outlined text-[18px]">
                {submitted ? "check_circle" : "bolt"}
              </span>
              <span>
                {submitting
                  ? "TRANSMITTING..."
                  : submitted
                    ? "TRANSMISSION DELIVERED"
                    : "TRANSMIT MESSAGE"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
