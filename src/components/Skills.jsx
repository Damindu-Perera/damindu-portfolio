import {
  Code2,
  Server,
  Database,
  Cpu,
  Wrench,
  Globe,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["React", "JavaScript", "Vite", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "REST APIs"],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["JavaScript", "Python", "MicroPython"],
  },
  {
    title: "IoT & Embedded Systems",
    icon: Cpu,
    skills: [
      "Raspberry Pi Pico W",
      "MicroPython",
      "Sensors",
      "IoT Systems",
    ],
  },
  {
    title: "Databases & Data",
    icon: Database,
    skills: ["InfluxDB", "Time-Series Data", "Data Monitoring"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "Linux", "Nginx", "Telegraf"],
  },
];

function SkillCard({ category, index }) {
  const Icon = category.icon;

  return (
    <div
      className="group relative rounded-xl border border-white/10 bg-[#07110d] p-6 transition-all duration-300 hover:border-neon/40 hover:bg-[#0a1711]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-neon/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        {/* Icon */}
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-neon/20 bg-neon/5 text-neon transition-all duration-300 group-hover:border-neon/50 group-hover:bg-neon/10">
          <Icon size={22} />
        </div>

        {/* Category title */}
        <h3 className="mb-4 text-lg font-semibold text-white">
          {category.title}
        </h3>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-xs text-gray-400 transition-colors duration-300 group-hover:border-neon/20 group-hover:text-neon"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-background px-6 py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-neon/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3 font-mono text-sm text-neon">
            <span className="h-px w-8 bg-neon" />
            03 / TECHNICAL SKILLS
          </div>

          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            My technical <span className="text-neon">toolkit.</span>
          </h2>

          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            Technologies and tools I use to build applications, explore
            new ideas, and solve technical problems.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}