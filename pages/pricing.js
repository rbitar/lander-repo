import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PricingPlans from '../components/PricingPlans';
import CTA from '../components/CTA';

export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">Simple, Transparent Pricing</h1>
            <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
              Choose the plan that works best for your business needs. No hidden fees or long-term commitments.
            </p>
          </div>
        </div>
        
        <PricingPlans />
        
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">Get answers to common questions about our pricing and plans</p>
            </div>
            
            <div className="max-w-3xl mx-auto divide-y divide-gray-200">
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">Can I change plans later?</h3>
                <p className="mt-2 text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes to your subscription will be prorated.</p>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">Are there any long-term contracts?</h3>
                <p className="mt-2 text-gray-600">No, all plans are billed monthly or annually with no long-term commitments. You can cancel anytime.</p>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">Do you offer discounts for non-profits?</h3>
                <p className="mt-2 text-gray-600">Yes, we offer special pricing for non-profit organizations and educational institutions. Please contact our sales team for details.</p>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">What payment methods do you accept?</h3>
                <p className="mt-2 text-gray-600">We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also support payment via PayPal for annual plans.</p>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">Is there a free trial available?</h3>
                <p className="mt-2 text-gray-600">Yes, all paid plans come with a 14-day free trial. No credit card required to start your trial.</p>
              </div>
            </div>
          </div>
        </section>
        
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
}
