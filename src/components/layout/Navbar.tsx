import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import navigation from "../../data/navigation.json";
import Container from "../Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section[id]");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/70 backdrop-blur-2xl">
      <Container className="flex h-20 items-center justify-between">
        <a href="#hero" className="text-2xl font-black">
          Aayush
          <span className="text-blue-400">.</span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");

              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`transition duration-300 ${
                      isActive
                        ? "text-blue-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href="/Aayush_Bajracharya_CV.pdf"
          className="
            hidden
            rounded-2xl
            bg-blue-600
            px-5
            py-3
            text-sm
            font-semibold
            transition
            hover:scale-105
            hover:bg-blue-500
            md:block
          "
        >
          Resume
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl md:hidden"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </Container>

      {/* Mobile */}
      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          md:hidden
          ${isOpen ? "max-h-[400px] border-t border-white/10" : "max-h-0"}
        `}
      >
        <Container>
          <ul className="flex flex-col gap-6 py-6 text-gray-300">
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
}
