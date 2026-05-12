import profileImage from "../../assets/hero.png";
import Button from "../common/Button";
import Container from "../Container";
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

              <span className="text-sm text-gray-300">
                Available for Full Stack & Backend Roles
              </span>
            </div>

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              .NET Backend Developer
            </p>

            <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
              Aayush
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500 bg-clip-text text-transparent">
                Bajracharya
              </span>
            </h1>

            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-300">
              Backend-focused Full Stack Developer with production experience in
              ASP.NET Core, CQRS, MediatR, EF Core, Dapper, React + TypeScript,
              Docker, RabbitMQ, and scalable system design.
            </p>

            <div className="flex flex-wrap gap-5">
              <Button href="#projects">View Projects</Button>

              <Button href="/Aayush_Bajracharya_CV.pdf" variant="secondary">
                Download CV
              </Button>
            </div>
          </motion.div>
          {/* Right */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="relative mx-auto"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl">
              <img
                src={profileImage}
                alt="Aayush Bajracharya"
                className="h-[500px] w-full rounded-[2rem] object-cover transition duration-500 hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
