
import React from 'react';
import { Service, ServiceCategory, Project, Testimonial, Stats } from './types';

// New faithful representation of the Adare Logo from the provided image
export const AdareLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <div className={`${className} bg-[#0A0A0A] rounded-2xl flex items-center justify-center p-0.5 shadow-2xl border border-white/10 relative overflow-hidden group`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
    <img 
      src="/images/logo.jpg" 
      alt="Adare Logo" 
      className="w-full h-full object-contain relative z-10 scale-[1.3] transform-gpu transition-transform duration-500 group-hover:scale-[1.4]"
    />
  </div>
);


export const SERVICES_DATA: Service[] = [
  {
    id: 'web-dev',
    category: ServiceCategory.WEB_DEV,
    title: 'Custom Website Development',
    description: 'We build high-quality websites that are fast, beautiful, and easy for everyone to use.',
    icon: 'layout',
    features: [
      'Modern Design (React & Next.js)',
      'Works on all mobile phones and tablets',
      'Fast loading speeds',
      'Easy to find on Google (SEO)',
      'Custom features built for your needs',
      'Clean and professional look',
      'Connects to your social media',
      'Interactive maps and contact forms'
    ]
  },
  {
    id: 'maintenance',
    category: ServiceCategory.MAINTENANCE,
    title: 'Maintenance & Hosting',
    description: 'We take care of your website so you never have to worry about technical problems.',
    icon: 'server',
    features: [
      'Super fast cloud hosting',
      '24/7 security monitoring',
      'Daily backups of your data',
      'Regular software updates',
      'Fixing any bugs or errors',
      'SSL security certificates',
      'Email support when you need it',
      'Performance monthly reports'
    ]
  },
  {
    id: 'ai-integration',
    category: ServiceCategory.AI_INTEGRATION,
    title: 'AI Integration',
    description: 'We use smart AI tools to make your business faster and your work easier.',
    icon: 'cpu',
    features: [
      'Custom AI Chatbots for customers',
      'Automatic email replies',
      'AI tools to help with writing',
      'Smart data sorting and searching',
      'Voice-to-text features',
      'AI analysis of your business trends',
      'Simple AI tools built into your site',
      'Training on how to use AI'
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'Inter Luxury Hotel',
    category: 'Web App',
    image: '/images/inter-hotel.jpg',
    description: 'A custom website for Inter Luxury Hotel. We built a fast booking system and a beautiful design to show their luxury rooms.',
    client: 'Inter Luxury Hotel Group',
    challenge: "The hotel required a digital experience that matched the elegance of their physical architecture while providing a seamless room reservation flow.",
    solution: "We engineered a high-performance web application featuring a bespoke booking interface, mobile-first design, and secure payment integration.",
    technologies: ['React', 'Next.js', 'Framer Motion', 'Tailwind', 'Stripe API'],
    url: 'https://interluxuryhotel.com/'
  },
  {
    id: '2',
    title: 'AI Support Tool',
    category: 'AI Integration',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200&h=800',
    description: 'A smart chatbot that helps customers 24 hours a day. it can speak many languages and answer common questions instantly.',
    client: 'Velvet Threads Global',
    challenge: 'The company was getting too many emails and needed a faster way to help their customers.',
    solution: 'We added a smart AI tool that answers most questions immediately, so the staff has more time for other work.',
    technologies: ['Gemini 3 Pro', 'Node.js', 'React', 'Vector DB']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Business Owner',
    company: 'TechFlow',
    content: 'Adare turned our ideas into a real website. Their AI tools save us a lot of time every single week.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Team Leader',
    company: 'UrbanMarket',
    content: 'The most professional team we have worked with. They care about every detail and the website works perfectly.',
    avatar: 'https://i.pravatar.cc/150?u=michael'
  }
];

export const STATS: Stats[] = [
  { label: 'Finished Projects', value: '50+', icon: 'check-circle' },
  { label: 'Team Members', value: '10', icon: 'users' },
  { label: 'Happy Clients', value: '98%', icon: 'smile' },
  { label: 'Lines of Code', value: '500K+', icon: 'code' }
];

export const Icon = ({ name, className }: { name: string; className?: string }) => {
  const icons: Record<string, React.ReactNode> = {
    layout: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
    server: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 01-2 2v4a2 2 0 012 2h14a2 2 0 012-2v-4a2 2 0 01-2-2m-2-4h.01M17 16h.01" /></svg>,
    cpu: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
    'check-circle': <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    users: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    smile: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    code: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    arrow: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>,
    menu: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>,
    close: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l18 18" /></svg>,
    moon: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>,
    sun: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  };
  return icons[name] || null;
};
