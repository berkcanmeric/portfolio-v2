"use client";

import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const halfWidth = (event.target as HTMLElement).offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      {items.map((item) => (
        <div
          style={{ position: "relative", marginRight: "-12px" }}
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                  position: "absolute",
                  top: "-70px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.1)",
                  zIndex: 50,
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                  padding: "8px 16px",
                }}
              >
                {/* Gradient underline accents */}
                <div style={{ position: "absolute", bottom: "-1px", left: "10%", width: "80%", height: "1px", background: "linear-gradient(to right, transparent, #a855f6, transparent)" }} />
                <div className="font-bold text-white" style={{ position: "relative", zIndex: 30, fontSize: "14px" }}>
                  {item.name}
                </div>
                <div className="text-neutral-400" style={{ fontSize: "11px" }}>{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <div
            onMouseMove={handleMouseMove}
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid rgba(255,255,255,0.15)",
              background: "#111",
              cursor: "pointer",
              transition: "transform 0.3s ease, border-color 0.3s ease",
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,85,246,0.6)";
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
            }}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={40}
              height={40}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      ))}
    </>
  );
};
