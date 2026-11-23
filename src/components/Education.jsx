import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Industrial Information Technology",
    institution: "LAB University of Applied Sciences",
    location: "Finland",
    period: "2021 – 2025",
    description:
      "Graduated with a Bachelor of Engineering degree in Industrial Information Technology, developing knowledge in software development, information technology, and modern engineering technologies.",
    highlights: [
      "Software Development",
      "Information Technology",
      "Engineering",
    ],
  },
];

function EducationCard({ item }) {
  return (
    <div className="group relative rounded-xl border border-white/10 bg-[#07110d] p-6 transition-all duration-300 hover:border-neon/30 hover:bg-[#0a1711]">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-neon/20 bg-neon/5 text-neon transition-colors group-hover:bg-neon/10">
          <GraduationCap size={24} />
        </div>

        <span className="rounded-md border border-neon/20 bg-neon/5 px-3 py-1 font-mono text-xs text-neon">
          EDUCATION
        </span>
      </div>

      <h3 className="text-2xl font-semibold text-white">
        {item.degree}
      </h3>

      <p className="mt-2 text-lg text-neon">
        {item.field}
      </p>

      <div className="mt-5 space-y-2 text-sm text-muted">
        <div className="flex items-center gap-2">
          <GraduationCap size={15} />
          {item.institution}
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={15} />
          {item.location}
        </div>

        <div className="flex items-center gap-2 font-mono text-neon/80">
          <Calendar size={15} />
          {item.period}
        </div>
      </div>

      <p className="mt-6 leading-relaxed text-gray-400">
        {item.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.highlights.map((highlight) => (
          <span
            key={highlight}
            className="rounded-md border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-xs text-gray-400"
          >
            {highlight}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-background px-6 py-24"
    >
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-neon/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3 font-mono text-sm text-neon">
            <span className="h-px w-8 bg-neon" />
            05 / EDUCATION
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Academic <span className="text-neon">background.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            My academic journey and the foundation behind my technical knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {education.map((item) => (
            <EducationCard key={item.institution} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}