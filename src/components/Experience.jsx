import {
  BriefcaseBusiness,
  Calendar,
  MapPin,
  CheckCircle2,
  Bug,
  MonitorCheck,
} from "lucide-react";

const experience = {
  role: "Website QA Intern",
  company: "SuperJeweler.com",
  location: "Remote / Website Testing",
  period: "February 17, 2025 – May 29, 2025",
  duration: "3.5 months · Full-time internship",
  description:
    "Completed a full-time practical training placement at SuperJeweler Technical Division, working as a real-time website tester and contributing to website functionality, quality assurance, and user experience.",
  responsibilities: [
    "Evaluated the SuperJeweler website for functionality and performance.",
    "Identified and reported bugs, usability issues, and broken links.",
    "Verified content accuracy across product and category pages.",
    "Contributed to website quality through structured QA procedures and test documentation.",
    "Helped ensure a smooth and optimized user experience for website visitors.",
  ],
  skills: [
    "Quality Assurance",
    "Website Testing",
    "Bug Reporting",
    "Usability Testing",
    "Functional Testing",
    "Test Documentation",
    "Content Verification",
  ],
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-background px-6 py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-neon/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3 font-mono text-sm text-neon">
            <span className="h-px w-8 bg-neon" />
            06 / EXPERIENCE
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Professional <span className="text-neon">experience.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Hands-on experience in website quality assurance,
            testing, and improving digital user experiences.
          </p>
        </div>

        {/* Experience Card */}
        <div className="group relative max-w-4xl rounded-xl border border-white/10 bg-[#07110d] p-6 transition-all duration-300 hover:border-neon/30 hover:bg-[#0a1711] md:p-8">
          {/* Header */}
          <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-neon/20 bg-neon/5 text-neon">
                <MonitorCheck size={26} />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {experience.role}
                </h3>

                <p className="mt-1 text-lg text-neon">
                  {experience.company}
                </p>
              </div>
            </div>

            <span className="w-fit rounded-md border border-neon/20 bg-neon/5 px-3 py-1 font-mono text-xs text-neon">
              INTERNSHIP
            </span>
          </div>

          {/* Details */}
          <div className="mb-6 flex flex-col gap-3 text-sm text-muted sm:flex-row sm:flex-wrap sm:gap-5">
            <div className="flex items-center gap-2">
              <Calendar size={15} className="text-neon" />
              {experience.period}
            </div>

            <div className="flex items-center gap-2">
              <BriefcaseBusiness size={15} className="text-neon" />
              {experience.duration}
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={15} className="text-neon" />
              {experience.location}
            </div>
          </div>

          {/* Description */}
          <p className="mb-8 leading-relaxed text-gray-400">
            {experience.description}
          </p>

          {/* Responsibilities */}
          <div className="mb-8">
            <h4 className="mb-4 flex items-center gap-2 font-mono text-sm text-white">
              <Bug size={16} className="text-neon" />
              KEY RESPONSIBILITIES
            </h4>

            <div className="space-y-3">
              {experience.responsibilities.map((responsibility) => (
                <div
                  key={responsibility}
                  className="flex items-start gap-3 text-sm leading-relaxed text-gray-400"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-neon"
                  />

                  <span>{responsibility}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h4 className="mb-4 font-mono text-sm text-white">
              SKILLS & EXPERTISE
            </h4>

            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-xs text-gray-400 transition-colors group-hover:border-neon/20 group-hover:text-neon"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}