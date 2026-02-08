
import React from 'react';
import { Icon, AdareLogo } from '../constants';

const About = () => {
  return (
    <div className="py-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
             {/* Architectural Brand Graphic */}
             <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
             <div className="relative z-10 aspect-[4/5] bg-white dark:bg-[#0a0a0a] rounded-[40px] border border-black/5 dark:border-white/10 shadow-2xl flex flex-col items-center justify-center p-12 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                  <div className="grid grid-cols-6 gap-4">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="w-12 h-12 border border-primary rounded-lg"></div>
                    ))}
                  </div>
                </div>
                <AdareLogo className="w-64 h-64 mb-10" />
                <div className="text-center">
                  <h3 className="text-2xl font-black text-black dark:text-white uppercase tracking-tighter mb-2">High-End Quality</h3>
                  <p className="text-primary font-black uppercase tracking-widest text-[10px]">Founded by Milkesa Yohanes • Professional Software Studio</p>
                </div>
             </div>
             
             <div className="absolute -bottom-6 -right-6 bg-primary p-10 rounded-3xl shadow-2xl z-20 hidden md:block border border-white/20">
               <div className="text-5xl font-black text-white mb-1 tracking-tighter">4+</div>
               <div className="text-xs font-black text-white/80 uppercase tracking-[0.2em]">Years in Business</div>
             </div>
          </div>
          
          <div className="space-y-10 order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-2 border border-primary/20">
              Our Story
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-black dark:text-white leading-[0.85] tracking-tighter uppercase">
              Quality <br />
              <span className="text-primary">Software.</span>
            </h1>
            <p className="text-xl text-black dark:text-gray-400 leading-relaxed font-bold italic">
              "We don't just build websites. We build powerful digital tools that help your business succeed."
            </p>
            <p className="text-lg text-black dark:text-gray-400 leading-relaxed font-medium">
              Adare was created by <strong>Milkesa Yohanes</strong>, a professional software developer. He started this company because he believes every business deserves a website that is fast, safe, and easy to use.
            </p>
            <p className="text-lg text-black dark:text-gray-400 leading-relaxed font-medium">
              At Adare, we focus on doing things the right way. We use the latest technology and smart AI to make sure your website works perfectly on every screen and helps you reach more customers.
            </p>
            
            <div className="grid grid-cols-2 gap-10 pt-10 border-t border-black/5 dark:border-white/5">
              <div>
                <h4 className="font-black text-xs uppercase tracking-widest text-primary mb-4">Founder's Goal</h4>
                <p className="text-sm text-black dark:text-gray-500 font-bold leading-relaxed">Milkesa leads every project personally to make sure you get the best results possible.</p>
              </div>
              <div>
                <h4 className="font-black text-xs uppercase tracking-widest text-primary mb-4">What We Do Best</h4>
                <p className="text-sm text-black dark:text-gray-500 font-bold leading-relaxed">We specialize in building fast websites and using AI to make your daily work easier.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black/5 dark:bg-white/5 py-32 border-y border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black text-black dark:text-white mb-6 uppercase tracking-tight">Our Promises to You</h2>
            <p className="text-black dark:text-gray-500 font-bold tracking-widest uppercase text-xs">Simple. Honest. Professional.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { title: 'Always Working', text: 'We build systems that stay online so your customers can always reach you.', icon: 'server' },
              { title: 'Honest Work', text: 'We are clear about our prices and we show you exactly how your project is going.', icon: 'users' },
              { title: 'Smart Ideas', text: 'We use the newest tools and AI to help your business stay ahead of the competition.', icon: 'cpu' },
              { title: 'Careful Detail', text: 'We check every part of your website to make sure it is safe and works perfectly.', icon: 'layout' },
            ].map((value, i) => (
              <div key={i} className="p-10 bg-white dark:bg-[#0a0a0a] rounded-[32px] border border-black/5 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all text-center group">
                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mx-auto mb-8 transform group-hover:scale-110 transition-transform border border-primary/20">
                  <Icon name={value.icon} className="w-10 h-10" />
                </div>
                <h3 className="font-black text-2xl mb-6 text-black dark:text-white tracking-tight">{value.title}</h3>
                <p className="text-sm text-black dark:text-gray-500 leading-relaxed font-bold">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
