"use client";

import { useEffect, useRef, useState } from "react";

export function CursorSpotlight() {
  const [isTouch, setIsTouch] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);

    const el = ref.current;
    if (!el) return;

    let rafId = 0;
    let targetX = -300;
    let targetY = -300;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          el.style.transform = `translate(${targetX - 300}px, ${targetY - 300}px)`;
          rafId = 0;
        });
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(139,92,246,0.06) 0%, rgba(139,92,246,0.02) 40%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 30,
        willChange: "transform",
        transform: "translate(-300px, -300px)",
      }}
    />
  );
}
