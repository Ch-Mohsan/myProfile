import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects.js';

function ProjectDetails() {
  const { slug } = useParams();
  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug]);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!project) {
    return (
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gray-700">Project not found.</p>
          <Link to="/projects" className="text-slate-700 border-b border-slate-700 hover:text-slate-900 hover:border-slate-900 transition-colors pb-1 inline-block mt-4">Back to Projects</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">{project.title}</h1>
          <div className="flex gap-4">
            <a target="_blank" href={project.liveUrl} className="text-sm text-slate-700 border-b border-slate-700 hover:text-slate-900 hover:border-slate-900 transition-colors pb-1" rel="noreferrer">Live Demo</a>
            <a target="_blank" href={project.githubUrl} className="text-sm text-slate-700 border-b border-slate-700 hover:text-slate-900 hover:border-slate-900 transition-colors pb-1" rel="noreferrer">GitHub</a>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="aspect-[16/10] bg-gray-100 border border-gray-200 overflow-hidden">
              <img src={project.images[activeIndex]} alt={`${project.title} screenshot ${activeIndex + 1}`} className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-2 gap-3">
              {project.images.map((img, idx) => (
                <button
                  key={img + idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`border ${idx === activeIndex ? 'border-gray-900' : 'border-gray-200'} bg-white aspect-square overflow-hidden`}
                >
                  <img src={img} alt={`${project.title} thumbnail ${idx + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Overview</h2>
            <p className="text-gray-700 leading-relaxed">{project.details}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Link to="/projects" className="text-slate-700 border-b border-slate-700 hover:text-slate-900 hover:border-slate-900 transition-colors pb-1">Back to Projects</Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;