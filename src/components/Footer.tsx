import React from 'react';
import { Logo } from './Logo';
import { AppButtons } from './AppButtons';
import { SITE_CONFIG } from '../config/siteConfig';
import { Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHashLink = (hash: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('/');
    setTimeout(() => {
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 pt-16 pb-12 text-slate-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="md" />
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              {SITE_CONFIG.visionStatement}
            </p>
            <p className="text-xs text-slate-500">
              Built for the way athletes actually play. Starting with squash and SDA doubles. Designed for every sport.
            </p>
            <div className="pt-2">
              <AppButtons size="compact" theme="light" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/#product"
                  onClick={(e) => handleHashLink('product', e)}
                  className="hover:text-slate-950 transition-colors"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="/#how-it-works"
                  onClick={(e) => handleHashLink('how-it-works', e)}
                  className="hover:text-slate-950 transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleLink('/about', e)}
                  className="hover:text-slate-950 transition-colors"
                >
                  About CircleUp
                </a>
              </li>
              <li>
                <a
                  href="/support"
                  onClick={(e) => handleLink('/support', e)}
                  className="hover:text-slate-950 transition-colors"
                >
                  Support & Help
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Legal Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Legal & Compliance
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => handleLink('/privacy-policy', e)}
                  className="hover:text-slate-950 transition-colors flex items-center gap-1.5"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  onClick={(e) => handleLink('/terms', e)}
                  className="hover:text-slate-950 transition-colors flex items-center gap-1.5"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="/sms-consent"
                  onClick={(e) => handleLink('/sms-consent', e)}
                  className="hover:text-slate-950 font-medium text-[#0066FF] hover:underline flex items-center gap-1.5"
                >
                  SMS Consent
                </a>
              </li>
            </ul>

            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="text-slate-700 hover:underline">
                  {SITE_CONFIG.supportEmail}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span className="font-semibold text-slate-700">{SITE_CONFIG.brandName}</span> is operated by{' '}
            <span className="font-semibold text-slate-700">{SITE_CONFIG.legalCompanyName}</span>.
          </div>
          <div>
            © 2026 {SITE_CONFIG.legalCompanyName}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
