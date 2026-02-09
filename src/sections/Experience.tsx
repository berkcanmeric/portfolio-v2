"use client";

import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";

const experienceData = [
  {
    title: "2024",
    content: (
      <div>
        <h4 className="font-bold text-white" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", marginBottom: "0.5rem" }}>
          Senior Full-Stack Developer
        </h4>
        <p className="text-violet-400 text-sm" style={{ marginBottom: "1rem" }}>Tech Company Inc.</p>
        <p className="text-neutral-400" style={{ fontSize: "0.875rem", lineHeight: 1.625, marginBottom: "1rem" }}>
          Leading the frontend architecture for a SaaS platform serving 50K+ users.
          Implemented micro-frontend architecture, reducing bundle size by 40% and
          improving load times by 2x.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {["React", "TypeScript", "AWS", "GraphQL", "Micro-frontends"].map(
            (tag) => (
              <span
                key={tag}
                className="text-violet-300"
                style={{ fontSize: "0.75rem", padding: "0.25rem 0.75rem", borderRadius: "9999px", background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)" }}
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <h4 className="font-bold text-white" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", marginBottom: "0.5rem" }}>
          Full-Stack Developer
        </h4>
        <p className="text-blue-400 text-sm" style={{ marginBottom: "1rem" }}>Digital Agency Co.</p>
        <p className="text-neutral-400" style={{ fontSize: "0.875rem", lineHeight: 1.625, marginBottom: "1rem" }}>
          Built and shipped 12+ client projects including e-commerce platforms,
          dashboards, and mobile apps. Introduced CI/CD pipelines that reduced
          deployment time from hours to minutes.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {["Next.js", "Node.js", "PostgreSQL", "Docker", "CI/CD"].map(
            (tag) => (
              <span
                key={tag}
                className="text-blue-300"
                style={{ fontSize: "0.75rem", padding: "0.25rem 0.75rem", borderRadius: "9999px", background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <h4 className="font-bold text-white" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", marginBottom: "0.5rem" }}>
          iOS Developer
        </h4>
        <p className="text-orange-400 text-sm" style={{ marginBottom: "1rem" }}>Mobile Startup Ltd.</p>
        <p className="text-neutral-400" style={{ fontSize: "0.875rem", lineHeight: 1.625, marginBottom: "1rem" }}>
          Developed native iOS applications with Swift and SwiftUI. Published 3
          apps to the App Store with a combined 100K+ downloads. Implemented
          complex animations and offline-first architecture.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {["Swift", "SwiftUI", "CoreData", "CloudKit", "UIKit"].map((tag) => (
            <span
              key={tag}
              className="text-orange-300"
              style={{ fontSize: "0.75rem", padding: "0.25rem 0.75rem", borderRadius: "9999px", background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div>
        <h4 className="font-bold text-white" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", marginBottom: "0.5rem" }}>
          Junior Developer
        </h4>
        <p className="text-emerald-400 text-sm" style={{ marginBottom: "1rem" }}>Web Studio</p>
        <p className="text-neutral-400" style={{ fontSize: "0.875rem", lineHeight: 1.625, marginBottom: "1rem" }}>
          Started my professional journey building responsive websites and web
          applications. Learned the fundamentals of clean code, testing, and
          agile development. Quickly grew from junior to mid-level within 8
          months.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {["JavaScript", "React", "CSS", "Git", "REST APIs"].map((tag) => (
            <span
              key={tag}
              className="text-emerald-300"
              style={{ fontSize: "0.75rem", padding: "0.25rem 0.75rem", borderRadius: "9999px", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ position: "relative", padding: "6rem 1rem", background: "#000" }}>
      <div style={{ maxWidth: "80rem", marginLeft: "auto", marginRight: "auto" }}>
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
            style={{ textAlign: "center", marginBottom: "1.5rem", fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            Experience
          </h2>
          <p
            className="text-neutral-400 text-lg"
            style={{ textAlign: "center", maxWidth: "42rem", marginLeft: "auto", marginRight: "auto" }}
          >
            A timeline of my professional growth and the milestones that shaped me.
          </p>
        </motion.div>

        <Timeline data={experienceData} />
      </div>
    </section>
  );
}
