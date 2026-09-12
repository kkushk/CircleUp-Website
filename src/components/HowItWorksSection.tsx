import React, { useState } from 'react';
import { PhoneMockup } from './PhoneMockup';
import { 
  ScreenCreateMatch, 
  ScreenInvitePlayers, 
  ScreenHome, 
  ScreenMatchConfirmed, 
  ScreenMatchChat 
} from './AppScreenshots';
import { 
  Calendar, 
  Users, 
  Bell, 
  CheckCircle2, 
  Play, 
  ArrowRight, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: 'Pick your game',
      tagline: 'Sport, location, date, & time',
      description: 'Select your sport (Squash, SDA Doubles, Tennis, Padel, Pickleball, Golf, and more), club or courts, date, and start time in seconds.',
      icon: Calendar,
      badge: 'Step 1: Game Setup',
      mockup: <ScreenCreateMatch />
    },
    {
      num: '02',
      title: 'Choose your players',
      tagline: 'Invite the people you want to play with',
      description: 'Select partners and opponents. Include friends already on CircleUp, or invite players through supported text or email invitation flows.',
      icon: Users,
      badge: 'Step 2: Player Selection',
      mockup: <ScreenInvitePlayers />
    },
    {
      num: '03',
      title: 'CircleUp coordinates',
      tagline: 'Organized responses in one place',
      description: 'CircleUp collects acceptances and declines automatically. No manual follow-ups, no scrambling through group chats, and no confusion.',
      icon: Bell,
      badge: 'Step 3: Coordination',
      mockup: <ScreenHome />
    },
    {
      num: '04',
      title: 'Match confirmed',
      tagline: 'Know who is playing and when',
      description: 'The instant required players accept, CircleUp locks the match, syncs the event to your mobile calendar, and notifies all participants.',
      icon: CheckCircle2,
      badge: 'Step 4: Automatic Lock-In',
      mockup: <ScreenMatchConfirmed />
    },
    {
      num: '05',
      title: 'Play',
      tagline: 'Less coordinating. More time playing.',
      description: 'Spend less time organizing and more time doing the reason you opened CircleUp in the first place: stepping onto the court and into the match.',
      icon: Play,
      badge: 'Step 5: Game Day',
      mockup: <ScreenMatchChat />
    },
  ];

  const currentStep = steps[activeStep];
  const StepIcon = currentStep.icon;

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold uppercase tracking-wider text-[#0066FF] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" /> 5-Step Scheduling Flow
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            How CircleUp works.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A frictionless flow engineered to take you from wanting to play to a confirmed game on the calendar.
          </p>
        </div>

        {/* 5 Step Selector Nav Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 pt-1 mb-10 no-scrollbar">
          {steps.map((s, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={s.num}
                onClick={() => setActiveStep(idx)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2.5 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'glass-pill text-slate-700 hover:text-slate-950 hover:bg-white'
                }`}
              >
                <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-mono font-bold ${
                  isActive ? 'bg-white text-slate-950' : 'bg-slate-200/80 text-slate-700'
                }`}>
                  {s.num}
                </span>
                <span className="whitespace-nowrap">{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Box */}
        <div className="glass-box p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-slate-950 text-white flex items-center justify-center font-mono font-bold text-xs shadow-xs">
                  {currentStep.num}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0066FF]">
                  {currentStep.tagline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                {currentStep.title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {currentStep.description}
              </p>

              <div className="p-4 rounded-2xl glass-inner-chip space-y-2 text-xs sm:text-sm text-slate-800">
                <div className="flex items-center gap-2 font-semibold text-slate-900">
                  <StepIcon className="w-4 h-4 text-[#0066FF]" />
                  <span>Why this matters</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {idxExplanation(activeStep)}
                </p>
              </div>

              {/* Progress & Next Step Button */}
              <div className="pt-2 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeStep ? 'w-8 bg-[#0066FF]' : 'w-2 bg-slate-300'
                      }`}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-black text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                >
                  {activeStep === steps.length - 1 ? 'Start Over' : 'Next Step'} 
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Phone Mockup */}
            <div className="lg:col-span-6 flex justify-center">
              <PhoneMockup badge={currentStep.badge}>
                {currentStep.mockup}
              </PhoneMockup>
            </div>

          </div>
        </div>

        {/* Quick Summary Grid of All 5 Steps */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
          {steps.map((s, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <div
                key={s.num}
                onClick={() => setActiveStep(idx)}
                className={`p-5 sm:p-6 rounded-2xl cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                  isCurrent
                    ? 'glass-box ring-2 ring-[#0066FF] bg-white shadow-md'
                    : 'glass-box glass-box-hover hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="text-xs sm:text-sm font-mono font-bold text-[#0066FF] mb-1.5">{s.num}</div>
                  <h4 className="font-extrabold text-slate-950 text-base sm:text-lg leading-snug">{s.title}</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {s.tagline}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

function idxExplanation(step: number): string {
  switch (step) {
    case 0:
      return 'Eliminates open-ended messages asking who can play when. You define the sport, club, and window upfront.';
    case 1:
      return 'Friends do not have to be on CircleUp already. Supported invitation flows let you include your usual playing partners immediately.';
    case 2:
      return 'Stops the endless follow-ups. CircleUp tracks each response so you can see who has accepted, declined, or is pending.';
    case 3:
      return 'No wondering if the match is on. When required players accept, the match automatically locks into confirmed status.';
    case 4:
      return 'Coordinate warm-ups, balls, and post-match inside a dedicated match thread instead of spawning another noisy group text.';
    default:
      return '';
  }
}
