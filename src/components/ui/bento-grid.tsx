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
        gap: "1rem",
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
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none bg-neutral-950 border border-white/[0.1]",
        className
      )}
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        padding: "1rem",
        height: "100%",
        ...style,
      }}
    >
      {/* Header area - constrained to not exceed ~55% of the card */}
      <div
        style={{
          flex: "1 1 0%",
          minHeight: 0,
          overflow: "hidden",
          borderRadius: "0.75rem",
        }}
      >
        {header}
      </div>

      {/* Content area - fixed at bottom, does not shrink or overflow */}
      <div
        className="group-hover/bento:translate-x-2 transition duration-200"
        style={{
          flex: "0 0 auto",
          maxHeight: "40%",
          paddingTop: "0.75rem",
          overflow: "hidden",
        }}
      >
        {icon}
        <div
          className="font-sans font-bold text-neutral-200"
          style={{ marginTop: "0.375rem", marginBottom: "0.25rem", fontSize: "0.875rem", lineHeight: "1.25rem" }}
        >
          {title}
        </div>
        <div
          className="font-sans font-normal text-neutral-400"
          style={{
            fontSize: "0.75rem",
            lineHeight: "1.125rem",
            display: "-webkit-box",
            WebkitLineClamp: 3,
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
