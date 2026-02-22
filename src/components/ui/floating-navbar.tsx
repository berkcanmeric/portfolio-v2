"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const FloatingNav = ({
  navItems,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
}) => {
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const lastScrollY = useRef(0);

  // Native scroll listener for show/hide — no framer-motion useScroll
  const onScroll = useCallback(() => {
    const y = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? y / docHeight : 0;

    if (progress < 0.05) {
      setVisible(true);
    } else if (y < lastScrollY.current) {
      setVisible(true);
    } else if (y > lastScrollY.current) {
      setVisible(false);
    }
    lastScrollY.current = y;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.link.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.3, rootMargin: "-10% 0px -60% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [navItems]);

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
          background: "rgba(10,10,10,0.92)",
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
              document
                .getElementById(id)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              fontSize: "14px",
              color:
                activeSection === navItem.link.replace("#", "")
                  ? "#ffffff"
                  : "#a3a3a3",
              textDecoration: "none",
              transition: "color 0.2s ease",
              whiteSpace: "nowrap",
              cursor: "pointer",
              position: "relative",
              paddingBottom: "4px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              const isActive =
                activeSection === navItem.link.replace("#", "");
              (e.currentTarget as HTMLElement).style.color = isActive
                ? "#ffffff"
                : "#a3a3a3";
            }}
          >
            {navItem.name}
            {/* Active indicator dot */}
            {activeSection === navItem.link.replace("#", "") && (
              <motion.div
                layoutId="nav-indicator"
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "#a855f7",
                  boxShadow: "0 0 8px rgba(168, 85, 247, 0.6)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </a>
        ))}
      </motion.nav>
    </AnimatePresence>
  );
};
