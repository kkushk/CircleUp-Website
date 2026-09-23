import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { SITE_CONFIG } from '../config/siteConfig';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href.startsWith('/#')) {
      const sectionId = href.replace('/#', '');
      if (currentPath !== '/') {
        onNavigate('/');
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onNavigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Product', href: '/#product' },
    { label: 'Sports', href: '/#sports' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Features', href: '/#features' },
    { label: 'About', href: '/about' },
    { label: 'Support', href: '/support' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_24px_rgba(15,23,42,0.04)] py-3' 
          : 'bg-white/70 backdrop-blur-lg border-b border-slate-200/60 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <a 
          href="/" 
          onClick={(e) => handleNavClick('/', e)}
          className="hover:opacity-95 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg"
          aria-label="CircleUp Home"
        >
          <Logo />
        </a>

        {/* Right Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(item.href, e)}
              className={`hover:text-slate-950 transition-colors py-1 ${
                currentPath === item.href ? 'text-slate-950 font-semibold' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
          
          <a
            href="/#download"
            onClick={(e) => handleNavClick('/#download', e)}
            className="ml-2 inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-bold tracking-wide transition-all shadow-sm shadow-blue-500/20 active:scale-95"
          >
            Download
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="/#download"
            onClick={(e) => handleNavClick('/#download', e)}
            className="px-3.5 py-1.5 rounded-full bg-slate-950 text-white text-xs font-semibold"
          >
            Download
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-950 rounded-xl focus:outline-none hover:bg-slate-100/80 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200/90 bg-white/95 backdrop-blur-2xl px-4 pt-2.5 pb-5 space-y-1 shadow-xl animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const isActive = currentPath === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-[#0066FF]' 
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-slate-400 text-xs">→</span>
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="/#download"
              onClick={(e) => handleNavClick('/#download', e)}
              className="w-full inline-flex items-center justify-center py-2.5 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white text-sm font-bold shadow-md shadow-blue-500/20 active:scale-98 transition-all"
            >
              Download CircleUp App
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
