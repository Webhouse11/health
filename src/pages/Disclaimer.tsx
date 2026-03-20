import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Info, ExternalLink } from 'lucide-react';

export default function Disclaimer() {
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
              <ShieldAlert className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Disclaimer
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
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl mb-12">
            <div className="flex gap-4">
              <Info className="w-6 h-6 text-emerald-600 shrink-0" />
              <p className="text-emerald-900 font-medium m-0">
                The information provided on FitLife Journal is for educational and informational purposes only and is not intended as medical advice.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Medical Disclaimer</h2>
          <p>
            The content on FitLife Journal, including text, graphics, images, and other material, is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
          <p>
            Never disregard professional medical advice or delay in seeking it because of something you have read on this website. If you think you may have a medical emergency, call your doctor or emergency services immediately.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. Fitness & Nutrition Disclaimer</h2>
          <p>
            The fitness and nutrition information provided on this site is for informational purposes only. You should consult with a healthcare professional before starting any diet, exercise, or supplementation program, before taking any medication, or if you have or suspect you might have a health problem.
          </p>
          <p>
            Exercise is not without its risks, and this or any other exercise program may result in injury. They include but are not limited to: risk of injury, aggravation of a pre-existing condition, or adverse effect of over-exertion such as muscle strain, abnormal blood pressure, fainting, disorders of heartbeat, and very rare instances of heart attack.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. Affiliate Disclaimer</h2>
          <p>
            FitLife Journal may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. Our affiliates include but are not limited to Amazon Services LLC Associates Program and others.
          </p>
          <p>
            We only recommend products and services that we believe will add value to our readers. We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for us to earn advertising fees by linking to Amazon.com and affiliated websites.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. External Links Disclaimer</h2>
          <p>
            The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
          </p>
          <div className="flex items-center gap-2 text-emerald-600 font-semibold mt-4">
            <ExternalLink className="w-4 h-4" />
            <span>We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites.</span>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. Errors and Omissions Disclaimer</h2>
          <p>
            While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, FitLife Journal is not responsible for any errors or omissions, or for the results obtained from the use of this information. All information in this site is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. Contact Us</h2>
          <p>
            If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at <span className="text-emerald-600 font-semibold">contact@fitlifejournal.com</span> or through our <a href="/contact" className="text-emerald-600 hover:underline">Contact Page</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
