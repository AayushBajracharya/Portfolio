import skills from "../../data/skills.json";
import SectionTitle from "../common/SectionTitle";
import Container from "../Container";

export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <Container>
        <SectionTitle
          eyebrow="Tech Stack"
          title="Technologies I Work With"
          description="Production-ready technologies used across backend, frontend, architecture, and DevOps."
        />

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-5
                py-3
                text-sm
                text-gray-200
                backdrop-blur-xl
                transition
                duration-300
                hover:-translate-y-1
                hover:border-blue-500/20
                hover:bg-white/10
              "
            >
              {skill}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
