import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Logo } from '../components/Logo';
import { AppButtons } from '../components/AppButtons';
import { HeroVisual } from '../components/HeroVisual';
import { SportsSection } from '../components/SportsSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { 
  Check, 
  ChevronRight, 
  Share2, 
  MapPin, 
  Users, 
  Sparkles, 
  HeartHandshake, 
  Globe, 
  Lock, 
  MessageSquare, 
  CalendarCheck,
  AlertCircle
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-white border-b border-slate-100">
        
        {/* Ambient background depth circles */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[850px] h-[520px] bg-gradient-to-tr from-blue-500/8 via-sky-400/6 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-44 right-12 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-slate-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  {SITE_CONFIG.heroSportsList}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.08] text-balance">
                Schedule the game. <br className="hidden sm:inline" />
                <span className="text-[#0066FF]">Skip the group chat.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                {SITE_CONFIG.heroSubheadline}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <a
                  href="#download"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-2xl bg-slate-950 hover:bg-black text-white text-sm font-semibold tracking-wide transition-all shadow-md active:scale-98"
                >
                  Download CircleUp
                </a>
                <a
                  href="#how-it-works"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-2xl glass-box text-slate-800 hover:text-slate-950 hover:bg-white text-sm font-semibold transition-all border border-slate-200/80 active:scale-98 shadow-xs"
                >
                  See how it works <ChevronRight className="w-4 h-4 ml-1 text-slate-400" />
                </a>
              </div>

              {/* Value checklist */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2.5 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#0066FF]" /> 30-second scheduling
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#0066FF]" /> Multi-sport ready
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#0066FF]" /> Automatic confirmation
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#0066FF]" /> Direct calendar sync
                </span>
              </div>

            </div>

            {/* Right Phone Mockup Preview with 5 Glass Floating Elements */}
            <div className="lg:col-span-5 flex justify-center">
              <HeroVisual />
            </div>

          </div>
        </div>
      </section>


      {/* 2. PRODUCT PRINCIPLE SECTION */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-box p-8 sm:p-12 md:p-14 rounded-3xl border border-slate-200/85 shadow-sm text-center space-y-7">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-inner-chip text-xs font-bold uppercase tracking-wider text-[#0066FF] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" /> The Product Journey
            </div>

            <div className="space-y-3 max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight sm:whitespace-nowrap">
                "Think of someone you want to play with."
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-normal">
                CircleUp transforms that simple thought into a confirmed match in seconds.
              </p>
            </div>

            {/* Visual Sequence */}
            <div className="pt-3 grid grid-cols-2 sm:grid-cols-5 gap-3.5 text-left">
              <div className="p-4 sm:p-5 rounded-2xl glass-inner-chip flex flex-col justify-between space-y-3 border border-slate-200/75 hover:border-[#0066FF]/40 transition-colors">
                <span className="text-xs sm:text-sm font-mono font-bold text-[#0066FF]">01</span>
                <div>
                  <div className="text-sm sm:text-base font-extrabold text-slate-950 tracking-tight leading-snug">Choose Sport</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">8+ sports supported</div>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl glass-inner-chip flex flex-col justify-between space-y-3 border border-slate-200/75 hover:border-[#0066FF]/40 transition-colors">
                <span className="text-xs sm:text-sm font-mono font-bold text-[#0066FF]">02</span>
                <div>
                  <div className="text-sm sm:text-base font-extrabold text-slate-950 tracking-tight leading-snug">Create Match</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">Court, date, & time</div>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl glass-inner-chip flex flex-col justify-between space-y-3 border border-slate-200/75 hover:border-[#0066FF]/40 transition-colors">
                <span className="text-xs sm:text-sm font-mono font-bold text-[#0066FF]">03</span>
                <div>
                  <div className="text-sm sm:text-base font-extrabold text-slate-950 tracking-tight leading-snug">Invite Players</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">Friends, SMS, or email</div>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl glass-inner-chip flex flex-col justify-between space-y-3 border border-slate-200/75 hover:border-[#0066FF]/40 transition-colors">
                <span className="text-xs sm:text-sm font-mono font-bold text-[#0066FF]">04</span>
                <div>
                  <div className="text-sm sm:text-base font-extrabold text-slate-950 tracking-tight leading-snug">Confirmations</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">Auto-lock & calendar</div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-4 sm:p-5 rounded-2xl bg-slate-950 text-white flex flex-col justify-between space-y-3 shadow-md border border-slate-800">
                <span className="text-xs sm:text-sm font-mono font-bold text-[#0066FF]">05</span>
                <div>
                  <div className="text-sm sm:text-base font-extrabold text-white tracking-tight leading-snug">Play Game</div>
                  <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5">Ready on the court</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 3. VISUAL SPORTS SECTION */}
      <SportsSection />


      {/* 4. THE CORE CIRCLEUP STORY & THE COORDINATION PROBLEM */}
      <section id="story" className="py-20 md:py-28 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold uppercase tracking-wider text-[#0066FF]">
              The Core Problem
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Spend less time scheduling. <br />
              Spend more time playing.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              CircleUp brings sports scheduling into one place. Create a match, choose your players, invite your friends, manage responses, and get the game on the calendar without the endless back-and-forth.
            </p>
          </div>

          {/* Contrast: The Friction vs The Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Left: The Coordination Friction */}
            <div className="p-8 sm:p-10 rounded-3xl glass-box border border-red-100/80 bg-red-50/20 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                    The Coordination Friction
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-rose-100/70 text-rose-700 font-semibold">
                    Fragmented
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                  Texts, WhatsApp, emails, and forgotten replies.
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Someone wants to play. They message several people. Some are busy. Someone responds late. Someone drops out last minute. Another person needs to be found. A simple game creates far too much coordination.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-rose-100/60 font-mono text-xs">
                <div className="p-3 rounded-xl bg-white/80 border border-slate-200/60 text-slate-700 shadow-2xs">
                  "Hey who's around Thursday at 6pm for doubles?"
                </div>
                <div className="p-3 rounded-xl bg-white/80 border border-slate-200/60 text-slate-700 shadow-2xs">
                  "I can only do 6:30. Is Mark playing on the left?"
                </div>
                <div className="p-3 rounded-xl bg-white/80 border border-slate-200/60 text-rose-700 shadow-2xs">
                  "Sorry guys, something came up—need 1 more!"
                </div>
              </div>
            </div>

            {/* Right: The CircleUp Solution */}
            <div className="p-8 sm:p-10 rounded-3xl glass-box border border-blue-100/90 bg-blue-50/20 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0066FF]">
                    The CircleUp Flow
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-blue-100/80 text-[#0066FF] font-semibold">
                    Unified
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                  One clean flow from wanting to play to game confirmed.
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  You choose your sport, venue, and time. Select your players. CircleUp collects responses, tracks availability in real time, and automatically locks in the match once required players accept.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-blue-100/60 text-xs">
                <div className="p-3 rounded-xl bg-white/90 border border-slate-200/70 text-slate-900 font-semibold flex items-center justify-between shadow-2xs">
                  <span>Singles or Doubles parameters set</span>
                  <span className="text-emerald-600 font-bold">1 Tap</span>
                </div>
                <div className="p-3 rounded-xl bg-white/90 border border-slate-200/70 text-slate-900 font-semibold flex items-center justify-between shadow-2xs">
                  <span>Player responses tracked live</span>
                  <span className="text-[#0066FF] font-bold">Live Status</span>
                </div>
                <div className="p-3 rounded-xl bg-white/90 border border-slate-200/70 text-slate-900 font-semibold flex items-center justify-between shadow-2xs">
                  <span>Automatic confirmation & calendar sync</span>
                  <span className="text-emerald-600 font-bold">Confirmed</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* 5. INVITING PEOPLE WHO ARE NOT ON CIRCLEUP */}
      <section className="py-20 md:py-28 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-box p-8 sm:p-14 rounded-3xl border border-slate-200/90 shadow-sm">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-inner-chip text-xs font-bold uppercase tracking-wider text-[#0066FF]">
                  <Share2 className="w-3.5 h-3.5 text-[#0066FF]" /> Open Network Invitations
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  Play with the people you already know.
                </h2>
                
                <p className="text-base sm:text-lg text-slate-700 font-medium">
                  Invite friends and players even if they aren't already on CircleUp.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  CircleUp helps make it easier to bring everyone into the match without switching between multiple apps and conversations. Bring friends into a match using supported text or email invitation flows, making it easier to organize the people you already play with.
                </p>

              </div>

              {/* Right Visual Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm p-6 rounded-3xl bg-white border border-slate-200/90 shadow-lg space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-900">Invite Outside Guest</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#0066FF]">
                      Supported Flow
                    </span>
                  </div>

                  <div className="space-y-3 text-xs text-slate-600">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#0066FF] text-white flex items-center justify-center font-bold text-xs">
                        1
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Enter Guest Contact</div>
                        <div className="text-[11px] text-slate-500">Mobile phone or email address</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                        2
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Guest Receives Match Invite</div>
                        <div className="text-[11px] text-slate-500">Single-tap web preview & response</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] text-center text-slate-400 pt-1">
                    Play with friends whether they have the app yet or not.
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* 6. PRIVATE CLUB COMMUNITY FEATURE */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Graphic Badge */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="w-full max-w-sm p-7 rounded-3xl glass-box border border-slate-200/90 shadow-md space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-slate-950 text-white flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 text-sm">Cross-Club Community</h4>
                    <span className="text-[11px] text-slate-500">Connected Athlete Network</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl glass-inner-chip flex items-center justify-between">
                    <span className="font-medium text-slate-700">University / Alumni Club</span>
                    <span className="text-emerald-600 font-bold">Active</span>
                  </div>
                  <div className="p-3 rounded-xl glass-inner-chip flex items-center justify-between">
                    <span className="font-medium text-slate-700">City Athletic Club</span>
                    <span className="text-emerald-600 font-bold">Active</span>
                  </div>
                  <div className="p-3 rounded-xl glass-inner-chip flex items-center justify-between">
                    <span className="font-medium text-slate-700">Local Racquet Center</span>
                    <span className="text-emerald-600 font-bold">Active</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-100 text-[11px] text-slate-600 leading-relaxed">
                  <strong>Notice:</strong> Club access always remains subject to each club’s individual guest and member rules. CircleUp provides match and player coordination.
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-bold uppercase tracking-wider text-[#0066FF]">
                <HeartHandshake className="w-3.5 h-3.5" /> Extended Network
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Your sports community doesn’t stop at one club.
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                CircleUp helps players stay connected with friends, teammates, and other players across their sports community. Organize matches, invite friends, and make it easier to play together wherever the game takes you.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl glass-box space-y-1">
                  <div className="text-xs font-bold text-slate-900">Inter-Club Matches</div>
                  <div className="text-xs text-slate-600">Coordinate friendly home-and-away hits across facilities.</div>
                </div>
                <div className="p-4 rounded-2xl glass-box space-y-1">
                  <div className="text-xs font-bold text-slate-900">Unified Player Circles</div>
                  <div className="text-xs text-slate-600">Keep all your regular hitting partners in one convenient roster.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 7. COMMUNITY VISION SECTION */}
      <section className="py-20 md:py-28 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold uppercase tracking-wider text-[#0066FF]">
            Community Impact
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            More games. Stronger communities.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            The easier it is to organize a game, the more people play. CircleUp is building infrastructure that helps friends, club members, teammates, and sports communities spend less time coordinating and more time together on court, on course, and in the game.
          </p>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-6 rounded-3xl glass-box space-y-2">
              <div className="text-base font-bold text-slate-950">Frictionless Entry</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                When setting up a match takes under a minute, athletes schedule and play far more frequently.
              </p>
            </div>
            <div className="p-6 rounded-3xl glass-box space-y-2">
              <div className="text-base font-bold text-slate-950">Reliable RSVPs</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clear acceptances eliminate ambiguous commitments and last-minute no-shows.
              </p>
            </div>
            <div className="p-6 rounded-3xl glass-box space-y-2">
              <div className="text-base font-bold text-slate-950">Lasting Traditions</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Keep your regular Friday games, weekend foursomes, and club ladders active year-round.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* 8. HOW IT WORKS (Interactive 5 Steps) */}
      <HowItWorksSection />


      {/* 9. COMPLETE 12-FEATURE PRESENTATION */}
      <FeaturesGrid />


      {/* 10. US MARKET + GLOBAL AMBITION */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50/40 to-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold uppercase tracking-wider text-[#0066FF]">
            <Globe className="w-3.5 h-3.5 text-[#0066FF]" /> Market Footprint
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Built in the U.S. Designed to travel.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            CircleUp is growing across sports communities in the United States, with a platform designed to work wherever people organize games.
          </p>

          <div className="pt-4">
            <div className="inline-block p-6 sm:p-8 rounded-3xl glass-box border border-slate-200/90 max-w-xl text-center space-y-3">
              <p className="text-sm sm:text-base font-bold text-slate-900">
                Our ambition is simple: make organizing sports easier, wherever people play.
              </p>
              <p className="text-xs text-slate-500">
                From metropolitan racquet clubs and neighborhood courts to municipal golf courses and suburban leagues.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* 11. LONG-TERM VISION */}
      <section className="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm sm:text-base font-bold bg-white/10 text-slate-100 border border-white/20 backdrop-blur-md shadow-sm">
            Long-Term Vision
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight sm:whitespace-nowrap">
            The scheduling engine for sports.
          </h2>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Sports technology has transformed how athletes train, compete, and track performance. But organizing the game itself still often depends on group chats, texts, and manual coordination. CircleUp is building the scheduling layer that connects wanting to play with actually getting the game on the calendar.
          </p>

          {/* Prominent 4-word statement */}
          <div className="pt-6">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-6 sm:px-10 py-4 sm:py-5 rounded-3xl glass-box-dark border border-white/20 shadow-2xl">
              <span className="text-base sm:text-2xl font-extrabold text-white tracking-wide">Create.</span>
              <span className="text-[#0066FF] text-xl font-bold">•</span>
              <span className="text-base sm:text-2xl font-extrabold text-white tracking-wide">Invite.</span>
              <span className="text-[#0066FF] text-xl font-bold">•</span>
              <span className="text-base sm:text-2xl font-extrabold text-white tracking-wide">Confirm.</span>
              <span className="text-[#0066FF] text-xl font-bold">•</span>
              <span className="text-base sm:text-2xl font-extrabold text-[#0066FF] tracking-wide">Play.</span>
            </div>
          </div>

        </div>
      </section>


      {/* 12. DOWNLOAD CALL TO ACTION */}
      <section id="download" className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50/70 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-box p-8 sm:p-12 md:p-14 rounded-3xl space-y-6 border border-slate-200/90 shadow-md flex flex-col items-center text-center">
            <div className="flex justify-center w-full">
              <Logo size="xl" showWordmark={true} />
            </div>
            
            <h2 className="w-full text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight sm:whitespace-nowrap -translate-x-3 sm:-translate-x-5">
              Ready to schedule your next match?
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 max-w-md mx-auto">
              Download CircleUp and spend less time coordinating and more time playing.
            </p>
            
            <div className="pt-4 flex justify-center w-full">
              <AppButtons size="large" theme="dark" />
            </div>
            
            <div className="pt-2 text-xs text-slate-500 flex items-center justify-center gap-4 w-full">
              <span>Available for iOS and Android</span>
              <span>•</span>
              <button onClick={() => onNavigate('/support')} className="text-[#0066FF] hover:underline font-medium">
                Need Help? Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
