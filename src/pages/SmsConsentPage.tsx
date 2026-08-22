import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Logo } from '../components/Logo';
import { ScreenshotAppCard, WebsiteExplanationCard } from '../components/SmsConsentScreenshots';
import { 
  ArrowLeft, 
  Shield, 
  CheckCircle2, 
  Check, 
  XCircle
} from 'lucide-react';

interface SmsConsentPageProps {
  onNavigate: (path: string) => void;
}

export const SmsConsentPage: React.FC<SmsConsentPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white min-h-screen py-12 sm:py-20 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        {/* SECTION 1 — PUBLIC PAGE REQUIREMENTS */}
        <div className="border-b border-slate-200 pb-8 mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-100 text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" /> Public Consent-Flow Evidence
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            SMS Match Invitation Consent & Verification
          </h1>

          <p className="text-base sm:text-lg text-slate-700 font-medium max-w-3xl leading-relaxed">
            Public documentation of CircleUp’s prior written-consent and in-app confirmation process for user-initiated A2P sports match invitations.
          </p>

          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
            This page documents the SMS consent process used inside the authenticated CircleUp mobile application. It is publicly available so messaging-compliance reviewers can examine the complete process. This page does not collect telephone numbers or enroll website visitors in SMS messaging.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500 font-medium">
            <span>Operating Company: <strong className="text-slate-800">{SITE_CONFIG.legalCompanyName}</strong></span>
            <span>•</span>
            <span>Brand: <strong className="text-slate-800">{SITE_CONFIG.brandName}</strong></span>
            <span>•</span>
            <span>Public URL: <strong className="text-[#0066FF] font-mono">https://joincircleplay.com/sms-consent</strong></span>
          </div>
        </div>

        {/* SECTION 2 — PROGRAM DESCRIPTION */}
        <section className="mb-16 space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              CircleUp SMS Use Case: User-Initiated Sports Match Invitations
            </h2>
          </div>

          <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
            <p>
              CircleUp allows a registered user to invite an outside guest to participate in a specific sports match. If the guest is not registered with CircleUp, the inviting user may request that CircleUp send the guest one SMS invitation for that specific match.
            </p>
            <p>
              Before CircleUp sends the SMS, the guest must personally provide prior express written consent. The inviting user cannot provide consent on the guest’s behalf.
            </p>
            <p>
              After receiving the guest’s written consent, the inviting user must actively confirm that consent through a separate checkbox inside the CircleUp mobile application. A separate written consent and a new in-app confirmation are required for every future SMS match invitation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl glass-box border border-slate-200/90 space-y-2.5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#0066FF]" />
                <h3 className="text-base font-bold text-slate-950">Messages Sent</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                CircleUp sends one SMS for the specific match invitation for which the guest provided prior express written consent. Message frequency is one SMS per specifically consented match invitation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl glass-box border border-slate-200/90 space-y-2.5">
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-slate-500" />
                <h3 className="text-base font-bold text-slate-950">Messages Not Sent</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                CircleUp does not automatically send outside guests SMS reminders, follow-up messages, booking confirmations, schedule updates, acceptance notifications, marketing messages or recurring SMS messages under this program.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — HOW THE GUEST PROVIDES WRITTEN CONSENT */}
        <section className="mb-16 space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              How the Guest Provides Written Consent
            </h2>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              Before submitting a guest’s telephone number for an SMS invitation, the inviting CircleUp user must contact the guest through a personal text message, email, WhatsApp or another written communication.
            </p>
            <p>
              The consent request is sent personally by the inviting user. CircleUp does not automatically send this consent request.
            </p>
            <p>
              The guest must personally provide a clear written response agreeing to receive one CircleUp SMS invitation for the identified match. The inviting user cannot provide consent on the guest’s behalf.
            </p>
          </div>

          <div className="space-y-6 pt-2">
            
            {/* Consent Request Example */}
            <div className="p-6 sm:p-7 rounded-3xl glass-box border border-slate-200 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Consent Request Example
              </div>
              <div className="p-5 rounded-2xl bg-slate-100/90 border border-slate-200 space-y-3">
                <p className="text-xs sm:text-sm text-slate-800 font-sans leading-relaxed">
                  “May CircleUp send you one SMS invitation for our [Singles/Doubles] match on [Date] at [Time] at [Club Name]? You will receive one SMS for this specific match invitation. Message and data rates may apply. After receiving the CircleUp SMS, reply STOP to unsubscribe or HELP for assistance.
                </p>
                <div className="text-xs text-[#0066FF] flex flex-wrap gap-x-4 gap-y-1 font-mono">
                  <a href="https://joincircleplay.com/terms" onClick={(e) => { e.preventDefault(); onNavigate('/terms'); }} className="underline hover:text-blue-700">Terms: https://joincircleplay.com/terms</a>
                  <a href="https://joincircleplay.com/privacy-policy" onClick={(e) => { e.preventDefault(); onNavigate('/privacy-policy'); }} className="underline hover:text-blue-700">Privacy Policy: https://joincircleplay.com/privacy-policy</a>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-900">
                  Reply YES to provide your written consent.”
                </p>
              </div>
            </div>

            {/* Example Guest Response */}
            <div className="p-6 sm:p-7 rounded-3xl glass-box border border-slate-200 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Example Guest Response
              </div>
              <div className="p-4 rounded-2xl rounded-tl-xs bg-blue-50 border border-blue-200 text-xs sm:text-sm text-slate-900 font-sans shadow-2xs">
                “Yes, I agree to receive one SMS invitation from CircleUp for this specific match.”
              </div>
              <div className="space-y-2 text-xs text-slate-600 leading-relaxed pt-1">
                <p>
                  A YES response is valid only when it is provided in response to the complete consent request shown above or another written request containing the same disclosures.
                </p>
                <p>
                  This example YES response is provided directly to the inviting user through the same private written communication channel used for the consent request, such as the inviting user’s personal text message, email or WhatsApp conversation. It is not a keyword opt-in sent to CircleUp’s Twilio telephone number. CircleUp does not offer an initial keyword-based opt-in path.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 4 — RESPONSIBILITY FOR GUEST CONSENT */}
        <section className="mb-16 space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Responsibility for Guest Consent
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl glass-box border border-slate-200/90 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              CircleUp requires registered users to obtain a guest’s prior express written consent before requesting an SMS match invitation. The guest must personally provide consent through a text message, email, WhatsApp or another written communication. The inviting user cannot provide consent on the guest’s behalf.
            </p>
            <p>
              The inviting user must retain evidence of the guest’s written consent and provide it to CircleUp promptly upon request. CircleUp may request this evidence in connection with a recipient complaint, Twilio or carrier inquiry, regulatory request, abuse investigation or compliance review.
            </p>
            <p>
              Before CircleUp sends an SMS invitation, the inviting user must actively select a separate confirmation checkbox. CircleUp records the inviting user, guest telephone number, match identification, consent-confirmation status, consent-language version, and date and time of the confirmation and SMS request.
            </p>
            <p>
              CircleUp may suspend or terminate a user’s access to SMS invitations if the user cannot provide evidence of consent, submits a telephone number without authorization, generates complaints or otherwise violates CircleUp’s SMS requirements.
            </p>
          </div>
        </section>

        {/* SECTION 5 — IN-APP SMS CONSENT CONFIRMATION */}
        <section className="mb-16 space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              In-App SMS Consent Confirmation
            </h2>
          </div>

          {/* Subheading: Where the Consent Confirmation Appears */}
          <div className="p-6 sm:p-8 rounded-3xl glass-box border border-slate-200/90 space-y-4">
            <h3 className="text-lg font-bold text-slate-950">
              Where the Consent Confirmation Appears
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              The SMS consent confirmation is located inside the authenticated CircleUp mobile application. A registered user accesses it through the following path:
            </p>
            <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200/80 text-xs sm:text-sm font-semibold text-[#0066FF] flex flex-wrap items-center gap-2 font-mono">
              <span>Create Match</span>
              <span className="text-slate-400">→</span>
              <span>Invite Players Not on the App</span>
              <span className="text-slate-400">→</span>
              <span>Enter Guest Telephone Number</span>
              <span className="text-slate-400">→</span>
              <span>Confirm SMS Consent</span>
              <span className="text-slate-400">→</span>
              <span>Add Outside Guest & Send Invite</span>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              After obtaining the guest’s prior express written consent, the inviting user enters the guest’s telephone number and actively selects the separate SMS consent checkbox. The checkbox is unchecked by default.
            </p>
          </div>
        </section>

        {/* SECTION 6 — PRODUCTION APP CONSENT INTERFACE */}
        <section className="mb-16 space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Production App Consent Interface
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              This is a noninteractive website reproduction of the consent language that appears inside the CircleUp mobile application. This public website does not collect telephone numbers, written consent or SMS enrollment.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl glass-box border border-slate-200/90 space-y-4">
            {/* Noninteractive Visually Unchecked Checkbox and Bold Label */}
            <div className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl bg-white border border-slate-300/80 shadow-2xs">
              <div className="w-5 h-5 rounded border-2 border-slate-400 bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                {/* Noninteractive Unchecked Checkbox */}
              </div>
              <div className="space-y-2 text-slate-900 text-xs sm:text-sm leading-relaxed">
                <p className="font-bold text-slate-950">
                  I confirm that this guest personally gave prior express written consent for CircleUp to send one SMS invitation for this specific match, and I have retained proof of that consent.
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  The guest will receive one SMS for this specific match invitation. Message frequency: one SMS for this consented invitation. Message and data rates may apply. The guest may reply STOP to unsubscribe or HELP for assistance. Separate written consent and confirmation are required for every future SMS invitation. SMS consent is optional; the guest may be invited by email instead.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-semibold text-[#0066FF]">
                  <a href="https://joincircleplay.com/privacy-policy" onClick={(e) => { e.preventDefault(); onNavigate('/privacy-policy'); }} className="underline hover:text-blue-700">Privacy Policy</a>
                  <span className="text-slate-300">|</span>
                  <a href="https://joincircleplay.com/terms" onClick={(e) => { e.preventDefault(); onNavigate('/terms'); }} className="underline hover:text-blue-700">Terms and Conditions</a>
                  <span className="text-slate-300">|</span>
                  <a href="https://joincircleplay.com/sms-consent" onClick={(e) => { e.preventDefault(); onNavigate('/sms-consent'); }} className="underline hover:text-blue-700">SMS Consent</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 — SMS CONFIRMATION BEHAVIOR */}
        <section className="mb-16 space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              SMS Confirmation Behavior
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl glass-box border border-slate-200/90">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>The SMS consent checkbox is unchecked whenever the invitation screen opens.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>Entering a telephone number does not automatically provide consent.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>The SMS checkbox is separate from acceptance of CircleUp’s general Terms and Privacy Policy.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>The Add Outside Guest & Send Invite button remains gray and disabled while the checkbox is unchecked.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>The button becomes blue and enabled only after the inviting user actively selects the checkbox.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>Backend validation prevents an SMS request from being submitted without consent confirmation.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>The checkbox resets to unchecked after every invitation.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>A previous confirmation is never reused automatically.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>Separate written consent and a new confirmation are required for every future SMS invitation.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>Email-only invitations do not require the SMS checkbox.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>CircleUp does not automatically send reminders or follow-up SMS messages to outside guests.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>STOP and HELP responses are supported.</span>
              </li>
              <li className="flex items-start gap-2.5 md:col-span-2 pt-2 border-t border-slate-200/80">
                <Check className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span className="font-semibold text-slate-900">Replying STOP blocks future CircleUp SMS messages from the sending number. A new invitation may not be sent merely because an inviting user submits another consent confirmation. After a STOP request, SMS messaging may resume only if the recipient completes a supported opt-in process.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 8 — ACTUAL APPLICATION SCREENSHOTS */}
        <section className="mb-16 space-y-8">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Public Evidence of the CircleUp App Flow
            </h2>
          </div>

          {/* Two App Screens Side-by-Side in Same Line */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* ITEM 1 */}
            <ScreenshotAppCard
              number="01"
              badgeLabel="Actual App Screenshot"
              heading="Actual App Screenshot: Checkbox Unchecked"
              caption="This actual CircleUp application screenshot shows the SMS consent checkbox unchecked by default. The Add Outside Guest & Send Invite button is gray and disabled until the inviting user confirms that the guest personally provided prior written consent for the specific match invitation."
              imageSrc="/images/IMG_2508.PNG"
              imageAlt="Actual CircleUp app SMS consent screen with the checkbox unchecked and the Add Outside Guest & Send Invite button disabled."
              demonstrates={[
                "CircleUp brand",
                "Match information",
                "Guest full name",
                "Guest email address",
                "Guest telephone number",
                "Checkbox unchecked",
                "Complete checkbox label",
                "Complete adjacent disclosure",
                "Privacy Policy link",
                "Terms and Conditions link",
                "SMS Consent link",
                "Gray disabled Add Outside Guest & Send Invite button"
              ]}
            />

            {/* ITEM 2 */}
            <ScreenshotAppCard
              number="02"
              badgeLabel="Actual App Screenshot"
              heading="Actual App Screenshot: Checkbox Selected"
              caption="This actual CircleUp application screenshot shows the inviting user actively selecting the SMS consent checkbox after obtaining the guest’s prior written consent. The Add Outside Guest & Send Invite button then becomes enabled."
              imageSrc="/images/IMG_2509.PNG"
              imageAlt="Actual CircleUp app SMS consent screen with the checkbox selected and the Add Outside Guest & Send Invite button enabled."
              demonstrates={[
                "The same guest information",
                "The same match information",
                "Checkbox selected",
                "Complete checkbox label",
                "Complete adjacent disclosure",
                "Policy links",
                "Blue enabled Add Outside Guest & Send Invite button"
              ]}
            />
          </div>

          {/* SECTION 10: Website Explanation (Not an App Screen) */}
          <div className="w-full">
            <WebsiteExplanationCard onNavigate={onNavigate} />
          </div>
        </section>

        {/* SECTION 11 — REGISTERED CAMPAIGN SAMPLE MESSAGE */}
        <section className="mb-16 space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              SMS Message Received by the Guest
            </h2>
            <div className="mt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                Registered Campaign Sample Message
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl glass-box border border-slate-200/90 space-y-4 max-w-2xl">
            {/* SMS bubble */}
            <div className="p-4 rounded-2xl rounded-tl-xs bg-slate-100 border border-slate-200 text-left space-y-2 shadow-2xs">
              <p className="text-xs sm:text-sm text-slate-900 font-sans leading-relaxed">
                “CircleUp: [Inviter Name] invited you to a [Singles/Doubles] match on [Date] at [Time] at [Club Name]. Download CircleUp and register using this phone number to view the invitation: <a href="https://joincircleplay.com/invite" onClick={(e) => { e.preventDefault(); onNavigate('/invite'); }} className="text-[#0066FF] underline font-mono">https://joincircleplay.com/invite</a>. Msg & data rates may apply. Reply STOP to unsubscribe or HELP for help.”
              </p>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Message frequency: One SMS for each specific match invitation for which the guest provided prior written consent. Separate consent is required for every future match invitation.
            </p>
          </div>
        </section>

        {/* SECTION 12 — SMS OPERATING RULES */}
        <section className="mb-16 space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              CircleUp SMS Operating Rules
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <div className="p-6 rounded-2xl glass-box border border-slate-200/90 space-y-2">
              <h3 className="text-base font-bold text-slate-950">
                One SMS Per Consented Invitation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                CircleUp sends one SMS for the specific match invitation for which the guest provided prior express written consent. Another invitation requires new written consent and a new in-app confirmation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl glass-box border border-slate-200/90 space-y-2">
              <h3 className="text-base font-bold text-slate-950">
                No Automatic Follow-Ups
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                CircleUp does not automatically send outside guests SMS reminders, schedule changes, booking notifications, acceptance notifications, marketing messages or recurring SMS messages.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl glass-box border border-slate-200/90 space-y-2">
              <h3 className="text-base font-bold text-slate-950">
                STOP and HELP Support
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A recipient may reply STOP to unsubscribe from CircleUp SMS messages from the sending number. Replying STOP blocks future CircleUp SMS messages from the sending number. A new invitation may not be sent merely because an inviting user submits another consent confirmation. After a STOP request, SMS messaging may resume only if the recipient completes a supported opt-in process. A recipient may reply HELP for assistance or email <a href="mailto:contact@joincircleplay.com" className="text-[#0066FF] underline font-mono">contact@joincircleplay.com</a>.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl glass-box border border-slate-200/90 space-y-2">
              <h3 className="text-base font-bold text-slate-950">
                Mobile Information Non-Sharing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                CircleUp does not sell or share mobile telephone numbers or SMS consent information with third parties or affiliates for their marketing or promotional purposes. CircleUp may disclose information to service providers that process SMS messages or perform services on CircleUp’s behalf, subject to appropriate confidentiality and data-protection obligations.
              </p>
            </div>

          </div>
        </section>

        {/* SECTION 13 — SMS PROGRAM SPECIFICATIONS */}
        <section className="mb-16 space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              SMS Program Specifications
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="min-w-full divide-y divide-slate-200 text-xs sm:text-sm">
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-5 py-3.5 font-bold text-slate-900 bg-slate-50/70 w-1/3">Program Name</td>
                  <td className="px-5 py-3.5 text-slate-700">CircleUp Sports Match Invitations</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5 font-bold text-slate-900 bg-slate-50/70">Sender Brand</td>
                  <td className="px-5 py-3.5 text-slate-700">CircleUp</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5 font-bold text-slate-900 bg-slate-50/70">Operating Company</td>
                  <td className="px-5 py-3.5 text-slate-700">Circle Up Tech LLC</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5 font-bold text-slate-900 bg-slate-50/70">Message Classification</td>
                  <td className="px-5 py-3.5 text-slate-700">User-initiated A2P transactional sports match invitation</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5 font-bold text-slate-900 bg-slate-50/70">Message Type</td>
                  <td className="px-5 py-3.5 text-slate-700">One SMS invitation for a specific match for which the guest provided prior express written consent</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5 font-bold text-slate-900 bg-slate-50/70">Message Frequency</td>
                  <td className="px-5 py-3.5 text-slate-700">One SMS per specifically consented match invitation. Separate written consent is required for every future invitation. No automatic or recurring SMS messages.</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5 font-bold text-slate-900 bg-slate-50/70">Message and Data Rates</td>
                  <td className="px-5 py-3.5 text-slate-700">Message and data rates may apply according to the recipient’s mobile plan.</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5 font-bold text-slate-900 bg-slate-50/70">Opt-Out</td>
                  <td className="px-5 py-3.5 text-slate-700 font-mono">Reply STOP to unsubscribe.</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5 font-bold text-slate-900 bg-slate-50/70">Help</td>
                  <td className="px-5 py-3.5 text-slate-700">Reply HELP for assistance or email <a href="mailto:contact@joincircleplay.com" className="text-[#0066FF] underline font-mono">contact@joincircleplay.com</a>.</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5 font-bold text-slate-900 bg-slate-50/70">Privacy Policy</td>
                  <td className="px-5 py-3.5 text-[#0066FF]"><a href="https://joincircleplay.com/privacy-policy" onClick={(e) => { e.preventDefault(); onNavigate('/privacy-policy'); }} className="underline font-mono">https://joincircleplay.com/privacy-policy</a></td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5 font-bold text-slate-900 bg-slate-50/70">Terms and Conditions</td>
                  <td className="px-5 py-3.5 text-[#0066FF]"><a href="https://joincircleplay.com/terms" onClick={(e) => { e.preventDefault(); onNavigate('/terms'); }} className="underline font-mono">https://joincircleplay.com/terms</a></td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5 font-bold text-slate-900 bg-slate-50/70">SMS Consent Evidence</td>
                  <td className="px-5 py-3.5 text-[#0066FF]"><a href="https://joincircleplay.com/sms-consent" onClick={(e) => { e.preventDefault(); onNavigate('/sms-consent'); }} className="underline font-mono">https://joincircleplay.com/sms-consent</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 14 — CONSENT CONFIRMATION RECORDS */}
        <section className="mb-16 space-y-4">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Consent Confirmation Records
            </h2>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl glass-box border border-slate-200 space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              When an SMS invitation is requested, CircleUp records the inviting user, guest telephone number, match identification, checkbox-confirmation status, consent-language version, confirmation date and time, SMS-request date and time, Twilio Message SID and delivery status when available.
            </p>
            <p>
              The underlying written consent is retained by the inviting user. The inviting user must provide it to CircleUp promptly upon request. CircleUp may suspend SMS invitation access if the user fails to produce evidence when requested.
            </p>
          </div>
        </section>

        {/* SECTION 15 — CAMPAIGN INFORMATION */}
        <section className="mb-16 space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Campaign Information
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl glass-box border border-slate-200 space-y-4 text-xs sm:text-sm text-slate-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="font-bold text-slate-950 block">Legal Business Name:</span>
                <span className="text-slate-700">Circle Up Tech LLC</span>
              </div>
              <div>
                <span className="font-bold text-slate-950 block">Brand Name:</span>
                <span className="text-slate-700">CircleUp</span>
              </div>
              <div>
                <span className="font-bold text-slate-950 block">Website:</span>
                <a href="https://joincircleplay.com" className="text-[#0066FF] underline font-mono">https://joincircleplay.com</a>
              </div>
              <div>
                <span className="font-bold text-slate-950 block">SMS Consent Evidence:</span>
                <a href="https://joincircleplay.com/sms-consent" onClick={(e) => { e.preventDefault(); onNavigate('/sms-consent'); }} className="text-[#0066FF] underline font-mono">https://joincircleplay.com/sms-consent</a>
              </div>
              <div className="sm:col-span-2">
                <span className="font-bold text-slate-950 block">Messaging Purpose:</span>
                <span className="text-slate-700">User-initiated A2P sports match invitations sent to outside guests after the guests personally provide prior express written consent.</span>
              </div>
              <div className="sm:col-span-2">
                <span className="font-bold text-slate-950 block">Consent Method:</span>
                <span className="text-slate-700">The guest provides written consent through text message, email, WhatsApp or another written communication. After receiving that consent, the registered CircleUp user confirms it using a separate, unchecked checkbox inside the authenticated CircleUp mobile application.</span>
              </div>
              <div>
                <span className="font-bold text-slate-950 block">Message Frequency:</span>
                <span className="text-slate-700">One SMS for each specifically consented match invitation. Separate written consent is required for every future invitation.</span>
              </div>
              <div>
                <span className="font-bold text-slate-950 block">Contact Email:</span>
                <a href="mailto:contact@joincircleplay.com" className="text-[#0066FF] underline font-mono">contact@joincircleplay.com</a>
              </div>
              <div>
                <span className="font-bold text-slate-950 block">Privacy Policy:</span>
                <a href="https://joincircleplay.com/privacy-policy" onClick={(e) => { e.preventDefault(); onNavigate('/privacy-policy'); }} className="text-[#0066FF] underline font-mono">https://joincircleplay.com/privacy-policy</a>
              </div>
              <div>
                <span className="font-bold text-slate-950 block">Terms:</span>
                <a href="https://joincircleplay.com/terms" onClick={(e) => { e.preventDefault(); onNavigate('/terms'); }} className="text-[#0066FF] underline font-mono">https://joincircleplay.com/terms</a>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs text-slate-600 leading-relaxed">
              This public page is provided because the CircleUp mobile application requires authentication. It allows messaging-compliance reviewers to examine the written-consent and in-app confirmation process without logging into the application.
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
