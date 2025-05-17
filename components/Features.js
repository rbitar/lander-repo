import React from 'react';

export default function Features() {
  const features = [
    {
      icon: "ri-shield-check-line",
      title: "Secure & Reliable",
      description: "Enterprise-grade security protocols to keep your data safe and your business running smoothly."
    },
    {
      icon: "ri-rocket-line",
      title: "High Performance",
      description: "Optimized systems designed for speed and efficiency, ensuring your applications run at peak performance."
    },
    {
      icon: "ri-device-line",
      title: "Responsive Design",
      description: "Seamlessly adapt to any device or screen size, providing an optimal user experience everywhere."
    },
    {
      icon: "ri-customer-service-line",
      title: "24/7 Support",
      description: "Round-the-clock customer service with dedicated technical experts to assist you whenever you need help."
    },
    {
      icon: "ri-bar-chart-box-line",
      title: "Advanced Analytics",
      description: "Gain valuable insights with comprehensive data analytics and visualization tools to drive informed decisions."
    },
    {
      icon: "ri-robot-line",
      title: "AI Integration",
      description: "Leverage cutting-edge artificial intelligence to automate tasks, generate insights, and create smarter workflows."
    },
    {
      icon: "ri-palette-line",
      title: "Customization Options",
      description: "Tailor the platform to your specific needs with extensive personalization and branding capabilities."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Our Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how our cutting-edge solutions can transform your digital experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-5">
                <i className={`${feature.icon} text-xl`}></i>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
