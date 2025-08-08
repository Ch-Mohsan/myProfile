import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Task Management Dashboard',
      description:
        'A clean, intuitive dashboard for managing team projects with real-time collaboration features and automated workflow tracking.',
      tech: 'React, Node.js, MongoDb',
      imge: '/images/notes.png',
      link: 'https://i-note-book-mohsan.vercel.app/',
      gitLink: 'https://github.com/Mogehs/iNoteBook_Mohsan',
    },
    {
      title: 'E-commerce Platform',
      description:
        'A full-featured online store with inventory management, payment processing, and customer analytics built for a local retailer.',
      tech: 'Next.js, Stripe, MongoDB, Tailwind CSS',
      imge: '/images/ecor.png',
      link: 'https://online-shop-4k3203wsr-mohsan-alis-projects-a2ecac61.vercel.app/',
      gitLink: 'https://github.com/Ch-Mohsan/OnlineShop',
    },
    {
      title: 'Scoial Media App',
      description:
        'Here you can your post view content of your connections and you chat with them  and fllow and have choise to public and private.',
      tech: 'React, Tailwindcss,  Nodjs, Soket.io,MongoBd ',
      imge: '/images/linkup.jpeg',
      link: 'https://page-link-up.vercel.app/',
      gitLink: 'https://github.com/Ch-Mohsan/page-linkUp',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-gray-900 mb-12">Selected Work</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article key={index} className="bg-white border border-gray-200 overflow-hidden">
              <div className="h-48 bg-gray-100 border-b border-gray-200 flex items-center justify-center text-sm text-gray-500">
                <img src={project.imge} alt={project.title} />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                <p className="text-sm text-gray-500 mb-4 font-mono">{project.tech}</p>
                <div className="flex gap-4">
                  <a target="_blank" href={project.link} className="text-sm text-slate-700 border-b border-slate-700 hover:text-slate-900 hover:border-slate-900 transition-colors pb-1" rel="noreferrer">
                    Live Demo
                  </a>
                  <a target="_blank" href={project.gitLink} className="text-sm text-slate-700 border-b border-slate-700 hover:text-slate-900 hover:border-slate-900 transition-colors pb-1" rel="noreferrer">
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