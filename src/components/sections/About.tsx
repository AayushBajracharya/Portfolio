import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";
import GlassCard from "../common/GlassCard";
import SectionTitle from "../common/SectionTitle";
import Container from "../Container";

export default function About() {
  return (
    <section id="about" className="py-28">
      <Container>
        <SectionTitle
          eyebrow="About Me"
          title="Building scalable backend systems with clean architecture."
        />
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-2"
        >
          {" "}
          <GlassCard>
            <h3 className="mb-5 text-2xl font-bold">Who I Am</h3>

            <p className="leading-8 text-gray-300">
              I'm a backend-focused full stack developer specializing in ASP.NET
              Core, CQRS, MediatR, EF Core, Dapper, and scalable API design. I
              enjoy building maintainable systems with clean architecture and
              production-ready practices.
            </p>
          </GlassCard>
          <GlassCard>
            <h3 className="mb-5 text-2xl font-bold">What I Work With</h3>

            <div className="space-y-4 text-gray-300">
              <p>
                • Backend Engineering (.NET, CQRS, MediatR, EF Core, Dapper)
              </p>

              <p>• Frontend Development (React + TypeScript, Razor Pages)</p>

              <p>• DevOps & Tools (Docker, RabbitMQ, CI/CD, Jira)</p>

              <p>• System Design & REST API Development</p>
            </div>
          </GlassCard>
        </motion.div>{" "}
      </Container>
    </section>
  );
}
