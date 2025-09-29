import React, { useState } from 'react';
import { PlaceholderLogo } from '../constants.tsx';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setError('');
      onLogin();
    } else {
      setError('Usuario o contraseña incorrectos.');
    }
  };

  return React.createElement('div', { className: "min-h-screen flex items-center justify-center bg-gray-100", style: { backgroundImage: "url('https://www.userena.cl/images/2023/fondos/interior-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' } },
    React.createElement('div', { className: "max-w-md w-full bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 space-y-8 border border-gray-200" },
      React.createElement('div', { className: "text-center" },
        React.createElement('div', { className: "flex justify-center mx-auto mb-4" },
          React.createElement(PlaceholderLogo, null)
        ),
        React.createElement('h2', { className: "mt-6 text-3xl font-bold text-gray-800" }, "trabajiño.ULS"),
        React.createElement('p', { className: "mt-2 text-sm text-gray-600" }, "Inicie sesión para continuar")
      ),
      React.createElement('form', { className: "mt-8 space-y-6", onSubmit: handleLogin },
        React.createElement('div', { className: "rounded-md shadow-sm -space-y-px" },
          React.createElement('div', null,
            React.createElement('label', { htmlFor: "username", className: "sr-only" }, "Usuario"),
            React.createElement('input', {
              id: "username",
              name: "username",
              type: "text",
              autoComplete: "username",
              required: true,
              className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#37517E] focus:border-[#37517E] focus:z-10 sm:text-sm",
              placeholder: "Usuario (admin)",
              value: username,
              onChange: (e) => setUsername(e.target.value)
            })
          ),
          React.createElement('div', null,
            React.createElement('label', { htmlFor: "password-input", className: "sr-only" }, "Contraseña"),
            React.createElement('input', {
              id: "password-input",
              name: "password",
              type: "password",
              autoComplete: "current-password",
              required: true,
              className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#37517E] focus:border-[#37517E] focus:z-10 sm:text-sm",
              placeholder: "Contraseña (admin)",
              value: password,
              onChange: (e) => setPassword(e.target.value)
            })
          )
        ),
        error && React.createElement('p', { className: "text-red-600 text-sm text-center font-medium" }, error),
        React.createElement('div', null,
          React.createElement('button', {
            type: "submit",
            className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#37517E] hover:bg-[#2a3f64] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#37517E] transition-colors"
          }, "Ingresar")
        )
      )
    )
  );
};

export default LoginPage;