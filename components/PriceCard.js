import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

const PriceCard = ({
  title,
  price,
  frequency = 'month',
  description,
  features = [],
  cta = 'Get Started',
  ctaHref,
  ctaOnClick,
  recommended = false,
  discountBadge,
  className = '',
}) => {
  return (
    <div className={cn(
      "relative flex h-full flex-col rounded-lg border shadow-sm transition-all",
      recommended ? "border-primary bg-primary/5" : "border-gray-200 bg-white",
      className
    )}>
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold uppercase text-primary-foreground">
          Recommended
        </div>
      )}

      {discountBadge && (
        <div className="absolute -right-3 top-6 rotate-12 bg-green-500 px-4 py-1 text-xs font-bold uppercase text-white shadow-md">
          {discountBadge}
        </div>
      )}

      <div className={cn("p-6", recommended && "pt-8")}>
        <h3 className="mb-1 text-2xl font-bold text-gray-900">{title}</h3>
        <div className="mb-4 flex items-baseline">
          <span className="text-4xl font-extrabold tracking-tight text-gray-900">
            {typeof price === 'number' ? `$${price}` : price}
          </span>
          {frequency && (
            <span className="ml-1 text-xl font-medium text-gray-500">
              /{frequency}
            </span>
          )}
        </div>
        {description && (
          <p className="text-gray-600">{description}</p>
        )}
      </div>

      <div className="flex flex-grow flex-col p-6 pt-0">
        <ul className="mb-8 space-y-4 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-2 flex-shrink-0 text-green-500">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        {cta && (
          ctaHref ? (
            <Button
              asChild
              variant={recommended ? "default" : "outline"}
              className="w-full"
            >
              <Link href={ctaHref}>{cta}</Link>
            </Button>
          ) : (
            <Button
              onClick={ctaOnClick}
              variant={recommended ? "default" : "outline"}
              className="w-full"
            >
              {cta}
            </Button>
          )
        )}
      </div>
    </div>
  );
};

export default PriceCard;