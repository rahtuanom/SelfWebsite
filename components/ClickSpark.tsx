"use client";

import React, { useEffect, useRef } from "react";

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
}

interface ClickSparkProps {
  color?: string; // Custom color, or null to auto-generate vibrant randomized colors
  sparkCount?: number;
  sparkSize?: number;
}

export default function ClickSpark({
  color,
  sparkCount = 8,
  sparkSize = 15,
}: ClickSparkProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sparksRef = useRef<Spark[]>([]);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const animate = () => {
      const sparks = sparksRef.current;
      if (sparks.length === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        animationFrameId.current = null;
        return; // Stop animation loop when no sparks remain
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];

        // Render spark line
        ctx.beginPath();
        ctx.strokeStyle = s.color;
        ctx.lineWidth = 2.5;
        ctx.globalAlpha = s.alpha;

        const prevX = s.x - s.vx * 0.8;
        const prevY = s.y - s.vy * 0.8;

        ctx.moveTo(prevX, prevY);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();

        // Update physics
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.94; // friction decay
        s.vy *= 0.94;
        s.alpha -= 0.035; // opacity decay

        if (s.alpha <= 0) {
          sparks.splice(i, 1);
        }
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    const handleClick = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Premium palette colors matching our theme (royal-blue, sky-blue, purple, emerald, pink)
      const colors = ["#4169e1", "#87ceeb", "#a855f7", "#10b981", "#ec4899"];
      const resolvedColor = color || colors[Math.floor(Math.random() * colors.length)];

      for (let i = 0; i < sparkCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 5; // random travel velocity
        sparksRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color: resolvedColor,
          size: sparkSize,
        });
      }

      if (!animationFrameId.current) {
        animationFrameId.current = requestAnimationFrame(animate);
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousedown", handleClick);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [color, sparkCount, sparkSize]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[9999]"
      style={{ mixBlendMode: "normal" }}
    />
  );
}
