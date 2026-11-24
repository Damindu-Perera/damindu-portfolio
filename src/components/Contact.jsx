import {
  Mail,
  ArrowUpRight,
  Download,
  Send,
  MapPin,
  CheckCircle2,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactDetails = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "damindup14@gmail.com",
    href: "mailto:damindup14@gmail.com",
  },
  {
    icon: FaLinkedin,
    label: "LINKEDIN",
    value: "Connect with me",
    href: "https://linkedin.com/in/damindu-perera-060baa25b",
  },
  {
    icon: FaGithub,
    label: "GITHUB",
    value: "Explore my projects",
    href: "https://github.com/Damindu-Perera",
  },
];

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const mailtoLink = `mailto:damindup14@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background px-6 py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-neon/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3 font-mono text-sm text-neon">
            <span className="h-px w-8 bg-neon" />
            07 / CONTACT
          </div>

          <h2 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Let's build something
            <span className="text-neon"> together.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            I'm interested in software engineering opportunities,
            collaborations, and projects where I can learn, contribute,
            and create meaningful digital experiences.
          </p>
        </div>

        {/* Open to opportunities */}
        <div className="mb-12 inline-flex items-center gap-3 rounded-full border border-neon/20 bg-neon/5 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-neon animate-pulse-glow" />

          <span className="font-mono text-sm text-neon">
            OPEN TO OPPORTUNITIES
          </span>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact information */}
          <div className="space-y-6">
            <h3 className="font-mono text-sm text-gray-400">
              GET IN TOUCH
            </h3>

            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "EMAIL" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-[#07110d] p-5 transition-all duration-300 hover:border-neon/30 hover:bg-[#0a1711]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-neon/20 bg-neon/5 text-neon transition-colors group-hover:bg-neon/10">
                      <Icon size={20} />
                    </div>

                    <div>
                      <p className="mb-1 font-mono text-xs text-gray-500">
                        {item.label}
                      </p>

                      <p className="text-sm text-gray-300 transition-colors group-hover:text-neon">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-gray-600 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neon"
                  />
                </a>
              );
            })}

            {/* Location */}
            <div className="flex items-center gap-3 px-2 text-sm text-gray-500">
              <MapPin size={16} className="text-neon" />
              <span>Finland</span>
            </div>

            {/* CV Download */}
            <a
              href="/Damindu-CV.pdf"
              download
              className="group inline-flex items-center gap-3 rounded-lg border border-neon/30 bg-neon/5 px-6 py-4 font-mono text-sm text-neon transition-all duration-300 hover:bg-neon hover:text-background"
            >
              <Download size={18} />
              DOWNLOAD MY CV
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Contact form */}
          <div className="rounded-xl border border-white/10 bg-[#07110d] p-6 md:p-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white">
                Send me a message
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Have an opportunity or a project in mind? Let's talk.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-mono text-xs text-gray-400"
                >
                  YOUR NAME
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-neon/50"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-mono text-xs text-gray-400"
                >
                  YOUR EMAIL
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-neon/50"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block font-mono text-xs text-gray-400"
                >
                  SUBJECT
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Job opportunity / Project inquiry"
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-neon/50"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-xs text-gray-400"
                >
                  MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-neon/50"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-lg bg-neon px-6 py-4 font-mono text-sm font-semibold text-background transition-all duration-300 hover:shadow-[0_0_25px_#35e6a444]"
              >
                SEND MESSAGE
                <Send
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-xs text-gray-600">
                This form opens your email application to send the message.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}