import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

interface AppButtonsProps {
  className?: string;
  size?: 'default' | 'large' | 'compact';
  theme?: 'dark' | 'light' | 'outline';
}

export const AppButtons: React.FC<AppButtonsProps> = ({ 
  className = '',
  size = 'default',
  theme = 'dark'
}) => {
  const [showConfigNotice, setShowConfigNotice] = useState(false);

  const handleClick = (e: React.MouseEvent, url: string, storeName: string) => {
    if (!url || url.trim() === '') {
      e.preventDefault();
      setShowConfigNotice(true);
    }
  };

  const isDark = theme === 'dark';

  const containerClasses = size === 'large' 
    ? 'px-5 py-3 rounded-xl gap-3 text-left' 
    : size === 'compact'
    ? 'px-3.5 py-2 rounded-lg gap-2 text-left'
    : 'px-4 py-2.5 rounded-xl gap-2.5 text-left';

  const baseButtonClass = isDark
    ? 'bg-slate-900 hover:bg-black text-white border border-slate-800 transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]'
    : 'bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 hover:border-slate-300 transition-all duration-200 shadow-sm active:scale-[0.98]';

  return (
    <>
      <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto ${className}`}>
        {/* App Store Button */}
        <a
          href={SITE_CONFIG.appStoreUrl || '#download'}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => handleClick(e, SITE_CONFIG.appStoreUrl, 'App Store')}
          className={`w-full sm:w-auto justify-center inline-flex items-center ${containerClasses} ${baseButtonClass}`}
          aria-label="Download CircleUp on the App Store"
        >
          {/* Apple Logo SVG */}
          <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 170 170">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.74 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.69-7.83-11.97-14.36-6.8-10.4-12.06-21.99-15.78-34.78-3.71-12.78-5.57-24.36-5.57-34.73 0-14.67 3.91-26.68 11.73-36.04 7.82-9.36 17.51-14.16 29.07-14.4 5.37 0 11.26 1.34 17.67 4.02 6.42 2.68 10.46 4.08 12.13 4.21 2.37-.25 6.64-1.63 12.82-4.14 6.18-2.51 11.73-3.69 16.65-3.53 12.77.62 22.84 5.39 30.21 14.3-11.14 6.74-16.55 16.03-16.24 27.87.31 9.4 3.93 17.29 10.86 23.68 4.84 4.54 10.46 7.64 16.85 9.3-2.58 7.42-5.63 14.46-9.15 21.13zm-31.06-118.9c0 6.74-2.52 13.06-7.56 17.96-5.04 4.9-11.18 7.85-18.42 7.23-.1-1.34-.16-2.57-.16-3.69 0-6.52 2.76-13.06 7.89-18.06 5.13-5 11.53-7.91 18.25-7.44z" />
          </svg>
          <div>
            <div className={`text-[10px] uppercase font-medium leading-none ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Download on the
            </div>
            <div className="text-sm font-semibold tracking-tight leading-tight mt-0.5">
              App Store
            </div>
          </div>
        </a>

        {/* Google Play Button */}
        <a
          href={SITE_CONFIG.googlePlayUrl || '#download'}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => handleClick(e, SITE_CONFIG.googlePlayUrl, 'Google Play')}
          className={`w-full sm:w-auto justify-center inline-flex items-center ${containerClasses} ${baseButtonClass}`}
          aria-label="Get CircleUp on Google Play"
        >
          {/* Google Play Logo SVG */}
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.609 1.814L13.792 12 3.61 22.186c-.368-.382-.61-.954-.61-1.63V3.444c0-.676.242-1.248.61-1.63zm11.238 11.241l2.482-2.482-11.96-6.883 9.478 9.365zm2.482 1.055l-2.482-2.482-9.478 9.365 11.96-6.883zm1.096-1.579l2.84 1.635c.983.565.983 1.487 0 2.052l-2.84 1.635-2.072-2.661 2.072-2.661z" fill={isDark ? '#fff' : '#000'} />
          </svg>
          <div>
            <div className={`text-[10px] uppercase font-medium leading-none ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              GET IT ON
            </div>
            <div className="text-sm font-semibold tracking-tight leading-tight mt-0.5">
              Google Play
            </div>
          </div>
        </a>
      </div>

      {/* Notice Dialog if links are placeholder */}
      {showConfigNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-200">
            <h4 className="text-lg font-bold text-slate-900">CircleUp Mobile App</h4>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              CircleUp is built for iOS and Android. Store publication URLs can be configured directly in <code className="px-1.5 py-0.5 bg-slate-100 rounded text-xs text-blue-600 font-mono">src/config/siteConfig.ts</code>.
            </p>
            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setShowConfigNotice(false)}
                className="px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-medium hover:bg-black transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
