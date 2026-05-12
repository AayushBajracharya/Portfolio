import type { ButtonProps } from "../../types/interface/interfaces";

export default function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:scale-105",

    secondary: "border border-white/15 bg-white/5 text-white hover:bg-white/10",
  };

  const commonClasses =
    "inline-flex items-center justify-center rounded-2xl px-7 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl";

  if (href) {
    return (
      <a href={href} className={`${commonClasses} ${styles[variant]}`}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${commonClasses} ${styles[variant]}`}>
      {children}
    </button>
  );
}
