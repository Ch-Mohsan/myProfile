import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const baseLinkClass = 'text-gray-700 hover:text-gray-900 transition-colors';
  const activeLinkClass = 'text-gray-900 border-b-2 border-gray-900 pb-1';

  const NavItems = () => (
    <>
      <NavLink to="/" end className={({ isActive }) => (isActive ? `${baseLinkClass} ${activeLinkClass}` : baseLinkClass)} onClick={() => setMobileOpen(false)}>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? `${baseLinkClass} ${activeLinkClass}` : baseLinkClass)} onClick={() => setMobileOpen(false)}>About</NavLink>
      <NavLink to="/projects" className={({ isActive }) => (isActive ? `${baseLinkClass} ${activeLinkClass}` : baseLinkClass)} onClick={() => setMobileOpen(false)}>Projects</NavLink>
      <NavLink to="/skills" className={({ isActive }) => (isActive ? `${baseLinkClass} ${activeLinkClass}` : baseLinkClass)} onClick={() => setMobileOpen(false)}>Skills</NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? `${baseLinkClass} ${activeLinkClass}` : baseLinkClass)} onClick={() => setMobileOpen(false)}>Contact</NavLink>
    </>
  );

  return (
    <div className="min-h-screen bg-white font-medium">
      <header className="border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Mohsan ALi</h1>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <NavItems />
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-9 h-9 border border-gray-300 rounded"
            aria-label="Toggle Menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden">
            <div className="max-w-4xl mx-auto px-4 py-3 border-t border-gray-200">
              <div className="flex flex-col gap-3">
                <NavItems />
              </div>
            </div>
          </div>
        )}
      </header>

      <Outlet />

      <footer className="py-12 border-t border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-sm text-gray-500">Designed and coded by Mohsan</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;