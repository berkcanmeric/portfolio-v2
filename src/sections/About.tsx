"use client";

import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Code, Smartphone, Palette, Rocket } from "lucide-react";

const techPeople = [
  { id: 1, name: "React", designation: "UI Library", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { id: 2, name: "Next.js", designation: "React Framework", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", dark: true },
  { id: 3, name: "TypeScript", designation: "Type Safety", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { id: 4, name: "Swift", designation: "iOS Native", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { id: 5, name: "Node.js", designation: "Runtime", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { id: 6, name: "Tailwind", designation: "CSS Framework", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
];

const CodeImage = ({ src, alt, bg }: { src: string; alt: string; bg: string }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      borderRadius: "0.75rem",
      overflow: "hidden",
      position: "relative",
      background: bg,
    }}
  >
    <Image
      src={src}
      alt={alt}
      fill
      style={{ objectFit: "contain", transition: "transform 0.3s ease" }}
      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 66vw"
      onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = "scale(1.03)"; }}
      onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = "scale(1)"; }}
    />
  </div>
);

const items = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, performant web applications with React, Next.js, and TypeScript. Pixel-perfect UIs with smooth animations.",
    header: <CodeImage src="/ray-frontend.png" alt="Next.js page.tsx code snippet" bg="linear-gradient(135deg, #ff6b9d, #c76adb, #7d8cff)" />,
    icon: <Code className="h-4 w-4 text-violet-400" />,
    colSpan: 2,
  },
  {
    title: "Backend & Infrastructure",
    description:
      "Scalable APIs and services with Java Spring Boot, Next.js functions, and Supabase. Docker, CI/CD, and modern DevOps practices.",
    header: <CodeImage src="/ray-backend.png" alt="Spring Boot ApiController.java code snippet" bg="linear-gradient(135deg, #0f2027, #203a43, #2c5364)" />,
    icon: <Rocket className="h-4 w-4 text-blue-400" />,
    colSpan: 1,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive user experiences with Figma. From wireframes to polished, accessible interfaces.",
    header: <CodeImage src="/ray-uiux.png" alt="CSS design-tokens.css code snippet" bg="linear-gradient(135deg, #38ef7d, #11998e)" />,
    icon: <Palette className="h-4 w-4 text-emerald-400" />,
    colSpan: 1,
  },
  {
    title: "Mobile Development",
    description:
      "Native iOS apps with Swift & SwiftUI. Cross-platform solutions with React Native. App Store published.",
    header: <CodeImage src="/ray-mobile.png" alt="SwiftUI ContentView.swift code snippet" bg="linear-gradient(135deg, #ff5130, #f09819)" />,
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
