
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon, AdareLogo } from '../constants';
import { AIChatBot } from './AIChatBot';

interface LayoutProps {
  children: React.ReactNode;
}

const Navbar = ({ isDark, setIsDark }: { isDark: boolean; setIsDark: (v: boolean) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center group">
            <AdareLogo className="w-14 h-14" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold tracking-tight transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-gray-600 dark:text-gray-400 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:text-primary transition-all border border-transparent hover:border-primary/20"
            >
              <Icon name={isDark ? 'sun' : 'moon'} className="w-5 h-5" />
            </button>
            <Link
              to="/contact"
              className="bg-primary hover:bg-black dark:hover:bg-white dark:hover:text-black text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-primary/10 active:scale-95"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
             <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400"
            >
              <Icon name={isDark ? 'sun' : 'moon'} className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 p-2"
            >
              <Icon name={isOpen ? 'close' : 'menu'} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-background-dark border-b border-gray-100 dark:border-white/5">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-bold text-black dark:text-gray-300 hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-center bg-primary text-white rounded-xl font-bold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const CopyableFooterItem = ({ label, value }: { label: string; value: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-black/60 dark:text-gray-400">{label}: {value}</span>
      <button 
        onClick={handleCopy}
        className={`ml-4 px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-widest transition-all border ${
          copied 
            ? 'bg-green-500 text-white border-green-500' 
            : 'bg-black/5 dark:bg-white/5 text-primary border-primary/20 hover:bg-primary hover:text-white'
        }`}
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-white dark:bg-[#050505] py-20 border-t border-gray-100 dark:border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center mb-8 group">
            <AdareLogo className="w-24 h-24" />
          </Link>
          <p className="text-black/70 dark:text-gray-400 max-w-sm mb-8 leading-relaxed font-medium">
            We build high-quality websites and smart tools. We focus on making things fast, safe, and easy for your business.
          </p>
          <div className="flex space-x-5">
             {[1, 2, 3, 4].map(i => <div key={i} className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all border border-transparent hover:border-primary/20 shadow-sm"></div>)}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-black dark:text-white">Contact & Info</h4>
          <ul className="space-y-2 font-medium">
            <li><CopyableFooterItem label="Phone" value="0939553283" /></li>
            <li><CopyableFooterItem label="CBE" value="1000323871551" /></li>
            <li><Link to="/contact" className="text-sm text-black/60 dark:text-gray-400 hover:text-primary transition-colors">Email Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-black dark:text-white">Company</h4>
          <ul className="space-y-4 text-black/60 dark:text-gray-400 text-sm font-medium">
            <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Our Work</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><Link to="/" className="hover:text-primary transition-colors">Jobs</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-20 pt-10 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-gray-400 uppercase tracking-widest">
        <div>&copy; {new Date().getFullYear()} Adare Software Company</div>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <Link to="/" className="hover:text-primary">Privacy</Link>
          <Link to="/" className="hover:text-primary">Terms</Link>
          <Link to="/" className="hover:text-primary">Legal</Link>
        </div>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === null ? true : savedTheme === 'dark';
    }
    return true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
      <AIChatBot />
    </div>
  );
};
