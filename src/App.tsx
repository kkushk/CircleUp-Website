import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SupportPage } from './pages/SupportPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { SmsConsentPage } from './pages/SmsConsentPage';
import { InvitePage } from './pages/InvitePage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  // Sync route on browser back / forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    // If it's a hash anchor on homepage
    if (path.startsWith('/#')) {
      if (currentPath !== '/') {
        window.history.pushState({}, '', '/');
        setCurrentPath('/');
      }
      return;
    }

    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render appropriate page component based on direct URL
  const renderPage = () => {
    // Normalize path (handle trailing slashes)
    const cleanPath = currentPath.replace(/\/$/, '') || '/';

    switch (cleanPath) {
      case '/privacy-policy':
        return <PrivacyPolicyPage onNavigate={navigateTo} />;
      case '/terms':
        return <TermsPage onNavigate={navigateTo} />;
      case '/sms-consent':
        return <SmsConsentPage onNavigate={navigateTo} />;
      case '/invite':
        return <InvitePage onNavigate={navigateTo} />;
      case '/support':
        return <SupportPage onNavigate={navigateTo} />;
      case '/about':
        return <AboutPage onNavigate={navigateTo} />;
      case '/':
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-[#0066FF] selection:text-white">
      {/* Sticky Header */}
      <Navbar currentPath={currentPath} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
