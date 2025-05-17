import React from 'react';

const Reviews = ({ reviews = [
  {
    id: 1,
    rating: 5,
    text: "This product exceeded my expectations in every way possible.",
    name: "Alex Thompson",
    date: "March 15, 2023"
  },
  {
    id: 2,
    rating: 4,
    text: "Very good product with just a few minor issues that could be improved.",
    name: "Sarah Miller",
    date: "April 2, 2023"
  },
  {
    id: 3,
    rating: 5,
    text: "Absolutely love it. Would recommend to anyone looking for this type of solution.",
    name: "Michael Davis",
    date: "February 28, 2023"
  },
  {
    id: 4,
    rating: 5,
    text: "Incredible value for the price. Couldn't be happier with my purchase.",
    name: "Lisa Chen",
    date: "March 22, 2023"
  }
]}) => {
  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-black text-center mb-2">Customer Reviews</h2>
        <p className="text-gray-600 text-center mb-12">See what our customers have to say</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < review.rating ? 'text-black' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-800 mb-4">"{review.text}"</p>
              <div className="flex justify-between">
                <p className="font-medium text-black">{review.name}</p>
                <p className="text-gray-500 text-sm">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;