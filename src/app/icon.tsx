import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#131317",
          border: "2px solid #f4e700",
          borderRadius: "6px",
          color: "#f4e700",
          fontSize: 15,
          fontWeight: 900,
          letterSpacing: "-0.05em",
          fontFamily: "monospace",
        }}
      >
        WZ
      </div>
    ),
    {
      ...size,
    }
  );
}
