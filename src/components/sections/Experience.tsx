import experience from "../../data/experience.json";
import GlassCard from "../common/GlassCard";
import SectionTitle from "../common/SectionTitle";
import Container from "../Container";

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <Container>
        <SectionTitle
          eyebrow="Career Journey"
          title="Professional Experience"
          description="My professional journey building scalable software solutions."
        />

        <div className="relative mx-auto max-w-5xl">
          {/* Timeline Line */}
          <div className="absolute left-[20px] top-0 hidden h-full w-[2px] bg-white/10 md:block" />

          <div className="space-y-8">
            {experience.map((item) => (
              <div key={item.id} className="relative flex gap-6">
                {/* Timeline Dot */}
                <div className="relative z-10 hidden md:block">
                  <div className="mt-10 h-10 w-10 rounded-full border border-blue-500/30 bg-blue-500/20 backdrop-blur-xl" />
                </div>

                <GlassCard className="flex-1">
                  <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">{item.role}</h3>

                      <p className="mt-1 text-blue-300">{item.company}</p>
                    </div>

                    <div className="w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                      {item.period}
                    </div>
                  </div>

                  <p className="leading-8 text-gray-300">{item.description}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
