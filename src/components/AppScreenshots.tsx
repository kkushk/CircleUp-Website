import React from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Plus, 
  Users, 
  Check, 
  CheckCircle2, 
  MessageSquare, 
  Send, 
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Bell,
  Home,
  User
} from 'lucide-react';
import { Logo } from './Logo';

export const ScreenHome: React.FC = () => (
  <div className="flex-1 w-full h-full bg-[#F4F6FA] flex flex-col justify-between pt-6 px-2.5 text-left overflow-hidden select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
    {/* Top Content Group */}
    <div className="flex-1 flex flex-col min-h-0 space-y-2">
      {/* Dark Top Hero Card (Compact & Streamlined) */}
      <div className="bg-[#0B111F] rounded-2xl p-2.5 text-white shadow-sm border border-slate-800/50 shrink-0">
        {/* Top Status Row */}
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
            <span className="text-[9px] font-extrabold tracking-wider text-slate-300 uppercase">
              BOSTON, US
            </span>
          </div>
          <div className="w-5 h-5 rounded-full bg-[#1A2333] flex items-center justify-center relative">
            <Bell className="w-3 h-3 text-slate-200" />
            <span className="absolute top-0.5 right-0.5 w-1 h-1 rounded-full bg-[#FF453A] border border-[#0B111F]" />
          </div>
        </div>

        {/* Greeting */}
        <h2 className="text-[15px] font-extrabold text-white tracking-tight leading-tight">
          Welcome, Anna
        </h2>
        <p className="text-[10px] font-normal text-slate-400 mt-0.5 mb-2">
          Summit House
        </p>

        {/* Schedule Match Button */}
        <div className="bg-[#1D63FF] hover:bg-[#1554dd] transition-colors text-white py-1.5 px-2.5 rounded-xl flex items-center justify-between font-bold text-[11px] shadow-xs cursor-pointer">
          <span className="flex items-center gap-1">
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" /> Schedule a Match
          </span>
          <ChevronRight className="w-3 h-3 text-white/80" />
        </div>
      </div>

      {/* Section Header: Live Match Feed */}
      <div className="flex items-center justify-between px-1 py-0.5 shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          <h3 className="text-xs font-extrabold text-slate-900 tracking-tight">
            Live Match Feed
          </h3>
        </div>
        <span className="px-2 py-0.5 bg-[#EEF4FF] text-[#1D63FF] text-[9.5px] font-bold rounded-full border border-blue-100/60">
          3 Scheduled
        </span>
      </div>

      {/* Upcoming Matches List */}
      <div className="space-y-1.5 flex-1 min-h-0 flex flex-col justify-between">
        {/* Match 1 */}
        <div className="bg-white rounded-xl p-2 shadow-[0_1px_4px_rgba(0,0,0,0.03)] border border-slate-100/90 flex items-center justify-between gap-2 transition-transform">
          <div className="w-8 h-8 rounded-lg bg-[#EBF3FF] flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-[#1D63FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
              <path d="M16 2v4" />
              <path d="M8 2v4" />
              <path d="M3 10h18" />
              <circle cx="16" cy="16" r="4" />
              <path d="M16 14v2l1 1" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-bold text-slate-900 text-[11px] leading-tight">August 25, 10:00 AM</div>
            <div className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
              Doubles • <span className="text-[#1D63FF] font-semibold">Alex Morgan</span>
            </div>
            <div className="text-[9px] text-slate-400 flex items-center gap-1 mt-0.5">
              <MapPin className="w-2.5 h-2.5 text-slate-400 shrink-0" />
              <span className="truncate">Rally Club of USA</span>
            </div>
          </div>
          <ChevronRight className="w-3 h-3 text-slate-300 shrink-0" />
        </div>

        {/* Match 2 */}
        <div className="bg-white rounded-xl p-2 shadow-[0_1px_4px_rgba(0,0,0,0.03)] border border-slate-100/90 flex items-center justify-between gap-2 transition-transform">
          <div className="w-8 h-8 rounded-lg bg-[#EBF3FF] flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-[#1D63FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
              <path d="M16 2v4" />
              <path d="M8 2v4" />
              <path d="M3 10h18" />
              <circle cx="16" cy="16" r="4" />
              <path d="M16 14v2l1 1" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-bold text-slate-900 text-[11px] leading-tight">September 1, 10:00 AM</div>
            <div className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
              Doubles • <span className="text-[#1D63FF] font-semibold">Alex Morgan</span>
            </div>
            <div className="text-[9px] text-slate-400 flex items-center gap-1 mt-0.5">
              <MapPin className="w-2.5 h-2.5 text-slate-400 shrink-0" />
              <span className="truncate">Rally Club of USA</span>
            </div>
          </div>
          <ChevronRight className="w-3 h-3 text-slate-300 shrink-0" />
        </div>

        {/* Match 3 */}
        <div className="bg-white rounded-xl p-2 shadow-[0_1px_4px_rgba(0,0,0,0.03)] border border-slate-100/90 flex items-center justify-between gap-2 transition-transform">
          <div className="w-8 h-8 rounded-lg bg-[#EBF3FF] flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-[#1D63FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
              <path d="M16 2v4" />
              <path d="M8 2v4" />
              <path d="M3 10h18" />
              <circle cx="16" cy="16" r="4" />
              <path d="M16 14v2l1 1" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-bold text-slate-900 text-[11px] leading-tight">September 22, 9:52 PM</div>
            <div className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
              Doubles • <span className="text-[#1D63FF] font-semibold">Alex Morgan</span>
            </div>
            <div className="text-[9px] text-slate-400 flex items-center gap-1 mt-0.5">
              <MapPin className="w-2.5 h-2.5 text-slate-400 shrink-0" />
              <span className="truncate">Rally Club of USA</span>
            </div>
          </div>
          <ChevronRight className="w-3 h-3 text-slate-300 shrink-0" />
        </div>
      </div>
    </div>

    {/* Bottom App Navigation Bar */}
    <div className="w-full bg-white/95 backdrop-blur-md rounded-t-2xl pt-1.5 pb-1 px-1 border-t border-slate-200/60 shadow-[0_-4px_12px_rgba(0,0,0,0.03)] grid grid-cols-4 items-center text-center shrink-0 mt-2">
      {/* Home Tab */}
      <div className="flex flex-col items-center justify-center cursor-pointer">
        <div className="w-1.5 h-1.5 rounded-full bg-[#1D63FF] mb-0.5" />
        <div className="w-6 h-6 rounded-lg bg-[#EBF3FF] flex items-center justify-center text-[#1D63FF]">
          <Home className="w-3.5 h-3.5" />
        </div>
        <span className="text-[9px] font-bold text-[#1D63FF] mt-0.5">Home</span>
      </div>

      {/* Invites Tab */}
      <div className="flex flex-col items-center justify-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
        <div className="w-6 h-6 flex items-center justify-center text-slate-500">
          <Bell className="w-3.5 h-3.5" />
        </div>
        <span className="text-[9px] font-medium text-slate-500 mt-0.5">Invites</span>
      </div>

      {/* Players Tab */}
      <div className="flex flex-col items-center justify-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
        <div className="w-6 h-6 flex items-center justify-center text-slate-500">
          <Users className="w-3.5 h-3.5" />
        </div>
        <span className="text-[9px] font-medium text-slate-500 mt-0.5">Players</span>
      </div>

      {/* Profile Tab */}
      <div className="flex flex-col items-center justify-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
        <div className="w-6 h-6 flex items-center justify-center text-slate-500">
          <User className="w-3.5 h-3.5" />
        </div>
        <span className="text-[9px] font-medium text-slate-500 mt-0.5">Profile</span>
      </div>
    </div>
  </div>
);

export const ScreenCreateMatch: React.FC = () => (
  <div className="flex-1 bg-slate-50 flex flex-col pt-7 px-4 text-left overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
    <div className="pt-2 pb-3 flex items-center justify-between border-b border-slate-200">
      <span className="text-xs text-slate-500">Cancel</span>
      <span className="text-sm font-bold text-slate-900">Create Match</span>
      <span className="text-xs font-semibold text-[#0066FF]">Next</span>
    </div>

    <div className="py-3 space-y-3">
      {/* Sport Selector */}
      <div>
        <label className="text-[11px] font-medium uppercase tracking-wider text-slate-500 block mb-1">Sport</label>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-xl border-2 border-[#0066FF] bg-blue-50/50 text-slate-900 font-semibold text-xs text-center">
            Squash
          </div>
          <div className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium text-xs text-center">
            SDA Doubles
          </div>
        </div>
      </div>

      {/* Location */}
      <div>
        <label className="text-[11px] font-medium uppercase tracking-wider text-slate-500 block mb-1">Location</label>
        <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-slate-400" />
          <span>University Squash Courts</span>
        </div>
      </div>

      {/* Date & Time */}
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="text-[11px] font-medium uppercase tracking-wider text-slate-500 block mb-1">Date</label>
          <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>Thu, Aug 21</span>
          </div>
        </div>
        <div>
          <label className="text-[11px] font-medium uppercase tracking-wider text-slate-500 block mb-1">Time</label>
          <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>6:30 PM</span>
          </div>
        </div>
      </div>

      {/* Format */}
      <div>
        <label className="text-[11px] font-medium uppercase tracking-wider text-slate-500 block mb-1">Players Needed</label>
        <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 flex items-center justify-between">
          <span className="font-medium">4 Players (Doubles)</span>
          <span className="text-[11px] text-[#0066FF] font-semibold">Change</span>
        </div>
      </div>
    </div>
  </div>
);

export const ScreenInvitePlayers: React.FC = () => (
  <div className="flex-1 bg-slate-50 flex flex-col pt-7 px-4 text-left overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
    <div className="pt-2 pb-3 flex items-center justify-between border-b border-slate-200">
      <span className="text-xs text-slate-500">Back</span>
      <span className="text-sm font-bold text-slate-900">Invite Players</span>
      <span className="text-xs font-semibold text-[#0066FF]">Send</span>
    </div>

    <div className="py-3 space-y-2.5">
      <div className="text-[11px] text-slate-500 font-medium">Select players for SDA Doubles (4 required)</div>
      
      {/* Selected Players list */}
      <div className="bg-white rounded-2xl border border-slate-200 p-2 space-y-2">
        <div className="flex items-center justify-between p-1.5 bg-blue-50/60 rounded-xl">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#0066FF] text-white text-xs font-bold flex items-center justify-center">
              You
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-900">Organizer</div>
              <div className="text-[10px] text-slate-500">Right Wall</div>
            </div>
          </div>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-100 text-[#0066FF]">Confirmed</span>
        </div>

        <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded-xl">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">
              DR
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-900">David R.</div>
              <div className="text-[10px] text-slate-500">Left Wall preference</div>
            </div>
          </div>
          <div className="w-5 h-5 rounded-full bg-[#0066FF] text-white flex items-center justify-center text-[10px]">✓</div>
        </div>

        <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded-xl">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">
              TL
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-900">Thomas L.</div>
              <div className="text-[10px] text-slate-500">Right / Left</div>
            </div>
          </div>
          <div className="w-5 h-5 rounded-full bg-[#0066FF] text-white flex items-center justify-center text-[10px]">✓</div>
        </div>

        <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded-xl">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-amber-600 text-white text-xs font-bold flex items-center justify-center">
              MC
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-900">Marcus C.</div>
              <div className="text-[10px] text-slate-500">Left Wall</div>
            </div>
          </div>
          <div className="w-5 h-5 rounded-full bg-[#0066FF] text-white flex items-center justify-center text-[10px]">✓</div>
        </div>
      </div>

      <div className="text-center pt-2">
        <button className="w-full py-2.5 rounded-xl bg-[#0066FF] text-white text-xs font-semibold shadow-sm hover:bg-blue-600">
          Send 3 Invitations
        </button>
      </div>
    </div>
  </div>
);

export const ScreenMatchConfirmed: React.FC = () => (
  <div className="flex-1 bg-slate-50 flex flex-col pt-7 px-4 text-left overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
    <div className="pt-4 text-center">
      <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
        <Check className="w-6 h-6 stroke-[3]" />
      </div>
      <h3 className="text-base font-bold text-slate-900 mt-2">Match Confirmed!</h3>
      <p className="text-xs text-slate-500">All 4 players have accepted</p>
    </div>

    <div className="mt-4 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
        <span className="text-xs font-semibold text-slate-900">SDA Doubles Match</span>
        <span className="text-[11px] font-semibold text-[#0066FF]">Court 2</span>
      </div>

      <div className="space-y-1.5 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span>Thursday, August 21, 2026</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-slate-400" />
          <span>6:30 PM – 7:45 PM (75 min)</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-slate-400" />
          <span>Union Club of New York</span>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-100 flex gap-2">
        <button className="flex-1 py-2 rounded-xl bg-slate-900 text-white text-[11px] font-medium flex items-center justify-center gap-1">
          <Calendar className="w-3 h-3" /> Add to Calendar
        </button>
        <button className="py-2 px-3 rounded-xl border border-slate-200 text-slate-700 text-[11px] font-medium flex items-center justify-center gap-1">
          <MessageSquare className="w-3 h-3" /> Chat
        </button>
      </div>
    </div>
  </div>
);

export const ScreenMatchChat: React.FC = () => (
  <div className="flex-1 bg-slate-50 flex flex-col pt-7 px-3 text-left overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
    <div className="pt-2 pb-2.5 px-1 flex items-center justify-between border-b border-slate-200">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-[#0066FF] text-white text-[10px] font-bold flex items-center justify-center">
          4
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900 leading-tight">Match Chat</div>
          <div className="text-[10px] text-slate-500">Thu 6:30 PM • 4 players</div>
        </div>
      </div>
      <span className="text-[10px] text-[#0066FF] font-medium">Match Details</span>
    </div>

    {/* Messages feed */}
    <div className="flex-1 py-3 space-y-2.5 text-xs">
      <div className="text-center">
        <span className="text-[10px] text-slate-400 bg-slate-200/60 px-2 py-0.5 rounded-full">
          Match confirmed by CircleUp
        </span>
      </div>

      <div className="flex items-start gap-1.5">
        <div className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">
          DR
        </div>
        <div className="bg-white p-2 rounded-2xl rounded-tl-xs border border-slate-200 max-w-[80%] text-slate-800 shadow-2xs">
          <span className="text-[10px] font-semibold text-slate-500 block">David</span>
          I'll bring a fresh double yellow dot ball!
        </div>
      </div>

      <div className="flex items-start justify-end gap-1.5">
        <div className="bg-[#0066FF] text-white p-2 rounded-2xl rounded-tr-xs max-w-[80%] shadow-2xs">
          Great, see you all on Court 2 at 6:30.
        </div>
      </div>

      <div className="flex items-start gap-1.5">
        <div className="w-5 h-5 rounded-full bg-purple-600 text-white text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">
          TL
        </div>
        <div className="bg-white p-2 rounded-2xl rounded-tl-xs border border-slate-200 max-w-[80%] text-slate-800 shadow-2xs">
          <span className="text-[10px] font-semibold text-slate-500 block">Thomas</span>
          Ready. Bringing right wall game.
        </div>
      </div>
    </div>

    {/* Chat Input */}
    <div className="pb-1 pt-2 border-t border-slate-200 flex items-center gap-1.5">
      <input 
        type="text" 
        placeholder="Message match players..." 
        disabled
        className="flex-1 bg-white border border-slate-200 rounded-full px-3 py-1.5 text-xs text-slate-600 placeholder-slate-400"
      />
      <div className="w-7 h-7 rounded-full bg-[#0066FF] text-white flex items-center justify-center">
        <Send className="w-3.5 h-3.5" />
      </div>
    </div>
  </div>
);
