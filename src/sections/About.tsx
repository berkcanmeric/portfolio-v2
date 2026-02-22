"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Code, Smartphone, Palette, Rocket } from "lucide-react";

const techPeople = [
  { id: 1, name: "React", designation: "UI Library", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { id: 2, name: "Next.js", designation: "React Framework", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg", dark: true },
  { id: 3, name: "TypeScript", designation: "Type Safety", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { id: 4, name: "Swift", designation: "iOS Native", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { id: 5, name: "Node.js", designation: "Runtime", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { id: 6, name: "Tailwind", designation: "CSS Framework", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
];

/* Syntax colors */
const k = "#c792ea";  // keyword (purple)
const t = "#ffcb6b";  // type (yellow)
const s = "#c3e88d";  // string (green)
const f = "#82aaff";  // function (blue)
const p = "#babed8";  // punctuation (white)
const d = "#f78c6c";  // decorator/number (orange)
const c = "#546e7a";  // comment (grey)

const CodeWindow = ({ gradient, title, children }: {
  gradient: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div style={{ width: "100%", height: "100%", borderRadius: "0.625rem", overflow: "hidden", background: gradient, padding: "5px" }}>
    <div style={{ width: "100%", height: "100%", borderRadius: "6px", background: "rgba(13,17,23,0.94)", backdropFilter: "blur(12px)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Title bar */}
      <div style={{ display: "flex", alignItems: "center", padding: "6px 10px", gap: "5px", borderBottom: "1px solid rgba(255,255,255,0.05)", flexShrink: 0 }}>
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#ff5f56" }} />
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#ffbd2e" }} />
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#27c93f" }} />
        <span style={{ marginLeft: "auto", marginRight: "auto", fontSize: "9px", color: "#555", fontFamily: "monospace", letterSpacing: "0.02em" }}>{title}</span>
      </div>
      {/* Code */}
      <pre style={{ flex: 1, margin: 0, padding: "8px 12px", fontFamily: "'Menlo','Fira Code','Consolas',monospace", fontSize: "11px", lineHeight: 1.6, overflow: "hidden", color: p, whiteSpace: "pre", tabSize: 2 }}>
        {children}
      </pre>
    </div>
  </div>
);

const FrontendCode = () => (
  <CodeWindow gradient="linear-gradient(135deg, #ff6b9d, #c76adb, #7d8cff)" title="page.tsx">
    <span style={{color:k}}>import</span> {"{ "}<span style={{color:t}}>Suspense</span> {"} "}<span style={{color:k}}>from</span> <span style={{color:s}}>&quot;react&quot;</span>{"\n"}
    <span style={{color:k}}>import</span> {"{ "}<span style={{color:f}}>getProjects</span> {"} "}<span style={{color:k}}>from</span> <span style={{color:s}}>&quot;@/lib/data&quot;</span>{"\n"}
    {"\n"}
    <span style={{color:k}}>export async function</span> <span style={{color:f}}>generateMetadata</span>({"{"}{"\n"}
    {"  "}<span style={{color:f}}>params</span>,{"\n"}
    {"}"}: <span style={{color:t}}>Props</span>) {"{"}{"\n"}
    {"  "}<span style={{color:k}}>const</span> <span style={{color:f}}>project</span> = <span style={{color:k}}>await</span> <span style={{color:f}}>getProjects</span>(<span style={{color:f}}>params</span>.<span style={{color:f}}>slug</span>){"\n"}
    {"  "}<span style={{color:k}}>return</span> {"{"} <span style={{color:f}}>title</span>: <span style={{color:f}}>project</span>.<span style={{color:f}}>name</span> {"}"}{"\n"}
    {"}"}{"\n"}
    {"\n"}
    <span style={{color:k}}>export default async function</span> <span style={{color:f}}>Page</span>({"{ "}<span style={{color:f}}>params</span> {"}"}: <span style={{color:t}}>Props</span>) {"{"}{"\n"}
    {"  "}<span style={{color:k}}>const</span> <span style={{color:f}}>data</span> = <span style={{color:k}}>await</span> <span style={{color:f}}>getProjects</span>(<span style={{color:f}}>params</span>.<span style={{color:f}}>slug</span>){"\n"}
    {"  "}<span style={{color:k}}>return</span> ({"\n"}
    {"    "}<span style={{color:p}}>{"<"}</span><span style={{color:t}}>Suspense</span> <span style={{color:f}}>fallback</span>={"{"}<span style={{color:p}}>{"<"}</span><span style={{color:t}}>Skeleton</span> /{">"}{"}"}{">"}{"\n"}
    {"      "}<span style={{color:p}}>{"<"}</span><span style={{color:t}}>ProjectGrid</span> <span style={{color:f}}>items</span>={"{"}<span style={{color:f}}>data</span>{"}"} /{">"}{"\n"}
    {"    "}<span style={{color:p}}>{"</"}</span><span style={{color:t}}>Suspense</span><span style={{color:p}}>{">"}</span>{"\n"}
    {"  )"}
  </CodeWindow>
);

const BackendCode = () => (
  <CodeWindow gradient="linear-gradient(135deg, #0f2027, #203a43, #2c5364)" title="ApiController.java">
    <span style={{color:d}}>@RestController</span>{"\n"}
    <span style={{color:d}}>@RequestMapping</span>(<span style={{color:s}}>&quot;/api/v1&quot;</span>){"\n"}
    <span style={{color:k}}>public class</span> <span style={{color:t}}>ProjectController</span> {"{"}{"\n"}
    {"  "}<span style={{color:k}}>private final</span> <span style={{color:t}}>ProjectService</span> <span style={{color:f}}>service</span>;{"\n"}
    {"\n"}
    {"  "}<span style={{color:d}}>@GetMapping</span>(<span style={{color:s}}>&quot;/projects&quot;</span>){"\n"}
    {"  "}<span style={{color:k}}>public</span> <span style={{color:t}}>ResponseEntity</span>{"<"}<span style={{color:t}}>Page</span>{"<"}<span style={{color:t}}>ProjectDTO</span>{">>"}{"\n"}
    {"      "}<span style={{color:f}}>list</span>(<span style={{color:d}}>@RequestParam</span> <span style={{color:t}}>Optional</span>{"<"}<span style={{color:t}}>String</span>{">"} <span style={{color:f}}>q</span>,{"\n"}
    {"           "}<span style={{color:t}}>Pageable</span> <span style={{color:f}}>page</span>) {"{"}{"\n"}
    {"    "}<span style={{color:k}}>var</span> <span style={{color:f}}>result</span> = <span style={{color:f}}>q</span>.<span style={{color:f}}>map</span>(<span style={{color:f}}>service</span>::<span style={{color:f}}>search</span>){"\n"}
    {"      "}.<span style={{color:f}}>orElseGet</span>(() -{">"} <span style={{color:f}}>service</span>.<span style={{color:f}}>findAll</span>(<span style={{color:f}}>page</span>));{"\n"}
    {"    "}<span style={{color:k}}>return</span> <span style={{color:t}}>ResponseEntity</span>.<span style={{color:f}}>ok</span>(<span style={{color:f}}>result</span>);{"\n"}
    {"  }"}
  </CodeWindow>
);

const UiUxCode = () => (
  <CodeWindow gradient="linear-gradient(135deg, #38ef7d, #11998e)" title="design-tokens.css">
    <span style={{color:d}}>@layer</span> <span style={{color:f}}>base</span> {"{"}{"\n"}
    {"  "}<span style={{color:p}}>:root</span> {"{"}{"\n"}
    {"    "}<span style={{color:f}}>--hue</span>: <span style={{color:d}}>280</span>;{"\n"}
    {"    "}<span style={{color:f}}>--primary</span>: <span style={{color:d}}>oklch(0.7 0.18 var(--hue))</span>;{"\n"}
    {"    "}<span style={{color:f}}>--surface</span>: <span style={{color:d}}>oklch(0.14 0.02 var(--hue))</span>;{"\n"}
    {"    "}<span style={{color:f}}>--radius</span>: <span style={{color:d}}>0.75rem</span>;{"\n"}
    {"    "}<span style={{color:f}}>--ease</span>: <span style={{color:d}}>cubic-bezier(.22, 1, .36, 1)</span>;{"\n"}
    {"  }"}{"\n"}
    {"}"}{"\n"}
    {"\n"}
    <span style={{color:d}}>@layer</span> <span style={{color:f}}>components</span> {"{"}{"\n"}
    {"  "}<span style={{color:t}}>.card</span> {"{"}{"\n"}
    {"    "}<span style={{color:f}}>background</span>: <span style={{color:k}}>var</span>(<span style={{color:f}}>--surface</span>);{"\n"}
    {"    "}<span style={{color:f}}>border-radius</span>: <span style={{color:k}}>var</span>(<span style={{color:f}}>--radius</span>);{"\n"}
    {"    "}<span style={{color:f}}>transition</span>: <span style={{color:d}}>transform 0.4s</span> <span style={{color:k}}>var</span>(<span style={{color:f}}>--ease</span>);{"\n"}
    {"  }"}
  </CodeWindow>
);

const MobileCode = () => (
  <CodeWindow gradient="linear-gradient(135deg, #ff512f, #f09819)" title="ContentView.swift">
    <span style={{color:d}}>@Observable</span> <span style={{color:k}}>final class</span> <span style={{color:t}}>ViewModel</span> {"{"}{"\n"}
    {"  "}<span style={{color:k}}>var</span> <span style={{color:f}}>items</span>: [<span style={{color:t}}>Project</span>] = []{"\n"}
    {"  "}<span style={{color:k}}>var</span> <span style={{color:f}}>isLoading</span> = <span style={{color:d}}>false</span>{"\n"}
    {"\n"}
    {"  "}<span style={{color:k}}>func</span> <span style={{color:f}}>fetch</span>() <span style={{color:k}}>async throws</span> {"{"}{"\n"}
    {"    "}<span style={{color:f}}>isLoading</span> = <span style={{color:d}}>true</span>{"\n"}
    {"    "}<span style={{color:k}}>defer</span> {"{"} <span style={{color:f}}>isLoading</span> = <span style={{color:d}}>false</span> {"}"}{"\n"}
    {"    "}<span style={{color:f}}>items</span> = <span style={{color:k}}>try await</span> <span style={{color:t}}>API</span>.<span style={{color:f}}>shared</span>.<span style={{color:f}}>projects</span>(){"\n"}
    {"  }"}{"\n"}
    {"}"}{"\n"}
    {"\n"}
    <span style={{color:k}}>struct</span> <span style={{color:t}}>ContentView</span>: <span style={{color:t}}>View</span> {"{"}{"\n"}
    {"  "}<span style={{color:d}}>@State</span> <span style={{color:k}}>private var</span> <span style={{color:f}}>vm</span> = <span style={{color:t}}>ViewModel</span>(){"\n"}
    {"  "}<span style={{color:k}}>var</span> <span style={{color:f}}>body</span>: <span style={{color:k}}>some</span> <span style={{color:t}}>View</span> {"{"}{"\n"}
    {"    "}<span style={{color:t}}>NavigationStack</span> {"{"}{"\n"}
    {"      "}<span style={{color:t}}>List</span>(<span style={{color:f}}>vm</span>.<span style={{color:f}}>items</span>) {"{ "}<span style={{color:f}}>item</span> <span style={{color:k}}>in</span>{"\n"}
    {"        "}<span style={{color:t}}>ProjectRow</span>(<span style={{color:f}}>item</span>)
  </CodeWindow>
);

const items = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, performant web applications with React, Next.js, and TypeScript. Pixel-perfect UIs with smooth animations.",
    header: <FrontendCode />,
    icon: <Code className="h-4 w-4 text-violet-400" />,
    colSpan: 2,
  },
  {
    title: "Backend & Infrastructure",
    description:
      "Scalable APIs and services with Java Spring Boot, Next.js functions, and Supabase. Docker, CI/CD, and modern DevOps practices.",
    header: <BackendCode />,
    icon: <Rocket className="h-4 w-4 text-blue-400" />,
    colSpan: 1,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive user experiences with Figma. From wireframes to polished, accessible interfaces.",
    header: <UiUxCode />,
    icon: <Palette className="h-4 w-4 text-emerald-400" />,
    colSpan: 1,
  },
  {
    title: "Mobile Development",
    description:
      "Native iOS apps with Swift & SwiftUI. Cross-platform solutions with React Native. App Store published.",
    header: <MobileCode />,
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
          <p className="text-violet-400" style={{ textAlign: "center", marginBottom: "0.75rem", fontSize: "0.8125rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500 }}>
            What I Do
          </p>
          <h2 className="text-white" style={{ textAlign: "center", marginBottom: "1.25rem", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 600, letterSpacing: "-0.025em" }}>
            Skills & Expertise
          </h2>
          <p style={{ textAlign: "center", maxWidth: "42rem", marginLeft: "auto", marginRight: "auto", color: "#a3a3a3", fontSize: "1.0625rem", lineHeight: 1.6, letterSpacing: "0.01em" }}>
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
          <p style={{ textAlign: "center", marginBottom: "2rem", color: "#737373", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500 }}>
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
