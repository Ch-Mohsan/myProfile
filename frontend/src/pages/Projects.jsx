import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects.js';

function Projects() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">Selected Work</h3>
          <p className="text-gray-600 text-sm">A few highlights. More coming soon.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article key={project.slug} className="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col">
              <Link to={`/projects/${project.slug}`} className="block">
                <div className="aspect-[16/10] bg-gray-100 border-b border-gray-200 flex items-center justify-center">
                  <img src={project.images[0]} alt={project.title} className="h-full w-full object-cover" />
                </div>
              </Link>
              <div className="p-5 flex-1 flex flex-col">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  <Link to={`/projects/${project.slug}`} className="hover:text-slate-700 transition-colors">{project.title}</Link>
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex gap-4">
                  <a target="_blank" href={project.liveUrl} className="text-sm text-slate-700 border-b border-slate-700 hover:text-slate-900 hover:border-slate-900 transition-colors pb-1" rel="noreferrer">
                    Live Demo
                  </a>
                  <a target="_blank" href={project.githubUrl} className="text-sm text-slate-700 border-b border-slate-700 hover:text-slate-900 hover:border-slate-900 transition-colors pb-1" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;