"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Code, Smartphone, Palette, Rocket, Figma } from "lucide-react";

const techPeople = [
  { id: 1, name: "React", designation: "UI Library", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { id: 2, name: "Next.js", designation: "React Framework", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", dark: true },
  { id: 3, name: "TypeScript", designation: "Type Safety", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { id: 4, name: "Swift", designation: "iOS Native", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { id: 5, name: "Node.js", designation: "Runtime", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { id: 6, name: "Tailwind", designation: "CSS Framework", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
];

{/* --- Enhanced Code Editor for Frontend --- */}
const SkeletonOne = () => {
  const lines = [
    { num: 1, content: <><span style={{ color: "#cba6f7" }}>import</span> <span style={{ color: "#f38ba8" }}>{"{"}</span> <span style={{ color: "#89b4fa" }}>Metadata</span> <span style={{ color: "#f38ba8" }}>{"}"}</span> <span style={{ color: "#cba6f7" }}>from</span> <span style={{ color: "#a6e3a1" }}>&quot;next&quot;</span></> },
    { num: 2, content: <><span style={{ color: "#cba6f7" }}>import</span> <span style={{ color: "#89b4fa" }}>Hero</span> <span style={{ color: "#cba6f7" }}>from</span> <span style={{ color: "#a6e3a1" }}>&quot;@/components/Hero&quot;</span></> },
    { num: 3, content: null },
    { num: 4, content: <><span style={{ color: "#cba6f7" }}>export const</span> <span style={{ color: "#89dceb" }}>metadata</span><span style={{ color: "#89b4fa" }}>:</span> <span style={{ color: "#f9e2af" }}>Metadata</span> <span style={{ color: "#89b4fa" }}>=</span> <span style={{ color: "#f38ba8" }}>{"{"}</span></> },
    { num: 5, content: <>&nbsp;&nbsp;<span style={{ color: "#89b4fa" }}>title</span><span style={{ color: "#cdd6f4" }}>:</span> <span style={{ color: "#a6e3a1" }}>&quot;Portfolio&quot;</span><span style={{ color: "#cdd6f4" }}>,</span></> },
    { num: 6, content: <><span style={{ color: "#f38ba8" }}>{"}"}</span></> },
    { num: 7, content: null },
    { num: 8, content: <><span style={{ color: "#cba6f7" }}>export default function</span> <span style={{ color: "#89dceb" }}>Page</span><span style={{ color: "#f9e2af" }}>()</span> <span style={{ color: "#f9e2af" }}>{"{"}</span></> },
    { num: 9, content: <>&nbsp;&nbsp;<span style={{ color: "#cba6f7" }}>return</span> <span style={{ color: "#f38ba8" }}>(</span></> },
    { num: 10, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#585b70" }}>&lt;</span><span style={{ color: "#89b4fa" }}>Hero</span> <span style={{ color: "#585b70" }}>/&gt;</span></>, active: true },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "0.75rem",
        background: "#1e1e2e",
        border: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Editor tab bar */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "8px 12px", background: "#181825", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", gap: "6px" }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f38ba8" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f9e2af" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#a6e3a1" }} />
        </div>
        <div style={{ marginLeft: "12px", display: "flex", gap: "2px" }}>
          <div style={{ padding: "3px 12px", borderRadius: "6px 6px 0 0", background: "#1e1e2e", fontSize: "10px", color: "#cdd6f4" }}>page.tsx</div>
          <div style={{ padding: "3px 12px", borderRadius: "6px 6px 0 0", background: "transparent", fontSize: "10px", color: "#585b70" }}>layout.tsx</div>
        </div>
      </div>
      {/* Code lines with gutter */}
      <div style={{ flex: 1, fontFamily: "monospace", fontSize: "11px", lineHeight: "1.7", overflow: "hidden", display: "flex" }}>
        {/* Line numbers gutter */}
        <div style={{ padding: "12px 0", borderRight: "1px solid rgba(255,255,255,0.06)", userSelect: "none", display: "flex", flexDirection: "column" }}>
          {lines.map((line) => (
            <div
              key={line.num}
              style={{
                padding: "0 10px 0 12px",
                color: line.active ? "#cdd6f4" : "#45475a",
                fontSize: "10px",
                textAlign: "right",
                minWidth: "32px",
                background: line.active ? "rgba(203,166,247,0.08)" : "transparent",
                height: line.content === null ? "4px" : "auto",
              }}
            >
              {line.content !== null ? line.num : ""}
            </div>
          ))}
        </div>
        {/* Code content */}
        <div style={{ flex: 1, padding: "12px 16px", display: "flex", flexDirection: "column" }}>
          {lines.map((line) => (
            <div
              key={line.num}
              style={{
                background: line.active ? "rgba(203,166,247,0.08)" : "transparent",
                marginLeft: "-16px",
                marginRight: "-16px",
                paddingLeft: "16px",
                paddingRight: "16px",
                borderLeft: line.active ? "2px solid #cba6f7" : "2px solid transparent",
                height: line.content === null ? "4px" : "auto",
                display: "flex",
                alignItems: "center",
              }}
            >
              {line.content}
              {line.active && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  style={{
                    display: "inline-block",
                    width: "2px",
                    height: "13px",
                    background: "#cdd6f4",
                    marginLeft: "2px",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

{/* --- Enhanced Terminal for Backend --- */}
const SkeletonTwo = () => {
  const termLines = [
    { type: "cmd" as const, content: <><span style={{ color: "#a6e3a1" }}>$</span> <span style={{ color: "#cdd6f4" }}>./gradlew bootRun</span></> },
    { type: "out" as const, content: "Starting application..." },
    { type: "out" as const, content: "Tomcat started on port 8080" },
    { type: "out" as const, content: <><span style={{ color: "#a6e3a1" }}>Started</span> <span style={{ color: "#585b70" }}>Application in 3.2s</span></> },
    { type: "cmd" as const, content: <><span style={{ color: "#a6e3a1" }}>$</span> <span style={{ color: "#cdd6f4" }}>curl localhost:8080/actuator/health</span></> },
    { type: "out" as const, content: <><span style={{ color: "#89b4fa" }}>{"{"}</span> <span style={{ color: "#f9e2af" }}>&quot;status&quot;</span>: <span style={{ color: "#a6e3a1" }}>&quot;UP&quot;</span> <span style={{ color: "#89b4fa" }}>{"}"}</span></> },
    { type: "prompt" as const, content: <><span style={{ color: "#a6e3a1" }}>$</span></> },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "0.75rem",
        background: "#0c0c0c",
        border: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Terminal title bar */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 12px", background: "#1a1a1a", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", gap: "6px" }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f38ba8" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f9e2af" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#a6e3a1" }} />
        </div>
        <span style={{ marginLeft: "auto", marginRight: "auto", fontSize: "10px", color: "#585b70" }}>terminal</span>
      </div>
      {/* Terminal output with staggered animation */}
      <div style={{ flex: 1, padding: "10px 14px", fontFamily: "monospace", fontSize: "10px", lineHeight: "1.8", overflow: "hidden" }}>
        {termLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.15 }}
            style={{ color: line.type === "out" ? "#585b70" : "#cdd6f4", display: "flex", alignItems: "center" }}
          >
            {line.content}
            {line.type === "prompt" && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                style={{
                  display: "inline-block",
                  width: "7px",
                  height: "12px",
                  background: "#a6e3a1",
                  marginLeft: "6px",
                }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

{/* --- Enhanced Design Canvas for UI/UX --- */}
const SkeletonThree = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      borderRadius: "0.75rem",
      background: "#1a1a2e",
      border: "1px solid rgba(255,255,255,0.06)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    }}
  >
    {/* Figma-like toolbar */}
    <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 12px", background: "#12121f", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <Figma style={{ width: 12, height: 12, color: "#a855f6" }} />
      <span style={{ fontSize: "10px", color: "#585b70" }}>Design System</span>
      <div style={{ marginLeft: "auto", display: "flex", gap: "6px" }}>
        <div style={{ width: 14, height: 14, borderRadius: "3px", background: "#a855f6" }} />
        <div style={{ width: 14, height: 14, borderRadius: "3px", background: "#3b82f6" }} />
        <div style={{ width: 14, height: 14, borderRadius: "3px", background: "#10b981" }} />
        <div style={{ width: 14, height: 14, borderRadius: "3px", background: "#f59e0b" }} />
      </div>
    </div>
    {/* Canvas with design elements */}
    <div style={{ flex: 1, position: "relative", padding: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Dotted grid background */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
      {/* Card mockup with floating animation */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "relative", width: "80%", maxWidth: "140px", borderRadius: "10px", background: "#232340", border: "1px solid rgba(255,255,255,0.08)", padding: "10px", display: "flex", flexDirection: "column", gap: "6px" }}
      >
        {/* Gradient header with shimmer */}
        <div style={{ position: "relative", height: "32px", borderRadius: "6px", background: "linear-gradient(135deg, #a855f6, #3b82f6)", overflow: "hidden" }}>
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            }}
          />
        </div>
        <div style={{ height: "6px", width: "70%", borderRadius: "3px", background: "rgba(255,255,255,0.15)" }} />
        <div style={{ height: "6px", width: "50%", borderRadius: "3px", background: "rgba(255,255,255,0.08)" }} />
        <div style={{ display: "flex", gap: "4px", marginTop: "2px" }}>
          <div style={{ height: "18px", flex: 1, borderRadius: "4px", background: "rgba(168,85,246,0.2)", border: "1px solid rgba(168,85,246,0.3)" }} />
          <div style={{ height: "18px", flex: 1, borderRadius: "4px", background: "rgba(59,130,246,0.2)", border: "1px solid rgba(59,130,246,0.3)" }} />
        </div>
      </motion.div>
      {/* Selection handles with pulsing */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "calc(80% + 8px)", maxWidth: "148px", height: "calc(100% - 30px)", border: "1px dashed rgba(168,85,246,0.5)", borderRadius: "12px", pointerEvents: "none" }}
      >
        {[
          { top: -3, left: -3 },
          { top: -3, right: -3 },
          { bottom: -3, left: -3 },
          { bottom: -3, right: -3 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            style={{ position: "absolute", ...pos, width: 6, height: 6, background: "#a855f6", borderRadius: "1px" } as React.CSSProperties}
          />
        ))}
      </motion.div>
      {/* Animated cursor */}
      <motion.div
        animate={{
          x: [0, 30, 30, -10, 0],
          y: [0, -10, 15, 5, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", bottom: "20%", right: "20%", pointerEvents: "none" }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 1L5.5 12L7 7.5L11.5 6L1 1Z" fill="white" fillOpacity="0.8" stroke="white" strokeWidth="0.5" />
        </svg>
      </motion.div>
    </div>
  </div>
);

{/* --- Enhanced Phone Mockups for Mobile Dev --- */}
const SkeletonFour = () => (
  <div
    className="phone-row"
    style={{
      width: "100%",
      height: "100%",
      borderRadius: "0.75rem",
      background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
      border: "1px solid rgba(255,255,255,0.06)",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
      padding: "16px",
      position: "relative",
    }}
  >
    {/* Ambient glow */}
    <div style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "70%",
      height: "60%",
      borderRadius: "50%",
      background: "radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)",
      pointerEvents: "none",
    }} />

    {/* Phone mockup 1 */}
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="phone-mockup"
      style={{
        width: "90px",
        height: "170px",
        borderRadius: "16px",
        background: "#0a0a0a",
        border: "2px solid #333",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        position: "relative",
      }}
    >
      {/* Notch */}
      <div style={{ width: "40px", height: "10px", background: "#0a0a0a", borderRadius: "0 0 8px 8px", margin: "0 auto", position: "relative", zIndex: 2 }} />
      {/* Screen content */}
      <div style={{ flex: 1, background: "linear-gradient(180deg, #1e1b4b, #312e81)", padding: "6px", display: "flex", flexDirection: "column", gap: "4px" }}>
        {/* Status bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2px" }}>
          <span style={{ fontSize: "6px", color: "rgba(255,255,255,0.4)" }}>9:41</span>
          <div style={{ display: "flex", gap: "2px" }}>
            <div style={{ width: "8px", height: "4px", borderRadius: "1px", background: "rgba(255,255,255,0.3)" }} />
            <div style={{ width: "4px", height: "4px", borderRadius: "1px", background: "rgba(255,255,255,0.3)" }} />
          </div>
        </div>
        {/* Nav bar */}
        <div style={{ height: "8px", width: "60%", borderRadius: "4px", background: "rgba(255,255,255,0.2)" }} />
        {/* List items */}
        {[0.15, 0.1, 0.08].map((opacity, i) => (
          <div key={i} style={{ display: "flex", gap: "4px", alignItems: "center" }}>
            <div style={{ width: "12px", height: "12px", borderRadius: "3px", background: `rgba(139,92,246,${opacity + 0.15})` }} />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2px" }}>
              <div style={{ height: "4px", width: `${80 - i * 15}%`, borderRadius: "2px", background: `rgba(255,255,255,${opacity})` }} />
              <div style={{ height: "3px", width: `${60 - i * 10}%`, borderRadius: "2px", background: `rgba(255,255,255,${opacity * 0.5})` }} />
            </div>
          </div>
        ))}
        <div style={{ flex: 1 }} />
        {/* Tab bar */}
        <div style={{ display: "flex", gap: "3px", justifyContent: "space-around", paddingTop: "3px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {[0.4, 0.15, 0.15, 0.15].map((op, i) => (
            <div key={i} style={{ width: "10px", height: "10px", borderRadius: "2px", background: `rgba(139,92,246,${op})` }} />
          ))}
        </div>
      </div>
      {/* Home indicator */}
      <div style={{ width: "36px", height: "4px", background: "#444", borderRadius: "2px", margin: "4px auto" }} />
    </motion.div>

    {/* Phone mockup 2 */}
    <motion.div
      animate={{ y: [4, -4, 4] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      className="phone-mockup"
      style={{
        width: "90px",
        height: "170px",
        borderRadius: "16px",
        background: "#0a0a0a",
        border: "2px solid #333",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
      }}
    >
      <div style={{ width: "40px", height: "10px", background: "#0a0a0a", borderRadius: "0 0 8px 8px", margin: "0 auto", position: "relative", zIndex: 2 }} />
      <div style={{ flex: 1, background: "linear-gradient(180deg, #1a2e05, #365314)", padding: "6px", display: "flex", flexDirection: "column", gap: "4px" }}>
        {/* Status bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2px" }}>
          <span style={{ fontSize: "6px", color: "rgba(255,255,255,0.4)" }}>9:41</span>
          <div style={{ display: "flex", gap: "2px" }}>
            <div style={{ width: "8px", height: "4px", borderRadius: "1px", background: "rgba(255,255,255,0.3)" }} />
            <div style={{ width: "4px", height: "4px", borderRadius: "1px", background: "rgba(255,255,255,0.3)" }} />
          </div>
        </div>
        <div style={{ height: "8px", width: "50%", borderRadius: "4px", background: "rgba(255,255,255,0.2)" }} />
        {/* Animated bar chart */}
        <div style={{ display: "flex", gap: "3px", alignItems: "flex-end", height: "40px", marginTop: "4px", padding: "0 2px" }}>
          {[0.5, 0.75, 0.4, 0.9, 0.6, 0.8, 0.45].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h * 100}%` }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.1, ease: "easeOut" }}
              style={{
                flex: 1,
                borderRadius: "2px 2px 0 0",
                background: `rgba(34,197,94,${0.3 + h * 0.4})`,
              }}
            />
          ))}
        </div>
        <div style={{ flex: 1 }} />
        {/* Tab bar */}
        <div style={{ display: "flex", gap: "3px", justifyContent: "space-around", paddingTop: "3px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {[0.15, 0.4, 0.15, 0.15].map((op, i) => (
            <div key={i} style={{ width: "10px", height: "10px", borderRadius: "2px", background: `rgba(34,197,94,${op})` }} />
          ))}
        </div>
      </div>
      <div style={{ width: "36px", height: "4px", background: "#444", borderRadius: "2px", margin: "4px auto" }} />
    </motion.div>

    {/* Phone mockup 3 */}
    <motion.div
      animate={{ y: [-3, 5, -3] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="phone-mockup"
      style={{
        width: "90px",
        height: "170px",
        borderRadius: "16px",
        background: "#0a0a0a",
        border: "2px solid #333",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
      }}
    >
      <div style={{ width: "40px", height: "10px", background: "#0a0a0a", borderRadius: "0 0 8px 8px", margin: "0 auto", position: "relative", zIndex: 2 }} />
      <div style={{ flex: 1, background: "linear-gradient(180deg, #451a03, #7c2d12)", padding: "6px", display: "flex", flexDirection: "column", gap: "4px" }}>
        {/* Status bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2px" }}>
          <span style={{ fontSize: "6px", color: "rgba(255,255,255,0.4)" }}>9:41</span>
          <div style={{ display: "flex", gap: "2px" }}>
            <div style={{ width: "8px", height: "4px", borderRadius: "1px", background: "rgba(255,255,255,0.3)" }} />
            <div style={{ width: "4px", height: "4px", borderRadius: "1px", background: "rgba(255,255,255,0.3)" }} />
          </div>
        </div>
        <div style={{ height: "8px", width: "70%", borderRadius: "4px", background: "rgba(255,255,255,0.2)" }} />
        {/* Shimmer loading card */}
        <div style={{ position: "relative", height: "30px", borderRadius: "6px", background: "linear-gradient(135deg, rgba(249,115,22,0.3), rgba(234,88,12,0.2))", marginTop: "2px", overflow: "hidden" }}>
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
            }}
          />
        </div>
        {/* Shimmer text lines */}
        {["90%", "60%"].map((w, i) => (
          <div key={i} style={{ position: "relative", height: "6px", width: w, borderRadius: "3px", background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5, delay: 0.2 + i * 0.15 }}
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
              }}
            />
          </div>
        ))}
        <div style={{ flex: 1, borderRadius: "6px", background: "rgba(249,115,22,0.1)" }} />
        {/* Tab bar */}
        <div style={{ display: "flex", gap: "3px", justifyContent: "space-around", paddingTop: "3px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {[0.15, 0.15, 0.4, 0.15].map((op, i) => (
            <div key={i} style={{ width: "10px", height: "10px", borderRadius: "2px", background: `rgba(249,115,22,${op})` }} />
          ))}
        </div>
      </div>
      <div style={{ width: "36px", height: "4px", background: "#444", borderRadius: "2px", margin: "4px auto" }} />
    </motion.div>
  </div>
);

const items = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, performant web applications with React, Next.js, and TypeScript. Pixel-perfect UIs with smooth animations.",
    header: <SkeletonOne />,
    icon: <Code className="h-4 w-4 text-violet-400" />,
    colSpan: 2,
  },
  {
    title: "Backend & Infrastructure",
    description:
      "Scalable APIs and services with Java Spring Boot, Next.js functions, and Supabase. Docker, CI/CD, and modern DevOps practices.",
    header: <SkeletonTwo />,
    icon: <Rocket className="h-4 w-4 text-blue-400" />,
    colSpan: 1,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive user experiences with Figma. From wireframes to polished, accessible interfaces.",
    header: <SkeletonThree />,
    icon: <Palette className="h-4 w-4 text-emerald-400" />,
    colSpan: 1,
  },
  {
    title: "Mobile Development",
    description:
      "Native iOS apps with Swift & SwiftUI. Cross-platform solutions with React Native. App Store published.",
    header: <SkeletonFour />,
    icon: <Smartphone className="h-4 w-4 text-orange-400" />,
    colSpan: 2,
  },
];

export default function About() {
  return (
    <section id="about" style={{ position: "relative", padding: "6rem 1rem", background: "#000" }}>
      <div style={{ maxWidth: "80rem", marginLeft: "auto", marginRight: "auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <p className="text-violet-400 text-sm tracking-widest uppercase" style={{ textAlign: "center", marginBottom: "0.75rem" }}>
            What I Do
          </p>
          <h2 className="font-bold text-white" style={{ textAlign: "center", marginBottom: "1.5rem", fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Skills & Expertise
          </h2>
          <p className="text-neutral-400 text-lg" style={{ textAlign: "center", maxWidth: "42rem", marginLeft: "auto", marginRight: "auto" }}>
            I specialize in building end-to-end digital products, from concept to deployment.
            Here&apos;s my toolkit:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <BentoGrid>
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                style={{ gridColumn: `span ${item.colSpan}` }}
              />
            ))}
          </BentoGrid>
        </motion.div>

        {/* Tech Stack Tooltip Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginTop: "4rem", textAlign: "center" }}
        >
          <p className="text-neutral-500 text-sm tracking-wide uppercase" style={{ textAlign: "center", marginBottom: "2rem" }}>
            Technologies I love
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AnimatedTooltip items={techPeople} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
