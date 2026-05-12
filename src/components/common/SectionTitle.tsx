import type { SectionTitleProps } from "../../types/interface/interfaces";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  return (
    <div
      className={`mb-14 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {eyebrow && (
        <p className="mb-2 text-sm uppercase tracking-[0.25em] text-blue-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-black md:text-5xl">{title}</h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">{description}</p>
      )}
    </div>
  );
}
