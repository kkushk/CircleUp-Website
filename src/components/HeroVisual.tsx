import React from 'react';
import { PhoneMockup } from './PhoneMockup';
import { ScreenHome } from './AppScreenshots';
import { 
  CheckCircle2, 
  UserCheck, 
  MessageSquare, 
  CalendarCheck, 
  Send, 
  Sparkles 
} from 'lucide-react';

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center justify-center pt-2 pb-6 lg:py-4">
      
      {/* Ambient subtle light glow behind phone */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-sky-300/10 to-transparent rounded-full filter blur-3xl -z-10 transform scale-110 pointer-events-none" />

      {/* Floating Glass Element 1: Match Confirmed (Top Left) */}
      <div className="hidden sm:flex absolute top-8 -left-6 sm:-left-8 lg:-left-12 z-20 items-center gap-2.5 px-3.5 py-2.5 rounded-2xl glass-box shadow-lg border border-slate-200/90 text-left animate-fade-in">
        <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
          <CheckCircle2 className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] uppercase font-bold text-slate-400 leading-none">Status</div>
          <div className="text-xs font-bold text-slate-900 mt-0.5">Court 2 • 4/4 Confirmed</div>
        </div>
      </div>

      {/* Floating Glass Element 5: Invite Dispatched (Top Right) */}
      <div className="hidden sm:flex absolute top-8 -right-4 sm:-right-6 lg:-right-8 z-20 items-center gap-2 px-3.5 py-2 rounded-2xl glass-box shadow-md border border-slate-200/90 text-left">
        <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0">
          <Send className="w-3.5 h-3.5" />
        </div>
        <div>
          <div className="text-[9px] uppercase font-bold text-slate-400 leading-none">Dispatched</div>
          <div className="text-xs font-bold text-slate-900 mt-0.5">3 invites sent</div>
        </div>
      </div>

      {/* Floating Glass Element 2: Player Accepted (Middle Right) */}
      <div className="hidden sm:flex absolute top-44 -right-6 sm:-right-8 lg:-right-12 z-20 items-center gap-2.5 px-3.5 py-2.5 rounded-2xl glass-box shadow-lg border border-slate-200/90 text-left">
        <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0 border border-blue-100">
          <UserCheck className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] uppercase font-bold text-slate-400 leading-none">Roster Update</div>
          <div className="text-xs font-bold text-slate-900 mt-0.5">Marcus C. accepted</div>
        </div>
      </div>

      {/* Floating Glass Element 3: Calendar Added (Bottom Left) */}
      <div className="hidden sm:flex absolute bottom-36 -left-6 sm:-left-8 lg:-left-10 z-20 items-center gap-2.5 px-3.5 py-2.5 rounded-2xl glass-box shadow-lg border border-slate-200/90 text-left">
        <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
          <CalendarCheck className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] uppercase font-bold text-slate-400 leading-none">Calendar Sync</div>
          <div className="text-xs font-bold text-slate-900 mt-0.5">Synced to Calendar</div>
        </div>
      </div>

      {/* Floating Glass Element 4: Match Chat (Bottom Right) */}
      <div className="hidden sm:flex absolute bottom-12 -right-4 sm:-right-6 lg:-right-8 z-20 items-center gap-2.5 px-3.5 py-2.5 rounded-2xl glass-box shadow-lg border border-slate-200/90 text-left max-w-[210px]">
        <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
          <MessageSquare className="w-4 h-4" />
        </div>
        <div className="truncate">
          <div className="text-[10px] uppercase font-bold text-slate-400 leading-none">Match Chat</div>
          <div className="text-xs font-semibold text-slate-900 mt-0.5 truncate">"See you on the court!"</div>
        </div>
      </div>

      {/* The Central Phone Mockup */}
      <div className="relative z-10 w-full flex justify-center">
        <PhoneMockup badge="Live Match Feed">
          <ScreenHome />
        </PhoneMockup>
      </div>

      {/* Mobile Floating Tags Below Mockup for small screens (ensures all boxes visible on mobile) */}
      <div className="grid grid-cols-2 gap-2 mt-5 sm:hidden w-full max-w-[340px] px-2 z-20">
        <div className="p-2.5 rounded-xl glass-box border border-slate-200/90 flex items-center gap-2 shadow-2xs text-left">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <div>
            <div className="text-[9px] uppercase font-bold text-slate-400 leading-none">Status</div>
            <div className="text-[11px] font-bold text-slate-900 mt-0.5">4/4 Confirmed</div>
          </div>
        </div>
        <div className="p-2.5 rounded-xl glass-box border border-slate-200/90 flex items-center gap-2 shadow-2xs text-left">
          <CalendarCheck className="w-4 h-4 text-[#0066FF] shrink-0" />
          <div>
            <div className="text-[9px] uppercase font-bold text-slate-400 leading-none">Calendar</div>
            <div className="text-[11px] font-bold text-slate-900 mt-0.5">Direct Sync</div>
          </div>
        </div>
        <div className="p-2.5 rounded-xl glass-box border border-slate-200/90 flex items-center gap-2 shadow-2xs text-left">
          <UserCheck className="w-4 h-4 text-[#0066FF] shrink-0" />
          <div>
            <div className="text-[9px] uppercase font-bold text-slate-400 leading-none">Roster</div>
            <div className="text-[11px] font-bold text-slate-900 mt-0.5">Marcus accepted</div>
          </div>
        </div>
        <div className="p-2.5 rounded-xl glass-box border border-slate-200/90 flex items-center gap-2 shadow-2xs text-left">
          <MessageSquare className="w-4 h-4 text-amber-500 shrink-0" />
          <div>
            <div className="text-[9px] uppercase font-bold text-slate-400 leading-none">Match Chat</div>
            <div className="text-[11px] font-bold text-slate-900 mt-0.5">Active thread</div>
          </div>
        </div>
      </div>

    </div>
  );
};
