import React from 'react';
import type { Service } from '../types.ts';

interface ServiceCardProps {
  service: Service;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  const cardClasses = `
    flex flex-col items-center justify-center text-center
    p-6 md:p-8 rounded-xl
    transition-all duration-300 transform hover:scale-105 hover:shadow-2xl
    cursor-pointer h-full aspect-square w-full
    border border-transparent
    ${service.highlighted 
        ? 'bg-gray-200 shadow-inner' 
        : 'bg-white/80 hover:bg-white hover:border-gray-200'
    }
  `;

  const content = (
    <>
      <div className="mb-4 flex items-center justify-center flex-shrink-0">
        {service.icon}
      </div>
      <span className="text-lg md:text-xl text-gray-800 font-bold leading-tight">
        {service.name}
      </span>
    </>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className={cardClasses}>
        {content}
      </button>
    );
  }

  return (
    <a href={service.link || '#'} className={cardClasses}>
      {content}
    </a>
  );
};

export default ServiceCard;