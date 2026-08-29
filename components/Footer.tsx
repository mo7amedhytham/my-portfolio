export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800/50 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 text-sm">
          © {year} Mohamed Hytham. All rights reserved.
        </p>
        <p className="text-gray-700 text-xs">
          Built with Next.js & TypeScript
        </p>
      </div>
    </footer>
  );
}
