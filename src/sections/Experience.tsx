"use client";

import { Timeline } from "@/components/ui/timeline";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface TechItem {
  id: number;
  name: string;
  designation: string;
  image: string;
}

interface ExpEntry {
  year: string;
  title: string;
  company: string;
  companyColor: string;
  companyLogo?: string;
  description: string;
  tags: TechItem[];
}

const DEV = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const experiences: ExpEntry[] = [
  {
    year: "2024",
    title: "Software Developer In Test",
    company: "Turkish Airlines",
    companyColor: "#e11d48",
    companyLogo: "/logos/turkish-airlines.svg",
    description:
      "Building and maintaining test automation frameworks and contributing to full-stack development for one of the world's largest airlines.",
    tags: [
      { id: 1, name: "TypeScript", designation: "Type Safety", image: `${DEV}/typescript/typescript-original.svg` },
      { id: 2, name: "Next.js", designation: "React Framework", image: `${DEV}/nextjs/nextjs-original.svg` },
      { id: 3, name: "Java", designation: "Backend Language", image: `${DEV}/java/java-original.svg` },
      { id: 4, name: "Spring Boot", designation: "Java Framework", image: `${DEV}/spring/spring-original.svg` },
      { id: 5, name: "Playwright", designation: "E2E Testing", image: `${DEV}/playwright/playwright-original.svg` },
      { id: 6, name: "REST Assured", designation: "API Testing", image: `${DEV}/java/java-original.svg` },
      { id: 7, name: "Swagger", designation: "API Docs", image: `${DEV}/swagger/swagger-original.svg` },
    ],
  },
  {
    year: "2022",
    title: "Software Engineer",
    company: "Curiesoft",
    companyColor: "#60a5fa",
    description:
      "Developed full-stack applications and automated testing solutions, working across backend services and end-to-end test frameworks.",
    tags: [
      { id: 1, name: ".NET", designation: "Backend Framework", image: `${DEV}/dotnetcore/dotnetcore-original.svg` },
      { id: 2, name: "PostgreSQL", designation: "Database", image: `${DEV}/postgresql/postgresql-original.svg` },
      { id: 3, name: "Cypress", designation: "E2E Testing", image: `${DEV}/cypressio/cypressio-original.svg` },
      { id: 4, name: "JavaScript", designation: "Web Language", image: `${DEV}/javascript/javascript-original.svg` },
    ],
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
          {exp.companyLogo ? (
            <MovingBorderButton
              as="div"
              borderRadius="0.75rem"
              containerClassName="h-auto w-fit"
              className="px-3 py-1.5 gap-2"
              borderClassName="bg-[radial-gradient(var(--rose-500)_40%,transparent_60%)]"
              duration={3000}
            >
              <Image
                src={exp.companyLogo}
                alt={exp.company}
                width={20}
                height={20}
                style={{ borderRadius: "4px" }}
              />
              <span style={{ color: exp.companyColor, fontSize: "0.875rem", fontWeight: 500 }}>
                {exp.company}
              </span>
            </MovingBorderButton>
          ) : (
            <p style={{ color: exp.companyColor, fontSize: "0.875rem" }}>
              {exp.company}
            </p>
          )}
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
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", paddingTop: "0.5rem" }}>
            <AnimatedTooltip items={exp.tags} />
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
