type Category = "Frontend" | "Backend" | "Language" | "Database" | "Tools" | "Mobile";

const skills: { name: string; category: Category }[] = [
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "MySQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Git", category: "Tools" },
  { name: "Kotlin", category: "Mobile" },
];

const categoryStyles: Record<Category, string> = {
  Frontend: "bg-blue-950/50 border-blue-800/50 text-blue-400",
  Backend: "bg-green-950/50 border-green-800/50 text-green-400",
  Language: "bg-purple-950/50 border-purple-800/50 text-purple-400",
  Database: "bg-orange-950/50 border-orange-800/50 text-orange-400",
  Tools: "bg-gray-800/50 border-gray-700/50 text-gray-400",
  Mobile: "bg-pink-950/50 border-pink-800/50 text-pink-400",
};

const categories: Category[] = ["Frontend", "Backend", "Language", "Database", "Tools", "Mobile"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          Tech <span className="text-blue-400">Stack</span>
        </h2>
        <p className="text-gray-600 text-center text-sm mb-12">
          Technologies I work with
        </p>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`text-xs border rounded-full px-3 py-1 ${categoryStyles[cat]}`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`border rounded-lg px-4 py-2 text-sm font-medium transition-all hover:scale-105 cursor-default ${categoryStyles[skill.category]}`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
