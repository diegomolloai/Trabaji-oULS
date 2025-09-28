import React, { useState } from 'react';
import { services, PlaceholderLogo, SettingsIcon } from './constants.tsx';
import ServiceCard from './components/ServiceCard.tsx';
import EgresadosPage from './components/EgresadosPage.tsx';
import ProfesoresPage from './components/ProfesoresPage.tsx';
import LoginPage from './components/LoginPage.tsx';

type Page = 'menu' | 'Egresados' | 'Profesores' | 'Consultas' | 'Informes';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState<Page>('menu');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setActivePage('menu');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleServiceClick = (serviceName: string) => {
    if (serviceName === 'Egresados' || serviceName === 'Profesores' || serviceName === 'Consultas' || serviceName === 'Informes') {
      setActivePage(serviceName as Page);
    }
  };

  const renderContent = () => {
    switch (activePage) {
      case 'Egresados':
        return <EgresadosPage onBack={() => setActivePage('menu')} />;
      case 'Profesores':
        return <ProfesoresPage onBack={() => setActivePage('menu')} />;
      // TODO: Add cases for 'Consultas' and 'Informes' when components are ready
      case 'menu':
      default:
        return (
          <div className="p-6 md:p-12">
            <h2 className="text-xl font-light text-gray-500 mb-6 border-b pb-4">Plataformas y servicios disponibles</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
              {services.map(service => (
                <ServiceCard 
                  key={service.name} 
                  service={service} 
                  onClick={() => handleServiceClick(service.name)}
                />
              ))}
            </div>
          </div>
        );
    }
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col" style={{ backgroundImage: "url('https://www.userena.cl/images/2023/fondos/interior-1.jpg')", backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-7xl bg-white/95 backdrop-blur-sm shadow-2xl rounded-lg overflow-hidden border border-gray-200">
          {/* Header */}
          <header className="bg-[#37517E] text-white">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <PlaceholderLogo />
                <div>
                    <h1 className="text-xl md:text-2xl font-bold">trabajiño.ULS</h1>
                    <p className="text-sm text-gray-300">Líder tecnológico</p>
                </div>
              </div>
              <div className="text-right">
                  <p className="font-bold">Diego Mollo | Jose Chavez</p>
                  <p className="text-sm text-gray-300">chavezymollo@gmail.com</p>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main>
            {renderContent()}
          </main>

          {/* Footer */}
          <footer className="bg-gray-100 px-6 py-4 border-t">
              <div className="flex justify-center items-center gap-4">
                  <button className="w-full max-w-xs px-6 py-3 text-sm font-semibold text-white bg-[#37517E] hover:bg-[#2a3f64] rounded-lg transition-colors">
                    Cambiar contraseña
                  </button>
                  <button className="w-full max-w-xs px-6 py-3 text-sm font-semibold text-white bg-[#37517E] hover:bg-[#2a3f64] rounded-lg transition-colors">
                    Preguntas de Seguridad
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full max-w-xs px-6 py-3 text-sm font-semibold text-white bg-[#5a7eb9] hover:bg-[#4b699b] rounded-lg transition-colors"
                  >
                    Cerrar Sesión
                  </button>
                   <button className="p-3 rounded-full hover:bg-gray-200 transition-colors">
                    <SettingsIcon />
                  </button>
              </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;