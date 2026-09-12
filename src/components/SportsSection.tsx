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
      id: 'table-tennis',
      name: 'Table Tennis',
      type: 'Paddle Sport',
      format: 'Singles & Doubles',
      court: 'Club & Recreation Tables',
      duration: '30–45 Min Games',
      description: 'Set up quick games and friendly matches across sports clubs, rec centers, and office athletic lounges.',
      highlight: 'Quick Match Setup',
      popularFormat: '1v1 Singles'
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
    }
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
            From squash and tennis to padel, pickleball, badminton, table tennis, golf, and more CircleUp is making it easier to organize the games people already want to play.
          </p>
        </div>

        {/* Sports Horizontal Selector Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 pt-1 mb-8 no-scrollbar scroll-smooth">
          {sportsList.map((sport) => {
            const isSelected = sport.id === selectedSport;
            return (
              <button
                key={sport.id}
                onClick={() => setSelectedSport(sport.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 flex items-center gap-2 cursor-pointer ${
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
        <div className="glass-box rounded-3xl p-6 sm:p-10 mb-12 shadow-sm border border-slate-200/90 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Detail Info */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] text-xs font-bold border border-blue-100/90">
                  {activeSportData.type}
                </span>
                <span className="px-3 py-1 rounded-full glass-inner-chip text-slate-700 text-xs font-medium">
                  {activeSportData.highlight}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                {activeSportData.name} Scheduling
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {activeSportData.description}
              </p>

              <div className="pt-2 max-w-xs">
                <div className="glass-inner-chip p-3.5 rounded-xl">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Match Format</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">{activeSportData.format}</div>
                </div>
              </div>
            </div>

            {/* Right Visual Badge Display */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 text-white shadow-xl space-y-4 border border-slate-800">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#0066FF] flex items-center justify-center font-bold text-white text-xs">
                      CU
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{activeSportData.name} Match</div>
                      <div className="text-[10px] text-slate-400">CircleUp Engine</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Ready to Play
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Standard Setup</span>
                    <span className="font-semibold text-white">{activeSportData.popularFormat}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Player Coordination</span>
                    <span className="font-semibold text-white">Automated RSVP</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-slate-400">Calendar Sync</span>
                    <span className="font-semibold text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Direct to Device
                    </span>
                  </div>
                </div>

                <div className="pt-1">
                  <div className="text-[11px] text-slate-400 text-center italic">
                    "Choose sport • Invite players • Match locked"
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 8-Card Responsive Sports Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
          {sportsList.map((sport) => {
            const isSelected = sport.id === selectedSport;
            return (
              <div
                key={sport.id}
                onClick={() => setSelectedSport(sport.id)}
                className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-200 text-left ${
                  isSelected
                    ? 'glass-box ring-2 ring-[#0066FF] shadow-sm bg-white'
                    : 'glass-box glass-box-hover hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {sport.type}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
                  )}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-950">
                  {sport.name}
                </h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
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
