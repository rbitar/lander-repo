import React from 'react';

const Footer = ({ 
  footerLinks = [
    {
      heading: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Press', href: '#' }
      ]
    },
    {
      heading: 'Product',
      links: [
        { label: 'Features', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Security', href: '#' },
        { label: 'Enterprise', href: '#' }
      ]
    },
    {
      heading: 'Resources',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'Guides', href: '#' },
        { label: 'Support', href: '#' },
        { label: 'API', href: '#' }
      ]
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Contact', href: '#' }
      ]
    }
  ],
  socialLinks = [
    { label: 'Twitter', href: '#', icon: 'ri-twitter-fill' },
    { label: 'LinkedIn', href: '#', icon: 'ri-linkedin-fill' },
    { label: 'GitHub', href: '#', icon: 'ri-github-fill' }
  ],
  companyName = 'Your Company'
}) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {footerLinks.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="font-bold text-black text-lg mb-4">{section.heading}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="text-gray-600 hover:text-black transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">© {currentYear} {companyName}. All rights reserved.</p>
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} className="text-gray-600 hover:text-black transition-colors">
                <span className="sr-only">{social.label}</span>
                <i className={`${social.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;