"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  isLatest?: boolean;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pulseRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (innerRef.current) {
      const rect = innerRef.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const onScroll = useCallback(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    const fill = fillRef.current;
    if (!container || !inner || !fill) return;

    const rect = container.getBoundingClientRect();
    const viewH = window.innerHeight;

    const start = viewH * 0.9;
    const end = viewH * 0.5;

    const scrolled = start - rect.top;
    const total = rect.height - (viewH - start) + (viewH - end);
    const progress = Math.min(1, Math.max(0, scrolled / total));

    fill.style.transform = `scaleY(${progress})`;

    // The fill line's pixel height from top of inner container
    const fillHeight = progress * inner.getBoundingClientRect().height;

    // Update each dot based on whether the line has reached it
    dotRefs.current.forEach((dot, i) => {
      if (!dot) return;
      // Get dot's vertical center relative to inner container top
      const dotRect = dot.getBoundingClientRect();
      const innerRect = inner.getBoundingClientRect();
      const dotCenter = dotRect.top - innerRect.top + dotRect.height / 2;

      const reached = fillHeight >= dotCenter;

      if (reached) {
        dot.style.backgroundColor = "#7c3aed";
        dot.style.border = "2px solid #a855f7";
        dot.style.boxShadow = "0 0 12px rgba(139, 92, 246, 0.5)";
      } else {
        dot.style.backgroundColor = "#262626";
        dot.style.border = "1px solid #404040";
        dot.style.boxShadow = "none";
      }

      // Show/hide pulse ring
      const pulse = pulseRefs.current[i];
      if (pulse) {
        pulse.style.display = reached ? "block" : "none";
      }
    });
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <div
      className="w-full font-sans"
      style={{ paddingInline: "2.5rem" }}
      ref={containerRef}
    >
      <div
        ref={innerRef}
        className="relative mx-auto"
        style={{ maxWidth: "80rem", paddingBottom: "5rem" }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start"
            style={{
              paddingTop: index === 0 ? "2.5rem" : "10rem",
              gap: "2.5rem",
            }}
          >
            <div
              className="sticky z-40 flex flex-row items-center self-start"
              style={{ top: "10rem", width: "100%", maxWidth: "24rem" }}
            >
              <div
                className="absolute flex items-center justify-center rounded-full"
                style={{
                  left: "0.75rem",
                  height: "2.5rem",
                  width: "2.5rem",
                  backgroundColor: "#000",
                }}
              >
                {/* Pulse ring — hidden by default, shown when line reaches dot */}
                <div
                  ref={(el) => { pulseRefs.current[index] = el; }}
                  className="absolute rounded-full"
                  style={{
                    display: "none",
                    width: "24px",
                    height: "24px",
                    border: "2px solid rgba(168, 85, 247, 0.4)",
                    animation: "pulse-ring 2s ease-out infinite",
                  }}
                />
                <div
                  ref={(el) => { dotRefs.current[index] = el; }}
                  className="rounded-full"
                  style={{
                    height: "1rem",
                    width: "1rem",
                    padding: "0.5rem",
                    backgroundColor: "#262626",
                    border: "1px solid #404040",
                    boxShadow: "none",
                    transition: "background-color 0.3s ease, border 0.3s ease, box-shadow 0.3s ease",
                  }}
                />
              </div>
              <h3
                className="hidden md:block font-bold"
                style={{
                  paddingLeft: "5rem",
                  fontSize: "3rem",
                  lineHeight: 1,
                  color: "#737373",
                }}
              >
                {item.title}
              </h3>
            </div>

            <div
              className="relative w-full"
              style={{ paddingRight: "1rem", paddingLeft: "1rem" }}
            >
              <h3
                className="md:hidden block font-bold"
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  textAlign: "left",
                  color: "#737373",
                }}
              >
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Timeline track (gray) */}
        <div
          style={{
            position: "absolute",
            left: "2rem",
            top: 0,
            width: "2px",
            height: height + "px",
            background:
              "linear-gradient(to bottom, transparent 0%, #404040 10%, #404040 90%, transparent 100%)",
          }}
        />

        {/* Animated fill — vanilla JS drives scaleY, GPU-composited */}
        <div
          ref={fillRef}
          style={{
            position: "absolute",
            left: "2rem",
            top: 0,
            width: "2px",
            height: height + "px",
            transformOrigin: "top",
            transform: "scaleY(0)",
            willChange: "transform",
            background:
              "linear-gradient(to bottom, transparent, #3080ff 10%, #ac4bff)",
          }}
        />
      </div>
    </div>
  );
};
