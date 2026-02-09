"use client";

import React, { useId } from "react";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

interface SparklesProps {
  className?: string;
  size?: number;
  minSize?: number;
  density?: number;
  speed?: number;
  minSpeed?: number;
  opacity?: number;
  direction?: "none" | "up" | "down";
  color?: string;
  children?: React.ReactNode;
  hover?: boolean;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  delay: number;
}

export const SparklesCore = ({
  className,
  size = 1,
  minSize,
  density = 800,
  speed = 1,
  minSpeed,
  opacity = 1,
  direction = "none",
  color = "#FFF",
}: SparklesProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const id = useId();

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0) return;
    const count = Math.floor((dimensions.width * dimensions.height) / (density * 100));
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (size - (minSize || size * 0.5)) + (minSize || size * 0.5),
        speed: Math.random() * (speed - (minSpeed || speed * 0.5)) + (minSpeed || speed * 0.5),
        opacity: Math.random() * opacity,
        delay: Math.random() * 2,
      });
    }
    setParticles(newParticles);
  }, [dimensions, size, minSize, density, speed, minSpeed, opacity]);

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {particles.map((particle) => (
        <motion.div
          key={`${id}-${particle.id}`}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: color,
          }}
          animate={{
            opacity: [0, particle.opacity, 0],
            y:
              direction === "up"
                ? [0, -30]
                : direction === "down"
                ? [0, 30]
                : [0, Math.random() * 10 - 5],
          }}
          transition={{
            duration: 2 / particle.speed,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
