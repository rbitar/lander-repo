import React from 'react';
import Link from 'next/link';
import { cn } from '../lib/utils';

const PlaceCard = ({
  image,
  title,
  location,
  rating,
  reviewCount,
  price,
  description,
  amenities = [],
  isPopular = false,
  href,
  onClick,
  className = '',
}) => {
  const CardComponent = href ? Link : onClick ? 'button' : 'div';
  const cardProps = {
    className: cn("overflow-hidden rounded-lg bg-white shadow transition-all hover:shadow-md", className),
    ...(href && { href }),
    ...(onClick && { onClick, type: 'button' }),
  };

  return (
    <CardComponent {...cardProps}>
      <div className="relative">
        <div className="relative h-56 w-full overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-gray-200" />
          )}
        </div>
        
        {isPopular && (
          <div className="absolute left-0 top-4 bg-red-600 px-3 py-1 text-sm font-semibold text-white">
            Popular
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          {price && (
            <div className="text-lg font-bold text-gray-900">
              {typeof price === 'string' ? price : `$${price}`}
            </div>
          )}
        </div>
        
        <div className="mb-2 flex items-center text-sm text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {location}
        </div>
        
        {(rating || reviewCount) && (
          <div className="mb-3 flex items-center">
            {rating && (
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={cn(
                      "h-4 w-4",
                      i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
                    )}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-sm font-semibold text-gray-600">{rating}</span>
              </div>
            )}
            {reviewCount && (
              <span className="ml-2 text-sm text-gray-600">
                ({reviewCount} {reviewCount === 1 ? 'review' : 'reviews'})
              </span>
            )}
          </div>
        )}
        
        {description && <p className="mb-3 text-sm text-gray-700">{description}</p>}
        
        {amenities.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {amenities.map((amenity, index) => (
              <span key={index} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-800">
                {amenity}
              </span>
            ))}
          </div>
        )}
      </div>
    </CardComponent>
  );
};

export default PlaceCard;