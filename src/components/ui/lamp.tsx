"use client";

import { motion } from "framer-motion";

export function LampEffect({ compact = false }: { compact?: boolean }) {
  const beamWidth = compact ? "20rem" : "30rem";

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Left conic beam */}
      <motion.div
        initial={{ opacity: 0.5, width: "15rem" }}
        whileInView={{ opacity: 1, width: beamWidth }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        style={{
          backgroundImage:
            "conic-gradient(from 70deg at center top, #7c3aed, transparent 30%)",
          position: "absolute",
          right: "50%",
          top: 0,
          height: compact ? "55%" : "65%",
        }}
      />

      {/* Right conic beam */}
      <motion.div
        initial={{ opacity: 0.5, width: "15rem" }}
        whileInView={{ opacity: 1, width: beamWidth }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        style={{
          backgroundImage:
            "conic-gradient(from -70deg at center top, transparent 70%, #7c3aed)",
          position: "absolute",
          left: "50%",
          top: 0,
          height: compact ? "55%" : "65%",
        }}
      />

      {/* Blurred ambient glow */}
      <motion.div
        initial={{ width: "8rem" }}
        whileInView={{ width: compact ? "14rem" : "24rem" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: compact ? "15%" : "20%",
          height: compact ? "30%" : "35%",
          borderRadius: "9999px",
          background:
            "radial-gradient(ellipse at center, rgba(124, 58, 237, 0.12) 0%, rgba(124, 58, 237, 0.06) 25%, transparent 60%)",
        }}
      />

      {/* Horizontal glow line */}
      <motion.div
        initial={{ width: "15rem" }}
        whileInView={{ width: beamWidth }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: compact ? "50%" : "55%",
          height: "2px",
          background:
            "linear-gradient(to right, transparent, rgba(168, 85, 247, 0.6), transparent)",
        }}
      />

      {/* Gradient fade below the beams so content area is clean */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: compact ? "40%" : "45%",
          height: "25%",
          background: "linear-gradient(to bottom, transparent, #000)",
        }}
      />
    </div>
  );
}
