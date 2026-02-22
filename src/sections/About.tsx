"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Palette, Rocket } from "lucide-react";

/* ── Tech data for marquee strips ── */

const techRow1 = [
  { name: "React", icon: "react/react-original.svg" },
  { name: "Next.js", icon: "nextjs/nextjs-plain.svg", dark: true },
  { name: "TypeScript", icon: "typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "javascript/javascript-original.svg" },
  { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original.svg" },
  { name: "HTML5", icon: "html5/html5-original.svg" },
  { name: "CSS3", icon: "css3/css3-original.svg" },
  { name: "React Native", icon: "react/react-original.svg" },
];

const techRow2 = [
  { name: "Swift", icon: "swift/swift-original.svg" },
  { name: "Java", icon: "java/java-original.svg" },
  { name: "Spring Boot", icon: "spring/spring-original.svg" },
  { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", icon: "postgresql/postgresql-original.svg" },
  { name: "Docker", icon: "docker/docker-original.svg" },
  { name: "Figma", icon: "figma/figma-original.svg" },
  { name: "Git", icon: "git/git-original.svg" },
];

/* ── Domain cards data ── */

const domains = [
  {
    number: "01",
    title: "Frontend",
    icon: <Code className="h-5 w-5" />,
    description:
      "Building responsive, performant web applications with pixel-perfect UIs and smooth animations.",
    techs: ["React", "Next.js", "TypeScript", "Tailwind"],
    color: "#ec4899",
  },
  {
    number: "02",
    title: "Backend",
    icon: <Rocket className="h-5 w-5" />,
    description:
      "Scalable APIs and services with modern frameworks. Docker, CI/CD, and cloud infrastructure.",
    techs: ["Java", "Spring Boot", "Node.js", "PostgreSQL"],
    color: "#3b82f6",
  },
  {
    number: "03",
    title: "Mobile",
    icon: <Smartphone className="h-5 w-5" />,
    description:
      "Native iOS apps with Swift & SwiftUI. Cross-platform solutions. App Store published.",
    techs: ["Swift", "SwiftUI", "React Native", "SwiftData"],
    color: "#f97316",
  },
  {
    number: "04",
    title: "Design",
    icon: <Palette className="h-5 w-5" />,
    description:
      "Intuitive user experiences from wireframes to polished, accessible interfaces.",
    techs: ["Figma", "Design Systems", "Motion", "Accessibility"],
    color: "#10b981",
  },
];

/* ── Tech pill for marquee ── */

function TechPill({
  name,
  icon,
  dark,
}: {
  name: string;
  icon: string;
  dark?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.625rem",
        padding: "0.5rem 1.25rem",
        borderRadius: "9999px",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}`}
        alt={name}
        width={20}
        height={20}
        style={{ filter: dark ? "invert(1)" : undefined }}
      />
      <span
        style={{
          color: "#d4d4d4",
          fontSize: "0.875rem",
          fontWeight: 500,
        }}
      >
        {name}
      </span>
    </div>
  );
}

/* ── Infinite marquee ── */

function Marquee({
  items,
  reverse = false,
  speed = 35,
}: {
  items: typeof techRow1;
  reverse?: boolean;
  speed?: number;
}) {
  const pills = items.map((t, i) => (
    <TechPill key={`${t.name}-${i}`} name={t.name} icon={t.icon} dark={t.dark} />
  ));

  return (
    <div
      className="marquee-container"
      style={{
        overflow: "hidden",
        width: "100%",
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: "flex",
          gap: "0.75rem",
          width: "max-content",
          animation: `${reverse ? "marquee-right" : "marquee-left"} ${speed}s linear infinite`,
        }}
      >
        {pills}
        {/* Duplicate for seamless loop */}
        {pills}
      </div>
    </div>
  );
}

/* ── Domain card ── */

function DomainCard({
  domain,
  index,
}: {
  domain: (typeof domains)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="domain-card"
      style={{
        background: "#0a0a0a",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "1rem",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-4px)";
        el.style.borderColor = domain.color + "40";
        el.style.boxShadow = `0 0 40px -15px ${domain.color}30`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.borderColor = "rgba(255,255,255,0.08)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Large number watermark */}
      <span
        style={{
          position: "absolute",
          top: "0.75rem",
          right: "1.25rem",
          fontSize: "5rem",
          fontWeight: 700,
          color: "rgba(255,255,255,0.03)",
          lineHeight: 1,
          letterSpacing: "-0.05em",
          pointerEvents: "none",
        }}
      >
        {domain.number}
      </span>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Icon + title row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "0.75rem",
          }}
        >
          <div style={{ color: domain.color }}>{domain.icon}</div>
          <h3
            style={{
              color: "#fff",
              fontSize: "1.25rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            {domain.title}
          </h3>
        </div>

        <p
          style={{
            color: "#a3a3a3",
            fontSize: "0.9375rem",
            lineHeight: 1.6,
            marginBottom: "1.25rem",
            letterSpacing: "0.01em",
          }}
        >
          {domain.description}
        </p>

        {/* Tech pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {domain.techs.map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                padding: "4px 12px",
                borderRadius: "6px",
                background: domain.color + "10",
                border: `1px solid ${domain.color}20`,
                color: domain.color,
                letterSpacing: "0.01em",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── About section ── */

export default function About() {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        padding: "6rem 1rem",
        background: "#000",
      }}
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "80rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <p
            className="text-violet-400"
            style={{
              marginBottom: "0.75rem",
              fontSize: "0.8125rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            What I Do
          </p>
          <h2
            className="text-white"
            style={{
              marginBottom: "1.25rem",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 600,
              letterSpacing: "-0.025em",
            }}
          >
            Skills & Expertise
          </h2>
          <p
            style={{
              maxWidth: "42rem",
              marginLeft: "auto",
              marginRight: "auto",
              color: "#a3a3a3",
              fontSize: "1.0625rem",
              lineHeight: 1.6,
              letterSpacing: "0.01em",
            }}
          >
            I specialize in building end-to-end digital products, from concept
            to deployment. Here&apos;s my toolkit:
          </p>
        </motion.div>

        {/* Marquee strips */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            marginBottom: "3.5rem",
          }}
        >
          <Marquee items={techRow1} speed={35} />
          <Marquee items={techRow2} reverse speed={40} />
        </motion.div>

        {/* Domain cards — 2×2 grid */}
        <div
          className="domain-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1rem",
            maxWidth: "56rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {domains.map((domain, i) => (
            <DomainCard key={domain.number} domain={domain} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
