import React, { useState } from 'react';
import { services, PlaceholderLogo, SettingsIcon } from './constants.tsx';
import ServiceCard from './components/ServiceCard.tsx';
import EgresadosPage from './components/EgresadosPage.tsx';
import ProfesoresPage from './components/ProfesoresPage.tsx';
import LoginPage from './components/LoginPage.tsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState('menu');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setActivePage('menu');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleServiceClick = (serviceName) => {
    if (serviceName === 'Egresados' || serviceName === 'Profesores' || serviceName === 'Consultas' || serviceName === 'Informes') {
      setActivePage(serviceName);
    }
  };

  const renderContent = () => {
    switch (activePage) {
      case 'Egresados':
        return React.createElement(EgresadosPage, { onBack: () => setActivePage('menu') });
      case 'Profesores':
        return React.createElement(ProfesoresPage, { onBack: () => setActivePage('menu') });
      // TODO: Add cases for 'Consultas' and 'Informes' when components are ready
      case 'menu':
      default:
        return React.createElement('div', { className: "p-6 md:p-12" },
          React.createElement('h2', { className: "text-xl font-light text-gray-500 mb-6 border-b pb-4" }, "Plataformas y servicios disponibles"),
          React.createElement('div', { className: "grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto" },
            services.map(service => 
              React.createElement(ServiceCard, {
                key: service.name,
                service: service,
                onClick: () => handleServiceClick(service.name)
              })
            )
          )
        );
    }
  };

  if (!isLoggedIn) {
    return React.createElement(LoginPage, { onLogin: handleLogin });
  }

  return (
    React.createElement('div', { className: "min-h-screen bg-gray-50 flex flex-col", style: { backgroundImage: "url('https://www.userena.cl/images/2023/fondos/interior-1.jpg')", backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' } },
      React.createElement('div', { className: "flex-grow flex items-center justify-center p-4" },
        React.createElement('div', { className: "w-full max-w-7xl bg-white/95 backdrop-blur-sm shadow-2xl rounded-lg overflow-hidden border border-gray-200" },
          React.createElement('header', { className: "bg-[#37517E] text-white" },
            React.createElement('div', { className: "container mx-auto px-6 py-4 flex justify-between items-center" },
              React.createElement('div', { className: "flex items-center space-x-4" },
                React.createElement(PlaceholderLogo, null),
                React.createElement('div', null,
                  React.createElement('h1', { className: "text-xl md:text-2xl font-bold" }, "trabajiño.ULS"),
                  React.createElement('p', { className: "text-sm text-gray-300" }, "Líder tecnológico")
                )
              ),
              React.createElement('div', { className: "text-right" },
                React.createElement('p', { className: "font-bold" }, "Diego Mollo | Jose Chavez"),
                React.createElement('p', { className: "text-sm text-gray-300" }, "chavezymollo@gmail.com")
              )
            )
          ),
          React.createElement('main', null, renderContent()),
          React.createElement('footer', { className: "bg-gray-100 px-6 py-4 border-t" },
            React.createElement('div', { className: "flex justify-center items-center gap-4" },
              React.createElement('button', { className: "w-full max-w-xs px-6 py-3 text-sm font-semibold text-white bg-[#37517E] hover:bg-[#2a3f64] rounded-lg transition-colors" }, "Cambiar contraseña"),
              React.createElement('button', { className: "w-full max-w-xs px-6 py-3 text-sm font-semibold text-white bg-[#37517E] hover:bg-[#2a3f64] rounded-lg transition-colors" }, "Preguntas de Seguridad"),
              React.createElement('button', { onClick: handleLogout, className: "w-full max-w-xs px-6 py-3 text-sm font-semibold text-white bg-[#5a7eb9] hover:bg-[#4b699b] rounded-lg transition-colors" }, "Cerrar Sesión"),
              React.createElement('button', { className: "p-3 rounded-full hover:bg-gray-200 transition-colors" }, React.createElement(SettingsIcon, null))
            )
          )
        )
      )
    )
  );
}

export default App;