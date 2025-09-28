import React, { useState } from 'react';
import { PlaceholderLogo } from '../constants.tsx';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setError('');
      onLogin();
    } else {
      setError('Usuario o contraseña incorrectos.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" style={{ backgroundImage: "url('https://www.userena.cl/images/2023/fondos/interior-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 space-y-8 border border-gray-200">
        <div className="text-center">
            <div className="flex justify-center mx-auto mb-4">
                <PlaceholderLogo />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-gray-800">
                trabajiño.ULS
            </h2>
            <p className="mt-2 text-sm text-gray-600">
                Inicie sesión para continuar
            </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">Usuario</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#37517E] focus:border-[#37517E] focus:z-10 sm:text-sm"
                placeholder="Usuario (admin)"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password-input" className="sr-only">Contraseña</label>
              <input
                id="password-input"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#37517E] focus:border-[#37517E] focus:z-10 sm:text-sm"
                placeholder="Contraseña (admin)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && <p className="text-red-600 text-sm text-center font-medium">{error}</p>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#37517E] hover:bg-[#2a3f64] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#37517E] transition-colors"
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;