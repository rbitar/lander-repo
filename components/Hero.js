import React from 'react';
import { cn } from '../lib/utils';

const Hero = ({ 
  title = "Innovate, Create, Succeed", 
  subtitle = "Empowering your digital journey with cutting-edge solutions",
  backgroundImage = "https://frontend.co/api/photos?query=abstract+technology+pattern&w=1920&h=1080&q=90",
  overlayOpacity = 'bg-black/50', // bg-black/30, bg-black/50, bg-black/70
  textColor = 'text-white',
  height = 'min-h-[500px]', // min-h-[400px], min-h-[500px], min-h-[600px], min-h-screen
  textAlignment = 'text-center', // text-left, text-center, text-right
  buttonText = 'Get Started',
  secondaryButtonText = 'Learn More',
  showButtons = true
 }) => {
  return (
    <div className="w-full relative">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img 
          src={backgroundImage} 
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className={cn("absolute inset-0", overlayOpacity)}></div>
      </div>
      
      {/* Content */}
      <div className={cn("relative w-full flex items-center justify-center px-4", height)}>
        <div className={cn("max-w-6xl mx-auto", textAlignment)}>
          <h1 className={cn("text-4xl md:text-5xl font-bold mb-4", textColor)}>{title}</h1>
          <p className={cn("text-xl md:text-2xl max-w-3xl mx-auto mb-8", textColor === 'text-white' ? 'text-gray-200' : 'text-gray-700')}>
            {subtitle}
          </p>
          
          {showButtons && (
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="#" 
                className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                {buttonText}
              </a>
              <a 
                href="#" 
                className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
              >
                {secondaryButtonText}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;