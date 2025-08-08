import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
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
            <Link 
              to="/projects"
              className="inline-block text-slate-700 border-b border-slate-700 hover:text-slate-900 hover:border-slate-900 transition-colors pb-1"
            >
              See my work
            </Link>
          </div>
        </div>
      </section>

      {/* Blog/Currently Working Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-gray-900 mb-12">Currently Working</h3>
          <div className="space-y-8">
            {[
              {
                title: 'Call Agent',
                date: 'july, 31, 2025',
                excerpt: 'This is AI cll Agent here you can add bulk of contacts wapi.ai create calls to you customers and  marketing of you products    .',
              },
              {
                title: 'Booking Management Stytem ',
                date: 'july 15, 2025',
                excerpt: 'In this we can handel accounts of three different users Admin Station Manager and Passenger.',
              },
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
    </>
  );
}

export default Home;