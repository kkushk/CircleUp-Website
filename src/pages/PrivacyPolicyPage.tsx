import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Logo } from '../components/Logo';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white min-h-screen py-16 sm:py-24 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-950 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </button>
          <Logo size="sm" showWordmark={false} />
        </div>

        {/* Page Header */}
        <div className="border-b border-slate-200 pb-8 mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF]">
            Legal Document
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            CircleUp Privacy Policy
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 font-medium">
            <span>Operator: <strong className="text-slate-800">{SITE_CONFIG.legalCompanyName}</strong></span>
            <span>•</span>
            <span>Effective Date: <strong className="text-slate-800">{SITE_CONFIG.effectiveDate}</strong></span>
            <span>•</span>
            <span>Website: <a href={SITE_CONFIG.domain} className="text-[#0066FF] hover:underline font-mono">{SITE_CONFIG.domain}</a></span>
          </div>
        </div>

        {/* Policy Body */}
        <div className="space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">
          
          {/* 1. Introduction */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">1. Introduction</h2>
            <p>
              This Privacy Policy explains how <strong>{SITE_CONFIG.legalCompanyName}</strong> ("we," "our," or "CircleUp") collects, uses, protects, and handles personal information when you use the CircleUp mobile application, website (<strong>{SITE_CONFIG.domain}</strong>), and related sports-match scheduling services (collectively, the "Service").
            </p>
            <p>
              By accessing or using CircleUp, you acknowledge that you have read and understand this Privacy Policy. If you do not agree with our practices, please do not use our services.
            </p>
            <p>
              CircleUp also allows registered users to provide limited information about outside guests for the purpose of sending user-initiated sports match invitations. This Privacy Policy explains how CircleUp collects, uses, shares, retains and protects that information.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">2. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, information that registered CircleUp users provide when inviting outside guests, information collected automatically through use of the application, and communications sent to us. This may include:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm sm:text-base">
              <li><strong>Account & Profile Information:</strong> Name, email address, mobile phone number, account credentials, and optional profile avatar.</li>
              <li><strong>Sport & Player Preferences:</strong> Preferred sports (e.g., Squash, SDA Doubles), playing level, court side preferences (e.g., left wall, right wall), and home sports clubs or facilities.</li>
              <li><strong>Match Scheduling Data:</strong> Match date, time, venue, sport type, match participants, match invitations sent and received, RSVP responses, and match completion status.</li>
              <li><strong>Outside-Guest Invitation Information:</strong> When a registered CircleUp user invites an outside guest, the inviting user may provide the guest’s name, email address and mobile telephone number, along with information about the specific sports match.</li>
              <li><strong>SMS Consent-Confirmation and Delivery Records:</strong> When an SMS match invitation is requested, CircleUp records the inviting user, guest telephone number, match identification, checkbox-confirmation status, consent-language version, confirmation date and time, SMS-request date and time, Twilio Message SID and delivery status when available.</li>
              <li><strong>Match Chat Content:</strong> Messages and coordination notes shared with confirmed match participants within the in-app match chat.</li>
              <li><strong>Device & Application Information:</strong> Device model, operating system version, unique device identifiers, push notification tokens, IP address, app performance, and crash logs.</li>
              <li><strong>Support Communications:</strong> Content of emails, inquiries, or feedback sent to <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="text-[#0066FF] hover:underline font-mono">{SITE_CONFIG.supportEmail}</a>.</li>
            </ul>
            <p className="text-slate-600 text-sm sm:text-base pt-1">
              The guest’s underlying written consent is retained by the inviting user. CircleUp records the inviting user’s in-app confirmation that the guest previously provided prior express written consent. CircleUp may request the underlying evidence from the inviting user in connection with a recipient complaint, carrier or messaging-provider inquiry, regulatory request, abuse investigation or compliance review.
            </p>
          </section>

          {/* 3. How We Use Information */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">3. How We Use Information</h2>
            <p>We use the collected information to operate, provide, and improve the CircleUp service, including to:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm sm:text-base">
              <li>Create, maintain, and authenticate your CircleUp user account.</li>
              <li>Facilitate sports match scheduling, player matchmaking, and court coordination.</li>
              <li>Deliver match invitations through the applicable channel, track RSVPs and confirm matches when rosters are complete.</li>
              <li>Send registered CircleUp users in-app or push notifications concerning their match activity, including confirmations, schedule updates, cancellations and reminders.</li>
              <li>Send an outside guest one SMS for a specifically consented sports match invitation. CircleUp does not automatically send outside guests SMS reminders, follow-up messages, booking confirmations, schedule updates, acceptance notifications, marketing messages or recurring SMS messages.</li>
              <li>Enable in-match communication between confirmed match participants.</li>
              <li>Sync confirmed match times to your digital calendar.</li>
              <li>Provide customer support, respond to inquiries, and troubleshoot technical issues.</li>
              <li>Monitor service performance, maintain platform security, prevent abuse, spam, or fraud, and comply with legal requirements.</li>
            </ul>
          </section>

          {/* 4. Service Providers and Operational Sharing */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">4. Service Providers and Operational Sharing</h2>
            <p>
              {SITE_CONFIG.legalCompanyName} may engage trusted third-party service providers to perform necessary technical operations solely on our behalf, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-sm sm:text-base">
              <li>Cloud hosting, database infrastructure, and server storage.</li>
              <li>SMS and email delivery infrastructure (telecom routing providers).</li>
              <li>Push notification and customer support infrastructure.</li>
            </ul>
            <p>
              These service providers may process contact information only as reasonably necessary to provide services on CircleUp’s behalf, including hosting, security, message delivery, technical support and legal compliance. They are contractually restricted from using mobile information or messaging consent for their own marketing or promotional purposes and are subject to appropriate confidentiality and data-protection obligations.
            </p>
            <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-2">
              <p className="font-bold text-slate-950 text-sm sm:text-base leading-relaxed">
                We do not share, sell, rent or provide mobile telephone numbers, SMS opt-in data or messaging consent information to third parties or affiliates for their marketing or promotional purposes.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                CircleUp may disclose mobile information to communications providers and other operational service providers solely as necessary to deliver, secure, support or administer CircleUp’s messaging services. These service providers may not use the information for their own marketing or promotional purposes.
              </p>
            </div>
          </section>

          {/* 5. Mobile Information, SMS & Match Invitations Policy */}
          <section className="p-6 sm:p-8 rounded-3xl glass-box space-y-5 border border-slate-200/90 shadow-sm bg-white/90">
            <div className="flex items-center gap-2.5 text-slate-950 font-bold text-base sm:text-lg">
              <div className="w-8 h-8 rounded-lg bg-slate-950 text-white flex items-center justify-center shadow-xs">
                <Shield className="w-4 h-4" />
              </div>
              <h2>5. Mobile Information, SMS & Match Invitations Policy</h2>
            </div>

            {/* Crucial non-sharing clause */}
            <div className="p-5 glass-inner-chip rounded-2xl border-l-4 border-[#0066FF] bg-blue-50/50">
              <p className="font-bold text-slate-950 text-sm sm:text-base leading-relaxed">
                CircleUp does not share, sell, rent or provide mobile telephone numbers, SMS opt-in data or messaging consent information to third parties or affiliates for their marketing or promotional purposes. CircleUp may disclose mobile information to communications providers and other service providers solely as necessary to process, deliver, secure or support CircleUp’s messaging services, subject to appropriate confidentiality and data-protection obligations.
              </p>
            </div>

            <div className="p-5 sm:p-6 glass-inner-chip rounded-2xl space-y-4 text-slate-800 text-sm leading-relaxed">
              <h3 className="font-bold text-slate-950 text-base">User-Initiated Sports Match Invitations</h3>
              <p className="text-slate-700">
                CircleUp allows a registered user to invite an outside guest to participate in a specific sports match. If the guest is not registered with CircleUp, the inviting user may request that CircleUp send the guest one SMS invitation for that specific match.
              </p>
              <p className="text-slate-700">
                Before an SMS invitation is requested, the guest must personally provide prior express written consent for CircleUp to send one SMS invitation for the specific match. The guest may provide that written consent through a text message, email, WhatsApp or another written communication. The inviting user cannot provide consent on the guest’s behalf.
              </p>
              <p className="text-slate-700">
                After receiving the guest’s prior written consent, the inviting user enters the guest’s telephone number and actively selects a separate SMS consent-confirmation checkbox inside the authenticated CircleUp mobile application. The checkbox is unchecked by default. The SMS invitation button remains disabled until the checkbox is selected.
              </p>
              <p className="text-slate-700">
                The checkbox is the inviting user’s confirmation that the guest previously provided written consent. The checkbox is not itself the guest’s consent.
              </p>
              <p className="text-slate-700">
                The inviting user must retain evidence of the guest’s written consent and provide it to CircleUp promptly upon request. CircleUp may request this evidence in connection with a recipient complaint, carrier or messaging-provider inquiry, regulatory request, abuse investigation or compliance review.
              </p>
              <p className="text-slate-700">
                CircleUp sends one SMS for the specifically consented match invitation. Separate written consent and a new in-app confirmation are required for every future SMS match invitation. A previous confirmation is not reused automatically.
              </p>
              <p className="text-slate-700">
                CircleUp does not automatically send outside guests SMS reminders, follow-up messages, booking confirmations, schedule updates, acceptance notifications, marketing messages or recurring SMS messages.
              </p>
              <p className="text-slate-700 font-medium">
                SMS consent is optional. An outside guest may be invited by email instead.
              </p>
            </div>

            {/* Disclosures */}
            <div className="p-5 glass-inner-chip rounded-2xl space-y-3 text-xs sm:text-sm text-slate-800">
              <div className="flex items-start gap-2">
                <span className="font-bold text-slate-950 min-w-44">• Message Frequency:</span>
                <span>One SMS for each specific match invitation for which the guest personally provided prior written consent. Separate written consent and confirmation are required for every future SMS invitation.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-slate-950 min-w-44">• Message and Data Rates:</span>
                <span>Message and data rates may apply according to the recipient’s mobile plan.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-slate-950 min-w-44">• Opt-Out:</span>
                <span>Reply STOP to unsubscribe from CircleUp SMS messages from the sending number.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-slate-950 min-w-44">• Help:</span>
                <span>Reply HELP for assistance or email <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="text-[#0066FF] underline font-mono">{SITE_CONFIG.supportEmail}</a>.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-slate-950 min-w-44">• Alternative:</span>
                <span>SMS consent is optional, and the outside guest may be invited by email instead.</span>
              </div>
            </div>

            {/* Registered User Communications */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
              <span className="font-bold text-slate-950 block">Registered-User Communications:</span>
              <p>
                After a guest registers with CircleUp, ongoing match communications may be delivered through the CircleUp application, in-app chat, push notifications, email or other applicable non-SMS channels. These registered-user communications are separate from the outside-guest SMS invitation program.
              </p>
            </div>

            {/* Documentation Links */}
            <p className="text-xs sm:text-sm text-slate-600 pt-1">
              For complete documentation and public evidence of the consent process, see the <a href="https://joincircleplay.com/sms-consent" onClick={(e) => { e.preventDefault(); onNavigate('/sms-consent'); }} className="text-[#0066FF] font-semibold underline hover:text-blue-700">CircleUp SMS Match Invitation Consent & Verification</a> page and the <a href="https://joincircleplay.com/terms" onClick={(e) => { e.preventDefault(); onNavigate('/terms'); }} className="text-[#0066FF] font-semibold underline hover:text-blue-700">CircleUp Terms and Conditions</a>.
            </p>
          </section>

          {/* 6. Data Retention */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">6. Data Retention</h2>
            <p>
              We retain your personal information only for as long as reasonably necessary to provide the Service, maintain your active account, fulfill the purposes outlined in this Privacy Policy, resolve disputes, maintain security, and comply with applicable legal obligations.
            </p>
            <p>
              When an SMS invitation is requested, CircleUp records the inviting user, guest telephone number, match identification, checkbox-confirmation status, consent-language version, confirmation date and time, SMS-request date and time, Twilio Message SID and delivery status when available for operational, security, dispute-resolution and compliance purposes.
            </p>
            <p>
              The underlying written consent is retained by the inviting user. The inviting user must provide it to CircleUp promptly upon request. CircleUp may suspend or terminate access to SMS invitations if the user cannot provide evidence of consent when requested.
            </p>
          </section>

          {/* 7. Security */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">7. Security</h2>
            <p>
              We implement reasonable and appropriate administrative, technical, and physical safeguards designed to protect personal information against unauthorized access, destruction, loss, alteration, or disclosure. However, no internet transmission or electronic storage method is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* 8. User Choices and Rights */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">8. User Choices & Managing Your Information</h2>
            <p>You have choices regarding your personal information:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm sm:text-base">
              <li><strong>Account Information:</strong> You may update or correct your profile details directly within the CircleUp mobile application.</li>
              <li><strong>Push Notifications:</strong> You can manage or disable push notifications through your mobile device operating system settings.</li>
              <li><strong>SMS Choices:</strong> SMS consent is optional. An outside guest may be invited by email instead of SMS. A recipient may reply STOP to unsubscribe from CircleUp SMS messages from the sending number or reply HELP for assistance. Replying STOP blocks future CircleUp SMS messages from the sending number. An inviting user’s later confirmation does not override the recipient’s opt-out. SMS messaging may resume only after the recipient completes a supported opt-in process. Separate written consent and a new in-app confirmation are required before every future SMS match invitation.</li>
              <li><strong>Account Deletion:</strong> You may request the deletion of your CircleUp account and associated personal data by emailing <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="text-[#0066FF] hover:underline font-mono">{SITE_CONFIG.supportEmail}</a>.</li>
            </ul>
          </section>

          {/* 9. Children's Privacy */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">9. Children's Privacy</h2>
            <p>
              CircleUp is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe that a child under 13 has provided us with personal information, please contact us at <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="text-[#0066FF] hover:underline font-mono">{SITE_CONFIG.supportEmail}</a> so that we can promptly remove such information.
            </p>
          </section>

          {/* 10. Changes to This Privacy Policy */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices, technology, or legal requirements. When updates occur, we will revise the "Effective Date" at the top of this page. Continued use of CircleUp after any updates constitutes your acceptance of the revised policy.
            </p>
          </section>

          {/* 11. Contact Us */}
          <section className="pt-6 border-t border-slate-200 space-y-3">
            <h2 className="text-xl font-bold text-slate-950">11. Contact Us</h2>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:</p>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-sm space-y-1">
              <div className="font-bold text-slate-900">{SITE_CONFIG.legalCompanyName}</div>
              <div>Brand: {SITE_CONFIG.brandName}</div>
              <div>Email: <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="text-[#0066FF] hover:underline font-mono">{SITE_CONFIG.supportEmail}</a></div>
              <div>Website: <a href={SITE_CONFIG.domain} className="text-[#0066FF] hover:underline font-mono">{SITE_CONFIG.domain}</a></div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};
