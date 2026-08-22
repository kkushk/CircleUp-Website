import React, { useState } from 'react';
import { Check, Maximize2, X, ChevronDown, Info, Wifi, BatteryCharging } from 'lucide-react';

interface ScreenshotCardProps {
  number: '01' | '02';
  badgeLabel?: string;
  heading: string;
  caption: string;
  demonstrates: string[];
}

export const ScreenshotAppCard: React.FC<ScreenshotCardProps> = ({
  number,
  badgeLabel = "Actual App Screenshot",
  heading,
  caption,
  demonstrates
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderPhoneScreen = (isEnlarged = false) => (
    <div className={`relative rounded-[36px] overflow-hidden bg-slate-900 ${isEnlarged ? 'h-[640px] text-[11px] p-2.5 pt-3' : 'h-[520px] text-[9.5px] p-2 pt-2.5'} flex flex-col justify-between select-none border border-slate-700/60 shadow-inner font-sans`}>
      
      {/* iOS Top Bar Area */}
      <div className="w-full shrink-0">
        {/* iOS Status Bar */}
        <div className={`flex items-center justify-between px-3 ${isEnlarged ? 'text-[11px] mb-1' : 'text-[9px] mb-0.5'} font-semibold text-white`}>
          <span className="font-semibold tracking-tight">10:16</span>
          <div className="flex items-center gap-1.5">
            {/* Cellular 4 bars */}
            <div className="flex items-end gap-[1.5px] h-2.5">
              <div className="w-[2px] h-[30%] bg-white rounded-3xs" />
              <div className="w-[2px] h-[50%] bg-white rounded-3xs" />
              <div className="w-[2px] h-[75%] bg-white rounded-3xs" />
              <div className="w-[2px] h-[100%] bg-white rounded-3xs" />
            </div>
            {/* Wifi Icon */}
            <Wifi className={`${isEnlarged ? 'w-3 h-3' : 'w-2.5 h-2.5'} text-white stroke-[2.5]`} />
            {/* Green Charging Battery */}
            <div className="flex items-center gap-0.5">
              <div className="w-4 h-2 border border-white/80 rounded-[3px] p-[1px] flex items-center bg-transparent">
                <div className="h-full w-full bg-[#34C759] rounded-[1.5px]" />
              </div>
              <div className="w-[1px] h-1 bg-white/80 rounded-r-3xs" />
            </div>
          </div>
        </div>

        {/* Background App Screen Header Peeking Behind Modal */}
        <div className="px-2 pt-1 pb-2 flex items-center gap-2 opacity-60">
          <div className="w-4 h-4 rounded-full bg-[#E11D48] flex items-center justify-center text-[7px] text-white font-bold shrink-0">
            C
          </div>
          <span className="text-white text-[9px] font-medium">Boston</span>
        </div>
        <div className="px-2 pb-1 opacity-60">
          <span className="text-white text-[11px] font-bold">Select Match Type</span>
        </div>
      </div>

      {/* Actual In-App Bottom Sheet Modal */}
      <div className={`flex-1 bg-white rounded-t-[28px] ${isEnlarged ? 'p-4 pt-2.5 space-y-2.5' : 'p-3 pt-2 space-y-1.5'} flex flex-col justify-between text-slate-900 shadow-2xl border-t border-slate-100`}>
        
        <div className="space-y-1.5">
          {/* Drag Pill Handle */}
          <div className="w-9 h-1 bg-slate-300 rounded-full mx-auto mb-1" />

          {/* Modal Header */}
          <div className="text-left space-y-0.5">
            <h4 className={`${isEnlarged ? 'text-[13px]' : 'text-[11px]'} font-extrabold text-slate-950 tracking-tight leading-snug`}>
              Invite Players Not on the App
            </h4>
            <p className={`${isEnlarged ? 'text-[8.5px]' : 'text-[7px]'} text-slate-500 leading-tight font-normal`}>
              Enter an outside guest’s details to send an invitation by SMS or email. The guest must download CircleUp and register using the same phone number or email address to view and respond to the match invitation.
            </p>
          </div>

          {/* Form Fields matching the genuine app screen */}
          <div className={`text-left ${isEnlarged ? 'space-y-2' : 'space-y-1.5'}`}>
            
            {/* FULL NAME */}
            <div>
              <label className={`${isEnlarged ? 'text-[7.5px]' : 'text-[6.5px]'} font-bold uppercase tracking-wider text-slate-500 block mb-0.5`}>
                FULL NAME
              </label>
              <div className={`w-full ${isEnlarged ? 'px-2.5 py-1.5 text-[11px]' : 'px-2 py-1 text-[9px]'} rounded-xl border border-slate-200 bg-white font-medium text-slate-900`}>
                Guest
              </div>
            </div>

            {/* EMAIL ADDRESS (FOR EMAIL INVITE) */}
            <div>
              <label className={`${isEnlarged ? 'text-[7.5px]' : 'text-[6.5px]'} font-bold uppercase tracking-wider text-slate-500 block mb-0.5`}>
                EMAIL ADDRESS (FOR EMAIL INVITE)
              </label>
              <div className={`w-full ${isEnlarged ? 'px-2.5 py-1.5 text-[11px]' : 'px-2 py-1 text-[9px]'} rounded-xl border border-slate-200 bg-white font-normal text-slate-800`}>
                guest@test.com
              </div>
            </div>

            {/* PHONE NUMBER (FOR SMS INVITE) */}
            <div>
              <label className={`${isEnlarged ? 'text-[7.5px]' : 'text-[6.5px]'} font-bold uppercase tracking-wider text-slate-500 block mb-0.5`}>
                PHONE NUMBER (FOR SMS INVITE)
              </label>
              <div className="flex gap-1.5">
                <div className={`${isEnlarged ? 'px-2 py-1.5 text-[11px]' : 'px-1.5 py-1 text-[9px]'} rounded-xl border border-slate-200 bg-white font-medium text-slate-900 flex items-center gap-1 shrink-0`}>
                  <span>+1</span>
                  <ChevronDown className="w-2.5 h-2.5 text-slate-400" />
                </div>
                <div className={`flex-1 ${isEnlarged ? 'px-2.5 py-1.5 text-[11px]' : 'px-2 py-1 text-[9px]'} rounded-xl border border-slate-200 bg-white font-normal text-slate-900`}>
                  (000) 000-0000
                </div>
              </div>
            </div>
          </div>

          {/* Consent Checkbox Section */}
          <div className="text-left space-y-1 pt-0.5">
            <div className="flex items-start gap-1.5">
              {number === '01' ? (
                /* Unchecked Checkbox */
                <div className={`${isEnlarged ? 'w-4 h-4' : 'w-3.5 h-3.5'} rounded-[4px] border border-slate-300 bg-white shrink-0 mt-0.5 shadow-2xs`} />
              ) : (
                /* Checked Checkbox */
                <div className={`${isEnlarged ? 'w-4 h-4' : 'w-3.5 h-3.5'} rounded-[4px] bg-[#0066FF] border border-[#0066FF] flex items-center justify-center shrink-0 mt-0.5 text-white shadow-2xs`}>
                  <Check className={`${isEnlarged ? 'w-3 h-3 stroke-[3]' : 'w-2.5 h-2.5 stroke-[3]'}`} />
                </div>
              )}
              
              <p className={`${isEnlarged ? 'text-[8.5px]' : 'text-[7px]'} text-slate-600 leading-tight`}>
                I confirm that this guest personally gave prior express written consent for CircleUp to send one SMS invitation for this specific match, and I have retained proof of that consent. <span className="inline-block align-middle text-slate-400">ⓘ</span>
              </p>
            </div>

            {/* In-App Disclosure Text */}
            <p className={`${isEnlarged ? 'text-[7.5px]' : 'text-[6px]'} text-slate-500 leading-snug font-normal pl-0.5`}>
              The guest will receive one SMS for this specific match invitation. Message frequency: one SMS for this consented invitation. Message and data rates may apply. The guest may reply STOP to unsubscribe or HELP for assistance. Separate written consent and confirmation are required for every future SMS invitation. SMS consent is optional; the guest may be invited by email instead.
            </p>

            {/* Legal Links */}
            <div className={`${isEnlarged ? 'text-[7.5px]' : 'text-[6px]'} text-[#0066FF] flex items-center gap-1 font-medium pl-0.5`}>
              <span className="underline">Privacy Policy</span>
              <span className="text-slate-300">|</span>
              <span className="underline">Terms and Conditions</span>
              <span className="text-slate-300">|</span>
              <span className="underline">SMS Consent</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="space-y-1 shrink-0 pt-1">
          {number === '01' ? (
            /* Disabled Gray Button */
            <button 
              disabled 
              className={`w-full ${isEnlarged ? 'py-2.5 px-3 text-[11px]' : 'py-2 px-2 text-[9px]'} rounded-2xl bg-[#E2E8F0] text-[#94A3B8] font-bold flex items-center justify-center cursor-not-allowed`}
            >
              <span>Add Outside Guest & Send Invite</span>
            </button>
          ) : (
            /* Enabled Blue Button */
            <button className={`w-full ${isEnlarged ? 'py-2.5 px-3 text-[11px]' : 'py-2 px-2 text-[9px]'} rounded-2xl bg-[#0066FF] text-white font-bold flex items-center justify-center shadow-sm hover:bg-blue-600 active:scale-[0.98]`}>
              <span>Add Outside Guest & Send Invite</span>
            </button>
          )}
        </div>

      </div>

      {/* iOS Home Indicator Bar */}
      <div className="w-full py-1 bg-white flex justify-center shrink-0">
        <div className={`${isEnlarged ? 'h-1 w-24' : 'h-0.5 w-16'} bg-slate-900 rounded-full`} />
      </div>
    </div>
  );

  return (
    <div className="glass-box p-6 sm:p-7 rounded-3xl flex flex-col justify-start border border-slate-200/90 shadow-sm bg-white/90 h-full">
      
      {/* Top Header */}
      <div className="space-y-2 min-h-[175px] md:min-h-[185px] flex flex-col justify-start shrink-0 pb-2">
        <div className="flex items-center justify-between">
          <div className="w-8 h-8 rounded-lg bg-slate-950 text-white flex items-center justify-center font-bold text-xs tracking-wider font-mono shadow-xs">
            {number}
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0066FF] bg-blue-50 border border-blue-200/80 px-2.5 py-1 rounded-full">
            {badgeLabel}
          </span>
        </div>
        <h3 className="text-base sm:text-lg font-bold text-slate-950 tracking-tight">
          {heading}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {caption}
        </p>
      </div>

      {/* iPhone Chassis Container */}
      <div className="mt-4 mb-6 w-full max-w-[250px] sm:max-w-[260px] mx-auto flex flex-col items-center justify-center shrink-0">
        
        {/* iPhone Outer Body */}
        <div 
          onClick={() => setIsModalOpen(true)}
          role="button"
          tabIndex={0}
          aria-label={`Enlarge ${heading}`}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsModalOpen(true); }}
          className="relative w-full rounded-[42px] bg-gradient-to-b from-slate-800 via-slate-950 to-slate-900 p-[7px] shadow-2xl ring-1 ring-slate-700/60 cursor-pointer group transition-transform hover:scale-[1.02]"
        >
          
          {/* Left Side Hardware Buttons */}
          <div className="absolute -left-[2.5px] top-20 w-[2.5px] h-6 bg-slate-700 rounded-l-xs" />
          <div className="absolute -left-[2.5px] top-29 w-[2.5px] h-10 bg-slate-700 rounded-l-xs" />
          <div className="absolute -left-[2.5px] top-42 w-[2.5px] h-10 bg-slate-700 rounded-l-xs" />

          {/* Right Side Power Button */}
          <div className="absolute -right-[2.5px] top-28 w-[2.5px] h-14 bg-slate-700 rounded-r-xs" />

          {/* Dynamic Island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 h-3.5 w-18 bg-black rounded-full flex items-center justify-end px-1.5 shadow-inner">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-950/70 border border-slate-900" />
          </div>

          {/* Screen Display */}
          {renderPhoneScreen(false)}

          {/* Hover zoom overlay badge */}
          <div className="absolute inset-0 rounded-[42px] bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <div className="bg-white/95 text-slate-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-[#0066FF]" /> Click to Enlarge
            </div>
          </div>
        </div>

        {/* Text link to enlarge */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-3 text-xs text-[#0066FF] hover:text-blue-700 font-semibold inline-flex items-center gap-1 transition-colors"
        >
          <Maximize2 className="w-3 h-3" /> View Full-Resolution Screenshot
        </button>
      </div>

      {/* What This Screenshot Demonstrates Checklist */}
      <div className="mt-auto pt-4 border-t border-slate-200/80 space-y-2">
        <h4 className="text-xs font-bold text-slate-900">
          What This Screenshot Demonstrates:
        </h4>
        <ul className="space-y-1 text-xs text-slate-600">
          {demonstrates.map((item, idx) => (
            <li key={idx} className="flex items-start gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-1.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Full-Resolution Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0066FF] bg-blue-50 border border-blue-200/80 px-2.5 py-0.5 rounded-full">
                  {badgeLabel}
                </span>
                <h3 className="text-lg font-bold text-slate-950 mt-1">
                  {heading}
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Enlarged Phone */}
            <div className="w-full max-w-[320px] mx-auto">
              <div className="relative w-full rounded-[48px] bg-gradient-to-b from-slate-800 via-slate-950 to-slate-900 p-[9px] shadow-2xl ring-1 ring-slate-700/60">
                {/* Dynamic Island Notch */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 z-30 h-4 w-22 bg-black rounded-full flex items-center justify-end px-2 shadow-inner">
                  <div className="w-2 h-2 rounded-full bg-blue-950/70 border border-slate-900" />
                </div>

                {renderPhoneScreen(true)}
              </div>
            </div>

            {/* Modal Caption */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
              <strong>Screenshot Detail:</strong> {caption}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export const WebsiteExplanationCard: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="glass-box p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6 border border-slate-200/90 shadow-sm bg-white/90">
      
      {/* Top Header */}
      <div className="space-y-2 border-b border-slate-200 pb-4">
        <div className="flex items-center justify-between">
          <div className="w-8 h-8 rounded-lg bg-slate-950 text-white flex items-center justify-center font-bold text-xs tracking-wider font-mono shadow-xs">
            03
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
            Website Explanation—Not an App Screen
          </span>
        </div>
        <h3 className="text-xl font-bold text-slate-950 tracking-tight">
          Example of Acceptable Written Permission
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The information below is provided on this public website for explanatory and compliance-review purposes. It is not a screen or modal displayed inside the CircleUp mobile application.
        </p>
      </div>

      {/* Normal Website Information Content (NO PHONE FRAME) */}
      <div className="space-y-5 rounded-2xl bg-slate-50 border border-slate-200/90 p-5 sm:p-6 text-left text-xs sm:text-sm leading-relaxed">
        <div className="space-y-3 text-slate-700">
          <p>
            Before requesting an SMS invitation through CircleUp, the inviting user must obtain the guest’s prior written permission specifically authorizing CircleUp to send one SMS invitation for the identified match.
          </p>
          <p>
            The guest must personally provide written permission through a text message, email, WhatsApp or another written communication. The inviting user cannot provide consent on the guest’s behalf.
          </p>
        </div>

        {/* Subheading: Consent Request Example */}
        <div className="space-y-2 pt-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
            Consent Request Example
          </span>
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 space-y-2.5 text-xs sm:text-sm text-slate-800">
            <p>
              “May CircleUp send you one SMS invitation for our [Singles/Doubles] match on [Date] at [Time] at [Club Name]? You will receive one SMS for this specific match invitation. Message and data rates may apply. After receiving the CircleUp SMS, reply STOP to unsubscribe or HELP for assistance.
            </p>
            <div className="text-xs text-[#0066FF] flex flex-wrap gap-x-4 gap-y-1 font-mono">
              <a href="https://joincircleplay.com/terms" onClick={(e) => { e.preventDefault(); onNavigate('/terms'); }} className="underline hover:text-blue-700">Terms: https://joincircleplay.com/terms</a>
              <a href="https://joincircleplay.com/privacy-policy" onClick={(e) => { e.preventDefault(); onNavigate('/privacy-policy'); }} className="underline hover:text-blue-700">Privacy Policy: https://joincircleplay.com/privacy-policy</a>
            </div>
            <p className="font-semibold text-slate-900">
              Reply YES to provide your written consent.”
            </p>
          </div>
        </div>

        {/* Subheading: Example Guest Response */}
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
            Example Guest Response
          </span>
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs sm:text-sm font-medium text-slate-900 shadow-2xs">
            “Yes, I agree to receive one SMS invitation from CircleUp for this specific match.”
          </div>
        </div>

        {/* Underlying Evidence Retention Explanation */}
        <p className="text-xs text-slate-600 leading-relaxed pt-2">
          The inviting user must retain evidence of the guest’s written permission and provide it to CircleUp promptly upon request. CircleUp records the inviting user’s in-app consent confirmation. Separate written permission and a new in-app confirmation are required for every future SMS match invitation.
        </p>
      </div>

      {/* Reviewer Clarification */}
      <div className="pt-2 border-t border-slate-200/80">
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
          <strong className="text-slate-900 font-semibold block mb-0.5">Reviewer clarification:</strong>
          CircleUp’s production application uses the consent-confirmation flow shown in actual app screenshots 1 and 2. Item 3 is a public website explanation of the prior written-consent requirement and is not represented as an application screen.
        </div>
      </div>

    </div>
  );
};
