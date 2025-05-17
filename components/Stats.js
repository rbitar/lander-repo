import React from 'react';

const Stats = ({ 
  stats = [
    { id: 1, label: "Followers", value: "1.2M", icon: "ri-user-follow-line" },
    { id: 2, label: "Likes", value: "8.4M", icon: "ri-heart-line" },
    { id: 3, label: "Comments", value: "452K", icon: "ri-chat-1-line" },
    { id: 4, label: "Shares", value: "267K", icon: "ri-share-line" }
  ],
  title = "Engagement Statistics",
  subtitle = "Our platform growth and engagement metrics"
}) => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl font-bold text-black mb-3">{title}</h2>}
            {subtitle && <p className="text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
          </div>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <i className={`${stat.icon} text-3xl text-black`}></i>
              </div>
              <p className="text-3xl font-bold text-black mb-1">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;