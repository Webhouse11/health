import React from 'react';
import { motion } from 'motion/react';
import { Scale, Gavel, CheckCircle, AlertCircle } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-gray-50 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-6">
              <Scale className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Last Updated: March 20, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg prose-emerald max-w-none text-gray-600 leading-relaxed">
          <p>
            Welcome to HEALTH BOOST! These terms and conditions outline the rules and regulations for the use of HEALTH BOOST's Website, located at <span className="text-emerald-600 font-semibold">healthboost.com</span>.
          </p>
          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use HEALTH BOOST if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
            <Gavel className="w-6 h-6 text-emerald-600" />
            1. Intellectual Property Rights
          </h2>
          <p>
            Other than the content you own, under these Terms, HEALTH BOOST and/or its licensors own all the intellectual property rights and materials contained in this Website.
          </p>
          <p>
            You are granted limited license only for purposes of viewing the material contained on this Website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-emerald-600" />
            2. Restrictions
          </h2>
          <p>You are specifically restricted from all of the following:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>publishing any Website material in any other media;</li>
            <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
            <li>publicly performing and/or showing any Website material;</li>
            <li>using this Website in any way that is or may be damaging to this Website;</li>
            <li>using this Website in any way that impacts user access to this Website;</li>
            <li>using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
            <li>engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>
            <li>using this Website to engage in any advertising or marketing.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. Your Content</h2>
          <p>
            In these Website Standard Terms and Conditions, "Your Content" shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant HEALTH BOOST a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
          </p>
          <p>
            Your Content must be your own and must not be invading any third-party’s rights. HEALTH BOOST reserves the right to remove any of Your Content from this Website at any time without notice.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-emerald-600" />
            4. No warranties
          </h2>
          <p>
            This Website is provided "as is," with all faults, and HEALTH BOOST express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. Limitation of liability</h2>
          <p>
            In no event shall HEALTH BOOST, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. HEALTH BOOST, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. Indemnification</h2>
          <p>
            You hereby indemnify to the fullest extent HEALTH BOOST from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">7. Severability</h2>
          <p>
            If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">8. Variation of Terms</h2>
          <p>
            HEALTH BOOST is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">9. Assignment</h2>
          <p>
            The HEALTH BOOST is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">10. Entire Agreement</h2>
          <p>
            These Terms constitute the entire agreement between HEALTH BOOST and you in relation to your use of this Website, and supersede all prior agreements and understandings.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">11. Governing Law & Jurisdiction</h2>
          <p>
            These Terms will be governed by and interpreted in accordance with the laws of the State of California, and you submit to the non-exclusive jurisdiction of the state and federal courts located in California for the resolution of any disputes.
          </p>
        </div>
      </section>
    </div>
  );
}
