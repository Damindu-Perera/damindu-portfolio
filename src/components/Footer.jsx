import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = {
  github: "https://github.com/Damindu-Perera",
  linkedin: "https://linkedin.com/in/damindu-perera-060baa25b",
  email: "damindup14@gmail.com",
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background px-4 py-8 sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neon font-mono font-bold text-background">
            D
          </div>

          <span className="font-mono text-xs tracking-[0.2em] text-neon">
            DΛMINDU
          </span>
        </a>

        {/* Copyright */}
        <p className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Damindu. Built with React & Tailwind CSS.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-5">
          {/* GitHub */}
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 transition-colors hover:text-neon"
          >
            <FaGithub size={18} />
          </a>

          {/* LinkedIn */}
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 transition-colors hover:text-neon"
          >
            <FaLinkedin size={18} />
          </a>

          {/* Email */}
          <a
            href={`mailto:${socialLinks.email}`}
            aria-label="Email"
            className="text-gray-500 transition-colors hover:text-neon"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      {/* Back to top */}
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/5 pt-6 text-center">
        <a
          href="#home"
          className="inline-flex items-center gap-2 font-mono text-xs text-gray-500 transition-colors hover:text-neon"
        >
          BACK TO TOP
          <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}