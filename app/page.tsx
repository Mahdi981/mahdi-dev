export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Mahdi Alkara</h1>
        <a
          href="#contact"
          className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
      </nav>

      {/* Hero */}
      <section className="text-center px-8 py-24 max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 leading-tight">
          I build fast, responsive websites with{" "}
          <span className="text-blue-400">React & Next.js</span>
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Landing Pages, Figma to Code, and Bug Fixing. Let's turn your idea into a live product.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition inline-block"
        >
          Start Your Project
        </a>
      </section>

      {/* Services */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition">
            <div className="text-4xl mb-4">🚀</div>
            <h4 className="text-xl font-bold mb-3">Landing Pages</h4>
            <p className="text-slate-300">
              Fast, responsive, and conversion-focused landing pages built with Next.js.
            </p>
          </div>
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition">
            <div className="text-4xl mb-4">🎨</div>
            <h4 className="text-xl font-bold mb-3">Figma to Code</h4>
            <p className="text-slate-300">
              Pixel-perfect conversion of your Figma designs into clean React/Next.js code.
            </p>
          </div>
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition">
            <div className="text-4xl mb-4">🔧</div>
            <h4 className="text-xl font-bold mb-3">Bug Fixing</h4>
            <p className="text-slate-300">
              Quick fixes for React/Next.js issues, performance problems, and layout bugs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-20 text-center max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">Let's Work Together</h3>
        <p className="text-slate-300 mb-8">
          Have a project in mind? Reach out and let's discuss how I can help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:mahdi.dev.dev@gmail.com"
            className="bg-slate-700 px-6 py-3 rounded-lg hover:bg-slate-600 transition"
          >
            📧 mahdi.dev.dev@gmail.com
          </a>
          <a
            href="https://wa.me/96170053406"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            💬 WhatsApp: +961 70 053 406
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-500 text-sm border-t border-slate-800">
        © {new Date().getFullYear()} Mahdi Alkara. All rights reserved.
      </footer>
    </main>
  );
}