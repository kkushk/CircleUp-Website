import React from 'react';

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
  badge?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ 
  children, 
  className = '',
  badge
}) => {
  return (
    <div className={`relative mx-auto max-w-[320px] sm:max-w-[340px] ${className}`}>
      {/* Optional Top Floating Badge */}
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 px-3 py-1 bg-slate-900 text-white text-[11px] font-medium tracking-wide uppercase rounded-full shadow-md border border-slate-700">
          {badge}
        </div>
      )}

      {/* Modern iPhone/Smartphone Hardware Bezel */}
      <div className="relative rounded-[44px] bg-slate-900 p-3 shadow-2xl ring-1 ring-slate-800/80 shadow-slate-950/20">
        {/* Dynamic Island / Speaker Pill */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-30 h-4 w-24 bg-black rounded-full flex items-center justify-end px-2">
          <div className="w-2 h-2 rounded-full bg-blue-950/60" />
        </div>

        {/* Screen Bezel Frame */}
        <div className="relative rounded-[36px] overflow-hidden bg-white aspect-[9/19.5] flex flex-col justify-between select-none border border-slate-200/40 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex-1 w-full h-full flex flex-col overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {children}
          </div>
          
          {/* Home Indicator Bar */}
          <div className="w-full py-1.5 flex justify-center bg-white/95 backdrop-blur-xs border-t border-slate-100/50 shrink-0">
            <div className="h-1 w-28 bg-slate-900/40 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
