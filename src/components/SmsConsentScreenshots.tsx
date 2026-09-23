import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';

interface ScreenshotCardProps {
  number: '01' | '02';
  badgeLabel?: string;
  heading: string;
  caption: string;
  imageSrc: string;
  imageAlt: string;
  demonstrates: string[];
}

export const ScreenshotAppCard: React.FC<ScreenshotCardProps> = ({
  number,
  badgeLabel = "Actual App Screenshot",
  heading,
  caption,
  imageSrc,
  imageAlt,
  demonstrates
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

      {/* Genuine Image Screenshot Container */}
      <div className="mt-4 mb-6 w-full max-w-[280px] sm:max-w-[300px] mx-auto flex flex-col items-center justify-center shrink-0">
        
        {/* Clickable Image Container */}
        <div 
          onClick={() => setIsModalOpen(true)}
          role="button"
          tabIndex={0}
          aria-label={`Enlarge ${heading}`}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsModalOpen(true); }}
          className="relative w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl cursor-pointer group transition-transform hover:scale-[1.02] bg-slate-50"
        >
          {/* Genuine Screenshot Image Tag */}
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="w-full h-auto object-contain block select-none"
            loading="lazy"
          />

          {/* Hover zoom overlay badge */}
          <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <div className="bg-white/95 text-slate-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-[#0066FF]" /> Click to Enlarge
            </div>
          </div>
        </div>

        {/* Full Resolution Link */}
        <div className="mt-3 flex items-center gap-3">
          <a
            href={imageSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#0066FF] hover:text-blue-700 font-semibold inline-flex items-center gap-1 transition-colors"
          >
            <Maximize2 className="w-3 h-3" /> View Full-Resolution Screenshot
          </a>
        </div>
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

            {/* Modal Body: Enlarged Original Image */}
            <div className="w-full max-w-[340px] mx-auto rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <img 
                src={imageSrc} 
                alt={imageAlt}
                className="w-full h-auto object-contain block"
              />
            </div>

            {/* Modal Actions and Caption */}
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                <strong>Screenshot Detail:</strong> {caption}
              </div>
              <div className="text-center">
                <a
                  href={imageSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#0066FF] hover:underline font-semibold inline-flex items-center gap-1"
                >
                  <Maximize2 className="w-3.5 h-3.5" /> Open Direct Image File in New Tab
                </a>
              </div>
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
            Website Explanation (Not an App Screen)
          </span>
        </div>
        <h3 className="text-xl font-bold text-slate-950 tracking-tight">
          Example of Acceptable Written Permission
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The information below is provided on this public website for explanatory and compliance-review purposes. It is not a screen or modal displayed inside the CircleUp mobile application.
        </p>
      </div>

      {/* Normal Website Information Content */}
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
              <a href="https://www.joincircleplay.com/terms" onClick={(e) => { e.preventDefault(); onNavigate('/terms'); }} className="underline hover:text-blue-700">Terms: https://www.joincircleplay.com/terms</a>
              <a href="https://www.joincircleplay.com/privacy-policy" onClick={(e) => { e.preventDefault(); onNavigate('/privacy-policy'); }} className="underline hover:text-blue-700">Privacy Policy: https://www.joincircleplay.com/privacy-policy</a>
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
