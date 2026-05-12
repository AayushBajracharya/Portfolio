import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import CTA from "../components/sections/CTA";
import Experience from "../components/sections/Experience";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <CTA />
      <Contact />
    </MainLayout>
  );
}
