import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Cookie } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
          id="cookie-consent-banner"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
            
            <div className="flex items-start gap-4">
              <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600">
                <Cookie size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cookie Settings</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  HEALTH BOOST uses cookies to enhance your experience, analyze site traffic, and serve personalized advertisements via Google AdSense. By clicking "Accept", you consent to our use of cookies.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAccept}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors text-sm"
                    id="accept-cookies"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={handleDecline}
                    className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold py-2.5 px-4 rounded-xl transition-colors text-sm border border-gray-200"
                    id="decline-cookies"
                  >
                    Necessary Only
                  </button>
                </div>
              </div>
              
              <button 
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center">
              <a href="/privacy" className="text-xs text-emerald-600 hover:underline font-medium">Privacy Policy</a>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">Health Boost</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
