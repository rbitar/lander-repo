import React from 'react';

const CTA = ({ 
  title = "Ready to get started?", 
  subtitle = "Join thousands of satisfied customers today.",
  buttonText = "Get Started",
  secondaryButtonText = "Learn More"
}) => {
  return (
    <div className="w-full bg-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-xl text-gray-300 mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition-colors">
            {buttonText}
          </button>
          <button className="px-8 py-3 bg-transparent text-white border border-white font-medium rounded-md hover:bg-gray-800 transition-colors">
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;