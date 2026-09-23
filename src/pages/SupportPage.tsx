import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Logo } from '../components/Logo';
import { 
  Mail, 
  ArrowLeft, 
  HelpCircle, 
  Calendar, 
  Users, 
  Bell, 
  MessageSquare, 
  Shield, 
  Smartphone,
  ChevronDown,
  CheckCircle2
} from 'lucide-react';

interface SupportPageProps {
  onNavigate: (path: string) => void;
}

export const SupportPage: React.FC<SupportPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [
    {
      icon: Users,
      title: 'Account & Profile',
      description: 'Account settings, profile details, and sport preferences.'
    },
    {
      icon: Calendar,
      title: 'Match Scheduling',
      description: 'Creating matches, setting dates/times, and selecting venues.'
    },
    {
      icon: Users,
      title: 'Player Invitations',
      description: 'Inviting players, RSVP tracking, and doubles side preferences.'
    },
    {
      icon: Bell,
      title: 'Notifications & Reminders',
      description: 'Push notification settings and match reminder preferences.'
    },
    {
      icon: MessageSquare,
      title: 'SMS Questions',
      description: 'Opt-in preferences, message frequency, STOP opt-out, and HELP.'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Data usage questions, account privacy, and account requests.'
    },
    {
      icon: Smartphone,
      title: 'Technical Issues',
      description: 'App troubleshooting, sync questions, and bug reports.'
    }
  ];

  const faqs = [
    {
      q: 'How do I invite players to my match?',
      a: 'When creating a match in CircleUp, you can select players from your roster or use supported invitation methods inside the app. Players will receive your match invitation and can accept or decline with a single tap.'
    },
    {
      q: 'How does match confirmation work?',
      a: 'Once all required participants accept (2 for singles, 4 for doubles), CircleUp automatically locks in the match status as Confirmed, syncs the event to calendars, and opens the match-specific coordination chat.'
    },
    {
      q: 'How does CircleUp use SMS text messages?',
      a: 'CircleUp uses SMS exclusively for user-initiated A2P sports match invitations sent to outside guests after the guests provide prior express written consent. CircleUp never sends marketing texts, schedule reminders, or recurring messages via SMS. Recipients can opt out anytime by replying STOP to any message, or contact support at contact@joincircleplay.com.'
    },
    {
      q: 'Does CircleUp share my mobile number with third parties?',
      a: 'CircleUp does not sell or share mobile telephone numbers or SMS consent information with third parties or affiliates for their marketing or promotional purposes. CircleUp may disclose information to service providers that process SMS messages or perform services on CircleUp’s behalf, subject to appropriate confidentiality and data-protection obligations.'
    },
    {
      q: 'How can I reach CircleUp support?',
      a: 'You can email our team directly at contact@joincircleplay.com. We respond promptly to all player, match, account, and technical questions.'
    }
  ];

  return (
    <div className="w-full bg-white min-h-[80vh] py-10 sm:py-24 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-6 sm:mb-8 flex items-center justify-between">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-950 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </button>
          <Logo size="sm" showWordmark={false} />
        </div>

        {/* Header */}
        <div className="border-b border-slate-200 pb-6 sm:pb-8 mb-8 sm:mb-12 space-y-2 sm:space-y-3 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF]">
            Help Center
          </span>
          <h1 className="text-2xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            How can we help?
          </h1>
          <p className="text-sm sm:text-lg text-slate-600">
            Have questions about CircleUp or your matches? Contact our support team.
          </p>
        </div>

        {/* Direct Email Card */}
        <div className="mb-10 sm:mb-14 p-5 sm:p-8 rounded-2xl sm:rounded-3xl glass-box flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-slate-950">Email CircleUp Support</h3>
            <p className="text-xs sm:text-sm text-slate-600">
              For account inquiries, match assistance, or compliance questions:
            </p>
            <a 
              href={`mailto:${SITE_CONFIG.supportEmail}`} 
              className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#0066FF] hover:underline"
            >
              <Mail className="w-4 h-4 text-slate-950" /> {SITE_CONFIG.supportEmail}
            </a>
          </div>
          <a
            href={`mailto:${SITE_CONFIG.supportEmail}`}
            className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-slate-950 hover:bg-black text-white text-xs font-semibold tracking-wide transition-all shrink-0 shadow-xs"
          >
            Send Email
          </a>
        </div>

        {/* Support Categories */}
        <div className="space-y-6 mb-16">
          <h2 className="text-xl font-bold text-slate-950">Support Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div 
                  key={idx} 
                  className="p-5 rounded-2xl glass-box glass-box-hover flex items-start gap-3.5"
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-950 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 text-sm">{cat.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{cat.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-950 mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="rounded-2xl glass-box overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-950 text-sm hover:bg-white/40 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-slate-950' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Legal info footer note */}
        <div className="mt-14 pt-8 border-t border-slate-200 text-xs text-slate-500 text-center">
          CircleUp is operated by <span className="font-semibold text-slate-700">{SITE_CONFIG.legalCompanyName}</span>. <br />
          For legal inquiries, refer to our <button onClick={() => onNavigate('/privacy-policy')} className="text-[#0066FF] hover:underline">Privacy Policy</button>, <button onClick={() => onNavigate('/terms')} className="text-[#0066FF] hover:underline">Terms of Service</button>, or <button onClick={() => onNavigate('/sms-consent')} className="text-[#0066FF] hover:underline">SMS Consent Policy</button>.
        </div>

      </div>
    </div>
  );
};
