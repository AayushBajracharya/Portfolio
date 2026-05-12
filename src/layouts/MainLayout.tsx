import type { ReactNode } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_25%)]" />

      <div className="relative z-10">
        <div className="pointer-events-none fixed left-[-10rem] top-[20%] h-[25rem] w-[25rem] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="pointer-events-none fixed bottom-[10%] right-[-10rem] h-[25rem] w-[25rem] rounded-full bg-cyan-500/10 blur-[120px]" />{" "}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
