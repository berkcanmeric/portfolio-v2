"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      { opacity: 1 },
      { duration: duration, delay: stagger(0.08) }
    );
  }, [scope, animate, duration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              style={{ opacity: 0 }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn(className)}>
      <div style={{ marginTop: "1rem" }}>
        <div className="text-neutral-300" style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", lineHeight: 1.6, letterSpacing: "0.01em", fontWeight: 400 }}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
