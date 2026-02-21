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
    title: "Senior Full-Stack Developer",
    company: "Tech Company Inc.",
    companyColor: "#a78bfa",
    description:
      "Leading the frontend architecture for a SaaS platform serving 50K+ users. Implemented micro-frontend architecture, reducing bundle size by 40% and improving load times by 2x.",
    tags: ["React", "TypeScript", "AWS", "GraphQL", "Micro-frontends"],
    tagColor: "#c4b5fd",
    tagBg: "rgba(139,92,246,0.1)",
    tagBorder: "rgba(139,92,246,0.2)",
  },
  {
    year: "2023",
    title: "Full-Stack Developer",
    company: "Digital Agency Co.",
    companyColor: "#60a5fa",
    description:
      "Built and shipped 12+ client projects including e-commerce platforms, dashboards, and mobile apps. Introduced CI/CD pipelines that reduced deployment time from hours to minutes.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Docker", "CI/CD"],
    tagColor: "#93c5fd",
    tagBg: "rgba(59,130,246,0.1)",
    tagBorder: "rgba(59,130,246,0.2)",
  },
  {
    year: "2022",
    title: "iOS Developer",
    company: "Mobile Startup Ltd.",
    companyColor: "#fb923c",
    description:
      "Developed native iOS applications with Swift and SwiftUI. Published 3 apps to the App Store with a combined 100K+ downloads. Implemented complex animations and offline-first architecture.",
    tags: ["Swift", "SwiftUI", "CoreData", "CloudKit", "UIKit"],
    tagColor: "#fdba74",
    tagBg: "rgba(249,115,22,0.1)",
    tagBorder: "rgba(249,115,22,0.2)",
  },
  {
    year: "2021",
    title: "Junior Developer",
    company: "Web Studio",
    companyColor: "#34d399",
    description:
      "Started my professional journey building responsive websites and web applications. Learned the fundamentals of clean code, testing, and agile development. Quickly grew from junior to mid-level within 8 months.",
    tags: ["JavaScript", "React", "CSS", "Git", "REST APIs"],
    tagColor: "#6ee7b7",
    tagBg: "rgba(16,185,129,0.1)",
    tagBorder: "rgba(16,185,129,0.2)",
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
