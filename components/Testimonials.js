import React from 'react';

const Testimonials = ({ testimonials = [
  { 
    id: 1, 
    quote: "This product has completely transformed how we work.", 
    author: "Jane Doe", 
    role: "CEO, Company Inc." 
  },
  { 
    id: 2, 
    quote: "I can't imagine going back to our old workflow.", 
    author: "John Smith", 
    role: "CTO, Tech Co." 
  },
  { 
    id: 3, 
    quote: "The support team is incredibly responsive and helpful.", 
    author: "Emily Johnson", 
    role: "Director, Agency Ltd." 
  }
]}) => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-black text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="text-gray-800 mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-black">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;