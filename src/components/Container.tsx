import type { ContainerProps } from "../types/interface/interfaces";

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 lg:px-7 ${className}`}>
      {children}
    </div>
  );
}
