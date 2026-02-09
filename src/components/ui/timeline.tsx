"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="font-sans" ref={containerRef} style={{ width: "100%" }}>
      <div ref={ref} style={{ position: "relative", maxWidth: "80rem", marginLeft: "auto", marginRight: "auto", paddingBottom: "5rem", paddingLeft: "2rem" }}>
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              paddingTop: index === 0 ? "1rem" : "4rem",
              gap: "3rem",
            }}
          >
            {/* Left sticky column with dot + year */}
            <div
              style={{
                position: "sticky",
                top: "10rem",
                alignSelf: "flex-start",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                zIndex: 40,
                width: "240px",
                minWidth: "240px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    backgroundColor: "#262626",
                    border: "1px solid #404040",
                  }}
                />
              </div>
              <h3
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  color: "#737373",
                  marginLeft: "1.5rem",
                  lineHeight: 1,
                }}
              >
                {item.title}
              </h3>
            </div>

            {/* Right content column */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {item.content}
            </div>
          </div>
        ))}

        {/* Animated line */}
        <div
          style={{
            position: "absolute",
            left: "50px",
            top: 0,
            overflow: "hidden",
            width: "2px",
            height: height + "px",
            background: "linear-gradient(to bottom, transparent 0%, #404040 10%, #404040 90%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              position: "absolute",
              insetInline: 0,
              top: 0,
              width: "100%",
              background: "linear-gradient(to top, #a855f7, #3b82f6, transparent)",
              borderRadius: "9999px",
            }}
          />
        </div>
      </div>
    </div>
  );
};
