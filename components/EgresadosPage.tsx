import React, { useState, useEffect } from 'react';
import { generateAlumni } from '../utils/dataGenerator.ts';

const EgresadosPage = ({ onBack }) => {
  const [alumni, setAlumni] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');

  useEffect(() => {
    setAlumni(generateAlumni(20));
  }, []);
  
  const filteredAlumni = selectedYear
    ? alumni.filter(a => a.graduationYear.toString() === selectedYear)
    : alumni;

  return React.createElement('div', { className: "p-6 md:p-12 bg-gray-50 flex-grow w-full" },
    React.createElement('div', { className: "flex justify-between items-center mb-6" },
      React.createElement('h2', { className: "text-3xl font-bold text-gray-800" }, "Listado de Egresados"),
      React.createElement('button', { onClick: onBack, className: "px-4 py-2 text-sm font-semibold text-white bg-[#37517E] hover:bg-[#2a3f64] rounded-lg transition-colors" }, "\u2190 Volver al Menú")
    ),
    React.createElement('div', { className: "bg-white p-4 rounded-lg shadow-md mb-6 flex items-center gap-4" },
      React.createElement('label', { htmlFor: "year-filter", className: "font-semibold text-gray-700" }, "Buscar por año de egreso:"),
      React.createElement('select', { id: "year-filter", value: selectedYear, onChange: (e) => setSelectedYear(e.target.value), className: "border border-gray-300 rounded-md px-3 py-2" },
        React.createElement('option', { value: "" }, "Todos los años"),
        Array.from({ length: 6 }, (_, i) => 2020 + i).map(year => 
          React.createElement('option', { key: year, value: year }, year)
        )
      )
    ),
    React.createElement('div', { className: "overflow-x-auto bg-white rounded-lg shadow-md" },
      React.createElement('table', { className: "w-full text-sm text-left text-gray-600" },
        React.createElement('thead', { className: "text-xs text-gray-700 uppercase bg-gray-100" },
          React.createElement('tr', null,
            React.createElement('th', { scope: "col", className: "px-6 py-3" }, "Nombre Completo"),
            React.createElement('th', { scope: "col", className: "px-6 py-3" }, "Carrera"),
            React.createElement('th', { scope: "col", className: "px-6 py-3" }, "Año Egreso"),
            React.createElement('th', { scope: "col", className: "px-6 py-3" }, "Nombre de la Memoria"),
            React.createElement('th', { scope: "col", className: "px-6 py-3" }, "N° Registro de Libro")
          )
        ),
        React.createElement('tbody', null,
          filteredAlumni.map((alum) => 
            React.createElement('tr', { key: alum.id, className: "bg-white border-b hover:bg-gray-50" },
              React.createElement('td', { className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap" }, `${alum.firstName} ${alum.lastName}`),
              React.createElement('td', { className: "px-6 py-4" }, alum.career),
              React.createElement('td', { className: "px-6 py-4 text-center" }, alum.graduationYear),
              React.createElement('td', { className: "px-6 py-4" }, alum.thesisTitle),
              React.createElement('td', { className: "px-6 py-4" }, alum.registrationNumber)
            )
          ),
          filteredAlumni.length === 0 &&
            React.createElement('tr', null,
              React.createElement('td', { colSpan: 5, className: "text-center py-8 text-gray-500" },
                "No se encontraron egresados para el año seleccionado."
              )
            )
        )
      )
    )
  );
};

export default EgresadosPage;