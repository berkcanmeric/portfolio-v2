"use client";

import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons-react";

const projects = [
  {
    title: "Us",
    description:
      "A relationship app for couples to strengthen their connection through daily questions, mood tracking, streaks, and a shared virtual garden. Built with modern Swift and SwiftUI.",
    tags: ["Swift", "SwiftUI", "SwiftData", "CloudKit"],
    gradientStyle: "linear-gradient(135deg, #e11d48, #f43f5e)",
    emoji: "💕",
    github: "https://github.com/berkcanmeric/us-app-v2",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ position: "relative", padding: "6rem 1rem", background: "#000" }}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />

      <div style={{ position: "relative", maxWidth: "80rem", marginLeft: "auto", marginRight: "auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <p className="text-violet-400 text-sm tracking-widest uppercase" style={{ textAlign: "center", marginBottom: "0.75rem" }}>
            My Work
          </p>
          <h2 className="font-bold text-white" style={{ textAlign: "center", marginBottom: "1.5rem", fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Featured Projects
          </h2>
          <p className="text-neutral-400 text-lg" style={{ textAlign: "center", maxWidth: "42rem", marginLeft: "auto", marginRight: "auto" }}>
            A selection of projects that showcase my skills and passion for building
            great software.
          </p>
        </motion.div>

        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <CardContainer containerClassName="py-0">
                <CardBody
                  className="group/card"
                  style={{
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "1rem",
                    padding: "1.5rem",
                    width: "100%",
                    height: "auto",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <CardItem translateZ="50" className="w-full" style={{ width: "100%" }}>
                    <div
                      style={{
                        background: project.gradientStyle,
                        height: "160px",
                        width: "100%",
                        borderRadius: "0.75rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ fontSize: "3.75rem" }}>{project.emoji}</span>
                    </div>
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginTop: "1rem",
                    }}
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="40"
                    style={{
                      color: "#a3a3a3",
                      fontSize: "0.875rem",
                      marginTop: "0.5rem",
                      lineHeight: "1.625",
                    }}
                  >
                    {project.description}
                  </CardItem>
                  <CardItem
                    translateZ="30"
                    style={{
                      marginTop: "1rem",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                    }}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.75rem",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "9999px",
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "#d4d4d4",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </CardItem>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "1.5rem",
                    }}
                  >
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project.github}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.875rem",
                        color: "#a3a3a3",
                        textDecoration: "none",
                      }}
                    >
                      <IconBrandGithub style={{ height: "1rem", width: "1rem" }} />
                      Source
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project.live}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.875rem",
                        padding: "0.5rem 1rem",
                        borderRadius: "9999px",
                        background: "#ffffff",
                        color: "#000000",
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      <IconExternalLink style={{ height: "1rem", width: "1rem" }} />
                      Live Demo
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
