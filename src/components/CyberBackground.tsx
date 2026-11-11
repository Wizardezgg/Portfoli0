"use client";

import React, { useEffect, useRef } from "react";

interface CyberBackgroundProps {
  activeSector: number;
}

export default function CyberBackground({ activeSector }: CyberBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const boostRef = useRef<number>(0);
  const prevSectorRef = useRef<number>(activeSector);

  // Trigger a hyperspace warp jump whenever the user switches sectors
  useEffect(() => {
    if (prevSectorRef.current !== activeSector) {
      boostRef.current = 1.0;
      prevSectorRef.current = activeSector;
    }
  }, [activeSector]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Smooth mouse tracking (normalized -1..1 for 3D starfield parallax + pixel coords for Hex Spotlight)
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetSpotX = width * 0.5;
    let targetSpotY = height * 0.5;
    let spotX = width * 0.5;
    let spotY = height * 0.5;
    let mouseActive = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseActive = true;
      targetSpotX = e.clientX;
      targetSpotY = e.clientY;
      targetMouseX = (e.clientX / width - 0.5) * 2;
      targetMouseY = (e.clientY / height - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // =========================================================================
    // 1. 3D WARP STARFIELD STATE
    // =========================================================================
    const STAR_COUNT = 210;
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: (Math.random() - 0.5) * width * 2.2,
      y: (Math.random() - 0.5) * height * 2.2,
      z: Math.random() * 1000 + 50,
      pz: 0,
      color: Math.random() > 0.3 ? "#00eefc" : "#f4e700",
    }));

    // =========================================================================
    // 2. HEXAGONAL NANO-GRID + PULSING CELLS STATE
    // =========================================================================
    const hexRadius = 28;
    const hexHeight = Math.sqrt(3) * hexRadius;
    const horizDist = hexRadius * 1.5;

    const hexPulseSeeds = Array.from({ length: 14 }, () => ({
      col: Math.floor(Math.random() * 40),
      row: Math.floor(Math.random() * 26),
      phase: Math.random() * Math.PI * 2,
      speed: 0.02 + Math.random() * 0.025,
      color: Math.random() > 0.45 ? "#f4e700" : "#00eefc",
    }));

    const drawHex = (cx: number, cy: number, r: number) => {
      ctx.beginPath();
      for (let side = 0; side < 6; side++) {
        const angle = (Math.PI / 3) * side;
        const hx = cx + r * Math.cos(angle);
        const hy = cy + r * Math.sin(angle);
        if (side === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth cursor interpolation
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;
      spotX += (targetSpotX - spotX) * 0.14;
      spotY += (targetSpotY - spotY) * 0.14;

      // Decay sector-switch warp boost
      if (boostRef.current > 0.01) {
        boostRef.current *= 0.92;
      } else {
        boostRef.current = 0;
      }

      // -----------------------------------------------------------------------
      // LAYER 1: MOUSE-REACTIVE HEX SPOTLIGHT NANO-GRID
      // -----------------------------------------------------------------------
      const cols = Math.ceil(width / horizDist) + 2;
      const rows = Math.ceil(height / hexHeight) + 2;
      const spotlightRadius = 310;

      // Ambient radial glow under the cursor
      if (mouseActive) {
        const radialGlow = ctx.createRadialGradient(
          spotX,
          spotY,
          10,
          spotX,
          spotY,
          spotlightRadius
        );
        radialGlow.addColorStop(0, "rgba(0, 238, 252, 0.08)");
        radialGlow.addColorStop(0.45, "rgba(244, 231, 0, 0.03)");
        radialGlow.addColorStop(1, "rgba(0, 238, 252, 0)");
        ctx.fillStyle = radialGlow;
        ctx.beginPath();
        ctx.arc(spotX, spotY, spotlightRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Only compute full hex stroke for cells near the cursor or faint ambient grid
      const minCol = Math.max(0, Math.floor((spotX - spotlightRadius) / horizDist) - 1);
      const maxCol = Math.min(cols, Math.ceil((spotX + spotlightRadius) / horizDist) + 1);
      const minRow = Math.max(0, Math.floor((spotY - spotlightRadius) / hexHeight) - 1);
      const maxRow = Math.min(rows, Math.ceil((spotY + spotlightRadius) / hexHeight) + 1);

      for (let col = minCol; col < maxCol; col++) {
        for (let row = minRow; row < maxRow; row++) {
          const cx = col * horizDist;
          const cy = row * hexHeight + (col % 2 === 1 ? hexHeight / 2 : 0);

          const dx = cx - spotX;
          const dy = cy - spotY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > spotlightRadius) continue;

          const spotFactor = Math.max(0, 1 - dist / spotlightRadius);
          const alpha = spotFactor * spotFactor * 0.36;

          drawHex(cx, cy, hexRadius - 1.5);
          ctx.strokeStyle =
            spotFactor > 0.65
              ? `rgba(244, 231, 0, ${alpha * 0.95})`
              : `rgba(0, 238, 252, ${alpha})`;
          ctx.lineWidth = spotFactor > 0.45 ? 1.2 : 0.75;
          ctx.stroke();

          if (spotFactor > 0.62) {
            ctx.fillStyle = `rgba(0, 238, 252, ${(spotFactor - 0.62) * 0.14})`;
            ctx.fill();
          }
        }
      }

      // Autonomous faint pulsing hex cells across the background
      hexPulseSeeds.forEach((seed) => {
        seed.phase += seed.speed;
        const col = seed.col % cols;
        const row = seed.row % rows;
        const cx = col * horizDist;
        const cy = row * hexHeight + (col % 2 === 1 ? hexHeight / 2 : 0);
        const pulseAlpha = (Math.sin(seed.phase) + 1) * 0.5 * 0.11;

        drawHex(cx, cy, hexRadius - 3);
        ctx.fillStyle =
          seed.color === "#f4e700"
            ? `rgba(244, 231, 0, ${pulseAlpha})`
            : `rgba(0, 238, 252, ${pulseAlpha})`;
        ctx.fill();
      });

      // -----------------------------------------------------------------------
      // LAYER 2: 3D WARP STARFIELD + CURSOR PROXIMITY BOOST
      // -----------------------------------------------------------------------
      const cx = width * 0.5 - mouseX * 55;
      const cy = height * 0.5 - mouseY * 40;
      const warpSpeed = 3.2 + boostRef.current * 44;

      const hoveredStars: { sx: number; sy: number; color: string }[] = [];

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.pz = s.z;
        s.z -= warpSpeed;

        if (s.z <= 10) {
          s.x = (Math.random() - 0.5) * width * 2.2;
          s.y = (Math.random() - 0.5) * height * 2.2;
          s.z = 1000;
          s.pz = 1000;
        }

        const sx = cx + (s.x / s.z) * 420;
        const sy = cy + (s.y / s.z) * 420;
        const px = cx + (s.x / (s.pz + warpSpeed * 2.4)) * 420;
        const py = cy + (s.y / (s.pz + warpSpeed * 2.4)) * 420;

        // Check if star is inside cursor spotlight for interactive boost
        const dxSpot = sx - spotX;
        const dySpot = sy - spotY;
        const distSpot = Math.sqrt(dxSpot * dxSpot + dySpot * dySpot);
        const inSpot = mouseActive && distSpot < 220;

        const baseSize = Math.max(0.6, (1 - s.z / 1000) * 2.7);
        const size = inSpot ? baseSize * 1.35 : baseSize;
        const alpha = Math.min(
          0.95,
          (1 - s.z / 1000) * (inSpot ? 1.15 : 0.85)
        );

        ctx.strokeStyle = s.color;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = size;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.stroke();

        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(sx, sy, size * 0.65, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;

        if (inSpot && hoveredStars.length < 18) {
          hoveredStars.push({ sx, sy, color: s.color });
        }
      }

      // Connect stars inside the cursor's hex spotlight with subtle tactical lock-on lines
      for (let i = 0; i < hoveredStars.length; i++) {
        for (let j = i + 1; j < hoveredStars.length; j++) {
          const a = hoveredStars[i];
          const b = hoveredStars[j];
          const d = Math.hypot(a.sx - b.sx, a.sy - b.sy);
          if (d < 130) {
            ctx.strokeStyle = `rgba(244, 231, 0, ${(1 - d / 130) * 0.22})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-80 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}
