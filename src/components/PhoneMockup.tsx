import React from 'react';

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
  badge?: string;
  removeDynamicIsland?: boolean;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ 
  children, 
  className = '',
  badge,
  removeDynamicIsland = false
}) => {
  return (
    <div className={`relative mx-auto flex flex-col items-center w-full max-w-[275px] xs:max-w-[290px] sm:max-w-[320px] md:max-w-[335px] ${className}`}>
      {/* Top Floating Badge */}
      {badge && (
        <div className="mb-2.5 sm:mb-3 z-30 inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 bg-[#061538] text-white text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase rounded-full shadow-lg border border-[#1d2d5b]">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#39d078] animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      {/* Modern iPhone/Smartphone Hardware Bezel */}
      <div className="relative w-full rounded-[38px] sm:rounded-[44px] bg-slate-900 p-2 sm:p-2.5 md:p-3 shadow-2xl ring-1 ring-slate-800/80 shadow-slate-950/25">
        {/* Dynamic Island / Speaker Pill */}
        {!removeDynamicIsland && (
          <div className="absolute top-3.5 sm:top-4 left-1/2 -translate-x-1/2 z-30 h-3.5 sm:h-4 w-20 sm:w-24 bg-black rounded-full flex items-center justify-end px-2 pointer-events-none">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-950/60" />
          </div>
        )}

        {/* Screen Bezel Frame */}
        <div className="relative rounded-[30px] sm:rounded-[36px] overflow-hidden bg-white aspect-[9/19.5] flex flex-col justify-between select-none border border-slate-200/40 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex-1 w-full h-full flex flex-col overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {children}
          </div>
          
          {/* Home Indicator Bar */}
          <div className="w-full py-1 sm:py-1.5 flex justify-center bg-white/95 backdrop-blur-xs border-t border-slate-100/50 shrink-0">
            <div className="h-0.5 sm:h-1 w-24 sm:w-28 bg-slate-900/40 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
