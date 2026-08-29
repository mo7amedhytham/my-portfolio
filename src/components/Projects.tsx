interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth scrolling and a clean dark design.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/mo7amedhytham/my-portfolio.git",
    live: "https://my-portfolio-six-rho-44.vercel.app/",
  },
  {
    title: "REST API Template",
    description:
      "A production-ready REST API starter with Node.js, Express, TypeScript, MongoDB, and JWT authentication.",
    tech: ["Node.js", "Express", "TypeScript", "MongoDB"],
    github: "https://github.com/mo7amedhytham/my-portfolio.git",
  },
  {
    title: "Discord Bot",
    description:
      "A feature-rich Discord bot with moderation, utility, and custom commands built with Discord.js and Node.js.",
    tech: ["Node.js", "Discord.js", "MongoDB"],
    github: "https://github.com/mo7amedhytham/my-portfolio.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          My <span className="text-blue-400">Projects</span>
        </h2>
        <p className="text-gray-600 text-center text-sm mb-12">
          Things I&apos;ve built
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-900 border border-gray-800 hover:border-blue-800/60 rounded-xl p-6 transition-all hover:-translate-y-1 group flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-white font-semibold text-base mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-2 border-t border-gray-800">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white text-sm transition-colors"
          >
            View all projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
