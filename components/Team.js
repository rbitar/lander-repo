import React from 'react';
import ProfileCard from './ProfileCard';

const Team = ({ 
  title = 'Our Team', 
  subtitle = 'Meet the people behind our success',
  members = [],
  className = ''
}) => {
  return (
    <section className={`py-12 md:py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">{title}</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">{subtitle}</p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((member, index) => (
            <ProfileCard 
              key={index}
              image={member.image}
              avatar={member.avatar}
              name={member.name}
              role={member.role}
              bio={member.bio}
              socialLinks={member.socialLinks}
              href={member.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;