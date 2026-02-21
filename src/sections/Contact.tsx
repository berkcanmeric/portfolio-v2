"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    icon: <Github className="h-5 w-5" />,
    href: "https://github.com/berkcanmeric",
    color: "hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://www.linkedin.com/in/berkcanmeric/",
    color: "hover:text-blue-400",
  },
  {
    name: "Email",
    icon: <Mail className="h-5 w-5" />,
    href: "mailto:berkcan.m.business@hotmail.com",
    color: "hover:text-violet-400",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ position: "relative", padding: "6rem 1rem", background: "#000", overflow: "hidden" }}
    >
      {/* Sparkle background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          density={2000}
          speed={0.2}
          color="#8b5cf6"
          size={0.8}
          opacity={0.3}
          className="w-full h-full"
        />
      </div>

      <div style={{ position: "relative", zIndex: 10, maxWidth: "56rem", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-violet-400 text-sm tracking-widest uppercase"
            style={{ textAlign: "center", marginBottom: "0.75rem" }}
          >
            Get In Touch
          </p>
          <h2
            className="font-bold text-white"
            style={{ textAlign: "center", marginBottom: "1.5rem", fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            Let&apos;s Build Something{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-500">
              Amazing
            </span>
          </h2>
          <p
            className="text-neutral-400 text-lg"
            style={{ textAlign: "center", maxWidth: "36rem", marginLeft: "auto", marginRight: "auto", marginBottom: "1rem" }}
          >
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of something great.
          </p>
          <div
            className="text-neutral-500 text-sm"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginBottom: "2.5rem" }}
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
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}
        >
          <a href="mailto:berkcan.m.business@hotmail.com">
            <button
              style={{
                background: "white",
                color: "black",
                borderRadius: "9999px",
                padding: "14px 40px",
                fontWeight: 600,
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                border: "none",
                cursor: "pointer",
              }}
            >
              <Mail className="h-4 w-4" />
              Say Hello
            </button>
          </a>

          {/* Social links */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full border border-white/[0.1] bg-neutral-950 text-neutral-400 ${social.color} transition-all duration-300 hover:border-white/[0.2] hover:scale-110`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
