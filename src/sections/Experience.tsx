"use client";

import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface ExpEntry {
  year: string;
  title: string;
  company: string;
  companyColor: string;
  description: string;
  tags: string[];
  tagColor: string;
  tagBg: string;
  tagBorder: string;
}

const experiences: ExpEntry[] = [
  {
    year: "2024",
    title: "Software Developer In Test",
    company: "Turkish Airlines",
    companyColor: "#e11d48",
    description:
      "Building and maintaining test automation frameworks and contributing to full-stack development for one of the world's largest airlines.",
    tags: ["TypeScript", "Next.js", "Java", "Spring Boot", "Playwright", "REST Assured", "Swagger"],
    tagColor: "#fda4af",
    tagBg: "rgba(225,29,72,0.1)",
    tagBorder: "rgba(225,29,72,0.2)",
  },
  {
    year: "2022",
    title: "Software Engineer",
    company: "Curiesoft",
    companyColor: "#60a5fa",
    description:
      "Developed full-stack applications and automated testing solutions, working across backend services and end-to-end test frameworks.",
    tags: [".NET", "PostgreSQL", "Cypress", "JavaScript"],
    tagColor: "#93c5fd",
    tagBg: "rgba(59,130,246,0.1)",
    tagBorder: "rgba(59,130,246,0.2)",
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
    <div>
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
            className="font-bold text-white"
            style={{
              fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
              marginBottom: "0.5rem",
            }}
          >
            {exp.title}
          </h4>
          <p style={{ color: exp.companyColor, fontSize: "0.875rem" }}>
            {exp.company}
          </p>
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
            ▼
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
              fontSize: "0.875rem",
              lineHeight: 1.625,
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            {exp.description}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {exp.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  color: exp.tagColor,
                  fontSize: "0.75rem",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "9999px",
                  background: exp.tagBg,
                  border: `1px solid ${exp.tagBorder}`,
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
      <div
        style={{
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
            className="text-violet-400 text-sm tracking-widest uppercase"
            style={{ textAlign: "center", marginBottom: "0.75rem" }}
          >
            My Journey
          </p>
          <h2
            className="font-bold text-white"
            style={{
              textAlign: "center",
              marginBottom: "1.5rem",
              fontSize: "clamp(2rem, 5vw, 3rem)",
            }}
          >
            Experience
          </h2>
          <p
            className="text-neutral-400 text-lg"
            style={{
              textAlign: "center",
              maxWidth: "42rem",
              marginLeft: "auto",
              marginRight: "auto",
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
