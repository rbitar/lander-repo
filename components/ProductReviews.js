import React from 'react';
import { cn } from '../lib/utils';

const ProductReviews = ({ reviews = [
  {
    id: 1,
    rating: 5,
    text: "This product exceeded my expectations in every way possible.",
    name: "Alex Thompson",
    date: "March 15, 2023",
    verified: true,
    productVariant: "Black / Medium"
  },
  {
    id: 2,
    rating: 4,
    text: "Very good product with just a few minor issues that could be improved.",
    name: "Sarah Miller",
    date: "April 2, 2023",
    verified: true,
    productVariant: "White / Small"
  },
  {
    id: 3,
    rating: 5,
    text: "Absolutely love it. Would recommend to anyone looking for this type of solution.",
    name: "Michael Davis",
    date: "February 28, 2023",
    verified: true,
    productVariant: "Blue / Large"
  },
  {
    id: 4,
    rating: 5,
    text: "Incredible value for the price. Couldn't be happier with my purchase.",
    name: "Lisa Chen",
    date: "March 22, 2023",
    verified: false,
    productVariant: "Red / Medium"
  }
]}) => {
  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-black text-center mb-2">Product Reviews</h2>
        <p className="text-gray-600 text-center mb-12">Customer feedback for this product</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <i 
                    key={i} 
                    className={cn(
                      "ri-star-fill text-lg",
                      i < review.rating ? "text-yellow-400" : "text-gray-200"
                    )}
                  ></i>
                ))}
                <span className="ml-2 text-gray-700 font-medium">{review.rating}.0</span>
              </div>
              <p className="text-gray-800 mb-4">"{review.text}"</p>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <p className="font-medium text-black">{review.name}</p>
                  <p className="text-gray-500 text-sm">{review.date}</p>
                </div>
                <div className="flex items-center text-sm gap-4">
                  {review.verified && (
                    <div className="flex items-center text-green-600">
                      <i className="ri-verified-badge-fill mr-1"></i>
                      <span>Verified Purchase</span>
                    </div>
                  )}
                  <div className="text-gray-500">
                    <span>Purchased: {review.productVariant}</span>
                  </div>
                </div>
                <div className="flex mt-3 text-sm gap-4">
                  <button className="flex items-center text-gray-500 hover:text-gray-700">
                    <i className="ri-thumb-up-line mr-1"></i>
                    <span>Helpful</span>
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-gray-700">
                    <i className="ri-flag-line mr-1"></i>
                    <span>Report</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button className="bg-white border border-gray-300 text-black font-medium py-2 px-6 rounded-md hover:bg-gray-50 inline-flex items-center">
            <i className="ri-chat-1-line mr-2"></i>
            View All Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;