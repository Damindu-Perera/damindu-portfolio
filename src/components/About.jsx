import {
  GraduationCap,
  Code2,
  BrainCircuit,
  Globe,
  Terminal,
} from "lucide-react";

export default function About() {
  const interests = [
    {
      icon: Code2,
      title: "Software Development",
      description:
        "Building modern, responsive and user-friendly web applications.",
    },
    {
      icon: BrainCircuit,
      title: "Artificial Intelligence",
      description:
        "Exploring AI technologies and developing intelligent digital solutions.",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description:
        "Creating full-stack applications using modern development technologies.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#030806] px-6 py-24 md:px-12 lg:px-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-60 top-20 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[130px]" />

      <div className="grid-background pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-16">
          <p className="mb-4 font-mono text-sm tracking-[0.25em] text-neon">
            01 / ABOUT ME
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Getting to know
            <span className="ml-3 text-neon">me.</span>
          </h2>

          <div className="mt-6 h-1 w-20 rounded-full bg-neon" />
        </div>

        {/* Main content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Introduction */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neon/20 bg-neon/5">
                <Terminal className="text-neon" size={22} />
              </div>

              <div>
                <p className="font-mono text-sm text-neon">
                  Hello, I'm Damindu
                </p>

                <p className="text-sm text-gray-500">
                  Software Engineer
                </p>
              </div>
            </div>

            <h3 className="mb-6 text-2xl font-semibold leading-relaxed text-gray-200 md:text-3xl">
              Passionate about technology,
              <span className="text-neon">
                {" "}problem-solving
              </span>
              {" "}and building meaningful digital experiences.
            </h3>

            <p className="mb-5 leading-8 text-gray-400">
              I'm a Software Engineer with a Bachelor's degree in
              Industrial Information Technology. I enjoy developing
              modern web applications and turning ideas into
              practical digital solutions.
            </p>

            <p className="leading-8 text-gray-400">
              My interests include full-stack development,
              frontend technologies, backend systems and
              artificial intelligence. I'm continuously learning
              new technologies and improving my skills by building
              real-world projects.
            </p>

            {/* Education card */}
            <div className="mt-8 rounded-xl border border-neon/15 bg-[#07110d] p-5 transition hover:border-neon/30">
              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-neon/10">
                  <GraduationCap className="text-neon" size={24} />
                </div>

                <div>
                  <p className="mb-1 font-mono text-xs tracking-wider text-neon">
                    EDUCATION
                  </p>

                  <h4 className="font-semibold text-white">
                    Bachelor of Engineering
                  </h4>

                  <p className="mt-1 text-sm text-gray-400">
                    Industrial Information Technology
                  </p>

                  <p className="mt-2 text-xs text-gray-500">
                    LAB University of Applied Sciences · Finland
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Right side cards */}
          <div className="grid gap-4">

            {interests.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-xl border border-white/5 bg-[#07110d]/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-neon/30 hover:bg-neon/[0.03]"
                >
                  <div className="flex gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-neon/15 bg-neon/5 transition group-hover:bg-neon/10">
                      <Icon
                        size={22}
                        className="text-neon"
                      />
                    </div>

                    <div>
                      <div className="mb-2 flex items-center gap-3">
                        <h4 className="font-semibold text-gray-200">
                          {item.title}
                        </h4>

                        <span className="font-mono text-xs text-neon/40">
                          0{index + 1}
                        </span>
                      </div>

                      <p className="text-sm leading-7 text-gray-500">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}

            {/* Stats */}
            <div className="mt-2 grid grid-cols-2 gap-4">

              <div className="rounded-xl border border-neon/10 bg-[#07110d] p-5">
                <h3 className="font-mono text-3xl font-bold text-neon">
                  2025
                </h3>

                <p className="mt-2 text-xs tracking-wide text-gray-500">
                  ENGINEERING GRADUATE
                </p>
              </div>

              <div className="rounded-xl border border-neon/10 bg-[#07110d] p-5">
                <h3 className="font-mono text-3xl font-bold text-neon">
                  ∞
                </h3>

                <p className="mt-2 text-xs tracking-wide text-gray-500">
                  ALWAYS LEARNING
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}