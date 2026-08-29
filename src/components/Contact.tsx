const contacts = [
  {
    label: "Email",
    value: "your@email.com",
    href: "mailto:your@email.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/201234567890",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Fiverr",
    value: "fiverr.com/yourusername",
    href: "https://fiverr.com/yourusername",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23 9.931a8.268 8.268 0 01-2.256.627c.817-.492 1.44-1.268 1.733-2.194a8.179 8.179 0 01-2.493.957A3.916 3.916 0 0016.96 8c-2.17 0-3.927 1.764-3.927 3.94 0 .31.034.61.1.898C8.595 12.653 4.558 10.16 2.2 6.476a3.95 3.95 0 00-.532 1.98c0 1.367.693 2.573 1.747 3.278a3.9 3.9 0 01-1.78-.494v.05c0 1.91 1.355 3.504 3.155 3.866a3.915 3.915 0 01-1.775.068c.5 1.567 1.952 2.707 3.674 2.739A7.856 7.856 0 011 19.388 11.09 11.09 0 007.066 21c7.277 0 11.254-6.044 11.254-11.286 0-.172-.004-.343-.012-.513A8.077 8.077 0 0023 7.001v2.93z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-900/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Get In <span className="text-blue-400">Touch</span>
        </h2>
        <p className="text-gray-500 mb-12 text-sm leading-relaxed">
          I&apos;m currently available for freelance work. If you have a project in
          mind or just want to say hi, feel free to reach out.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 border border-gray-800 hover:border-blue-800/60 rounded-xl p-4 transition-all hover:-translate-y-1 flex items-center gap-3 text-left"
            >
              <div className="text-blue-400 shrink-0">{contact.icon}</div>
              <div>
                <p className="text-gray-600 text-xs font-medium">{contact.label}</p>
                <p className="text-gray-300 text-sm">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>

        <a
          href="mailto:your@email.com"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors text-sm"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
