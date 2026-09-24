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
              
              {/* Squash.tv Inspired Broadcast Live Badge - Moved to left, no truncation so Golf is completely visible */}
              <div className="flex justify-start text-left lg:-ml-1 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#061538] border border-[#1d2d5b] shadow-xs text-left shrink-0">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39d078] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39d078]"></span>
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono font-extrabold uppercase tracking-wider text-slate-100 whitespace-nowrap">
                    LIVE ENGINE <span className="text-[#39d078]">•</span> {SITE_CONFIG.heroSportsList}
                  </span>
                </div>
              </div>

              {/* Main Headline - Schedule the game on line 1, Skip the group chat on line 2 */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.14]">
                <span className="block">Schedule the game.</span>
                <span className="block text-[#0066FF]">Skip the group chat.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                {SITE_CONFIG.heroSubheadline}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full max-w-xs sm:max-w-none mx-auto lg:mx-0">
                <a
                  href="#download"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-2xl bg-[#0066FF] hover:bg-[#0052cc] text-white text-sm font-bold tracking-wide transition-all shadow-lg shadow-blue-500/20 active:scale-98 cursor-pointer"
                >
                  Download CircleUp
                </a>
                <a
                  href="#how-it-works"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 text-sm font-bold transition-all border border-slate-300 active:scale-98 shadow-sm cursor-pointer"
                >
                  See how it works <ChevronRight className="w-4 h-4 ml-1 text-slate-400" />
                </a>
              </div>

              {/* Value checklist */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-sm sm:text-base text-slate-800 font-semibold max-w-lg mx-auto lg:mx-0">
                <span className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-[#0066FF] shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <span>30-sec scheduling</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-[#0066FF] shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <span>Multi-sport ready</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-[#0066FF] shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <span>Auto confirmation</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-[#0066FF] shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <span>Calendar sync</span>
                </span>
              </div>

            </div>

            {/* Right Phone Mockup Preview */}
            <div className="lg:col-span-5 flex justify-center overflow-visible">
              <HeroVisual />
            </div>

          </div>
        </div>
      </section>


      {/* 2. PRODUCT PRINCIPLE SECTION */}
      <section className="py-20 md:py-28 bg-[#000d2a] text-white border-b border-[#1d2d5b] relative overflow-hidden">
        {/* Subtle tournament court lighting ambient */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[250px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="squash-card-navy p-6 sm:p-12 md:p-16 rounded-3xl border border-[#1d2d5b] shadow-2xl text-center space-y-8 sm:space-y-10">
            
            <div className="space-y-4 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#081e51] text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#39d078] border border-[#404f9a]/50 shadow-inner">
                <Sparkles className="w-4 h-4 text-[#39d078]" /> Experience The Difference
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                The Product Journey
              </h2>

              <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#39d078] tracking-tight">
                "Think of someone you want to play with."
              </p>

              <p className="text-base sm:text-xl text-[#8e9cbc] font-normal max-w-2xl mx-auto leading-relaxed">
                CircleUp transforms that simple thought into a confirmed match in seconds.
              </p>
            </div>

            {/* Visual Sequence */}
            <div className="pt-2 sm:pt-4 grid grid-cols-1 sm:grid-cols-5 gap-3.5 sm:gap-4 text-left">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#061538]/90 flex flex-col justify-between space-y-3 border border-[#1d2d5b] hover:border-[#39d078]/60 transition-colors shadow-sm">
                <span className="text-sm sm:text-base font-mono font-extrabold text-[#39d078]">01</span>
                <div>
                  <div className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">Choose Sport</div>
                  <div className="text-xs sm:text-sm text-[#8e9cbc] font-medium mt-1">8+ sports supported</div>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#061538]/90 flex flex-col justify-between space-y-3 border border-[#1d2d5b] hover:border-[#39d078]/60 transition-colors shadow-sm">
                <span className="text-sm sm:text-base font-mono font-extrabold text-[#39d078]">02</span>
                <div>
                  <div className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">Create Match</div>
                  <div className="text-xs sm:text-sm text-[#8e9cbc] font-medium mt-1">Court, date, & time</div>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#061538]/90 flex flex-col justify-between space-y-3 border border-[#1d2d5b] hover:border-[#39d078]/60 transition-colors shadow-sm">
                <span className="text-sm sm:text-base font-mono font-extrabold text-[#39d078]">03</span>
                <div>
                  <div className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">Invite Players</div>
                  <div className="text-xs sm:text-sm text-[#8e9cbc] font-medium mt-1">Friends, SMS, or email</div>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#061538]/90 flex flex-col justify-between space-y-3 border border-[#1d2d5b] hover:border-[#39d078]/60 transition-colors shadow-sm">
                <span className="text-sm sm:text-base font-mono font-extrabold text-[#39d078]">04</span>
                <div>
                  <div className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">Confirmations</div>
                  <div className="text-xs sm:text-sm text-[#8e9cbc] font-medium mt-1">Auto-lock & calendar</div>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#0066FF] text-white flex flex-col justify-between space-y-3 shadow-xl border border-blue-400/40">
                <span className="text-sm sm:text-base font-mono font-extrabold text-white">05</span>
                <div>
                  <div className="text-base sm:text-lg font-black text-white tracking-tight leading-snug">Play Game</div>
                  <div className="text-xs sm:text-sm text-blue-100 font-semibold mt-1">Ready on the court</div>
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0066FF] shadow-2xs">
              The Core Problem
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-tight">
              Spend less time scheduling. <br />
              Spend more time playing.
            </h2>
            <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
              CircleUp brings sports scheduling into one place. Create a match, choose your players, invite your friends, manage responses, and get the game on the calendar without the endless back-and-forth.
            </p>
          </div>

          {/* Contrast: The Friction vs The Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Left: The Coordination Friction */}
            <div className="p-6 sm:p-10 rounded-3xl glass-box border border-red-200/70 bg-red-50/20 space-y-6 flex flex-col justify-between shadow-xs">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-rose-600">
                    The Coordination Friction
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-rose-100 text-rose-700 font-bold">
                    Fragmented
                  </span>
                </div>
                <h3 className="text-xl sm:text-3xl font-extrabold text-slate-950 leading-snug">
                  Texts, WhatsApp, emails, and forgotten replies.
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Someone wants to play. They message several people. Some are busy. Someone responds late. Someone drops out last minute. Another person needs to be found. A simple game creates far too much coordination.
                </p>
              </div>

              <div className="space-y-3 pt-5 border-t border-rose-100">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-rose-100 text-slate-800 font-medium text-sm sm:text-base shadow-sm flex items-start gap-3">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">💬</span>
                  <span>"Hey who's around Thursday at 6pm for doubles?"</span>
                </div>
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-rose-100 text-slate-800 font-medium text-sm sm:text-base shadow-sm flex items-start gap-3">
                  <span className="text-amber-500 font-bold shrink-0 mt-0.5">⏳</span>
                  <span>"I can only do 6:30. Is Mark playing on the left?"</span>
                </div>
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-rose-100 text-rose-700 font-medium text-sm sm:text-base shadow-sm flex items-start gap-3">
                  <span className="text-rose-600 font-bold shrink-0 mt-0.5">⚠️</span>
                  <span>"Sorry guys, something came up, need 1 more!"</span>
                </div>
              </div>
            </div>

            {/* Right: The CircleUp Solution */}
            <div className="p-6 sm:p-10 rounded-3xl glass-box border border-blue-200/70 bg-blue-50/20 space-y-6 flex flex-col justify-between shadow-xs">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0066FF]">
                    The CircleUp Flow
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-[#0066FF] font-bold">
                    Unified
                  </span>
                </div>
                <h3 className="text-xl sm:text-3xl font-extrabold text-slate-950 leading-snug">
                  One clean flow from wanting to play to game confirmed.
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  You choose your sport, venue, and time. Select your players. CircleUp collects responses, tracks availability in real time, and automatically locks in the match once required players accept.
                </p>
              </div>

              <div className="space-y-3 pt-5 border-t border-blue-100">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-blue-100 text-slate-900 font-bold text-sm sm:text-base flex items-center justify-between shadow-sm">
                  <span className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>Singles or Doubles parameters set</span>
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">1 Tap</span>
                </div>
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-blue-100 text-slate-900 font-bold text-sm sm:text-base flex items-center justify-between shadow-sm">
                  <span className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF] shrink-0" />
                    <span>Player responses tracked live</span>
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200">Live Status</span>
                </div>
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-blue-100 text-slate-900 font-bold text-sm sm:text-base flex items-center justify-between shadow-sm">
                  <span className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0" />
                    <span>Automatic confirmation & calendar sync</span>
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">Confirmed</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* 5. INVITING PEOPLE WHO ARE NOT ON CIRCLEUP */}
      <section className="py-20 md:py-28 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-box p-8 sm:p-14 md:p-16 rounded-3xl border border-slate-200/90 shadow-sm">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-inner-chip text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0066FF]">
                  <Share2 className="w-4 h-4 text-[#0066FF]" /> Open Network Invitations
                </div>

                <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                  Play with the people you already know.
                </h2>
                
                <p className="text-lg sm:text-xl text-slate-800 font-semibold leading-snug">
                  Invite friends and players even if they aren't already on CircleUp.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  CircleUp helps make it easier to bring everyone into the match without switching between multiple apps and conversations. Bring friends into a match using supported text or email invitation flows, making it easier to organize the people you already play with.
                </p>

              </div>

              {/* Right Visual Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-md p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xl space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-sm font-bold text-slate-900">Invite Outside Guest</span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-[#0066FF]">
                      Supported Flow
                    </span>
                  </div>

                  <div className="space-y-3.5 text-sm text-slate-700">
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center gap-3.5">
                      <div className="w-8 h-8 rounded-xl bg-[#0066FF] text-white flex items-center justify-center font-bold text-sm shrink-0">
                        1
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm sm:text-base">Enter Guest Contact</div>
                        <div className="text-xs sm:text-sm text-slate-500">Mobile phone or email address</div>
                      </div>
                    </div>

                    <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center gap-3.5">
                      <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                        2
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm sm:text-base">Guest Receives Match Invite</div>
                        <div className="text-xs sm:text-sm text-slate-500">Single-tap web preview & response</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs sm:text-sm text-center text-slate-500 font-medium pt-1">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Graphic Badge */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="w-full max-w-md p-7 sm:p-8 rounded-3xl glass-box border border-slate-200/90 shadow-md space-y-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-950 text-base sm:text-lg">Cross-Club Community</h4>
                    <span className="text-xs sm:text-sm text-slate-500 font-medium">Connected Athlete Network</span>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-2xl glass-inner-chip flex items-center justify-between">
                    <span className="font-semibold text-slate-800">University / Alumni Club</span>
                    <span className="text-emerald-600 font-bold">Active</span>
                  </div>
                  <div className="p-3.5 rounded-2xl glass-inner-chip flex items-center justify-between">
                    <span className="font-semibold text-slate-800">City Athletic Club</span>
                    <span className="text-emerald-600 font-bold">Active</span>
                  </div>
                  <div className="p-3.5 rounded-2xl glass-inner-chip flex items-center justify-between">
                    <span className="font-semibold text-slate-800">Local Racquet Center</span>
                    <span className="text-emerald-600 font-bold">Active</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 font-bold">Notice:</strong> Club access always remains subject to each club’s individual guest and member rules. CircleUp provides match and player coordination.
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0066FF]">
                <HeartHandshake className="w-4 h-4" /> Extended Network
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-tight">
                Your sports community doesn’t stop at one club.
              </h2>

              <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
                CircleUp helps players stay connected with friends, teammates, and other players across their sports community. Organize matches, invite friends, and make it easier to play together wherever the game takes you.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl glass-box space-y-1.5 border border-slate-200/80">
                  <div className="text-sm sm:text-base font-bold text-slate-950">Inter-Club Matches</div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">Coordinate friendly home-and-away hits across facilities.</div>
                </div>
                <div className="p-5 rounded-2xl glass-box space-y-1.5 border border-slate-200/80">
                  <div className="text-sm sm:text-base font-bold text-slate-950">Unified Player Circles</div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">Keep all your regular hitting partners in one convenient roster.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 7. COMMUNITY VISION SECTION */}
      <section className="py-20 md:py-28 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0066FF]">
            Community Impact
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-tight">
            More games. <br className="hidden sm:inline" />
            Stronger communities.
          </h2>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            The easier it is to organize a game, the more people play. CircleUp is building infrastructure that helps friends, club members, teammates, and sports communities spend less time coordinating and more time together on court, on course, and in the game.
          </p>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
            <div className="p-7 sm:p-8 rounded-3xl glass-box space-y-2.5 border border-slate-200/90 shadow-sm">
              <div className="text-lg sm:text-xl font-black text-slate-950">Frictionless Entry</div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                When setting up a match takes under a minute, athletes schedule and play far more frequently.
              </p>
            </div>
            <div className="p-7 sm:p-8 rounded-3xl glass-box space-y-2.5 border border-slate-200/90 shadow-sm">
              <div className="text-lg sm:text-xl font-black text-slate-950">Reliable RSVPs</div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Clear acceptances eliminate ambiguous commitments and last-minute no-shows.
              </p>
            </div>
            <div className="p-7 sm:p-8 rounded-3xl glass-box space-y-2.5 border border-slate-200/90 shadow-sm">
              <div className="text-lg sm:text-xl font-black text-slate-950">Lasting Traditions</div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
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
      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50/40 to-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0066FF]">
            <Globe className="w-4 h-4 text-[#0066FF]" /> Market Footprint
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-tight">
            Built in the U.S. Designed to travel.
          </h2>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            CircleUp is growing across sports communities in the United States, with a platform designed to work wherever people organize games.
          </p>

          <div className="pt-6 sm:pt-8 w-full max-w-3xl mx-auto">
            <div className="p-8 sm:p-12 md:p-14 rounded-3xl glass-box border border-slate-200/90 shadow-lg text-center space-y-4 sm:space-y-5">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-950 leading-snug tracking-tight">
                Our ambition is simple: make organizing sports easier, wherever people play.
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
                From metropolitan racquet clubs and neighborhood courts to municipal golf courses and suburban leagues.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* 11. LONG-TERM VISION */}
      <section className="py-24 md:py-32 bg-[#000d2a] text-white relative overflow-hidden border-t border-[#1d2d5b]">
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#39d078]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#081e51] text-[#39d078] border border-[#404f9a]/60 backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#39d078] animate-pulse" /> Long-Term Vision
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            The scheduling engine for sports.
          </h2>

          <p className="text-base sm:text-xl text-[#8e9cbc] leading-relaxed max-w-2xl mx-auto font-normal">
            Sports technology has transformed how athletes train, compete, and track performance. But organizing the game itself still often depends on group chats, texts, and manual coordination. CircleUp is building the scheduling layer that connects wanting to play with actually getting the game on the calendar.
          </p>

          {/* Prominent 4-word statement */}
          <div className="pt-4 sm:pt-6">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-6 px-4 sm:px-10 py-3 sm:py-5 rounded-2xl sm:rounded-3xl squash-card-navy border border-[#404f9a]/50 shadow-2xl">
              <span className="text-sm sm:text-2xl font-extrabold text-white tracking-wide">Create.</span>
              <span className="text-[#39d078] text-sm sm:text-xl font-bold">•</span>
              <span className="text-sm sm:text-2xl font-extrabold text-white tracking-wide">Invite.</span>
              <span className="text-[#39d078] text-sm sm:text-xl font-bold">•</span>
              <span className="text-sm sm:text-2xl font-extrabold text-white tracking-wide">Confirm.</span>
              <span className="text-[#39d078] text-sm sm:text-xl font-bold">•</span>
              <span className="text-sm sm:text-2xl font-extrabold text-[#39d078] tracking-wide">Play.</span>
            </div>
          </div>

        </div>
      </section>


      {/* 12. DOWNLOAD CALL TO ACTION */}
      <section id="download" className="py-16 md:py-28 bg-gradient-to-b from-white to-slate-50/70 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-box p-6 sm:p-12 md:p-14 rounded-2xl sm:rounded-3xl space-y-5 sm:space-y-6 border border-slate-200/90 shadow-md flex flex-col items-center text-center">
            <div className="flex justify-center w-full">
              <Logo size="xl" showWordmark={true} />
            </div>
            
            <h2 className="w-full text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Ready to schedule your next match?
            </h2>
            
            <p className="text-sm sm:text-lg text-slate-600 max-w-md mx-auto">
              Download CircleUp and spend less time coordinating and more time playing.
            </p>
            
            <div className="pt-3 sm:pt-4 flex justify-center w-full">
              <AppButtons size="large" theme="dark" />
            </div>
            
            <div className="pt-2 text-xs text-slate-500 flex flex-wrap items-center justify-center gap-2 sm:gap-4 w-full">
              <span>Available for iOS and Android</span>
              <span className="hidden sm:inline">•</span>
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
