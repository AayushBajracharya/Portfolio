import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import navigation from "../../data/navigation.json";
import Container from "../Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/60 backdrop-blur-2xl">
      <Container className="flex h-20 items-center justify-between">
        <a href="#hero" className="text-2xl font-black">
          Aayush
          <span className="text-blue-400">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-gray-300">
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="transition hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
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
            hover:bg-blue-500
            md:block
          "
        >
          Resume
        </a>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl md:hidden"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#050816] md:hidden">
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
      )}
    </header>
  );
}
