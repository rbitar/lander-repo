import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold text-blue-600">CompanyName</span>
        </a>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <i className="ri-close-line text-2xl"></i>
          ) : (
            <i className="ri-menu-line text-2xl"></i>
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="/"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Features
          </a>
          <a
            href="/pricing"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Pricing
          </a>
          <a
            href="/contact"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Contact
          </a>
          <a
            href="#"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <a
                href="/"
                className="text-gray-700 hover:text-blue-600 py-2 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-blue-600 py-2 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="/pricing"
                className="text-gray-700 hover:text-blue-600 py-2 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-blue-600 py-2 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="#"
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-block w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
