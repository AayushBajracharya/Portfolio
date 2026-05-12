import type { GlassCardProps } from "../../types/interface/interfaces";

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        rounded-[2rem]
        border border-white/10
        bg-white/5
        p-8
        backdrop-blur-2xl
        transition duration-300
        hover:border-blue-500/20
        ${className}
      `}
    >
      {children}
    </div>
  );
}
