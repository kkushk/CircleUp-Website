import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Logo } from '../components/Logo';
import { AppButtons } from '../components/AppButtons';
import { Mail, ArrowLeft, Shield, Globe, Users } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white min-h-[80vh] py-16 sm:py-24 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-950 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </button>
          <Logo size="sm" showWordmark={false} />
        </div>

        {/* Header */}
        <div className="border-b border-slate-200 pb-8 mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF]">
            Company Overview
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            About CircleUp
          </h1>
          <p className="text-lg text-slate-600">
            Building the scheduling engine for sports.
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-slate max-w-none space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
          <p className="font-medium text-slate-950 text-xl leading-snug">
            CircleUp is a sports technology company building a simpler way for athletes to organize and play matches.
          </p>

          <p>
            We're starting with squash and SDA doubles, where coordinating several players can create unnecessary friction, and building toward a platform that makes organizing recreational sports dramatically easier.
          </p>

          <p>
            Whether coordinating singles or four-player doubles, athletes have spent too much time fielding group chats, aligning calendars, and confirming attendance. CircleUp streamlines that entire workflow into a clean, intuitive, and modern mobile experience.
          </p>

          {/* Legal Identity Card */}
          <div className="my-10 p-7 rounded-3xl glass-box space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Corporate Structure
            </div>
            <p className="text-sm sm:text-base text-slate-900 font-medium">
              CircleUp is operated by <span className="font-bold">{SITE_CONFIG.legalCompanyName}</span>.
            </p>
            <p className="text-xs text-slate-600">
              Official Website: <a href={SITE_CONFIG.domain} className="text-[#0066FF] hover:underline font-mono">{SITE_CONFIG.domain}</a>
            </p>
            <p className="text-xs text-slate-600">
              Support Inquiries: <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="text-[#0066FF] hover:underline font-mono">{SITE_CONFIG.supportEmail}</a>
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-xl font-bold text-slate-950 mb-4">Our Core Principles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose">
              <div className="p-6 rounded-2xl glass-box glass-box-hover space-y-3">
                <div className="w-8 h-8 rounded-lg bg-slate-950 text-white flex items-center justify-center shadow-xs">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-950 text-sm">Athletes First</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tailored specifically to court sports and match dynamics.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-box glass-box-hover space-y-3">
                <div className="w-8 h-8 rounded-lg bg-slate-950 text-white flex items-center justify-center shadow-xs">
                  <Globe className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-950 text-sm">Less Friction</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fast setup, one-tap RSVPs, and automatic schedule locking.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-box glass-box-hover space-y-3">
                <div className="w-8 h-8 rounded-lg bg-slate-950 text-white flex items-center justify-center shadow-xs">
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-950 text-sm">Trust & Privacy</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clear communication choices and strict non-sharing data policies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-slate-950">Ready to play?</h3>
            <p className="text-xs text-slate-600">Download CircleUp for iOS and Android.</p>
          </div>
          <AppButtons size="compact" theme="dark" />
        </div>

      </div>
    </div>
  );
};
