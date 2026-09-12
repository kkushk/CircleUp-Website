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
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] py-3' 
          : 'bg-white/65 backdrop-blur-lg border-b border-slate-200/50 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <a 
          href="/" 
          onClick={(e) => handleNavClick('/', e)}
          className="hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg"
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
              className={`hover:text-slate-950 transition-colors ${
                currentPath === item.href ? 'text-slate-950 font-semibold' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
          
          <a
            href="/#download"
            onClick={(e) => handleNavClick('/#download', e)}
            className="ml-2 inline-flex items-center justify-center px-4 py-2 rounded-full bg-slate-900 hover:bg-black text-white text-xs font-semibold tracking-wide transition-all shadow-sm active:scale-95"
          >
            Download
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="/#download"
            onClick={(e) => handleNavClick('/#download', e)}
            className="px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold"
          >
            Download
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 space-y-3 shadow-lg animate-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(item.href, e)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-slate-950 border-b border-slate-100 last:border-0"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
