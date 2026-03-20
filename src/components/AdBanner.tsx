import React from 'react';

interface AdBannerProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
  className?: string;
}

/**
 * AdBanner component for Google AdSense integration.
 * Replace the placeholder div with your actual AdSense code.
 */
const AdBanner: React.FC<AdBannerProps> = ({ slot, format = 'auto', className = '' }) => {
  return (
    <div className={`ad-container my-8 w-full overflow-hidden flex justify-center items-center bg-gray-50 border border-gray-100 rounded-2xl min-h-[100px] ${className}`}>
      {/* 
        Google AdSense Code Placeholder
        Example:
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot={slot}
             data-ad-format={format}
             data-full-width-responsive="true"></ins>
      */}
      <div className="text-center p-4">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1 font-bold">Advertisement</p>
        <div className="text-xs text-gray-300 italic">AdSense Placeholder</div>
      </div>
    </div>
  );
};

export default AdBanner;
