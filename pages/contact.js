import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Validate subject
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // Here you would typically send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Failed to submit the form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">Contact Us</h1>
            <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-8">
              Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
        
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                {/* Contact Info */}
                <div className="bg-blue-600 text-white p-8 md:w-1/3">
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  
                  <div className="mb-6">
                    <div className="flex items-start mb-3">
                      <i className="ri-map-pin-line text-xl mr-3 mt-1"></i>
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-blue-100">123 Business Ave, Suite 100</p>
                        <p className="text-blue-100">San Francisco, CA 94107</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start mb-3">
                      <i className="ri-mail-line text-xl mr-3 mt-1"></i>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-blue-100">info@yourcompany.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <i className="ri-phone-line text-xl mr-3 mt-1"></i>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-blue-100">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10">
                    <h4 className="text-lg font-medium mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="hover:text-blue-200 transition-colors">
                        <i className="ri-twitter-fill text-xl"></i>
                      </a>
                      <a href="#" className="hover:text-blue-200 transition-colors">
                        <i className="ri-facebook-fill text-xl"></i>
                      </a>
                      <a href="#" className="hover:text-blue-200 transition-colors">
                        <i className="ri-instagram-fill text-xl"></i>
                      </a>
                      <a href="#" className="hover:text-blue-200 transition-colors">
                        <i className="ri-linkedin-fill text-xl"></i>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Contact Form */}
                <div className="p-8 md:w-2/3">
                  {isSubmitted ? (
                    <div className="text-center py-10">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                        <i className="ri-check-line text-green-500 text-3xl"></i>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                      <p className="text-gray-600 mb-6">Your message has been sent successfully. We'll get back to you soon.</p>
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="John Doe"
                          />
                          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="john@example.com"
                          />
                          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="How can we help you?"
                        />
                        {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5"
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="Tell us what you need..."
                        ></textarea>
                        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                      </div>
                      
                      {errors.submit && (
                        <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200">
                          {errors.submit}
                        </div>
                      )}
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : 'Send Message'}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
