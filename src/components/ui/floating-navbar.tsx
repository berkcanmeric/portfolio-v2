"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";


export const FloatingNav = ({
  navItems,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        className="floating-nav"
        initial={{ opacity: 1, y: -100 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        style={{
          position: "fixed",
          top: "1.25rem",
          left: 0,
          right: 0,
          width: "fit-content",
          maxWidth: "calc(100vw - 2rem)",
          marginLeft: "auto",
          marginRight: "auto",
          zIndex: 5000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          paddingTop: "0.7rem",
          paddingBottom: "0.7rem",
          borderRadius: "9999px",
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link-${idx}`}
            href={navItem.link}
            onClick={(e) => {
              e.preventDefault();
              const id = navItem.link.replace("#", "");
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              fontSize: "14px",
              color: "#a3a3a3",
              textDecoration: "none",
              transition: "color 0.2s ease",
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#a3a3a3";
            }}
          >
            {navItem.name}
          </a>
        ))}
      </motion.nav>
    </AnimatePresence>
  );
};
