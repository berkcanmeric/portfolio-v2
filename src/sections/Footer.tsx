"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const socials = [
  {
    icon: <Github className="h-4 w-4" />,
    href: "https://github.com/berkcanmeric",
    label: "GitHub",
  },
  {
    icon: <Linkedin className="h-4 w-4" />,
    href: "https://www.linkedin.com/in/berkcanmeric/",
    label: "LinkedIn",
  },
  {
    icon: <Mail className="h-4 w-4" />,
    href: "mailto:berkcan.m.business@hotmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        padding: "3rem 1rem 2rem",
        background: "#000",
      }}
    >
      {/* Gradient line separator */}
      <div
        style={{
          width: "100%",
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(139, 92, 246, 0.5), transparent)",
          marginBottom: "3rem",
        }}
      />

      <div
        style={{
          maxWidth: "80rem",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        {/* Social icons — pure CSS hover, no framer-motion */}
        <div style={{ display: "flex", gap: "1rem" }}>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white"
              style={{ transition: "color 0.2s ease, transform 0.2s ease" }}
              aria-label={social.label}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          style={{
            color: "#525252",
            fontSize: "0.8125rem",
            letterSpacing: "0.01em",
          }}
        >
          &copy; {new Date().getFullYear()} Berkcan Meric. All rights reserved.
        </p>

        {/* Back to top */}
        <button
          onClick={() =>
            document
              .getElementById("home")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="text-neutral-600 hover:text-violet-400"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.75rem",
            background: "none",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "9999px",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            transition: "color 0.2s ease, border-color 0.2s ease",
          }}
        >
          <ArrowUp className="h-3 w-3" />
          Back to top
        </button>
      </div>
    </footer>
  );
}
