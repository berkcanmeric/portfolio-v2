"use client";

import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn("bento-grid", className)}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "0.75rem",
        gridAutoRows: "22rem",
        maxWidth: "80rem",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  style,
  glowColor,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  glowColor?: string;
}) => {
  return (
    <div
      className={cn(
        "bento-item rounded-xl group/bento transition duration-200 shadow-none bg-neutral-950 border border-white/[0.1]",
        className
      )}
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        padding: "0.625rem",
        height: "100%",
        "--glow-color": glowColor || "rgba(139, 92, 246, 0.3)",
        ...style,
      } as React.CSSProperties}
    >
      {/* Header area */}
      <div
        style={{
          flex: "1 1 0%",
          minHeight: 0,
          overflow: "hidden",
          borderRadius: "0.625rem",
        }}
      >
        {header}
      </div>

      {/* Content area */}
      <div
        className="group-hover/bento:translate-x-1 transition duration-200"
        style={{
          flex: "0 0 auto",
          maxHeight: "40%",
          paddingTop: "0.625rem",
          paddingLeft: "0.25rem",
          overflow: "hidden",
        }}
      >
        {icon}
        <div
          className="font-sans text-neutral-200"
          style={{
            marginTop: "0.3rem",
            marginBottom: "0.15rem",
            fontSize: "0.8125rem",
            lineHeight: "1.2rem",
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </div>
        <div
          className="font-sans text-neutral-500"
          style={{
            fontSize: "0.75rem",
            lineHeight: "1.2rem",
            letterSpacing: "0.005em",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </div>
      </div>
    </div>
  );
};
