"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#000" }}
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Spotlight className="top-10 left-full -translate-x-1/2" fill="purple" />
      <Spotlight className="top-28 left-80" fill="blue" />

      <div style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <SparklesCore
          density={1200}
          speed={0.3}
          color="#ffffff"
          size={1.2}
          opacity={0.4}
          className="w-full h-full"
        />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div style={{ position: "relative", zIndex: 10, maxWidth: "64rem", marginLeft: "auto", marginRight: "auto", padding: "0 1rem", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-neutral-400 tracking-widest uppercase" style={{ fontSize: "0.875rem", marginBottom: "1rem" }}>
            Full-Stack Developer & Designer
          </p>
        </motion.div>

        <motion.h1
          className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)", paddingBottom: "1rem" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500">Berkcan</span>
        </motion.h1>

        <div style={{ maxWidth: "42rem", marginLeft: "auto", marginRight: "auto", marginTop: "1rem" }}>
          <TextGenerateEffect
            words="I craft beautiful digital experiences with clean code and creative design. Turning ideas into reality, one pixel at a time."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            marginTop: "2.5rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <a
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#ffffff",
              color: "#000000",
              borderRadius: "9999px",
              padding: "12px 32px",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
              transition: "opacity 0.2s ease",
              border: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.9";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
            }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              color: "#ffffff",
              borderRadius: "9999px",
              padding: "12px 32px",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
              transition: "background 0.2s ease",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator - positioned relative to the section, pushed to bottom */}
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
