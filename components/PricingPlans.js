import React, { useState } from 'react';

export default function PricingPlans() {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individuals and small projects',
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        'Up to 3 projects',
        '1 GB storage',
        'Basic analytics',
        'Email support',
        'Community access'
      ],
      cta: 'Start for Free',
      highlighted: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        'Unlimited projects',
        '10 GB storage',
        'Advanced analytics',
        'Priority email support',
        'API access',
        'Team collaboration tools',
        'Custom integrations'
      ],
      cta: 'Start Free Trial',
      highlighted: true
    },
    {
      name: 'Enterprise',
      description: 'Advanced features for large organizations',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        'Unlimited everything',
        '100 GB storage',
        'Enterprise analytics',
        '24/7 dedicated support',
        'Advanced security',
        'Custom branding',
        'SLA guarantees',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      highlighted: false
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center mb-10">
          <div className="bg-gray-100 p-1 rounded-full inline-flex">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${!isAnnual ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${isAnnual ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'}`}
            >
              Annual <span className="text-green-500 font-medium">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`${plan.highlighted ? 'border-2 border-blue-600 relative scale-105 shadow-xl bg-white z-10' : 'border border-gray-200 bg-white shadow-md'} rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg`}
            >
              {plan.highlighted && (
                <div className="bg-blue-600 text-white text-xs uppercase font-semibold tracking-wide py-1 text-center">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600 ml-2">/month</span>
                  
                  {isAnnual && plan.annualPrice > 0 && (
                    <p className="text-sm text-green-600 mt-1">Billed annually (${plan.annualPrice * 12}/year)</p>
                  )}
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <i className="ri-check-line text-green-500 text-lg mr-2 mt-0.5"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-colors ${plan.highlighted ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 text-gray-600 text-sm">
          <p>All plans include a 14-day free trial. No credit card required.</p>
          <p className="mt-2">Need a custom plan? <a href="/contact" className="text-blue-600 hover:underline">Contact us</a> for a tailored solution.</p>
        </div>
      </div>
    </section>
  );
}
