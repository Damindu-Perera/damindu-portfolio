import {
  ArrowRight,
  Github,
  Linkedin,
  Cog,
  Code2,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background"
    >
      {/* Green background glow */}
      <div className="pointer-events-none absolute -left-64 -top-64 h-[700px] w-[700px] rounded-full bg-emerald-500/15 blur-[150px]" />

      <div className="pointer-events-none absolute -bottom-80 -right-64 h-[700px] w-[700px] rounded-full bg-green-900/10 blur-[150px]" />

      {/* Grid */}
      <div className="grid-background absolute inset-0 opacity-70" />

      {/* Background code decorations */}
      <Code2 className="absolute left-[15%] top-[20%] h-20 w-20 text-neon opacity-[0.04]" />

      <Code2 className="absolute right-[15%] top-[15%] h-24 w-24 text-neon opacity-[0.05]" />

      <Code2 className="absolute bottom-[15%] right-[25%] h-20 w-20 text-neon opacity-[0.04]" />

      {/* Background gears */}
      <Cog className="animate-spin-slow absolute right-[20%] top-[25%] h-24 w-24 text-neon opacity-[0.06]" />

      <Cog className="animate-spin-slow absolute bottom-[20%] left-[25%] h-20 w-20 text-neon opacity-[0.05]" />

      {/* Connection lines */}
      <div className="absolute left-0 top-[28%] h-px w-[25%] bg-neon/20">
        <span className="animate-pulse-glow absolute right-0 top-[-3px] h-2 w-2 rounded-full bg-neon" />
      </div>

      <div className="absolute right-0 top-[35%] h-px w-[25%] bg-neon/20">
        <span className="animate-pulse-glow absolute left-0 top-[-3px] h-2 w-2 rounded-full bg-neon" />
      </div>

      <div className="absolute bottom-[35%] left-0 h-px w-[20%] bg-neon/20">
        <span className="animate-pulse-glow absolute right-0 top-[-3px] h-2 w-2 rounded-full bg-neon" />
      </div>

      <div className="absolute bottom-[25%] right-0 h-px w-[22%] bg-neon/20">
        <span className="animate-pulse-glow absolute left-0 top-[-3px] h-2 w-2 rounded-full bg-neon" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 text-center md:px-12">

        {/* Status */}
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-neon/20 bg-neon/5 px-4 py-2 font-mono text-[10px] tracking-[0.2em] text-neon md:text-xs">
          <span className="animate-pulse-glow h-2 w-2 rounded-full bg-neon" />
          AVAILABLE FOR OPPORTUNITIES
        </div>

        {/* Heading */}
        <h1 className="font-mono text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
          DAMINDU
          <span className="text-glow ml-3 text-neon">
            DEV
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="mt-8 text-xl font-normal text-gray-200 md:text-3xl">
          Software Engineer & Full-Stack Developer
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl font-mono text-sm leading-8 text-gray-400 md:text-base">
          Building modern web applications, exploring AI,
          and transforming ideas into meaningful digital experiences.
        </p>

        {/* Technology badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["MERN", "TypeScript", "AI", "Python", "AWS", "C"].map((tech) => (
            <span
              key={tech}
              className="rounded border border-neon/15 bg-neon/[0.04] px-4 py-2 font-mono text-xs text-emerald-200/70 transition hover:border-neon/40 hover:text-neon"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-3 rounded-md bg-neon px-7 py-4 font-mono text-sm font-bold text-[#001b12] shadow-[0_0_25px_#35e6a422] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_#35e6a444]"
          >
            View Projects

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          <a
            href="#about"
            className="group inline-flex items-center justify-center gap-3 rounded-md border border-neon/50 px-7 py-4 font-mono text-sm text-neon transition-all duration-300 hover:-translate-y-1 hover:bg-neon/5"
          >
            Learn More

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

        </div>

        {/* Social links */}
        <div className="mt-12 flex justify-center gap-8">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-neon"
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-neon"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}