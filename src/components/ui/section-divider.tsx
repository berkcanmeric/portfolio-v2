"use client";

const colorMap: Record<string, string> = {
  violet: "rgba(139, 92, 246, 0.15)",
  blue: "rgba(59, 130, 246, 0.15)",
  purple: "rgba(168, 85, 247, 0.15)",
  rose: "rgba(244, 63, 94, 0.15)",
  emerald: "rgba(16, 185, 129, 0.15)",
};

export function SectionDivider({ color = "violet" }: { color?: string }) {
  const via = colorMap[color] || colorMap.violet;

  return (
    <div
      style={{
        height: "8rem",
        width: "100%",
        background: `linear-gradient(to bottom, #000, ${via}, #000)`,
      }}
    />
  );
}
