"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useRef, useEffect, useCallback, useState } from "react";
import CountUp from "@/components/ui/count-up";

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

const shipkit = {
  title: "ShipKit",
  description:
    "The Vibe Coder's Toolkit — a curated platform of copy-paste resources for every stage of development. AI prompts, MCP servers, agents, web & mobile SDKs, and workflow recipes to help developers ship faster.",
  tags: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
  github: "https://github.com/berkcanmeric/shipkit",
  live: "https://shipkit-zeta.vercel.app",
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
        height: "520px",
        borderRadius: "2.5rem",
        border: "3px solid rgba(255,255,255,0.1)",
        background: "#000",
        overflow: "hidden",
        position: "relative",
        boxShadow:
          "0 0 60px -15px rgba(225, 29, 72, 0.3), inset 0 0 30px rgba(0,0,0,0.5)",
      }}
    >

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

const LAUNCH_DATE = new Date("2026-04-22T00:00:00").getTime();

function getTimeLeft() {
  const now = Date.now();
  const diff = Math.max(0, LAUNCH_DATE - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const numberStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 700,
  lineHeight: 1.2,
  fontVariantNumeric: "tabular-nums",
  color: "#fff",
};

const labelStyle: React.CSSProperties = {
  fontSize: "0.6875rem",
  color: "#a78bfa",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  fontWeight: 500,
  marginTop: "2px",
};

const boxStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(139, 92, 246, 0.06)",
  border: "1px solid rgba(139, 92, 246, 0.2)",
  borderRadius: "0.75rem",
  padding: "0.625rem 0.875rem",
  minWidth: "4rem",
};

function CountdownTimer() {
  const [time, setTime] = useState(getTimeLeft);
  const [introPlayed, setIntroPlayed] = useState(false);
  const initialTime = useRef(getTimeLeft());

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  // After 2s (enough for the spring to settle), switch to live ticking
  useEffect(() => {
    const id = setTimeout(() => setIntroPlayed(true), 2000);
    return () => clearTimeout(id);
  }, []);

  const units: { key: keyof ReturnType<typeof getTimeLeft>; label: string }[] = [
    { key: "days", label: "days" },
    { key: "hours", label: "hrs" },
    { key: "minutes", label: "min" },
    { key: "seconds", label: "sec" },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        marginBottom: "1.5rem",
        flexWrap: "wrap",
      }}
    >
      {units.map((unit, i) => (
        <div key={unit.key} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={boxStyle}>
            {!introPlayed ? (
              <CountUp
                to={initialTime.current[unit.key]}
                from={0}
                duration={1.5}
                style={numberStyle}
              />
            ) : (
              <span style={numberStyle}>{time[unit.key]}</span>
            )}
            <span style={labelStyle}>{unit.label}</span>
          </div>
          {i < units.length - 1 && (
            <span
              style={{
                color: "rgba(139, 92, 246, 0.4)",
                fontSize: "1.25rem",
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              :
            </span>
          )}
        </div>
      ))}
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

        {/* Us App Card */}
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
                  marginBottom: "1.5rem",
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

              <CountdownTimer />

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
                  Launching on App Store
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

        {/* ShipKit Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginTop: "2rem" }}
        >
          <div
            className="project-featured-reverse group"
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
                "rgba(0, 240, 255, 0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(255,255,255,0.08)";
            }}
          >
            {/* Cyan background glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 60% at 30% 50%, rgba(0, 240, 255, 0.04), transparent)",
              }}
            />

            {/* Left: Perspective float screenshot (40%) */}
            <div
              className="project-mockup-reverse"
              style={{
                flex: "0 0 40%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div style={{ position: "relative" }}>
                {/* Ambient glow behind screenshot */}
                <div
                  className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100"
                  style={{
                    background: "radial-gradient(ellipse at center, rgba(0, 240, 255, 0.15), transparent 70%)",
                    filter: "blur(20px)",
                    transition: "opacity 0.7s ease",
                  }}
                />
                {/* Screenshot with perspective tilt */}
                <div
                  className="shipkit-screenshot"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "0.75rem",
                    boxShadow: "0 20px 80px -20px rgba(0, 0, 0, 0.5)",
                    transform: "perspective(1200px) rotateY(-4deg) rotateX(2deg)",
                    transition: "transform 0.5s ease-out, box-shadow 0.5s ease-out",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Image
                    src="/screenshots/shipkit-hero.png"
                    alt="ShipKit — The Vibe Coder's Toolkit"
                    width={1512}
                    height={944}
                    style={{ display: "block", width: "100%", height: "auto" }}
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                  {/* Bottom fade so it doesn't end abruptly */}
                  <div
                    className="absolute inset-x-0 bottom-0"
                    style={{
                      height: "4rem",
                      background: "linear-gradient(to top, #0a0a0a, transparent)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right: Info (60%) */}
            <div
              className="project-info-reverse"
              style={{
                flex: "0 0 60%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              <h3
                className="text-white"
                style={{
                  fontSize: "2rem",
                  fontWeight: 600,
                  letterSpacing: "-0.025em",
                  marginBottom: "1rem",
                }}
              >
                {shipkit.title}
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
                {shipkit.description}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "1.5rem",
                }}
              >
                {shipkit.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      padding: "6px 16px",
                      borderRadius: "9999px",
                      background: "rgba(0, 240, 255, 0.1)",
                      border: "1px solid rgba(0, 240, 255, 0.2)",
                      color: "#67e8f9",
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
                  href={shipkit.github}
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
                  href={shipkit.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold rounded-full bg-white text-black no-underline hover:opacity-90 transition-opacity duration-200"
                  style={{ padding: "8px 20px" }}
                >
                  <ExternalLink style={{ height: "0.875rem", width: "0.875rem" }} />
                  Visit Site
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
