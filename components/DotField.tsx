import React, { useEffect, useRef } from "react";

interface DotFieldProps {
  dotSpacing?: number;
  dotRadius?: number;
  cursorRadius?: number;
  cursorForce?: number;
  springEasing?: number;
  dotColor?: string;
}

interface Dot {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
}

export default function DotField({
  dotSpacing = 32,
  dotRadius = 1.5,
  cursorRadius = 80,
  cursorForce = 12,
  springEasing = 0.08,
  dotColor = "rgba(148, 163, 184, 0.5)" // Slate-400 with opacity
}: DotFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const dotsRef = useRef<Dot[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Skip canvas animation on mobile/touch devices — cursor interaction is irrelevant
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Initialize/Resize grid of dots
    function initDots() {
      if (!canvas || !ctx) return;
      width = canvas.parentElement?.offsetWidth || window.innerWidth;
      height = canvas.parentElement?.offsetHeight || window.innerHeight;
      
      // Set high-DPI canvas size
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const cols = Math.floor(width / dotSpacing) + 2;
      const rows = Math.floor(height / dotSpacing) + 2;
      const dots: Dot[] = [];

      // Center the grid
      const offsetX = (width - (cols - 1) * dotSpacing) / 2;
      const offsetY = (height - (rows - 1) * dotSpacing) / 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = offsetX + c * dotSpacing;
          const y = offsetY + r * dotSpacing;
          dots.push({
            x,
            y,
            targetX: x,
            targetY: y,
            vx: 0,
            vy: 0
          });
        }
      }
      dotsRef.current = dots;
    }

    // Helper variables to store last screen positions for scroll/touch recalibration
    let lastClientX = -9999;
    let lastClientY = -9999;

    const baseAlpha = (() => {
      if (dotColor.startsWith("rgba")) {
        const parts = dotColor.match(/[\d.]+/g);
        if (parts && parts.length >= 4) {
          return parseFloat(parts[3]);
        }
      }
      return 0.45;
    })();

    const rgbPrefix = (() => {
      if (dotColor.startsWith("rgba") || dotColor.startsWith("rgb")) {
        const parts = dotColor.match(/\d+/g);
        if (parts && parts.length >= 3) {
          return `${parts[0]}, ${parts[1]}, ${parts[2]}`;
        }
      }
      if (dotColor.startsWith("#")) {
        const hex = dotColor.slice(1);
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        return `${r}, ${g}, ${b}`;
      }
      return "148, 163, 184"; // default slate-400
    })();

    // Window Resize Handler
    function handleResize() {
      initDots();
    }
    window.addEventListener("resize", handleResize);
    initDots();

    // Mouse Event Handlers
    function handleMouseMove(e: MouseEvent) {
      lastClientX = e.clientX;
      lastClientY = e.clientY;
      updateMouseCoords();
    }

    function handleMouseLeave() {
      lastClientX = -9999;
      lastClientY = -9999;
      mouseRef.current = { x: -9999, y: -9999 };
    }

    // Touch Event Handlers
    function handleTouchMove(e: TouchEvent) {
      if (e.touches.length > 0) {
        lastClientX = e.touches[0].clientX;
        lastClientY = e.touches[0].clientY;
        updateMouseCoords();
      }
    }

    function handleTouchEnd() {
      lastClientX = -9999;
      lastClientY = -9999;
      mouseRef.current = { x: -9999, y: -9999 };
    }

    // Coordinate Recalibration (re-applied dynamically on scroll/moves)
    function updateMouseCoords() {
      if (!canvas || lastClientX === -9999) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: lastClientX - rect.left,
        y: lastClientY - rect.top
      };
    }

    function handleScroll() {
      updateMouseCoords();
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Dynamic high-performance render loop
    function render() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const dots = dotsRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        
        // Calculate physics/cursor force magnet effect & ballooning size
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let currentRadius = dotRadius;
        let currentAlpha = baseAlpha;

        if (dist < cursorRadius) {
          const force = (cursorRadius - dist) / cursorRadius;
          // Quadratic ballooning: enlarge dots beautifully at the peak
          currentRadius = dotRadius + dotRadius * force * force * 5.0;
          currentAlpha = baseAlpha + (1.0 - baseAlpha) * force;

          const angle = Math.atan2(dy, dx);
          // Gentle attraction/displacement towards cursor (lens magnet)
          // keeps dots perfectly aligned and interactive under the cursor
          const targetPushX = Math.cos(angle) * force * cursorForce * 0.25;
          const targetPushY = Math.sin(angle) * force * cursorForce * 0.25;
          
          dot.vx += (targetPushX - dot.vx) * 0.25;
          dot.vy += (targetPushY - dot.vy) * 0.25;
        } else {
          // Smooth decay of displacement velocity
          dot.vx *= 0.82;
          dot.vy *= 0.82;
        }

        // Apply velocity & spring easing back to original grid positions
        dot.x += dot.vx + (dot.targetX - dot.x) * springEasing;
        dot.y += dot.vy + (dot.targetY - dot.y) * springEasing;

        // Draw dot with dynamic colors & glow opacity
        ctx.fillStyle = `rgba(${rgbPrefix}, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    }
    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dotSpacing, dotRadius, cursorRadius, cursorForce, springEasing, dotColor]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none block"
      style={{ mixBlendMode: "normal" }}
    />
  );
}
