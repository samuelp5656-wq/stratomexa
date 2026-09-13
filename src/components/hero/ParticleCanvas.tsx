"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  color: string;
}

interface ParticleCanvasProps {
  theme?: "light" | "dark";
}

export default function ParticleCanvas({ theme = "light" }: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const isMobile = width < 768;
    const particleCount = isMobile ? 65 : 145;
    const connectionDistance = isMobile ? 95 : 135;
    const mouseRadius = 175;

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const isLight = theme === "light";

    // Color palettes tuned for light (Zapier/Zoho) or dark
    const colors = isLight
      ? [
          "rgba(14, 139, 114, ", // Deep Teal
          "rgba(194, 120, 3, ",  // Warm Amber
          "rgba(71, 85, 105, ",  // Slate
          "rgba(37, 99, 235, ",  // Royal Blue
        ]
      : [
          "rgba(201, 168, 76, ", // Gold
          "rgba(26, 179, 148, ", // Teal
          "rgba(148, 163, 184, ", // Slate
        ];

    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const colorPrefix = colors[i % colors.length];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.8 + 1.2,
        baseAlpha: isLight ? Math.random() * 0.35 + 0.25 : Math.random() * 0.4 + 0.3,
        color: colorPrefix,
      });
    }

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("mouseleave", handlePointerLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Ambient radial gradient
      if (isLight) {
        const gradient = ctx.createRadialGradient(
          width * 0.7,
          height * 0.3,
          20,
          width * 0.7,
          height * 0.3,
          width * 0.75
        );
        gradient.addColorStop(0, "rgba(26, 179, 148, 0.07)");
        gradient.addColorStop(0.5, "rgba(201, 168, 76, 0.04)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      } else {
        const gradient = ctx.createRadialGradient(
          width * 0.65,
          height * 0.35,
          50,
          width * 0.65,
          height * 0.35,
          width * 0.7
        );
        gradient.addColorStop(0, "rgba(26, 179, 148, 0.04)");
        gradient.addColorStop(0.5, "rgba(201, 168, 76, 0.03)");
        gradient.addColorStop(1, "rgba(7, 14, 27, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Motion
        p.x += p.vx;
        p.y += p.vy;

        // Bounce from edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse attraction
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius && dist > 0) {
            const force = (mouseRadius - dist) / mouseRadius;
            p.x += (dx / dist) * force * 1.0;
            p.y += (dy / dist) * force * 1.0;

            // Connect particle to mouse cursor!
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            const mouseLineAlpha = (1 - dist / mouseRadius) * (isLight ? 0.25 : 0.35);
            ctx.strokeStyle = isLight
              ? `rgba(14, 139, 114, ${mouseLineAlpha})`
              : `rgba(26, 179, 148, ${mouseLineAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Render particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.baseAlpha})`;
        ctx.fill();

        // Connect nearby points
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * (isLight ? 0.15 : 0.18);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isLight
              ? `rgba(100, 116, 139, ${alpha})`
              : `rgba(201, 168, 76, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full z-0"
      aria-hidden="true"
    />
  );
}
