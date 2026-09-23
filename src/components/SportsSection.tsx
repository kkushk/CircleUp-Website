import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { 
  Activity, 
  Users, 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Shield,
  Layers,
  Sparkles
} from 'lucide-react';

interface SportData {
  id: string;
  name: string;
  type: string;
  format: string;
  court: string;
  duration: string;
  description: string;
  highlight: string;
  popularFormat: string;
}

export const SportsSection: React.FC = () => {
  const [selectedSport, setSelectedSport] = useState<string>('squash');

  const sportsList: SportData[] = [
    {
      id: 'squash',
      name: 'Squash',
      type: 'Racquet Sport',
      format: 'Singles & Doubles',
      court: 'Indoor Squash Courts',
      duration: '45-Min Standard Blocks',
      description: 'Engineered around club courts, ladder challenges, and 45-minute court booking slots. Matches lock in the moment both players accept.',
      highlight: 'Where CircleUp began',
      popularFormat: '1v1 Singles'
    },
    {
      id: 'sda-doubles',
      name: 'SDA Doubles',
      type: 'Hardball Squash',
      format: '4-Player Doubles',
      court: 'Doubles Hardball Court',
      duration: '60–75 Min Match Blocks',
      description: 'Built specifically for 4-player rosters with left-wall and right-wall side preferences to ensure balanced, ready-to-play court pairings.',
      highlight: 'Left & Right Wall Preferences',
      popularFormat: '2v2 Doubles'
    },
    {
      id: 'tennis',
      name: 'Tennis',
      type: 'Racquet Sport',
      format: 'Singles & Doubles',
      court: 'Outdoor & Indoor Courts',
      duration: '60–90 Min Sessions',
      description: 'Set up competitive sets, casual rally sessions, and doubles matches without scrambling through disjointed text threads.',
      highlight: 'Singles & Doubles Formats',
      popularFormat: 'Best of 3 Sets or Rally'
    },
    {
      id: 'padel',
      name: 'Padel',
      type: 'Racquet Sport',
      format: '4-Player Doubles',
      court: 'Enclosed Glass Courts',
      duration: '60–90 Min Matches',
      description: 'Coordinate 4 players effortlessly for fast-growing padel communities where finding the fourth player is usually the hardest step.',
      highlight: 'Effortless 4th Player Sourcing',
      popularFormat: '2v2 Doubles'
    },
    {
      id: 'platform-tennis',
      name: 'Platform Tennis',
      type: 'Paddle Sport',
      format: 'Doubles only',
      court: 'Heated Screened Courts',
      duration: '60–90 Min Blocks',
      description: 'Screened court play, wire bounces, and cold-weather heated deck doubles scheduling built for platform tennis enthusiasts.',
      highlight: 'Heated Court & Deck Play',
      popularFormat: '2v2 Doubles'
    },
    {
      id: 'pickleball',
      name: 'Pickleball',
      type: 'Paddle Sport',
      format: 'Doubles & Singles',
      court: 'Dedicated & Shared Courts',
      duration: '60 Min Rotations',
      description: 'Fast game coordination for 4-player doubles and community court rotations. Fill your court in seconds.',
      highlight: 'Rapid Court Filling',
      popularFormat: '2v2 Doubles'
    },
    {
      id: 'golf',
      name: 'Golf',
      type: 'Recreation & Club',
      format: 'Foursomes & Pairs',
      court: 'Golf Courses & Driving Ranges',
      duration: '9 or 18 Holes',
      description: 'Coordinate your four-ball, weekend tee times, or practice rounds without days of back-and-forth coordination.',
      highlight: 'Tee-Time Groups',
      popularFormat: 'Foursome (4 Players)'
    },
    {
      id: 'badminton',
      name: 'Badminton',
      type: 'Racquet Sport',
      format: 'Singles & Doubles',
      court: 'Indoor Sports Halls',
      duration: '45–60 Min Slots',
      description: 'Quick rally play coordination with clear player status, court selection, and reliable participant confirmations.',
      highlight: 'Fast Rally Matching',
      popularFormat: 'Singles & Pairs'
    },
  ];

  const activeSportData = sportsList.find((s) => s.id === selectedSport) || sportsList[0];

  return (
    <section id="sports" className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50/40 to-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold uppercase tracking-wider text-[#0066FF] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" /> Multi-Sport Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Whatever you play, <br className="hidden sm:inline" />
            scheduling should be simple.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From squash and tennis to padel, platform tennis, pickleball, badminton, golf, and more, CircleUp is making it easier to organize the games people already want to play.
          </p>
        </div>

        {/* Sports Horizontal Selector Pills */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 pt-1 mb-6 sm:mb-8 no-scrollbar scroll-smooth">
          {sportsList.map((sport) => {
            const isSelected = sport.id === selectedSport;
            return (
              <button
                key={sport.id}
                onClick={() => setSelectedSport(sport.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 flex items-center gap-1.5 sm:gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-950 text-white shadow-sm ring-1 ring-slate-900 scale-102'
                    : 'glass-pill text-slate-700 hover:text-slate-950 hover:bg-white'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#0066FF]' : 'bg-slate-300'}`} />
                <span>{sport.name}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Sport Detail Glass Card */}
        <div className="squash-card-navy rounded-2xl sm:rounded-3xl p-5 sm:p-10 mb-8 sm:mb-12 shadow-2xl border border-[#1d2d5b] transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left Detail Info */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-left">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#0066FF]/20 text-[#0066FF] text-[11px] sm:text-xs font-mono font-bold border border-blue-500/30">
                  {activeSportData.type}
                </span>
                <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#061538] text-[#8e9cbc] text-[11px] sm:text-xs font-mono font-semibold border border-[#1d2d5b]">
                  {activeSportData.highlight}
                </span>
              </div>

              <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                {activeSportData.name} Scheduling
              </h3>

              <p className="text-[#8e9cbc] text-xs sm:text-base leading-relaxed">
                {activeSportData.description}
              </p>

              <div className="pt-1 sm:pt-2 max-w-xs">
                <div className="bg-[#061538] p-3 sm:p-3.5 rounded-xl border border-[#1d2d5b]">
                  <div className="text-[10px] uppercase font-mono font-bold text-[#8e9cbc]">Match Format</div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5">{activeSportData.format}</div>
                </div>
              </div>
            </div>

            {/* Right Visual Badge Display */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#000d2a] text-white shadow-2xl space-y-3 sm:space-y-4 border border-[#404f9a]/60">
                <div className="flex items-center justify-between border-b border-[#1d2d5b] pb-2.5 sm:pb-3">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#0066FF] flex items-center justify-center font-black text-white text-xs shadow-md">
                      CU
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-white">{activeSportData.name} Match</div>
                      <div className="text-[10px] font-mono text-[#8e9cbc]">CircleUp Engine</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 sm:px-2.5 py-0.5 rounded-full bg-[#39d078]/15 text-[#39d078] border border-[#39d078]/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#39d078] animate-pulse" /> Ready
                  </span>
                </div>

                <div className="space-y-1.5 sm:space-y-2 text-xs text-[#8e9cbc]">
                  <div className="flex items-center justify-between py-1 sm:py-1.5 border-b border-[#1d2d5b]/60">
                    <span className="text-slate-400">Standard Setup</span>
                    <span className="font-semibold text-white">{activeSportData.popularFormat}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 sm:py-1.5 border-b border-[#1d2d5b]/60">
                    <span className="text-slate-400">Player Coordination</span>
                    <span className="font-semibold text-white">Automated RSVP</span>
                  </div>
                  <div className="flex items-center justify-between py-1 sm:py-1.5">
                    <span className="text-slate-400">Calendar Sync</span>
                    <span className="font-semibold text-[#39d078] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#39d078]" /> Direct Sync
                    </span>
                  </div>
                </div>

                <div className="pt-1">
                  <div className="text-[10px] sm:text-[11px] font-mono text-[#8e9cbc] text-center">
                    CHOOSE SPORT • INVITE • MATCH LOCKED
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 8-Card Responsive Sports Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
          {sportsList.map((sport) => {
            const isSelected = sport.id === selectedSport;
            return (
              <div
                key={sport.id}
                onClick={() => setSelectedSport(sport.id)}
                className={`p-3.5 sm:p-5 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-200 text-left ${
                  isSelected
                    ? 'squash-card-navy ring-2 ring-[#39d078] shadow-xl'
                    : 'bg-white hover:bg-slate-50 border border-slate-200/90 shadow-2xs hover:border-[#0066FF]/40'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isSelected ? 'text-[#39d078]' : 'text-slate-400'}`}>
                    {sport.type}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#39d078] animate-pulse" />
                  )}
                </div>
                <h4 className={`text-base sm:text-lg font-bold tracking-tight ${isSelected ? 'text-white' : 'text-slate-950'}`}>
                  {sport.name}
                </h4>
                <p className={`text-xs mt-1 line-clamp-2 ${isSelected ? 'text-[#8e9cbc]' : 'text-slate-500'}`}>
                  {sport.format}
                </p>
              </div>
            );
          })}
        </div>

        {/* Positioning Subtext */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl glass-box border border-slate-200/90 text-center max-w-3xl mx-auto space-y-4 shadow-sm">
          <p className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-950 tracking-tight leading-snug">
            {SITE_CONFIG.heroPositioning}
          </p>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            One clean scheduling flow designed around how recreational and competitive players actually get on court and on course.
          </p>
        </div>

      </div>
    </section>
  );
};
