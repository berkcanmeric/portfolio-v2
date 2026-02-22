"use client";

import { LampEffect } from "@/components/ui/lamp";
import { ScrambleText } from "@/components/ui/scramble-text";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";

const letterVariants = {
  hidden: { opacity: 0, y: 20, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.5 + i * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#000",
      }}
    >
      {/* Lamp effect background */}
      <LampEffect />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #18181b 1px, transparent 1px), linear-gradient(to bottom, #18181b 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 110%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 110%)",
          opacity: 0.4,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "64rem",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "0 1rem",
          textAlign: "center",
        }}
      >
        {/* Scramble text subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "1rem" }}
        >
          <ScrambleText
            text="Software Engineer"
            delay={300}
            speed={25}
            className="text-neutral-400"
          />
        </motion.div>

        {/* Main heading with character animation */}
        <h1
          className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          style={{
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            paddingBottom: "1rem",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I&apos;m{" "}
          </motion.span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500">
            {"Berkcan".split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                style={{ display: "inline-block" }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Description */}
        <div
          style={{
            maxWidth: "42rem",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "1rem",
          }}
        >
          <TextGenerateEffect words="Software engineer at Turkish Airlines building web and mobile apps with React, Next.js, Java, and Swift." />
        </div>

        {/* CTA buttons with magnetic hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-buttons"
          style={{
            marginTop: "2.5rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <MagneticButton>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hero-btn-primary inline-flex items-center justify-center rounded-full font-semibold text-sm no-underline transition-all duration-300"
              style={{
                padding: "12px 32px",
                background: "rgba(255, 255, 255, 0.95)",
                color: "#0a0a0a",
                boxShadow: "0 0 20px -4px rgba(255, 255, 255, 0.15)",
              }}
            >
              View My Work
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hero-btn-secondary inline-flex items-center justify-center rounded-full font-semibold text-sm no-underline transition-all duration-300"
              style={{
                padding: "12px 32px",
                background: "rgba(139, 92, 246, 0.08)",
                color: "#c4b5fd",
                border: "1px solid rgba(139, 92, 246, 0.25)",
              }}
            >
              Get In Touch
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div
          style={{
            width: "24px",
            height: "40px",
            borderRadius: "9999px",
            border: "2px solid #737373",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "6px",
          }}
        >
          <motion.div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "9999px",
              background: "#a3a3a3",
            }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
