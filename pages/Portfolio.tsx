
import React, { useState } from 'react';
import { PROJECTS_DATA, Icon } from '../constants';
import { Project } from '../types';

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
    <div className="absolute inset-0 bg-black/90 backdrop-blur-lg" onClick={onClose}></div>
    <div className="bg-white dark:bg-[#0a0a0a] w-full max-w-5xl rounded-[40px] overflow-hidden relative z-10 shadow-2xl animate-in fade-in zoom-in duration-500 border border-black/5 dark:border-white/10">
      <button
        onClick={onClose}
        className="absolute top-8 right-8 p-3 bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-xl rounded-2xl text-black dark:text-white transition-all z-20 active:scale-95"
      >
        <span className="sr-only">Close</span>
        <Icon name="close" className="w-6 h-6" />
      </button>
      <div className="flex flex-col lg:flex-row h-full max-h-[90vh] overflow-y-auto lg:overflow-hidden">
        <div className="lg:w-3/5 bg-black flex items-center justify-center">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" 
          />
        </div>
        <div className="lg:w-2/5 p-10 lg:p-14 overflow-y-auto bg-white dark:bg-[#0a0a0a]">
          <div className="mb-10">
            <div className="inline-flex items-center space-x-2 text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-4">
              <span className="w-4 h-[1px] bg-primary"></span>
              <span>{project.category}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-black dark:text-white tracking-tighter leading-none">{project.title}</h2>
            <p className="text-primary font-black mt-4 text-sm">{project.client}</p>
          </div>

          <div className="space-y-10">
            <div>
              <h4 className="font-black text-[10px] uppercase text-gray-400 dark:text-gray-500 mb-4 tracking-[0.2em]">The Problem</h4>
              <p className="text-black dark:text-gray-300 leading-relaxed font-bold text-lg">{project.challenge}</p>
            </div>
            <div>
              <h4 className="font-black text-[10px] uppercase text-gray-400 dark:text-gray-500 mb-4 tracking-[0.2em]">What We Did</h4>
              <p className="text-black dark:text-gray-300 leading-relaxed font-medium">{project.solution}</p>
            </div>
            <div>
              <h4 className="font-black text-[10px] uppercase text-gray-400 dark:text-gray-500 mb-4 tracking-[0.2em]">Tools Used</h4>
              <div className="flex flex-wrap gap-2.5 mt-4">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-5 py-2 bg-black/5 dark:bg-white/5 text-black dark:text-gray-300 text-[10px] font-black uppercase tracking-widest rounded-xl border border-black/5 dark:border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full mt-14 py-6 bg-primary text-white font-black rounded-2xl hover:bg-black dark:hover:bg-white dark:hover:text-black transition-all shadow-2xl shadow-primary/20 text-center uppercase tracking-widest text-xs relative overflow-hidden"
            >
              <span className="relative z-10">Visit Website</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Web App', 'AI Integration'];
  const filteredProjects = filter === 'All' ? PROJECTS_DATA : PROJECTS_DATA.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-24">
        <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-primary/20">
          Our Work
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-black dark:text-white mb-8 tracking-tighter uppercase leading-[0.85]">
          See Our <br /> Projects.
        </h1>
        <p className="text-xl text-black dark:text-gray-400 max-w-2xl mx-auto font-bold tracking-tight">
          A list of websites and tools we have built for our happy clients.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-20">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all border ${
              filter === cat
                ? 'bg-primary text-white border-primary shadow-2xl shadow-primary/20 -translate-y-1'
                : 'bg-white dark:bg-[#0a0a0a] text-black dark:text-gray-500 border-black/5 dark:border-white/10 hover:border-primary/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group bg-white dark:bg-[#0a0a0a] rounded-[48px] overflow-hidden shadow-sm hover:shadow-[0_40px_100px_-20px_rgba(212,175,55,0.15)] transition-all cursor-pointer transform hover:-translate-y-3 border border-black/5 dark:border-white/5"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-10 py-4 rounded-3xl font-black uppercase tracking-widest text-[10px] shadow-2xl transform translate-y-10 group-hover:translate-y-0 transition-transform">
                  View Project Details
                </div>
              </div>
            </div>
            <div className="p-12 lg:p-16">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em]">{project.category}</span>
                  <h3 className="text-3xl lg:text-4xl font-black mt-3 text-black dark:text-white tracking-tighter leading-none group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-primary transform group-hover:rotate-45 transition-transform">
                  <Icon name="arrow" className="w-6 h-6" />
                </div>
              </div>
              <p className="text-black dark:text-gray-400 mt-4 line-clamp-2 text-lg font-bold tracking-tight max-w-2xl leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default Portfolio;
