import { useState } from "react";
import { Mail, Menu, X, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = {
  github: "https://github.com/Damindu-Perera",
  linkedin: "https://linkedin.com/in/damindu-perera-060baa25b",
  email: "damindup14@gmail.com",
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/80 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neon font-mono font-bold text-background shadow-[0_0_20px_#35e6a444] transition-transform duration-300 group-hover:scale-110">
            D
          </div>

          <span className="font-mono text-xs tracking-[0.2em] text-neon sm:text-sm sm:tracking-[0.25em]">
            DΛMINDU
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative py-2 text-xs text-gray-400 transition-colors hover:text-neon xl:text-sm"
            >
              {link.name}

              <span className="absolute bottom-0 left-0 h-px w-0 bg-neon transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop social links */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 transition-all hover:-translate-y-1 hover:text-neon"
          >
            <FaGithub size={18} />
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 transition-all hover:-translate-y-1 hover:text-neon"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href={`mailto:${socialLinks.email}`}
            aria-label="Email"
            className="text-gray-400 transition-all hover:-translate-y-1 hover:text-neon"
          >
            <Mail size={18} />
          </a>

          <a
            href="#contact"
            className="ml-2 flex items-center gap-2 rounded-md border border-neon/30 px-4 py-2 text-xs text-neon transition-all hover:bg-neon hover:text-background xl:text-sm"
          >
            Let's Talk
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-neon transition-colors hover:bg-neon/5 lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 lg:hidden">
          <div className="mx-auto mt-4 flex max-w-7xl flex-col gap-1 pb-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between rounded-md px-3 py-3 text-sm text-gray-400 transition-colors hover:bg-neon/5 hover:text-neon"
              >
                <span>{link.name}</span>

                <span className="font-mono text-xs text-gray-600">
                  0{index + 1}
                </span>
              </a>
            ))}

            {/* Mobile social links */}
            <div className="mt-3 flex items-center gap-5 border-t border-white/10 px-3 pt-5">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 transition-colors hover:text-neon"
              >
                <FaGithub size={20} />
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 transition-colors hover:text-neon"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href={`mailto:${socialLinks.email}`}
                aria-label="Email"
                className="text-gray-400 transition-colors hover:text-neon"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}