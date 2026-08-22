import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Logo } from '../components/Logo';
import { AppButtons } from '../components/AppButtons';
import { PhoneMockup } from '../components/PhoneMockup';
import { 
  ScreenHome, 
  ScreenCreateMatch, 
  ScreenInvitePlayers, 
  ScreenMatchConfirmed, 
  ScreenMatchChat 
} from '../components/AppScreenshots';
import { 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle2, 
  MessageSquare, 
  Bell, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  ChevronRight,
  PlusCircle,
  Activity,
  Layers,
  Check
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeDemoStep, setActiveDemoStep] = useState(0);

  const demoSteps = [
    {
      step: '01',
      title: 'Create Match',
      subtitle: 'Sport, location, date, & time in seconds',
      description: 'Select Squash or SDA Doubles, your home club or courts, and preferred match timing.',
      screen: <ScreenCreateMatch />,
      badge: 'Step 1: Setup'
    },
    {
      step: '02',
      title: 'Invite Players',
      subtitle: 'Pick your roster with wall preferences',
      description: 'Choose playing partners and opponents. In doubles, see left or right wall preferences automatically.',
      screen: <ScreenInvitePlayers />,
      badge: 'Step 2: Invites'
    },
    {
      step: '03',
      title: 'Match Confirmed',
      subtitle: 'Automatic confirmation when roster is full',
      description: 'CircleUp coordinates responses. Once everyone accepts, the match locks in and syncs to calendar.',
      screen: <ScreenMatchConfirmed />,
      badge: 'Step 3: Confirmed'
    },
    {
      step: '04',
      title: 'Match Chat',
      subtitle: 'Dedicated chat per game—no group text spam',
      description: 'Coordinate balls, warm-up times, and post-match updates inside a tidy single-match thread.',
      screen: <ScreenMatchChat />,
      badge: 'Step 4: Game Time'
    },
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-12 md:pt-10 md:pb-16 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-[#0066FF] border border-blue-100/90 shadow-2xs">
                <span className="text-slate-800 font-medium text-base">{SITE_CONFIG.heroPositioning}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.1] text-balance">
                Schedule the game. <br className="hidden sm:inline" />
                <span className="text-[#0066FF]">Skip the group chat.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                {SITE_CONFIG.heroSubheadline}
              </p>

              {/* CTAs */}
              <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <AppButtons size="large" theme="dark" />
                <a
                  href="#how-it-works"
                  className="px-5 py-3 text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors flex items-center gap-1.5"
                >
                  See how it works <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>

              {/* Value check items */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#0066FF]" /> Fast 30-second scheduling
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#0066FF]" /> Squash & SDA Doubles ready
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#0066FF]" /> Direct calendar sync
                </span>
              </div>
            </div>

            {/* Right Phone Mockup Preview */}
            <div className="lg:col-span-5 flex justify-center relative lg:-mt-6">
              {/* Subtle background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-100/60 rounded-full blur-3xl -z-10 pointer-events-none" />
              
              <PhoneMockup className="max-w-[285px] sm:max-w-[305px]">
                <ScreenHome />
              </PhoneMockup>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-100/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="text-[26px] font-bold uppercase tracking-widest text-[#0066FF]">
            The Problem
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Playing is easy. <br />
            Scheduling shouldn't be the hard part.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Getting the right players on the same court often means endless texts, changing times, waiting for replies, and trying to figure out who's actually confirmed. CircleUp replaces that coordination with one simple scheduling flow.
          </p>

          <div className="pt-2">
            <span className="inline-block text-sm sm:text-base font-bold text-slate-900 glass-pill px-5 py-2.5 rounded-2xl shadow-xs">
              {SITE_CONFIG.brandPunchlines.lessCoordinating}
            </span>
          </div>

          {/* Group Chat Chaos vs CircleUp Progression (Unified Black Badges & Classy Glass View Boxes) */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
            
            {/* Step 1: The Chaos */}
            <div className="glass-box glass-box-hover p-6 rounded-2xl flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-slate-950 text-white flex items-center justify-center font-bold text-xs tracking-wider shadow-xs">
                  01
                </div>
                <h3 className="font-bold text-slate-950 text-base">Group Chat Chaos</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Endless messaging threads, "who is free Thursday?", mismatched schedules, forgotten replies, and double-bookings.
                </p>
              </div>
              <div className="p-3 glass-inner-chip rounded-xl text-[11px] text-slate-600 font-mono italic">
                "Wait, are we playing at 6 or 6:30? Is David in?"
              </div>
            </div>

            {/* Step 2: The CircleUp Layer */}
            <div className="glass-box glass-box-hover p-6 rounded-2xl flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-slate-950 text-white flex items-center justify-center font-bold text-xs tracking-wider shadow-xs">
                  02
                </div>
                <h3 className="font-bold text-slate-950 text-base">CircleUp Flow</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The organizer picks sport, venue, and time. Selects players. CircleUp collects responses and organizes availability.
                </p>
              </div>
              <div className="p-3 glass-inner-chip rounded-xl text-[11px] text-slate-900 font-semibold flex items-center gap-1.5">
                <span>Single invite • One-tap RSVP • Instant sync</span>
              </div>
            </div>

            {/* Step 3: Confirmed Match */}
            <div className="glass-box glass-box-hover p-6 rounded-2xl flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-slate-950 text-white flex items-center justify-center font-bold text-xs tracking-wider shadow-xs">
                  03
                </div>
                <h3 className="font-bold text-slate-950 text-base">Confirmed Match</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The moment required players accept, the match locks. Calendar invites add directly to your phone. Ready to play.
                </p>
              </div>
              <div className="p-3 glass-inner-chip rounded-xl text-[11px] text-slate-900 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-900" /> 4/4 Confirmed • Court 2
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. HOW CIRCLEUP WORKS (Section 10) */}
      <section id="how-it-works" className="py-20 md:py-28 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="text-[26px] font-bold uppercase tracking-widest text-[#0066FF]">
              How It Works
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
              {SITE_CONFIG.brandPunchlines.fromIdeaToMatch}
            </h2>
            <p className="text-base text-slate-600">
              Four clean steps designed around the exact flow athletes use to organize matches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="glass-box glass-box-hover p-7 rounded-3xl flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="w-7 h-7 rounded-lg bg-slate-950 text-white flex items-center justify-center font-bold text-xs tracking-wider font-mono shadow-xs">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-950">Create your match</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Choose your sport (Squash or SDA Doubles), location, date, and start time with a few quick taps.
                </p>
              </div>
              <div className="pt-2 text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-900" /> Sport & Court Setup
              </div>
            </div>

            {/* Step 2 */}
            <div className="glass-box glass-box-hover p-7 rounded-3xl flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="w-7 h-7 rounded-lg bg-slate-950 text-white flex items-center justify-center font-bold text-xs tracking-wider font-mono shadow-xs">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-950">Invite your players</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Choose the people you want to play with. CircleUp supports bringing players into the scheduling experience through supported invitation methods.
                </p>
              </div>
              <div className="pt-2 text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-slate-900" /> Player Roster & Sides
              </div>
            </div>

            {/* Step 3 */}
            <div className="glass-box glass-box-hover p-7 rounded-3xl flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="w-7 h-7 rounded-lg bg-slate-950 text-white flex items-center justify-center font-bold text-xs tracking-wider font-mono shadow-xs">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-950">CircleUp coordinates</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Players respond to invitations without forcing the organizer to manually follow up with everyone. CircleUp sends relevant notifications according to user preferences.
                </p>
              </div>
              <div className="pt-2 text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                <Bell className="w-4 h-4 text-slate-900" /> Automated Follow-ups
              </div>
            </div>

            {/* Step 4 */}
            <div className="glass-box glass-box-hover p-7 rounded-3xl flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="w-7 h-7 rounded-lg bg-slate-950 text-white flex items-center justify-center font-bold text-xs tracking-wider font-mono shadow-xs">
                  04
                </div>
                <h3 className="text-lg font-bold text-slate-950">Play</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Once required players accept, the match confirms. See match details, communicate in dedicated match chat, add to calendar, and play.
                </p>
              </div>
              <div className="pt-2 text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-slate-900" /> Match Confirmed & Synced
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. PRODUCT FEATURES (Alternating visual layout - Section 11) */}
      <section id="product" className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-[26px] font-bold uppercase tracking-widest text-[#0066FF]">
              Features
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
              Crafted for sports scheduling.
            </h2>
            <p className="text-base text-slate-600">
              Every detail is engineered to eliminate back-and-forth friction so you can focus on playing.
            </p>
          </div>

          {/* Feature 1: Fast Match Scheduling & Automatic Confirmation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="px-3.5 py-1.5 glass-pill text-slate-900 font-bold text-xs rounded-full inline-block">
                Fast Match Scheduling
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                Create singles or doubles matches without coordinating across multiple chats.
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Set up your match parameters in under a minute. When the required number of players accepts, CircleUp automatically confirms the match and notifies participants.
              </p>
              <div className="glass-box p-4 rounded-2xl space-y-2 text-xs sm:text-sm text-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                  <span><strong>Singles & Doubles support</strong>: 2 or 4 player configurations.</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                  <span><strong>Automatic Match Confirmation</strong>: Instant roster sync & confirmation.</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <PhoneMockup badge="Match Creation">
                <ScreenCreateMatch />
              </PhoneMockup>
            </div>
          </div>

          {/* Feature 2: Player Invitations & Preferred Side */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center lg:flex-row-reverse">
            <div className="lg:col-span-6 lg:order-2 space-y-4">
              <span className="px-3.5 py-1.5 glass-pill text-slate-900 font-bold text-xs rounded-full inline-block">
                Player Invitations & Side Preference
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                Invite players and see who has responded at a glance.
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                For SDA doubles players, CircleUp displays relevant left or right wall side preferences where applicable, ensuring balanced pairings before anyone steps on court.
              </p>
              <div className="glass-box p-4 rounded-2xl space-y-2 text-xs sm:text-sm text-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                  <span><strong>Live RSVP status</strong>: See who accepted, declined, or is pending.</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                  <span><strong>Doubles wall preferences</strong>: Left wall, right wall, or flexible.</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                  <span><strong>Bring More Players In</strong>: Supported single-use match invitations.</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 lg:order-1 flex justify-center">
              <PhoneMockup badge="Roster & Sides">
                <ScreenInvitePlayers />
              </PhoneMockup>
            </div>
          </div>

          {/* Feature 3: Match Chat & Calendar Integration */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="px-3.5 py-1.5 glass-pill text-slate-900 font-bold text-xs rounded-full inline-block">
                Match Chat & Smart Reminders
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                In-match chat and seamless calendar integration.
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Once a match is confirmed, players can communicate in one place instead of creating another noisy group text. Confirmed matches sync to your calendar for the actual match duration.
              </p>
              <div className="glass-box p-4 rounded-2xl space-y-2 text-xs sm:text-sm text-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                  <span><strong>Match-specific chat</strong>: Keep coordination isolated to the game.</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                  <span><strong>In-App Reminders</strong>: Push notifications aligned to user preferences.</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                  <span><strong>Calendar Integration</strong>: Exact match block without clutter.</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <PhoneMockup badge="Match Chat">
                <ScreenMatchChat />
              </PhoneMockup>
            </div>
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE PRODUCT DEMONSTRATION (Section 14) */}
      <section className="py-20 md:py-28 bg-slate-50/70 border-y border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <div className="text-xs font-bold uppercase tracking-widest text-[#0066FF]">
              Interactive Walkthrough
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              See the complete flow.
            </h2>
            <p className="text-sm text-slate-600">
              Click through each stage of organizing a match from start to finish.
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
            {demoSteps.map((step, idx) => (
              <button
                key={step.step}
                onClick={() => setActiveDemoStep(idx)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2.5 ${
                  activeDemoStep === idx
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'glass-pill text-slate-700 hover:bg-white'
                }`}
              >
                <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold ${activeDemoStep === idx ? 'bg-white text-slate-950' : 'bg-slate-200/80 text-slate-700'}`}>
                  {step.step}
                </span>
                <span>{step.title}</span>
              </button>
            ))}
          </div>

          {/* Demo Content Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-box p-6 sm:p-10 rounded-3xl">
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0066FF]">
                {demoSteps[activeDemoStep].subtitle}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                {demoSteps[activeDemoStep].title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {demoSteps[activeDemoStep].description}
              </p>
              
              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={() => setActiveDemoStep((prev) => (prev + 1) % demoSteps.length)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-950 text-white text-xs font-semibold hover:bg-black transition-colors shadow-xs"
                >
                  Next Step <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs text-slate-400">
                  {activeDemoStep + 1} of {demoSteps.length}
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <PhoneMockup badge={demoSteps[activeDemoStep].badge}>
                {demoSteps[activeDemoStep].screen}
              </PhoneMockup>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SPORTS POSITIONING (Section 12) */}
      <section id="sports" className="py-20 md:py-28 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="text-[26px] font-bold uppercase tracking-widest text-[#0066FF]">
              Sports Positioning
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Starting on the squash court. <br />
              Built to go far beyond it.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              CircleUp is starting with squash and SDA doubles—sports where getting the right players together can require almost as much coordination as playing the match itself. We're building the scheduling infrastructure with a much bigger destination in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Squash Card */}
            <div className="glass-box glass-box-hover p-8 rounded-3xl space-y-4">
              <div className="w-8 h-8 rounded-lg bg-slate-950 text-white flex items-center justify-center font-bold text-xs tracking-wider shadow-xs">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-950">Squash</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Singles matchmaking and scheduling engineered around court reservations, club ladders, and standard 45-minute match blocks.
              </p>
              <div className="text-xs font-semibold text-slate-900 pt-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> Available Now in CircleUp
              </div>
            </div>

            {/* SDA Doubles Card */}
            <div className="glass-box glass-box-hover p-8 rounded-3xl space-y-4">
              <div className="w-8 h-8 rounded-lg bg-slate-950 text-white flex items-center justify-center font-bold text-xs tracking-wider shadow-xs">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-950">SDA Doubles</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Doubles coordination requiring 4 players, hardball squash court dimensions, and explicit left-wall/right-wall preferences.
              </p>
              <div className="text-xs font-semibold text-slate-900 pt-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> Available Now in CircleUp
              </div>
            </div>

            {/* More sports coming Card */}
            <div className="glass-box-dark p-8 rounded-3xl text-white space-y-4">
              <div className="w-8 h-8 rounded-lg bg-white/15 text-white flex items-center justify-center font-bold text-xs tracking-wider border border-white/20">
                +
              </div>
              <h3 className="text-xl font-bold text-white">More sports coming</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Tennis, padel, pickleball, and recreational racket sports share the same scheduling friction. CircleUp is building the foundation for all of them.
              </p>
              <div className="text-xs font-semibold text-slate-300 pt-2 flex items-center gap-1.5">
                <span>• Platform Architecture in Progress</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LONG-TERM VISION (Section 13) */}
      <section className="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-200 border border-white/15 backdrop-blur-md">
            Company Vision
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight whitespace-normal sm:whitespace-nowrap">
            The scheduling engine for sports.
          </h2>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Technology has changed how athletes train, compete, communicate, and track performance. Scheduling still depends heavily on group chats and manual coordination. CircleUp is building a simpler layer between wanting to play and getting the game on the calendar.
          </p>

          <div className="pt-4">
            <div className="inline-block px-6 py-3.5 rounded-2xl glass-box-dark text-sm sm:text-base font-semibold text-white tracking-wide">
              {SITE_CONFIG.brandPunchlines.simpleLoop}
            </div>
          </div>
        </div>
      </section>

      {/* 8. DOWNLOAD SECTION (Section 15) */}
      <section id="download" className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50/50 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-box p-10 sm:p-14 rounded-3xl space-y-6">
            <div className="flex justify-center">
              <Logo size="xl" showWordmark={true} />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
              Your next match is closer than you think.
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              {SITE_CONFIG.brandPunchlines.lessCoordinating}
            </p>
            <div className="pt-4 flex justify-center">
              <AppButtons size="large" theme="dark" />
            </div>
            <p className="text-xs text-slate-400 pt-2">
              Available for iOS and Android devices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
