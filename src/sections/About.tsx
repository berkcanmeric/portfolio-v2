"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import {
  IconBrandReact,
  IconBrandTypescript,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandSwift,
  IconBrandFigma,
  IconBrandDocker,
  IconCode,
  IconDeviceMobile,
  IconPalette,
  IconRocket,
} from "@tabler/icons-react";

const techPeople = [
  { id: 1, name: "React", designation: "UI Library", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { id: 2, name: "Next.js", designation: "React Framework", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { id: 3, name: "TypeScript", designation: "Type Safety", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { id: 4, name: "Swift", designation: "iOS Native", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { id: 5, name: "Node.js", designation: "Runtime", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { id: 6, name: "Tailwind", designation: "CSS Framework", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
];

{/* --- Mock Code Editor for Frontend --- */}
const SkeletonOne = () => (
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
        <div style={{ padding: "3px 12px", borderRadius: "6px 6px 0 0", background: "#1e1e2e", fontSize: "10px", color: "#cdd6f4" }}>App.tsx</div>
        <div style={{ padding: "3px 12px", borderRadius: "6px 6px 0 0", background: "transparent", fontSize: "10px", color: "#585b70" }}>styles.css</div>
      </div>
    </div>
    {/* Code lines */}
    <div style={{ flex: 1, padding: "12px 16px", fontFamily: "monospace", fontSize: "11px", lineHeight: "1.7", overflow: "hidden" }}>
      <div><span style={{ color: "#cba6f7" }}>import</span> <span style={{ color: "#f38ba8" }}>{"{"}</span> <span style={{ color: "#89b4fa" }}>motion</span> <span style={{ color: "#f38ba8" }}>{"}"}</span> <span style={{ color: "#cba6f7" }}>from</span> <span style={{ color: "#a6e3a1" }}>&quot;framer-motion&quot;</span></div>
      <div><span style={{ color: "#cba6f7" }}>import</span> <span style={{ color: "#89b4fa" }}>React</span> <span style={{ color: "#cba6f7" }}>from</span> <span style={{ color: "#a6e3a1" }}>&quot;react&quot;</span></div>
      <div style={{ height: "4px" }} />
      <div><span style={{ color: "#cba6f7" }}>const</span> <span style={{ color: "#89dceb" }}>Hero</span> <span style={{ color: "#89b4fa" }}>=</span> <span style={{ color: "#f9e2af" }}>()</span> <span style={{ color: "#89b4fa" }}>=&gt;</span> <span style={{ color: "#f9e2af" }}>{"{"}</span></div>
      <div>&nbsp;&nbsp;<span style={{ color: "#cba6f7" }}>return</span> <span style={{ color: "#f38ba8" }}>(</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#585b70" }}>&lt;</span><span style={{ color: "#89b4fa" }}>motion.div</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#f9e2af" }}>animate</span><span style={{ color: "#89b4fa" }}>=</span><span style={{ color: "#a6e3a1" }}>{"{{"} opacity: 1 {"}}"}</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#585b70" }}>&gt;</span></div>
    </div>
  </div>
);

{/* --- Mock Terminal for Backend --- */}
const SkeletonTwo = () => (
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
    {/* Terminal output */}
    <div style={{ flex: 1, padding: "10px 14px", fontFamily: "monospace", fontSize: "10px", lineHeight: "1.8", overflow: "hidden" }}>
      <div><span style={{ color: "#a6e3a1" }}>$</span> <span style={{ color: "#cdd6f4" }}>docker compose up -d</span></div>
      <div style={{ color: "#585b70" }}>Creating network &quot;app_default&quot;</div>
      <div style={{ color: "#585b70" }}>Starting postgres_db ... done</div>
      <div style={{ color: "#585b70" }}>Starting redis_cache ... done</div>
      <div><span style={{ color: "#a6e3a1" }}>$</span> <span style={{ color: "#cdd6f4" }}>curl localhost:3000/api/health</span></div>
      <div><span style={{ color: "#89b4fa" }}>{"{"}</span> <span style={{ color: "#f9e2af" }}>&quot;status&quot;</span>: <span style={{ color: "#a6e3a1" }}>&quot;ok&quot;</span>, <span style={{ color: "#f9e2af" }}>&quot;uptime&quot;</span>: <span style={{ color: "#fab387" }}>99.9</span> <span style={{ color: "#89b4fa" }}>{"}"}</span></div>
    </div>
  </div>
);

{/* --- Mock Design Canvas for UI/UX --- */}
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
      <IconBrandFigma style={{ width: 12, height: 12, color: "#a855f6" }} />
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
      {/* Card mockup */}
      <div style={{ position: "relative", width: "80%", maxWidth: "140px", borderRadius: "10px", background: "#232340", border: "1px solid rgba(255,255,255,0.08)", padding: "10px", display: "flex", flexDirection: "column", gap: "6px" }}>
        <div style={{ height: "32px", borderRadius: "6px", background: "linear-gradient(135deg, #a855f6, #3b82f6)" }} />
        <div style={{ height: "6px", width: "70%", borderRadius: "3px", background: "rgba(255,255,255,0.15)" }} />
        <div style={{ height: "6px", width: "50%", borderRadius: "3px", background: "rgba(255,255,255,0.08)" }} />
        <div style={{ display: "flex", gap: "4px", marginTop: "2px" }}>
          <div style={{ height: "18px", flex: 1, borderRadius: "4px", background: "rgba(168,85,246,0.2)", border: "1px solid rgba(168,85,246,0.3)" }} />
          <div style={{ height: "18px", flex: 1, borderRadius: "4px", background: "rgba(59,130,246,0.2)", border: "1px solid rgba(59,130,246,0.3)" }} />
        </div>
      </div>
      {/* Selection handles */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "calc(80% + 8px)", maxWidth: "148px", height: "calc(100% - 30px)", border: "1px dashed rgba(168,85,246,0.5)", borderRadius: "12px", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: -3, left: -3, width: 6, height: 6, background: "#a855f6", borderRadius: "1px" }} />
        <div style={{ position: "absolute", top: -3, right: -3, width: 6, height: 6, background: "#a855f6", borderRadius: "1px" }} />
        <div style={{ position: "absolute", bottom: -3, left: -3, width: 6, height: 6, background: "#a855f6", borderRadius: "1px" }} />
        <div style={{ position: "absolute", bottom: -3, right: -3, width: 6, height: 6, background: "#a855f6", borderRadius: "1px" }} />
      </div>
    </div>
  </div>
);

{/* --- Mock Phone for Mobile Dev --- */}
const SkeletonFour = () => (
  <div
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
    }}
  >
    {/* Phone mockup 1 */}
    <div style={{
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
    }}>
      {/* Notch */}
      <div style={{ width: "40px", height: "10px", background: "#0a0a0a", borderRadius: "0 0 8px 8px", margin: "0 auto", position: "relative", zIndex: 2 }} />
      {/* Screen content */}
      <div style={{ flex: 1, background: "linear-gradient(180deg, #1e1b4b, #312e81)", padding: "6px", display: "flex", flexDirection: "column", gap: "5px" }}>
        <div style={{ height: "8px", width: "60%", borderRadius: "4px", background: "rgba(255,255,255,0.2)" }} />
        <div style={{ height: "6px", width: "80%", borderRadius: "4px", background: "rgba(255,255,255,0.08)" }} />
        <div style={{ flex: 1, borderRadius: "6px", background: "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(59,130,246,0.3))", marginTop: "4px" }} />
        <div style={{ display: "flex", gap: "3px" }}>
          <div style={{ flex: 1, height: "16px", borderRadius: "4px", background: "rgba(139,92,246,0.4)" }} />
          <div style={{ flex: 1, height: "16px", borderRadius: "4px", background: "rgba(255,255,255,0.06)" }} />
        </div>
      </div>
      {/* Home indicator */}
      <div style={{ width: "36px", height: "4px", background: "#444", borderRadius: "2px", margin: "4px auto" }} />
    </div>

    {/* Phone mockup 2 */}
    <div style={{
      width: "90px",
      height: "170px",
      borderRadius: "16px",
      background: "#0a0a0a",
      border: "2px solid #333",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      flexShrink: 0,
      transform: "translateY(12px)",
    }}>
      <div style={{ width: "40px", height: "10px", background: "#0a0a0a", borderRadius: "0 0 8px 8px", margin: "0 auto", position: "relative", zIndex: 2 }} />
      <div style={{ flex: 1, background: "linear-gradient(180deg, #1a2e05, #365314)", padding: "6px", display: "flex", flexDirection: "column", gap: "5px" }}>
        <div style={{ height: "8px", width: "50%", borderRadius: "4px", background: "rgba(255,255,255,0.2)" }} />
        <div style={{ display: "flex", gap: "3px", marginTop: "2px" }}>
          <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(34,197,94,0.3)", border: "1px solid rgba(34,197,94,0.4)" }} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "center" }}>
            <div style={{ height: "5px", width: "80%", borderRadius: "2px", background: "rgba(255,255,255,0.15)" }} />
            <div style={{ height: "4px", width: "50%", borderRadius: "2px", background: "rgba(255,255,255,0.06)" }} />
          </div>
        </div>
        <div style={{ flex: 1, borderRadius: "6px", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.15)" }} />
      </div>
      <div style={{ width: "36px", height: "4px", background: "#444", borderRadius: "2px", margin: "4px auto" }} />
    </div>

    {/* Phone mockup 3 */}
    <div style={{
      width: "90px",
      height: "170px",
      borderRadius: "16px",
      background: "#0a0a0a",
      border: "2px solid #333",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      flexShrink: 0,
    }}>
      <div style={{ width: "40px", height: "10px", background: "#0a0a0a", borderRadius: "0 0 8px 8px", margin: "0 auto", position: "relative", zIndex: 2 }} />
      <div style={{ flex: 1, background: "linear-gradient(180deg, #451a03, #7c2d12)", padding: "6px", display: "flex", flexDirection: "column", gap: "4px" }}>
        <div style={{ height: "8px", width: "70%", borderRadius: "4px", background: "rgba(255,255,255,0.2)" }} />
        <div style={{ height: "30px", borderRadius: "6px", background: "linear-gradient(135deg, rgba(249,115,22,0.3), rgba(234,88,12,0.2))", marginTop: "2px" }} />
        <div style={{ height: "6px", width: "90%", borderRadius: "3px", background: "rgba(255,255,255,0.08)" }} />
        <div style={{ height: "6px", width: "60%", borderRadius: "3px", background: "rgba(255,255,255,0.05)" }} />
        <div style={{ flex: 1, borderRadius: "6px", background: "rgba(249,115,22,0.1)" }} />
      </div>
      <div style={{ width: "36px", height: "4px", background: "#444", borderRadius: "2px", margin: "4px auto" }} />
    </div>
  </div>
);

const items = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, performant web applications with React, Next.js, and TypeScript. Pixel-perfect UIs with smooth animations.",
    header: <SkeletonOne />,
    icon: <IconCode className="h-4 w-4 text-violet-400" />,
    colSpan: 2,
  },
  {
    title: "Backend & Infrastructure",
    description:
      "Scalable APIs and microservices with Node.js, Python, and cloud platforms. Docker, CI/CD, and modern DevOps practices.",
    header: <SkeletonTwo />,
    icon: <IconRocket className="h-4 w-4 text-blue-400" />,
    colSpan: 1,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive user experiences with Figma. From wireframes to polished, accessible interfaces.",
    header: <SkeletonThree />,
    icon: <IconPalette className="h-4 w-4 text-emerald-400" />,
    colSpan: 1,
  },
  {
    title: "Mobile Development",
    description:
      "Native iOS apps with Swift & SwiftUI. Cross-platform solutions with React Native. App Store published.",
    header: <SkeletonFour />,
    icon: <IconDeviceMobile className="h-4 w-4 text-orange-400" />,
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
