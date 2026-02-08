
import React from 'react';
import { SERVICES_DATA, Icon } from '../constants';
import { Service } from '../types';

const ServiceSection: React.FC<{ service: Service; reverse?: boolean }> = ({ service, reverse }) => (
  <div id={service.id} className={`py-24 flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
    <div className="flex-1 space-y-8">
      <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-6 border border-primary/20">
        <Icon name={service.icon} className="w-10 h-10" />
      </div>
      <div className="inline-block px-4 py-1 bg-primary/10 text-primary font-black rounded-full text-[10px] uppercase tracking-[0.3em] border border-primary/20">
        {service.category}
      </div>
      <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white tracking-tight uppercase leading-none">{service.title}</h2>
      <p className="text-xl text-black dark:text-gray-400 leading-relaxed font-bold italic">
        {service.description}
      </p>
    </div>
    <div className="flex-1 w-full">
      <div className="bg-white dark:bg-[#0a0a0a] p-10 md:p-14 rounded-[40px] border border-black/5 dark:border-white/10 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors"></div>
        <h4 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-10 pb-4 border-b border-primary/20">What we provide:</h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          {service.features.map((f, i) => (
            <li key={i} className="flex items-start space-x-4 text-black dark:text-gray-300 font-bold group/item">
              <div className="text-primary mt-1 group-hover/item:scale-125 transition-transform">
                <Icon name="check-circle" className="w-5 h-5" />
              </div>
              <span className="text-base leading-tight">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-24">
        <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-primary/20">
          Our Capabilities
        </div>
        <h1 className="text-6xl md:text-7xl font-black text-black dark:text-white mb-8 tracking-tighter uppercase leading-[0.85]">
          Built For <br />
          <span className="text-primary">Success.</span>
        </h1>
        <p className="text-xl text-black dark:text-gray-400 max-w-2xl mx-auto font-bold tracking-tight">
          We provide everything you need to start, grow, and manage your professional business website.
        </p>
      </div>

      <div className="space-y-12">
        {SERVICES_DATA.map((service, index) => (
          <ServiceSection key={service.id} service={service} reverse={index % 2 !== 0} />
        ))}
      </div>

      <div className="mt-32 p-12 md:p-20 rounded-[48px] bg-black text-white relative overflow-hidden border border-white/5 shadow-2xl text-center md:text-left">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-none">Ready to start?</h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-bold">
              Tell us about your project and we will show you exactly how we can help your business grow online. No hidden costs, just honest and professional work.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="px-12 py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-primary/20">
                Contact Us Now
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'Fast Setup', icon: 'smile' },
              { label: 'Secure Code', icon: 'server' },
              { label: 'Mobile Ready', icon: 'layout' },
              { label: 'AI Powered', icon: 'cpu' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl p-8 rounded-[32px] border border-white/10 flex flex-col items-center text-center">
                <div className="text-primary mb-4">
                  <Icon name={item.icon} className="w-8 h-8" />
                </div>
                <span className="text-sm font-black uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
