"use client";

import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface ExpEntry {
  year: string;
  title: string;
  company: string;
  companyColor: string;
  companyLogo?: string;
  description: string;
  tags: string[];
}

const experiences: ExpEntry[] = [
  {
    year: "2024",
    title: "Software Developer In Test",
    company: "Turkish Airlines",
    companyColor: "#e11d48",
    companyLogo: "/logos/turkish-airlines.png",
    description:
      "Building and maintaining test automation frameworks and contributing to full-stack development for one of the world's largest airlines.",
    tags: ["TypeScript", "Next.js", "Java", "Spring Boot", "Playwright", "REST Assured", "Swagger"],
  },
  {
    year: "2022",
    title: "Software Engineer",
    company: "Curiesoft",
    companyColor: "#60a5fa",
    description:
      "Developed full-stack applications and automated testing solutions, working across backend services and end-to-end test frameworks.",
    tags: [".NET", "PostgreSQL", "Cypress", "JavaScript"],
  },
];

function ExperienceCard({
  exp,
  isExpanded,
  onToggle,
  showToggle,
}: {
  exp: ExpEntry;
  isExpanded: boolean;
  onToggle: () => void;
  showToggle: boolean;
}) {
  return (
    <div
      className="group/exp"
      style={{
        borderRadius: "0.75rem",
        padding: "1.25rem",
        transition: "background 0.3s ease, border-color 0.3s ease",
        borderLeft: "2px solid transparent",
        marginLeft: "-1.25rem",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background =
          "rgba(139, 92, 246, 0.04)";
        (e.currentTarget as HTMLElement).style.borderLeftColor =
          "rgba(139, 92, 246, 0.4)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "transparent";
        (e.currentTarget as HTMLElement).style.borderLeftColor = "transparent";
      }}
    >
      <div
        onClick={showToggle ? onToggle : undefined}
        style={{
          cursor: showToggle ? "pointer" : "default",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1 }}>
          <h4
            className="text-white"
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              lineHeight: 1.3,
              marginBottom: "0.625rem",
            }}
          >
            {exp.title}
          </h4>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {exp.companyLogo && (
              <Image
                src={exp.companyLogo}
                alt={exp.company}
                width={20}
                height={20}
                style={{ borderRadius: "4px" }}
              />
            )}
            <span
              style={{
                color: exp.companyColor,
                fontSize: "0.8125rem",
                fontWeight: 500,
                letterSpacing: "0.01em",
              }}
            >
              {exp.company}
            </span>
          </div>
        </div>
        {showToggle && (
          <span
            style={{
              color: "#525252",
              fontSize: "0.75rem",
              flexShrink: 0,
              marginLeft: "0.75rem",
              marginTop: "0.5rem",
              transition: "transform 0.3s ease",
              transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
              display: "inline-block",
            }}
          >
            &#x25BC;
          </span>
        )}
      </div>

      <div
        className="exp-collapse-wrapper"
        data-collapsed={!isExpanded ? "true" : undefined}
      >
        <div style={{ overflow: "hidden" }}>
          <p
            style={{
              color: "#a3a3a3",
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              marginTop: "1.25rem",
              marginBottom: "1.25rem",
              letterSpacing: "0.01em",
            }}
          >
            {exp.description}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              paddingTop: "0.25rem",
            }}
          >
            {exp.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: "#d4d4d4",
                  padding: "4px 12px",
                  borderRadius: "6px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  letterSpacing: "0.01em",
                  lineHeight: 1.5,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const toggle = (idx: number) => {
    setExpandedIndex((prev) => (prev === idx ? -1 : idx));
  };

  const experienceData = experiences.map((exp, idx) => ({
    title: exp.year,
    content: (
      <ExperienceCard
        exp={exp}
        isExpanded={!isMobile || expandedIndex === idx}
        onToggle={() => toggle(idx)}
        showToggle={isMobile}
      />
    ),
    isLatest: idx === 0,
  }));

  return (
    <section
      id="experience"
      style={{
        position: "relative",
        padding: "6rem 1rem",
        background: "#000",
      }}
    >
      {/* Faint horizontal lines background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 95%, rgba(255,255,255,0.02) 95%)",
          backgroundSize: "100% 3rem",
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <p
            className="text-violet-400"
            style={{
              textAlign: "center",
              marginBottom: "0.75rem",
              fontSize: "0.8125rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            My Journey
          </p>
          <h2
            className="text-white"
            style={{
              textAlign: "center",
              marginBottom: "1.25rem",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 600,
              letterSpacing: "-0.025em",
            }}
          >
            Experience
          </h2>
          <p
            style={{
              textAlign: "center",
              maxWidth: "42rem",
              marginLeft: "auto",
              marginRight: "auto",
              color: "#a3a3a3",
              fontSize: "1.0625rem",
              lineHeight: 1.6,
              letterSpacing: "0.01em",
            }}
          >
            A timeline of my professional growth and the milestones that shaped
            me.
          </p>
        </motion.div>

        <Timeline data={experienceData} />
      </div>
    </section>
  );
}
