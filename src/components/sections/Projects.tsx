import projects from "../../data/projects.json";
import Container from "../Container";
import SectionTitle from "../common/SectionTitle";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <Container>
        <SectionTitle
          eyebrow="Portfolio"
          title="Featured Projects"
          description="Selected projects demonstrating backend architecture, scalability, and full-stack development."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              variants={fadeInUp}
              key={project.id}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-2xl
                transition
                duration-300
                hover:-translate-y-2
                hover:border-blue-500/20
              "
            >
              {/* Glow */}
              <motion.div
                variants={fadeInUp}
                className={`
                  absolute
                  right-0
                  top-0
                  h-44
                  w-44
                  rounded-full
                  bg-gradient-to-r
                  ${project.gradient}
                  opacity-10
                  blur-3xl
                `}
              />

              <div className="relative z-10">
                <div
                  className={`
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-r
                    ${project.gradient}
                    text-2xl
                    font-black
                  `}
                >
                  0{project.id}
                </div>

                <h3 className="mb-4 text-2xl font-bold">{project.title}</h3>

                <p className="mb-6 leading-8 text-gray-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="
                          rounded-xl
                          border
                          border-white/10
                          bg-white/5
                          px-3
                          py-2
                          text-xs
                          text-gray-300
                        "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
