import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";
import Button from "../common/Button";
import Container from "../Container";

export default function CTA() {
  return (
    <section className="py-28">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            rounded-[3rem]
            border
            border-white/10
            bg-gradient-to-r
            from-blue-500/10
            via-indigo-500/10
            to-cyan-500/10
            p-10
            text-center
            backdrop-blur-2xl
            lg:p-16
          "
        >
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-blue-300">
            Let's Build Something Great
          </p>

          <h2 className="mx-auto mb-6 max-w-4xl text-4xl font-black leading-tight lg:text-5xl">
            Building scalable backend systems and modern full-stack
            applications.
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300">
            Interested in collaborating on enterprise software, scalable APIs,
            or modern web applications?
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Button href="#contact">Contact Me</Button>

            <Button href="#projects" variant="secondary">
              View Projects
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
