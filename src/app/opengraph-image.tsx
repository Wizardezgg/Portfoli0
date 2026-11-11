import { ImageResponse } from "next/og";

export const alt = "Victor Mallick (Wizardezgg) — Full-Stack & AI Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#131317",
          padding: "56px 64px",
          border: "4px solid #f4e700",
          fontFamily: "sans-serif",
          color: "#ffffff",
        }}
      >
        {/* Top Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "#1f1f24",
              padding: "10px 20px",
              borderRadius: "8px",
              border: "1px solid #00eefc",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "9999px",
                background: "#00eefc",
              }}
            />
            <span
              style={{
                color: "#00eefc",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "0.12em",
              }}
            >
              CALLSIGN: WIZARDEZGG // AVAILABLE FOR HIRE
            </span>
          </div>

          <span
            style={{
              color: "#f4e700",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "0.1em",
            }}
          >
            KHULNA, BD • GMT+6
          </span>
        </div>

        {/* Center Hero */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              lineHeight: 1.05,
            }}
          >
            VICTOR MALLICK
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 700,
              color: "#f4e700",
              letterSpacing: "0.02em",
            }}
          >
            Full-Stack Software Engineer &amp; AI Systems Builder
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#ccc7ab",
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            Architecting zero-disk AI document pipelines, multi-key Gemini
            failover pools, and high-concurrency Next.js 15 &amp; Node/FastAPI
            platforms.
          </div>
        </div>

        {/* Bottom Tech Pills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #353439",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            {[
              "Next.js 15",
              "React 19",
              "TypeScript 5",
              "Node.js & Express",
              "Python FastAPI",
              "Supabase & MongoDB",
              "Gemini AI",
            ].map((tech) => (
              <div
                key={tech}
                style={{
                  background: "#1f1f24",
                  border: "1px solid #4a4732",
                  color: "#e4e1e8",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  fontSize: 16,
                  fontWeight: 700,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
