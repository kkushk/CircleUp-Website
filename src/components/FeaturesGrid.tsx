import React from 'react';
import { 
  Calendar, 
  Users, 
  UserPlus, 
  Share2, 
  CheckCircle2, 
  Lock, 
  RefreshCw, 
  MessageSquare, 
  Layers, 
  Bell, 
  CalendarCheck, 
  MapPin,
  Sparkles
} from 'lucide-react';

interface FeatureItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
}

export const FeaturesGrid: React.FC = () => {
  const features: FeatureItem[] = [
    {
      id: 'multi-sport',
      title: 'Multi-Sport Scheduling',
      category: 'Coverage',
      description: 'Easily organize Squash, SDA Doubles, Tennis, Padel, Platform Tennis, Pickleball, Badminton, and Golf all from a single unified account.',
      icon: Layers,
      badge: '7+ Sports'
    },
    {
      id: 'singles-doubles',
      title: 'Singles & Doubles',
      category: 'Format Flexibility',
      description: 'Support for head-to-head 1v1 singles, 4-player doubles, and multi-player recreational foursomes with sport-specific rules.',
      icon: Users,
      badge: '1v1 & 2v2'
    },
    {
      id: 'invite-friends',
      title: 'Invite Friends',
      category: 'Player Roster',
      description: 'Quickly select your regular playing partners from your CircleUp friends list and recent match history with one tap.',
      icon: UserPlus,
      badge: '1-Tap Selection'
    },
    {
      id: 'invite-beyond',
      title: 'Invite Beyond CircleUp',
      category: 'Open Network',
      description: 'Bring friends into a match through supported text and email invitation flows, making it easy to play with your existing partners.',
      icon: Share2,
      badge: 'Open Network'
    },
    {
      id: 'match-responses',
      title: 'Live Match Responses',
      category: 'Coordination',
      description: 'See live status as players accept, decline, or mark tentative. No more wondering who actually saw the message.',
      icon: CheckCircle2,
      badge: 'Real-Time RSVP'
    },
    {
      id: 'auto-confirm',
      title: 'Automatic Confirmation',
      category: 'Smart Automation',
      description: 'Once all required players accept, CircleUp automatically marks the match Confirmed and locks in the court session.',
      icon: Lock,
      badge: 'Auto-Lock'
    },
    {
      id: 'player-replacement',
      title: 'Player Replacement',
      category: 'Flexibility',
      description: 'If a player has a last-minute conflict, easily open the slot or invite a substitute without canceling the whole match.',
      icon: RefreshCw,
      badge: 'Drop-In Support'
    },
    {
      id: 'match-chat',
      title: 'Dedicated Match Chat',
      category: 'Communication',
      description: 'Each confirmed match includes its own private chat thread for coordinating court details, gear, warmups, and timing.',
      icon: MessageSquare,
      badge: 'Match-Specific'
    },
    {
      id: 'preferred-side',
      title: 'Preferred Side (Wall/Court)',
      category: 'Sport-Specific',
      description: 'SDA doubles players can set left-wall or right-wall preferences; tennis and padel players can easily choose their preferred left side or right side.',
      icon: Layers,
      badge: 'Left / Right Side'
    },
    {
      id: 'smart-notifications',
      title: 'Smart Notifications',
      category: 'Updates',
      description: 'Receive prompt, non-intrusive push alerts when you are invited, when a spot opens, or when a game is locked in.',
      icon: Bell,
      badge: 'Push Alerts'
    },
    {
      id: 'calendar-sync',
      title: 'Calendar Integration',
      category: 'Schedule Sync',
      description: 'Sync confirmed matches directly to your Apple, Google, or Outlook calendar with venue location and opponent details.',
      icon: CalendarCheck,
      badge: 'iCal & Google'
    },
    {
      id: 'clubs-locations',
      title: 'Clubs & Locations',
      category: 'Venues',
      description: 'Tag your home club, community recreation center, private court, or course to keep everyone aligned on where to meet.',
      icon: MapPin,
      badge: 'Court & Club'
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0066FF] shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#0066FF]" /> Complete Feature Engine
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-tight">
            Engineered for how <br className="hidden sm:inline" />
            athletes actually organize.
          </h2>
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Everything you need to create, invite, confirm, and play without bloated spreadsheets or messy group chat threads.
          </p>
        </div>

        {/* 12-Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div 
                key={f.id}
                className="p-6 sm:p-8 rounded-3xl glass-box glass-box-hover flex flex-col justify-between space-y-4 border border-slate-200/90 shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-slate-950 text-white flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full glass-inner-chip text-slate-700">
                      {f.badge}
                    </span>
                  </div>

                  <div className="text-xs font-bold uppercase tracking-wider text-[#0066FF]">
                    {f.category}
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-950 mt-1.5 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {f.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Available in CircleUp Mobile</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
