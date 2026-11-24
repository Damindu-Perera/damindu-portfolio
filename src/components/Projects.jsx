import {
  universityProjects,
  personalProjects,
} from "../data/projects";

import {
  ExternalLink,
  ArrowUpRight,
  GraduationCap,
  Rocket,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/5 bg-[#07110d] transition duration-500 hover:-translate-y-2 hover:border-neon/30 hover:shadow-[0_20px_60px_#35e6a408]">

      {/* Project image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#0b2419] via-[#07110d] to-[#020605]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07110d] via-transparent to-transparent" />

        {/* Code decoration */}
        <div className="absolute left-6 top-6 font-mono text-5xl text-neon/10">
          &lt;/&gt;
        </div>

        {/* Category */}
        <div className="absolute bottom-5 left-5">
          <span className="rounded border border-neon/20 bg-black/60 px-3 py-2 font-mono text-xs text-neon backdrop-blur-md">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold text-white transition group-hover:text-neon">
            {project.title}
          </h3>

          <ArrowUpRight
            size={22}
            className="shrink-0 text-gray-600 transition group-hover:text-neon"
          />
        </div>

        <p className="mb-6 text-sm leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mb-7 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded border border-white/5 bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] text-gray-400 transition hover:border-neon/20 hover:text-neon"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project links */}
        <div className="flex flex-wrap items-center gap-5 border-t border-white/5 pt-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-neon"
            >
              <FaGithub size={17} />
              Source Code
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-neon transition hover:text-white"
            >
              <ExternalLink size={17} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectGroup({ title, subtitle, icon: Icon, projects, number }) {
  return (
    <div className="mb-20 last:mb-0">
      {/* Group heading */}
      <div className="mb-8 flex flex-col gap-4 border-b border-white/5 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-neon/20 bg-neon/5">
            <Icon size={26} className="text-neon" />
          </div>

          <div>
            <p className="mb-1 font-mono text-xs tracking-[0.2em] text-neon">
              PROJECT CATEGORY {number}
            </p>

            <h3 className="text-2xl font-bold text-white md:text-3xl">
              {title}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              {subtitle}
            </p>
          </div>
        </div>

        <span className="font-mono text-sm text-gray-600">
          {String(projects.length).padStart(2, "0")} PROJECTS
        </span>
      </div>

      {/* Projects */}
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#020605] px-6 py-24 md:px-12 lg:px-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-60 top-40 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[140px]" />

      <div className="grid-background pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-7xl">
        {/* Main heading */}
        <div className="mb-20">
          <p className="mb-4 font-mono text-sm tracking-[0.25em] text-neon">
            02 / PROJECTS
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Selected
            <span className="ml-3 text-neon">work.</span>
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-gray-400">
            A collection of projects developed through academic learning,
            independent exploration, and practical experimentation.
          </p>

          <div className="mt-6 h-1 w-20 rounded-full bg-neon" />
        </div>

        {/* University projects */}
        <ProjectGroup
          title="University Projects"
          subtitle="Academic projects, coursework and collaborative development"
          icon={GraduationCap}
          projects={universityProjects}
          number="01"
        />

        {/* Personal projects */}
        <ProjectGroup
          title="Personal Projects"
          subtitle="Independent ideas, personal development and experimentation"
          icon={Rocket}
          projects={personalProjects}
          number="02"
        />

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="font-mono text-sm text-gray-500">
            More projects coming soon...
          </p>

          <a
            href="https://github.com/Damindu-Perera"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-neon transition hover:text-white"
          >
            Explore my GitHub
            <FaGithub size={16} />
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}