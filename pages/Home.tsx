
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA, PROJECTS_DATA, STATS, Icon } from '../constants';

const Hero = () => (
  <section className="relative overflow-hidden py-24 lg:py-40">
    {/* Animated Blobs - Gold/Amber palette */}
    <div className="absolute top-0 -left-10 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob"></div>
    <div className="absolute top-20 -right-10 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-blob animation-delay-4000"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-8 border border-primary/20">
           <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
           <span className="text-xs font-bold text-primary uppercase tracking-widest">Better Websites For You</span>
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-text-light dark:text-text-dark tracking-tighter mb-10 leading-[0.9]">
          The Best <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-amber-200 to-primary gold-shimmer">
            Websites.
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-black dark:text-gray-400 mb-14 leading-relaxed font-bold">
          Adare builds fast websites and smart AI tools to help your business grow and succeed online.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            to="/portfolio"
            className="w-full sm:w-auto px-10 py-5 bg-primary text-white font-black rounded-2xl hover:bg-black dark:hover:bg-white dark:hover:text-black transition-all shadow-xl shadow-primary/20 transform hover:-translate-y-1"
          >
            See Our Work
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-10 py-5 bg-white dark:bg-white/5 text-black dark:text-white font-black rounded-2xl border border-black/10 dark:border-white/10 hover:border-primary transition-all"
          >
            Talk to Us
          </Link>
        </div>
      </div>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-10">
        {SERVICES_DATA.map((service) => (
          <div
            key={service.id}
            className="p-10 bg-white dark:bg-white/5 rounded-[32px] border border-black/5 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary/20 transition-colors"></div>
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6 border border-primary/20">
              <Icon name={service.icon} className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black mb-4 text-black dark:text-white tracking-tight">{service.title}</h3>
            <p className="text-black dark:text-gray-400 text-sm leading-relaxed mb-8 font-medium">
              {service.description}
            </p>
            <Link to="/services" className="text-primary font-black flex items-center text-sm uppercase tracking-widest">
              Read More <Icon name="arrow" className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="bg-gray-50/50 dark:bg-[#080808] py-24 border-y border-black/5 dark:border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {STATS.map((stat, i) => (
          <div key={i} className="text-center group">
            <div className="text-primary mb-4 flex justify-center transform group-hover:scale-110 transition-transform">
              <Icon name={stat.icon} className="w-10 h-10 opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-5xl font-black text-black dark:text-white mb-2 tracking-tighter">{stat.value}</div>
            <div className="text-xs font-black text-black dark:text-gray-500 uppercase tracking-[0.2em]">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedWork = () => (
  <section className="py-32 bg-white dark:bg-background-dark">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 space-y-6 md:space-y-0">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6 tracking-tight">Our Portfolio.</h2>
          <p className="text-black dark:text-gray-400 max-w-xl text-lg font-bold">
            Beautiful websites and smart tools built by our professional team.
          </p>
        </div>
        <Link to="/portfolio" className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-8 py-3 rounded-xl text-primary font-black flex items-center group transition-all hover:bg-primary hover:text-white">
          See All Work <Icon name="arrow" className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PROJECTS_DATA.slice(0, 2).map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-[40px] aspect-[16/10] mb-8 shadow-2xl border border-black/5 dark:border-white/5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                <div>
                   <span className="bg-primary px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-[0.2em] mb-4 inline-block">
                    {project.category}
                  </span>
                  <h4 className="text-3xl font-black text-white tracking-tight">{project.title}</h4>
                </div>
              </div>
            </div>
            <div className="px-4">
              <h3 className="text-2xl font-black mb-3 text-black dark:text-white group-hover:text-primary transition-colors tracking-tight">
                {project.title}
              </h3>
              <p className="text-black dark:text-gray-400 text-sm font-bold leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeaturedWork />
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary gold-shimmer opacity-90"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-none">Get a High-Quality <br /> Website Today.</h2>
          <p className="text-xl text-white font-bold mb-14 tracking-tight">
            We are ready to start your next big project.
          </p>
          <Link
            to="/contact"
            className="inline-block px-12 py-6 bg-black text-white font-black rounded-[24px] hover:bg-white hover:text-black transition-all transform hover:-translate-y-2 shadow-2xl"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
