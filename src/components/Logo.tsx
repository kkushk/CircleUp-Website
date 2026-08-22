import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showWordmark?: boolean;
  variant?: 'app-icon' | 'glyph';
}

export const CircleUpIconMark: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <svg 
      viewBox="0 0 512 512" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Background Blue Gradient */}
        <linearGradient id="cuBgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0A88FF" />
          <stop offset="55%" stopColor="#0066FF" />
          <stop offset="100%" stopColor="#004AE0" />
        </linearGradient>

        {/* White Ring Soft Specular Gradient */}
        <linearGradient id="cuRingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="75%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EEF4FF" />
        </linearGradient>

        {/* Center Blue Circle Gradient */}
        <linearGradient id="cuCenterGrad" x1="25%" y1="20%" x2="75%" y2="80%">
          <stop offset="0%" stopColor="#38A5FF" />
          <stop offset="50%" stopColor="#0077FF" />
          <stop offset="100%" stopColor="#005CD6" />
        </linearGradient>

        {/* Satellite Orb Radial Highlight */}
        <radialGradient id="cuOrbGrad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#7CD8FF" />
          <stop offset="45%" stopColor="#2194FF" />
          <stop offset="85%" stopColor="#0062E4" />
          <stop offset="100%" stopColor="#0044B3" />
        </radialGradient>

        {/* Drop Shadow for White Arc */}
        <filter id="cuArcShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#002D80" floodOpacity="0.25" />
        </filter>

        {/* Drop Shadow for Orb */}
        <filter id="cuOrbShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#002D80" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* App Icon Squircle */}
      <rect width="512" height="512" rx="116" fill="url(#cuBgGrad)" />

      {/* Center Core Circle */}
      <circle cx="256" cy="256" r="78" fill="url(#cuCenterGrad)" />

      {/* Outer White Dynamic Ring "C" */}
      <path
        d="M 398 228 A 142 142 0 1 1 306 124"
        fill="none"
        stroke="url(#cuRingGrad)"
        strokeWidth="66"
        strokeLinecap="round"
        filter="url(#cuArcShadow)"
      />

      {/* Floating Satellite Blue Orb */}
      <circle cx="368" cy="158" r="34" fill="url(#cuOrbGrad)" filter="url(#cuOrbShadow)" />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showWordmark = true 
}) => {
  const iconSizes = {
    xs: 'w-6 h-6',
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-12 h-12',
    '2xl': 'w-16 h-16'
  };

  const textSizes = {
    xs: 'text-base',
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
    '2xl': 'text-4xl'
  };

  return (
    <div className={`flex items-center gap-2.5 font-bold tracking-tight text-slate-900 ${className}`}>
      {/* Official CircleUp Brand Logo */}
      <div className={`relative shrink-0 overflow-hidden rounded-xl shadow-xs transition-transform hover:scale-105 ${iconSizes[size]}`}>
        <CircleUpIconMark />
      </div>
      
      {showWordmark && (
        <span className={`font-bold tracking-tight text-slate-900 ${textSizes[size]}`}>
          Circle<span className="text-[#0066FF]">Up</span>
        </span>
      )}
    </div>
  );
};
