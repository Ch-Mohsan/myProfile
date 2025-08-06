import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white font-medium">
      {/* Header */}
      <header className="border-b border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">Mohsan ALi</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
            <a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-700 hover:text-gray-900 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://github.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-semibold text-gray-900 mb-6">
              Building clean, functional web applications with precision and care.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              I'm a full-stack developer passionate about creating digital experiences that are both beautiful and meaningful.
            </p>
            <a 
              href="#projects" 
              className="inline-block text-slate-700 border-b border-slate-700 hover:text-slate-900 hover:border-slate-900 transition-colors pb-1"
            >
              See my work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
            <div className="w-48 h-64 bg-gray-200 border border-gray-300 flex items-center justify-center text-sm text-gray-500">
              <img src="./me.jpg" alt="" />
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">Hello there.</h3>
              <div className="prose prose-lg text-gray-700 leading-relaxed space-y-5">
                <p>
                  I'm a full-stack developer based in Pakistan, passionate about creating digital experiences 
                  that are both beautiful and functional. My journey in web development started during university, 
                  where I fell in love with the process of turning ideas into interactive realities.
                </p>
                <p>
                  Over the years, I've worked with startups and established companies, helping them build 
                  everything from simple landing pages to complex web applications. I believe in writing 
                  clean, maintainable code and designing interfaces that feel intuitive and human.
                </p>
                <p>
                  When I'm not coding, you'll find me reading about new technologies, experimenting with 
                  design patterns, or enjoying a good cup of tea while contemplating the next problem to solve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-gray-900 mb-12">Selected Work</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Task Management Dashboard",
                description: "A clean, intuitive dashboard for managing team projects with real-time collaboration features and automated workflow tracking.",
                tech: "React, Node.js, PostgreSQL, Socket.io"
              },
              {
                title: "E-commerce Platform", 
                description: "A full-featured online store with inventory management, payment processing, and customer analytics built for a local retailer.",
                tech: "Next.js, Stripe, MongoDB, Tailwind CSS"
              },
              // {
              //   title: "Learning Management System",
              //   description: "An educational platform that helps instructors create courses and track student progress with integrated video conferencing.",
              //   tech: "Vue.js, Express, MySQL, WebRTC"
              // },
              // {
              //   title: "Weather Analytics Tool",
              //   description: "A data visualization dashboard that aggregates weather data from multiple sources and provides insights for agricultural planning.",
              //   tech: "Python, Flask, D3.js, Redis"
              // }
            ].map((project, index) => (
              <article key={index} className="bg-white border border-gray-200 overflow-hidden">
                <div className="h-48 bg-gray-100 border-b border-gray-200 flex items-center justify-center text-sm text-gray-500">
                  [Project Screenshot]
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                  <p className="text-sm text-gray-500 mb-4 font-mono">{project.tech}</p>
                  <div className="flex gap-4">
                    <a href="#" className="text-sm text-slate-700 border-b border-slate-700 hover:text-slate-900 hover:border-slate-900 transition-colors pb-1">
                      Live Demo
                    </a>
                    <a href="#" className="text-sm text-slate-700 border-b border-slate-700 hover:text-slate-900 hover:border-slate-900 transition-colors pb-1">
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-gray-900 mb-12">Tools & Technologies</h3>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-semibold text-slate-700 mb-4 text-sm uppercase tracking-wide">Frontend</h4>
              <div className="text-gray-600 leading-relaxed space-y-1">
                <div>JavaScript (ES6+)</div>
                <div>React & Next.js</div>
                {/* <div>Vue.js & Nuxt.js</div> */}
                {/* <div>TypeScript</div> */}
                <div>Tailwind CSS</div>
                {/* <div>SASS/SCSS</div> */}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700 mb-4 text-sm uppercase tracking-wide">Backend</h4>
              <div className="text-gray-600 leading-relaxed space-y-1">
                <div>Node.js & Express</div>
                {/* <div>Python & Django</div>
                <div>PHP & Laravel</div> */}
                <div>PostgreSQL & MySQL</div>
                <div>MongoDB</div>
                {/* <div>Redis</div> */}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-slate-700 mb-4 text-sm uppercase tracking-wide">Tools</h4>
              <div className="text-gray-600 leading-relaxed space-y-1">
                <div>Git & GitHub</div>
                <div>& Vercel</div>
                {/* <div>Docker</div> */}
                <div>Figma</div>
                {/* <div>Jest & Cypress</div> */}
                <div>Webpack & Vite</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-gray-900 mb-12">Currently Working</h3>
          <div className="space-y-8">
            {[
              {
                title: "Building Accessible Forms in React",
                date: "March 15, 2024",
                excerpt: "A comprehensive guide to creating forms that work for everyone, covering semantic HTML, ARIA attributes, and testing strategies for screen readers."
              },
              {
                title: "The Art of Code Reviews",
                date: "February 28, 2024", 
                excerpt: "How to give and receive feedback that improves code quality while maintaining team morale. Lessons learned from five years of remote collaboration."
              },
              // {
              //   title: "Database Indexing Strategies",
              //   date: "January 12, 2024",
              //   excerpt: "Understanding when and how to use database indexes effectively. Real-world examples of query optimization that improved performance by 300%."
              // }
            ].map((post, index) => (
              <article key={index} className="py-6 border-b border-gray-200 last:border-b-0">
                <h4 className="text-2xl font-semibold text-gray-900 mb-2">
                  <a href="#" className="hover:text-slate-700 transition-colors">{post.title}</a>
                </h4>
                <div className="text-sm text-gray-500 mb-3 font-mono">{post.date}</div>
                <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-gray-900 mb-8">Let's Connect</h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl">
            I'm always interested in hearing about new opportunities and interesting projects. 
            Feel free to reach out if you'd like to collaborate or just want to say hello.
          </p>
          <div className="flex flex-wrap gap-8">
            <a 
              href="mailto:mohsan@example.com" 
              className="text-slate-700 border-b border-slate-700 hover:text-slate-900 hover:border-slate-900 transition-colors pb-1"
            >
              Email
            </a>
            <a 
              href="https://github.com/mohsanahmad" 
              className="text-slate-700 border-b border-slate-700 hover:text-slate-900 hover:border-slate-900 transition-colors pb-1"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/mohsanahmad" 
              className="text-slate-700 border-b border-slate-700 hover:text-slate-900 hover:border-slate-900 transition-colors pb-1"
            >
              LinkedIn
            </a>
            <a 
              href="https://twitter.com/mohsanahmad" 
              className="text-slate-700 border-b border-slate-700 hover:text-slate-900 hover:border-slate-900 transition-colors pb-1"
            >
              Twitter
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-sm text-gray-500">
            Designed and coded by Mohsan
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;