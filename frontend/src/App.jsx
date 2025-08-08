import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects">
          <Route index element={<Projects />} />
          <Route path=":slug" element={<ProjectDetails />} />
        </Route>
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;