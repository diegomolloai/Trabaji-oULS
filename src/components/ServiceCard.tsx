import React from 'react';

const ServiceCard = ({ service, onClick }) => {
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

  const content = React.createElement(React.Fragment, null,
    React.createElement('div', { className: "mb-4 flex items-center justify-center flex-shrink-0" },
      service.icon
    ),
    React.createElement('span', { className: "text-lg md:text-xl text-gray-800 font-bold leading-tight" },
      service.name
    )
  );

  if (onClick) {
    return React.createElement('button', { onClick: onClick, className: cardClasses }, content);
  }

  return React.createElement('a', { href: service.link || '#', className: cardClasses }, content);
};

export default ServiceCard;