import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Container from "../Container";
import GlassCard from "../common/GlassCard";
import SectionTitle from "../common/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Let's Connect"
          description="Open to backend, full-stack, and software engineering opportunities."
          align="center"
        />

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          <GlassCard className="text-center">
            <FaEnvelope className="mx-auto mb-5 text-4xl text-blue-400" />

            <h3 className="mb-2 text-xl font-bold">Email</h3>

            <a
              href="mailto:aayushbajracharya90@gmail.com"
              className="text-gray-300 transition hover:text-white justify-center flex flex-wrap"
            >
              aayushbajracharya90@gmail.com
            </a>
          </GlassCard>

          <GlassCard className="text-center">
            <FaLinkedin className="mx-auto mb-5 text-4xl text-blue-400" />

            <h3 className="mb-2 text-xl font-bold">LinkedIn</h3>

            <a
              href="https://linkedin.com/in/aayush-bajracharya-401923258"
              className="text-gray-300 transition hover:text-white"
            >
              Connect
            </a>
          </GlassCard>

          <GlassCard className="text-center">
            <FaGithub className="mx-auto mb-5 text-4xl text-blue-400" />

            <h3 className="mb-2 text-xl font-bold">GitHub</h3>

            <a
              href="https://github.com/AayushBajracharya"
              className="text-gray-300 transition hover:text-white"
            >
              View Profile
            </a>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}
