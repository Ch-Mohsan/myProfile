import React from 'react';

function About() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
          <div className="w-48 h-64 bg-gray-200 border border-gray-300 flex items-center justify-center text-sm text-gray-500">
            <img src="/mockups/me.jpg" alt="Profile" />
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
  );
}

export default About;