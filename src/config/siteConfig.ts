export const SITE_CONFIG = {
  brandName: 'CircleUp',
  legalCompanyName: 'Circle Up Tech LLC',
  domain: 'https://www.joincircleplay.com',
  supportEmail: 'contact@joincircleplay.com',
  
  // App store links
  appStoreUrl: 'https://apps.apple.com/us/app/circle-up-book/id6760900749',
  googlePlayUrl: 'https://play.google.com/store/apps/developer?id=Circle+UP+Book',
  
  // Legal publication effective date
  effectiveDate: 'August 21, 2026',
  
  // Navigation links
  navLinks: [
    { label: 'Product', href: '/#product' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Sports', href: '/#sports' },
    { label: 'About', href: '/about' },
    { label: 'Support', href: '/support' },
  ],
  
  // Taglines
  heroHeadline: 'Schedule the game. Skip the group chat.',
  heroSubheadline: 'CircleUp makes it simple to bring together the people, place, and time for your next game without the endless back-and-forth.',
  heroSportsList: 'Squash. SDA. Tennis. Padel. Platform Tennis. Pickleball. Golf',
  heroPositioning: 'Built for the way athletes actually play. Starting from squash and doubles. Expanding across racquet sports, golf, and beyond.',
  visionStatement: 'The scheduling engine for sports.',
  brandPunchlines: {
    lessCoordinating: 'Less coordinating. More playing.',
    fromIdeaToMatch: 'From idea to match in a few taps.',
    simpleLoop: 'Create. Invite. Confirm. Play.',
  },

  // Supported Sports
  supportedSports: [
    { 
      id: 'squash', 
      name: 'Squash', 
      type: 'Racquet Sport',
      format: 'Singles & Doubles', 
      court: '45-Min Match Blocks',
      description: 'Court bookings, club ladders, and standard 45-minute singles or doubles match slots.',
      status: 'Active'
    },
    { 
      id: 'sda-doubles', 
      name: 'SDA Doubles', 
      type: 'Court Squash',
      format: '4-Player Doubles', 
      court: 'Hardball Court',
      description: 'Engineered for 4-player rosters with left-wall and right-wall side preferences.',
      status: 'Active'
    },
    { 
      id: 'tennis', 
      name: 'Tennis', 
      type: 'Racquet Sport',
      format: 'Singles & Doubles', 
      court: 'Indoor & Outdoor',
      description: 'Organize sets, friendly hits, and club doubles without messy group texts.',
      status: 'Active'
    },
    { 
      id: 'padel', 
      name: 'Padel', 
      type: 'Racquet Sport',
      format: '4-Player Doubles', 
      court: 'Glass Enclosures',
      description: 'Effortless 4-player booking coordination for rapidly growing padel communities.',
      status: 'Active'
    },
    { 
      id: 'platform-tennis', 
      name: 'Platform Tennis', 
      type: 'Paddle Sport',
      format: 'Doubles only', 
      court: 'Heated Screened Court',
      description: 'Screened court play and heated deck doubles coordination tailored for winter and platform tennis leagues.',
      status: 'Active'
    },
    { 
      id: 'pickleball', 
      name: 'Pickleball', 
      type: 'Paddle Sport',
      format: 'Doubles & Singles', 
      court: 'Dedicated Courts',
      description: 'Quick game scheduling for 4-player doubles and open court rotations.',
      status: 'Active'
    },
    { 
      id: 'golf', 
      name: 'Golf', 
      type: 'Recreation & Club',
      format: 'Foursomes & Pairs', 
      court: 'Course & Tee Times',
      description: 'Coordinate your four-ball or friendly round without days of back-and-forth.',
      status: 'Active'
    },
    { 
      id: 'badminton', 
      name: 'Badminton', 
      type: 'Racquet Sport',
      format: 'Singles & Doubles', 
      court: 'Indoor Courts',
      description: 'Fast rally play coordination with reliable participant confirmations.',
      status: 'Active'
    },
  ],
  
  // Exact SMS Invitation Disclosure & Purpose
  exactAppSmsDisclosure: 'CircleUp allows a registered user to invite an outside guest to participate in a specific sports match. When the guest is not registered with CircleUp, the inviting user may request that CircleUp send the guest one SMS invitation for that specific match. Before CircleUp sends the SMS, the guest must personally provide prior express written consent. The inviting user cannot provide consent on the guest’s behalf. After receiving the guest’s written consent, the inviting user must actively confirm that consent through a separate checkbox inside the CircleUp mobile application. A separate written consent and confirmation are required for every future SMS match invitation.',
  
  // Compliance and campaign info
  complianceReview: {
    business: 'Circle Up Tech LLC',
    brand: 'CircleUp',
    website: 'https://www.joincircleplay.com',
    messagingPurpose: 'User-initiated A2P sports match invitations sent to outside guests after the guests provide prior express written consent.',
    smsRecipients: 'Outside guests who have provided prior express written consent to receive one SMS invitation for a specific match.',
    optInLocation: 'Written consent obtained by inviting user; confirmed in CircleUp mobile app via unchecked checkbox.',
    optInMethod: 'The guest provides prior express written consent. The inviting user enters the guest telephone number and actively confirms that consent through an unchecked checkbox before dispatching one SMS match invitation.',
    privacyPolicyUrl: 'https://www.joincircleplay.com/privacy-policy',
    termsUrl: 'https://www.joincircleplay.com/terms',
    smsConsentUrl: 'https://www.joincircleplay.com/sms-consent',
    supportEmail: 'contact@joincircleplay.com',
  }
};
