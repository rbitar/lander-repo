import { cn } from '../lib/utils';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsletterSignup from '../components/NewsletterSignup';

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Hero 
        backgroundImage="https://frontend.co/api/photos?query=digital+landscape+blue+gradient&w=1920&h=1080&q=90"
        title="Elevate Your Digital Experience"
        subtitle="Empowering your digital journey with cutting-edge solutions"
        height="min-h-[600px]"
      />
      <Features />
      <NewsletterSignup />
      <CTA />
      <Footer />
    </div>
  );
}