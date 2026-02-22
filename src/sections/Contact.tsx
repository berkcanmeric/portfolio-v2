"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        padding: "6rem 1rem 3rem",
        background: "#000",
        overflow: "hidden",
      }}
    >
      {/* Floating orbs background — static CSS, no blur filter */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "15%",
            width: "30rem",
            height: "30rem",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, rgba(124, 58, 237, 0.03) 30%, transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "36rem",
            height: "36rem",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(168, 85, 247, 0.06) 0%, rgba(168, 85, 247, 0.02) 30%, transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            left: "35%",
            width: "24rem",
            height: "24rem",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, rgba(139, 92, 246, 0.02) 30%, transparent 60%)",
          }}
        />
      </div>

      {/* Subtle radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "56rem",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            Get In Touch
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
            Let&apos;s Build Something{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-500">
              Amazing
            </span>
          </h2>
          <p
            style={{
              textAlign: "center",
              maxWidth: "36rem",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "1rem",
              color: "#a3a3a3",
              fontSize: "1.0625rem",
              lineHeight: 1.6,
              letterSpacing: "0.01em",
            }}
          >
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of something great.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              marginBottom: "2.5rem",
              color: "#525252",
              fontSize: "0.8125rem",
            }}
          >
            <MapPin className="h-4 w-4" />
            <span>Available for remote & on-site work</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Rotating gradient border wrapper */}
          <a
            href="mailto:berkcan.m.business@hotmail.com"
            className="contact-cta-wrapper"
            style={{
              position: "relative",
              display: "inline-flex",
              borderRadius: "9999px",
              padding: "1px",
              textDecoration: "none",
              overflow: "hidden",
            }}
          >
            {/* Spinning gradient border */}
            <div
              className="contact-cta-border"
              style={{
                position: "absolute",
                inset: "-50%",
                background:
                  "conic-gradient(from 0deg, transparent, #a855f7, #7c3aed, #3b82f6, transparent)",
                animation: "spin-border 3s linear infinite",
                willChange: "transform",
              }}
            />
            {/* Inner content */}
            <span
              className="contact-cta"
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "14px 36px",
                borderRadius: "9999px",
                background: "#000",
                color: "#e9d5ff",
                fontSize: "0.9375rem",
                fontWeight: 600,
                letterSpacing: "0.01em",
                transition: "background 0.3s ease",
              }}
            >
              <Mail className="h-4 w-4" />
              Say Hello
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
