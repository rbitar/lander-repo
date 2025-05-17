import React, { useState } from 'react';
import PriceCard from './PriceCard';

const Subscriptions = ({
  title = 'Pricing Plans',
  subtitle = 'Choose the plan that fits your needs',
  plans = [],
  showAnnualToggle = true,
  className = '',
}) => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  // Default plans if none provided
  const defaultPlans = [
    {
      title: 'Basic',
      price: billingCycle === 'monthly' ? 9 : 90,
      description: 'Perfect for freelancers and individuals',
      features: [
        'Single user',
        '5 projects',
        '5GB storage',
        'Basic analytics',
        'Email support',
      ],
      ctaHref: '/signup?plan=basic',
    },
    {
      title: 'Pro',
      price: billingCycle === 'monthly' ? 29 : 290,
      description: 'Great for small teams and growing businesses',
      features: [
        'Up to 5 users',
        'Unlimited projects',
        '100GB storage',
        'Advanced analytics',
        'Priority support',
        'Custom branding',
      ],
      ctaHref: '/signup?plan=pro',
      recommended: true,
    },
    {
      title: 'Enterprise',
      price: billingCycle === 'monthly' ? 99 : 990,
      description: 'For large organizations with specific needs',
      features: [
        'Unlimited users',
        'Unlimited projects',
        '1TB storage',
        'Enterprise analytics',
        '24/7 dedicated support',
        'Custom branding',
        'SSO and SAML',
        'Dedicated account manager',
      ],
      ctaHref: '/signup?plan=enterprise',
    },
  ];

  const displayPlans = plans.length > 0 ? plans : defaultPlans;

  // Apply correct frequency text based on billing cycle
  const plansWithFrequency = displayPlans.map(plan => ({
    ...plan,
    frequency: billingCycle === 'monthly' ? 'month' : 'year',
    // Apply 2 months free discount badge for annual plans
    discountBadge: billingCycle === 'annual' ? (plan.discountBadge || '2 Months Free') : plan.discountBadge
  }));

  return (
    <section className={`py-12 md:py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">{title}</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">{subtitle}</p>
          
          {showAnnualToggle && (
            <div className="mt-8 flex items-center justify-center">
              <div className="relative flex items-center rounded-full bg-gray-100 p-1">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    billingCycle === 'monthly'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    billingCycle === 'annual'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Annual
                </button>
              </div>
              <span className="ml-3 text-sm font-medium text-green-600">Save 16%</span>
            </div>
          )}
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3">
          {plansWithFrequency.map((plan, index) => (
            <PriceCard
              key={index}
              title={plan.title}
              price={plan.price}
              frequency={plan.frequency}
              description={plan.description}
              features={plan.features}
              cta={plan.cta || 'Get Started'}
              ctaHref={plan.ctaHref}
              ctaOnClick={plan.ctaOnClick}
              recommended={plan.recommended}
              discountBadge={plan.discountBadge}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;