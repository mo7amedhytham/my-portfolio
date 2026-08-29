import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-blue-400 text-sm font-mono mb-4 tracking-widest uppercase">
          Hi, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          Mohamed Hytham
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-400 mb-6 font-light">
          Full-Stack Developer
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed text-sm md:text-base">
          I build fast, scalable web applications and REST APIs using modern
          technologies like Next.js, Node.js, and TypeScript.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm"
          >
            Contact Me
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
