const stats = [
  { number: "10+", label: "Projects" },
  { number: "7+", label: "Technologies" },
  { number: "1+", label: "Years" },
  { number: "∞", label: "Passion" },
];

const info = [
  { label: "Name", value: "Mohamed Hytham" },
  { label: "Location", value: "Egypt" },
  { label: "Available", value: "Freelance" },
  { label: "Focus", value: "Backend & Web" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-16 text-center">
          About <span className="text-blue-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-gray-400 leading-relaxed mb-4 text-sm md:text-base">
              I&apos;m a passionate Full-Stack Developer who loves building things for
              the web. I specialize in backend development with Node.js and
              Express, and modern frontends with React and Next.js.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
              I&apos;m always exploring new technologies — from REST APIs and
              databases to mobile apps with Kotlin and robotics projects. I love
              turning ideas into real, working products.
            </p>

            <div className="grid grid-cols-2 gap-3 text-sm">
              {info.map((item) => (
                <div key={item.label} className="flex gap-2">
                  <span className="text-blue-400 font-medium">{item.label}:</span>
                  <span className="text-gray-300">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-900 border border-gray-800 hover:border-blue-900 rounded-xl p-6 text-center transition-colors"
              >
                <p className="text-3xl font-bold text-blue-400 mb-1">{stat.number}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
