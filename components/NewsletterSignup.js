import React, { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Here you would typically send the email to your backend or newsletter service
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setError('');
    setEmail('');
  };

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2">Stay Updated</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest updates, insights, and exclusive offers.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {isSubmitted ? (
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
              <i className="ri-check-line text-green-500 text-2xl mb-2"></i>
              <p className="text-green-800 font-medium">Thank you for subscribing!</p>
              <p className="text-green-700 text-sm mt-1">You'll receive our next newsletter in your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
                />
                {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
              </div>
              <button 
                type="submit" 
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none"
              >
                Subscribe
              </button>
            </form>
          )}
          <p className="text-sm text-gray-500 mt-3 text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
