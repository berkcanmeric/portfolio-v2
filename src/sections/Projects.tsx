"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Heart } from "lucide-react";
import Image from "next/image";
import { useRef, useEffect, useCallback, useState } from "react";

const screenshots = [
  { src: "/screenshots/us-app-1.png", alt: "Us App - Daily Questions" },
  { src: "/screenshots/us-app-2.png", alt: "Us App - Garden" },
  { src: "/screenshots/us-app-3.png", alt: "Us App - Memory Book" },
];

const project = {
  title: "Us",
  description:
    "A relationship app for couples to strengthen their connection through daily questions, mood tracking, streaks, and a shared virtual garden. Built with modern Swift and SwiftUI.",
  tags: ["Swift", "SwiftUI", "SwiftData", "CloudKit"],
  github: "https://github.com/berkcanmeric/us-app-v2",
  live: "#",
};

function PhoneCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screenshots.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        width: "240px",
        height: "480px",
        borderRadius: "2.5rem",
        border: "3px solid rgba(255,255,255,0.1)",
        background: "#000",
        overflow: "hidden",
        position: "relative",
        boxShadow:
          "0 0 60px -15px rgba(225, 29, 72, 0.3), inset 0 0 30px rgba(0,0,0,0.5)",
      }}
    >
      {/* Dynamic Island notch */}
      <div
        style={{
          position: "absolute",
          top: "0.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          width: "30%",
          height: "1.25rem",
          background: "#000",
          borderRadius: "9999px",
          zIndex: 3,
        }}
      />

      {/* Screenshot slides */}
      <div
        style={{
          display: "flex",
          width: `${screenshots.length * 100}%`,
          height: "100%",
          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: `translateX(-${current * (100 / screenshots.length)}%)`,
        }}
      >
        {screenshots.map((shot, i) => (
          <div
            key={i}
            style={{
              width: `${100 / screenshots.length}%`,
              height: "100%",
              flexShrink: 0,
              position: "relative",
            }}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              style={{ objectFit: "cover" }}
              sizes="240px"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "0.75rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "6px",
          zIndex: 3,
        }}
      >
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: current === i ? "16px" : "6px",
              height: "6px",
              borderRadius: "9999px",
              background: current === i ? "#fff" : "rgba(255,255,255,0.4)",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  const onScroll = useCallback(() => {
    const section = sectionRef.current;
    const mockup = mockupRef.current;
    if (!section || !mockup) return;

    const rect = section.getBoundingClientRect();
    const viewH = window.innerHeight;
    const progress = Math.min(1, Math.max(0, (viewH - rect.top) / (viewH + rect.height)));
    const y = 60 - progress * 120;
    mockup.style.transform = `translateY(${y}px)`;
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "6rem 1rem",
        background: "#000",
        overflow: "hidden",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(139, 92, 246, 0.06), transparent)",
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
          style={{ textAlign: "center", marginBottom: "4rem" }}
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
            My Work
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
            Featured Projects
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
            A selection of projects that showcase my skills and passion for
            building great software.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="project-featured group"
            style={{
              display: "flex",
              gap: "2.5rem",
              background: "#0a0a0a",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "1.5rem",
              padding: "2.5rem",
              position: "relative",
              overflow: "hidden",
              transition: "border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(139, 92, 246, 0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(255,255,255,0.08)";
            }}
          >
            {/* Left: Info (60%) */}
            <div className="project-info" style={{ flex: "0 0 60%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3
                className="text-white"
                style={{
                  fontSize: "2rem",
                  fontWeight: 600,
                  letterSpacing: "-0.025em",
                  marginBottom: "1rem",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  color: "#a3a3a3",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  letterSpacing: "0.01em",
                  marginBottom: "1.5rem",
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "2rem",
                }}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      padding: "6px 16px",
                      borderRadius: "9999px",
                      background: "rgba(139, 92, 246, 0.1)",
                      border: "1px solid rgba(139, 92, 246, 0.2)",
                      color: "#c4b5fd",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors duration-200"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.875rem",
                    textDecoration: "none",
                  }}
                >
                  <Github style={{ height: "1.125rem", width: "1.125rem" }} />
                  Source Code
                </a>
                <a
                  href={project.live}
                  className="inline-flex items-center gap-2 text-sm font-semibold rounded-full bg-white text-black no-underline hover:opacity-90 transition-opacity duration-200"
                  style={{ padding: "8px 20px" }}
                >
                  <ExternalLink style={{ height: "0.875rem", width: "0.875rem" }} />
                  Coming Soon
                </a>
              </div>
            </div>

            {/* Right: Phone mockup with screenshot carousel */}
            <div
              ref={mockupRef}
              className="project-mockup"
              style={{
                flex: "0 0 40%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                willChange: "transform",
              }}
            >
              <PhoneCarousel />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
