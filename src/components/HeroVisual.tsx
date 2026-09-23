import React from 'react';
import { PhoneMockup } from './PhoneMockup';
import { ScreenHome } from './AppScreenshots';

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-4 pb-8 lg:py-4">
      {/* Ambient subtle light glow behind phone */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0066FF]/10 via-sky-300/10 to-transparent rounded-full filter blur-3xl -z-10 transform scale-110 pointer-events-none" />

      {/* Main Container for the Phone Mockup */}
      <div className="relative w-full max-w-[280px] xs:max-w-[295px] sm:max-w-[325px] flex justify-center shadow-2xl rounded-[44px]">
        <div className="relative z-10 w-full">
          <PhoneMockup>
            <ScreenHome />
          </PhoneMockup>
        </div>
      </div>
    </div>
  );
};
