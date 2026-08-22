import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Logo } from '../components/Logo';
import { ArrowLeft, Shield, AlertTriangle } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
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
            Legal Agreement
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            CircleUp Terms of Service
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 font-medium">
            <span>Operator: <strong className="text-slate-800">{SITE_CONFIG.legalCompanyName}</strong></span>
            <span>•</span>
            <span>Effective Date: <strong className="text-slate-800">{SITE_CONFIG.effectiveDate}</strong></span>
            <span>•</span>
            <span>Website: <a href={SITE_CONFIG.domain} className="text-[#0066FF] hover:underline font-mono">{SITE_CONFIG.domain}</a></span>
          </div>
        </div>

        {/* Terms Content */}
        <div className="space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">
          
          {/* 1. Acceptance */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">1. Acceptance of Terms</h2>
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement between you and <strong>{SITE_CONFIG.legalCompanyName}</strong> ("we," "us," or "CircleUp"). By accessing or using the CircleUp mobile application, website (<strong>{SITE_CONFIG.domain}</strong>), or associated services (collectively, the "Service"), you agree to be bound by these Terms and our <a href="https://joincircleplay.com/privacy-policy" onClick={(e) => { e.preventDefault(); onNavigate('/privacy-policy'); }} className="text-[#0066FF] underline font-medium hover:text-blue-700">Privacy Policy</a>.
            </p>
          </section>

          {/* 2. Eligibility */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">2. Eligibility and User Accounts</h2>
            <p>
              You must be at least 13 years of age to use the Service. When registering for a CircleUp account, you agree to provide accurate, current, and complete information and to keep your account credentials secure. You are solely responsible for all activities that occur under your account.
            </p>
          </section>

          {/* 3. The CircleUp Service */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">3. The CircleUp Service</h2>
            <p>
              CircleUp provides a technology platform that enables sports players to coordinate, schedule, and communicate regarding recreational sports matches (such as Squash and SDA Doubles). CircleUp serves as a scheduling tool and coordination engine between players.
            </p>
          </section>

          {/* 4. Sports Matches and Facility Disclaimer */}
          <section className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center gap-2 text-slate-950 font-bold text-base">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <h2>4. Sports Matches, Attendance & Facility Disclaimer</h2>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              CircleUp facilitates match scheduling between independent participants. CircleUp does <strong>not</strong> guarantee:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs sm:text-sm">
              <li>Player attendance, promptness, skill level, or sportsmanship.</li>
              <li>Facility or court availability, access, court reservations, or condition.</li>
              <li>Match completion, physical safety, or sporting performance.</li>
            </ul>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Listing or naming a club, facility, or court location within CircleUp does not constitute an official partnership, sponsorship, or affiliation between that facility and Circle Up Tech LLC unless explicitly stated.
            </p>
          </section>

          {/* 5. SMS Match Invitation Terms */}
          <section className="p-6 sm:p-8 rounded-3xl glass-box space-y-6 border border-slate-200/90 shadow-sm bg-white/90">
            <div className="flex items-center gap-2.5 text-slate-950 font-bold text-base sm:text-lg">
              <div className="w-8 h-8 rounded-lg bg-slate-950 text-white flex items-center justify-center shadow-xs">
                <Shield className="w-4 h-4" />
              </div>
              <h2>5. SMS Match Invitation Terms</h2>
            </div>

            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                CircleUp operates a user-initiated A2P sports match invitation program. A registered CircleUp user may ask CircleUp to send an SMS invitation to an outside guest for a specific sports match.
              </p>
              <p>
                CircleUp sends an SMS invitation only after the guest personally provides prior express written consent for that specific invitation and the inviting user confirms that consent inside the CircleUp mobile application.
              </p>
            </div>

            {/* 5.1 How the Guest Provides Consent */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3 text-xs sm:text-sm leading-relaxed">
              <h3 className="font-bold text-slate-950 text-sm sm:text-base">5.1 How the Guest Provides Consent</h3>
              <p className="text-slate-700">
                Before requesting an SMS invitation, the inviting user must contact the guest through a text message, email, WhatsApp or another written communication.
              </p>
              <p className="text-slate-700">
                The consent request must clearly identify CircleUp, describe the specific match invitation, state that the guest will receive one SMS, disclose that message and data rates may apply, explain STOP and HELP and provide links to CircleUp’s Terms and Privacy Policy.
              </p>
              <p className="text-slate-700">
                The guest must personally provide a clear written response agreeing to receive the CircleUp SMS invitation. The inviting user cannot provide consent on the guest’s behalf.
              </p>

              <div className="space-y-2 pt-2">
                <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider">Example consent request:</span>
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-slate-800 space-y-2">
                  <p>
                    “May CircleUp send you one SMS invitation for our [Singles/Doubles] match on [Date] at [Time] at [Club Name]? You will receive one SMS for this specific match invitation. Message and data rates may apply. After receiving the CircleUp SMS, reply STOP to unsubscribe or HELP for assistance.
                  </p>
                  <div className="text-xs text-[#0066FF] flex flex-wrap gap-x-4 gap-y-1 font-mono">
                    <a href="https://joincircleplay.com/terms" onClick={(e) => { e.preventDefault(); onNavigate('/terms'); }} className="underline hover:text-blue-700">Terms: https://joincircleplay.com/terms</a>
                    <a href="https://joincircleplay.com/privacy-policy" onClick={(e) => { e.preventDefault(); onNavigate('/privacy-policy'); }} className="underline hover:text-blue-700">Privacy Policy: https://joincircleplay.com/privacy-policy</a>
                  </div>
                  <p className="font-semibold text-slate-900">
                    Reply YES to provide your written consent.”
                  </p>
                </div>
              </div>

              <div className="space-y-1.5 pt-1">
                <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider">Example guest response:</span>
                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-slate-900 font-medium">
                  “Yes, I agree to receive one SMS invitation from CircleUp for this specific match.”
                </div>
              </div>

              <p className="text-slate-600 text-xs pt-1">
                A YES response is valid only when provided in response to the complete consent request above or another written request containing the same disclosures.
              </p>
            </div>

            {/* 5.2 In-App Consent Confirmation */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3 text-xs sm:text-sm leading-relaxed">
              <h3 className="font-bold text-slate-950 text-sm sm:text-base">5.2 In-App Consent Confirmation</h3>
              <p className="text-slate-700">
                After obtaining the guest’s prior written consent, the inviting user enters the guest’s telephone number in the authenticated CircleUp mobile application through this path:
              </p>
              <div className="p-3 rounded-xl bg-white border border-slate-200 font-mono text-xs text-[#0066FF] font-semibold flex flex-wrap items-center gap-1.5">
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
              <p className="text-slate-700">
                A separate SMS consent checkbox appears immediately below the guest’s telephone-number field. The checkbox is always unchecked by default. Entering a telephone number does not automatically provide consent.
              </p>
              <p className="text-slate-700">
                The inviting user must actively select the following checkbox:
              </p>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 font-bold text-slate-950">
                “I confirm that this guest personally gave prior express written consent for CircleUp to send one SMS invitation for this specific match, and I have retained proof of that consent.”
              </div>
              <p className="text-slate-700">
                The following disclosure appears with the checkbox:
              </p>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-slate-700">
                “The guest will receive one SMS for this specific match invitation. Message frequency: one SMS for this consented invitation. Message and data rates may apply. The guest may reply STOP to unsubscribe or HELP for assistance. Separate written consent and confirmation are required for every future SMS invitation. SMS consent is optional; the guest may be invited by email instead.”
              </div>
              <p className="text-slate-700">
                The Add Outside Guest & Send Invite button remains disabled while the checkbox is unchecked. CircleUp also uses backend validation to prevent an SMS request from being submitted without the confirmation.
              </p>
              <p className="text-slate-700">
                The checkbox resets to unchecked after every invitation. A previous confirmation is never reused automatically.
              </p>
              <p className="text-slate-700 font-medium">
                The checkbox is the inviting user’s confirmation that the guest previously provided written consent. It is not consent provided by the inviting user on the guest’s behalf.
              </p>
            </div>

            {/* 5.3 Message Frequency and Future Invitations */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2.5 text-xs sm:text-sm leading-relaxed">
              <h3 className="font-bold text-slate-950 text-sm sm:text-base">5.3 Message Frequency and Future Invitations</h3>
              <p className="text-slate-700">
                CircleUp sends one SMS for the specific match invitation for which the guest provided prior written consent.
              </p>
              <p className="text-slate-700">
                CircleUp does not automatically send outside guests SMS reminders, follow-up messages, booking confirmations, schedule updates, acceptance notifications, marketing messages or recurring SMS messages under this program.
              </p>
              <p className="text-slate-700">
                A separate written consent and a new in-app confirmation are required before CircleUp may send the same guest an SMS invitation for a different future match.
              </p>
              <p className="text-slate-700 font-medium">
                SMS consent is optional. The guest may be invited by email instead.
              </p>
            </div>

            {/* 5.4 Message and Data Rates */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2.5 text-xs sm:text-sm leading-relaxed">
              <h3 className="font-bold text-slate-950 text-sm sm:text-base">5.4 Message and Data Rates</h3>
              <p className="text-slate-700">
                Message and data rates may apply according to the recipient’s mobile plan.
              </p>
              <p className="text-slate-700 font-medium">
                Mobile carriers are not liable for delayed or undelivered messages.
              </p>
            </div>

            {/* 5.5 Opt-Out and Help */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2.5 text-xs sm:text-sm leading-relaxed">
              <h3 className="font-bold text-slate-950 text-sm sm:text-base">5.5 Opt-Out and Help</h3>
              <p className="text-slate-700">
                A recipient may reply STOP at any time to unsubscribe from CircleUp SMS messages from the sending number.
              </p>
              <p className="text-slate-700">
                A recipient may reply HELP for assistance or email <a href="mailto:contact@joincircleplay.com" className="text-[#0066FF] underline font-mono">contact@joincircleplay.com</a>.
              </p>
              <p className="text-slate-700">
                CircleUp honors supported opt-out requests and blocks future SMS invitations from the sending number unless the recipient subsequently opts back in through a supported process. Replying STOP blocks future CircleUp SMS messages from the sending number. A new invitation may not be sent merely because an inviting user submits another consent confirmation. After a STOP request, SMS messaging may resume only if the recipient completes a supported opt-in process.
              </p>
            </div>

            {/* 5.6 Consent Evidence and Confirmation Records */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2.5 text-xs sm:text-sm leading-relaxed">
              <h3 className="font-bold text-slate-950 text-sm sm:text-base">5.6 Consent Evidence and Confirmation Records</h3>
              <p className="text-slate-700">
                The inviting user must retain evidence of the guest’s written consent and provide it to CircleUp promptly upon request. CircleUp may request this evidence in connection with a recipient complaint, Twilio or carrier inquiry, regulatory request, abuse investigation or compliance review.
              </p>
              <p className="text-slate-700">
                When an SMS invitation is requested, CircleUp records the inviting user, guest telephone number, match identification, checkbox-confirmation status, consent-language version, confirmation date and time, SMS-request date and time, Twilio Message SID and delivery status when available.
              </p>
              <p className="text-slate-700">
                CircleUp may suspend or terminate a user’s access to SMS invitations if the user cannot provide evidence of consent, submits a telephone number without authorization, generates complaints or otherwise violates CircleUp’s SMS requirements.
              </p>
            </div>

            {/* 5.7 Mobile Information Non-Sharing */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3 text-xs sm:text-sm leading-relaxed">
              <h3 className="font-bold text-slate-950 text-sm sm:text-base">5.7 Mobile Information Non-Sharing</h3>
              <p className="text-slate-700 font-bold">
                CircleUp does not sell or share mobile telephone numbers or SMS consent information with third parties or affiliates for their marketing or promotional purposes.
              </p>
              <p className="text-slate-700">
                CircleUp may disclose information to service providers that process SMS messages or perform necessary services on CircleUp’s behalf, subject to appropriate confidentiality and data-protection obligations.
              </p>
              <div className="pt-2 border-t border-slate-200/80 space-y-1.5 text-xs">
                <p className="font-semibold text-slate-900">For complete public documentation and screenshots of the consent-confirmation process, visit:</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-[#0066FF] font-mono">
                  <span>SMS Consent and Verification: <a href="https://joincircleplay.com/sms-consent" onClick={(e) => { e.preventDefault(); onNavigate('/sms-consent'); }} className="underline hover:text-blue-700">https://joincircleplay.com/sms-consent</a></span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-[#0066FF] font-mono">
                  <span>Privacy Policy: <a href="https://joincircleplay.com/privacy-policy" onClick={(e) => { e.preventDefault(); onNavigate('/privacy-policy'); }} className="underline hover:text-blue-700">https://joincircleplay.com/privacy-policy</a></span>
                </div>
              </div>
            </div>

          </section>

          {/* 6. User Content & In-Match Chat */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">6. User Content and Match Communications</h2>
            <p>
              CircleUp provides in-app match chat for participants of confirmed matches. You retain ownership of any messages or content you post, but you grant Circle Up Tech LLC a non-exclusive license to transmit and store such content solely as required to operate the Service.
            </p>
          </section>

          {/* 7. Acceptable Use */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">7. Acceptable Use Policy</h2>
            <p>You agree not to engage in any prohibited conduct, including:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Harassing, abusing, threatening, or stalking other players or organizers.</li>
              <li>Sending fraudulent invitations, impersonating others, or misrepresenting identity.</li>
              <li>Engaging in commercial spam, unsolicited advertising, or unauthorized data scraping.</li>
              <li>Attempting to probe, scan, breach, or disrupt CircleUp's systems or security.</li>
              <li>Misusing or redistributing other users' private contact information.</li>
            </ul>
          </section>

          {/* 8. Intellectual Property */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">8. Intellectual Property</h2>
            <p>
              The CircleUp name, logo, software code, user interface design, features, and brand materials are the exclusive property of {SITE_CONFIG.legalCompanyName} and are protected by applicable intellectual property laws.
            </p>
          </section>

          {/* 9. Disclaimers & Limitation of Liability */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">9. Disclaimers and Limitation of Liability</h2>
            <p className="text-xs sm:text-sm text-slate-600">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY LAW, CIRCLE UP TECH LLC DISCLAIMS ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              IN NO EVENT SHALL CIRCLE UP TECH LLC BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS TO OR USE OF THE SERVICE, OR PARTICIPATION IN ANY MATCH COORDINATED THROUGH CIRCLEUP.
            </p>
          </section>

          {/* 10. Indemnification */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">10. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless {SITE_CONFIG.legalCompanyName}, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising from your use of the Service or violation of these Terms.
            </p>
          </section>

          {/* 11. Suspension and Termination */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">11. Suspension and Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to CircleUp at any time for violation of these Terms, abusive conduct, or to maintain platform security.
            </p>
          </section>

          {/* 12. Governing Law */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">12. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law principles. Any dispute arising under or in connection with these Terms shall be resolved in the appropriate state or federal courts.
            </p>
          </section>

          {/* 13. Changes to Terms */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950">13. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will indicate the date of recent updates via the "Effective Date" at the top of this document. Continued use of CircleUp after modifications constitutes your agreement to the updated Terms.
            </p>
          </section>

          {/* 14. Contact */}
          <section className="pt-6 border-t border-slate-200 space-y-3">
            <h2 className="text-xl font-bold text-slate-950">14. Contact Information</h2>
            <p>For questions or notices concerning these Terms of Service, please reach out to:</p>
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
