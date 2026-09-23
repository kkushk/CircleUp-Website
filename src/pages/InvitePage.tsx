import React from 'react';
import { Logo } from '../components/Logo';
import { SITE_CONFIG } from '../config/siteConfig';
import { 
  Smartphone, 
  Download, 
  Calendar, 
  MapPin, 
  Users, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface InvitePageProps {
  onNavigate: (path: string) => void;
}

export const InvitePage: React.FC<InvitePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-slate-50 min-h-screen py-12 sm:py-20 text-slate-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        {/* Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-10 space-y-8">
          
          {/* Top Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex justify-center mb-2">
              <Logo size="lg" />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-100 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" /> Official Match Invitation
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              You're Invited to Play
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
              A fellow player has invited you to join a sports match on CircleUp. Download the mobile app to accept your invitation and view match details.
            </p>
          </div>

          {/* Match Info Preview Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3.5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Match Overview
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-slate-700">
                <Users className="w-4 h-4 text-[#0066FF] shrink-0" />
                <span>Format: <strong>Tennis / Pickleball Match</strong></span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700">
                <Calendar className="w-4 h-4 text-[#0066FF] shrink-0" />
                <span>Schedule: <strong>Custom Scheduled Match</strong></span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 sm:col-span-2">
                <MapPin className="w-4 h-4 text-[#0066FF] shrink-0" />
                <span>Location: <strong>Local Club / Court</strong></span>
              </div>
            </div>
          </div>

          {/* Download CTAs */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 text-center">
              Download CircleUp to View Invitation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              {/* Apple App Store */}
              <a
                href={SITE_CONFIG.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-3.5 px-5 rounded-2xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-md active:scale-98"
              >
                <Smartphone className="w-5 h-5 text-white" />
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 font-normal leading-none">Download on the</div>
                  <div className="text-xs font-bold leading-tight">Apple App Store</div>
                </div>
              </a>

              {/* Google Play */}
              <a
                href={SITE_CONFIG.googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-3.5 px-5 rounded-2xl bg-[#0066FF] hover:bg-blue-600 text-white font-semibold text-sm transition-all shadow-md active:scale-98"
              >
                <Download className="w-5 h-5 text-white" />
                <div className="text-left">
                  <div className="text-[10px] text-blue-200 font-normal leading-none">Get it on</div>
                  <div className="text-xs font-bold leading-tight">Google Play</div>
                </div>
              </a>

            </div>
          </div>

          {/* Instructions */}
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-slate-700 space-y-2">
            <div className="font-semibold text-slate-900 flex items-center gap-1.5">
              <span>Next Steps:</span>
            </div>
            <ol className="list-decimal list-inside space-y-1 text-slate-600 leading-relaxed">
              <li>Install CircleUp from the App Store or Google Play.</li>
              <li>Register or log in using the telephone number where you received this invitation.</li>
              <li>Your match invitation will appear on your home feed ready to accept or decline.</li>
            </ol>
          </div>

          {/* Footer Links */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-500">
            <a 
              href="https://joincircleplay.com/privacy-policy" 
              onClick={(e) => { e.preventDefault(); onNavigate('/privacy-policy'); }} 
              className="hover:text-slate-900 underline"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a 
              href="https://joincircleplay.com/terms" 
              onClick={(e) => { e.preventDefault(); onNavigate('/terms'); }} 
              className="hover:text-slate-900 underline"
            >
              Terms of Service
            </a>
            <span>•</span>
            <a 
              href="https://joincircleplay.com/sms-consent" 
              onClick={(e) => { e.preventDefault(); onNavigate('/sms-consent'); }} 
              className="hover:text-slate-900 underline"
            >
              SMS Consent
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
