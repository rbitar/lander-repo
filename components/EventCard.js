import React from 'react';
import Link from 'next/link';

const EventCard = ({
  image,
  title,
  date,
  time,
  location,
  description,
  price,
  category,
  attendees = [],
  maxAttendees,
  isFeatured = false,
  href,
  onClick,
  className = '',
}) => {
  const CardComponent = href ? Link : onClick ? 'button' : 'div';
  const cardProps = {
    className: `overflow-hidden rounded-lg bg-white shadow transition-all hover:shadow-md ${className}`,
    ...(href && { href }),
    ...(onClick && { onClick, type: 'button' }),
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date) 
      ? date.toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric', 
          year: 'numeric' 
        })
      : dateString;
  };

  return (
    <CardComponent {...cardProps}>
      <div className="relative">
        <div className="relative h-48 w-full overflow-hidden">
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
        
        {isFeatured && (
          <div className="absolute left-0 top-4 bg-indigo-600 px-3 py-1 text-sm font-semibold text-white">
            Featured
          </div>
        )}
        
        {category && (
          <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-800 shadow">
            {category}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
        
        <div className="mb-3 flex flex-wrap gap-y-2">
          {date && (
            <div className="mr-4 flex items-center text-sm text-gray-600">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
              {formatDate(date)}
            </div>
          )}
          
          {time && (
            <div className="mr-4 flex items-center text-sm text-gray-600">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              {time}
            </div>
          )}
          
          {location && (
            <div className="flex items-center text-sm text-gray-600">
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
          )}
        </div>
        
        {description && <p className="mb-3 text-sm text-gray-700">{description}</p>}
        
        <div className="mt-4 flex items-center justify-between">
          {price !== undefined && (
            <div className="font-semibold text-gray-900">
              {price === 0 ? 'Free' : typeof price === 'string' ? price : `$${price}`}
            </div>
          )}
          
          {attendees.length > 0 && (
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {attendees.slice(0, 3).map((attendee, index) => (
                  <div key={index} className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white">
                    {typeof attendee === 'string' ? (
                      <img
                        src={attendee}
                        alt="Attendee"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-gray-200" />
                    )}
                  </div>
                ))}
              </div>
              {attendees.length > 3 && (
                <span className="ml-1 text-sm text-gray-600">
                  +{attendees.length - 3} more
                </span>
              )}
              {maxAttendees && (
                <span className="ml-1 text-sm text-gray-600">
                  ({attendees.length}/{maxAttendees})
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </CardComponent>
  );
};

export default EventCard;