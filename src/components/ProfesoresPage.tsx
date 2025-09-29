import React, { useState, useEffect } from 'react';
import { generateProfessors } from '../utils/dataGenerator.ts';

// Detail View Component
const ProfessorDetailView = ({ professor, onBack }) => {
  return React.createElement('div', null,
    React.createElement('div', { className: "flex justify-between items-center mb-6" },
      React.createElement('h2', { className: "text-3xl font-bold text-gray-800" }, `${professor.firstName} ${professor.lastName}`),
      React.createElement('button', { onClick: onBack, className: "px-4 py-2 text-sm font-semibold text-white bg-[#37517E] hover:bg-[#2a3f64] rounded-lg transition-colors" }, "\u2190 Volver al Directorio")
    ),
    React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-3 gap-6" },
      React.createElement('div', { className: "md:col-span-1 space-y-6" },
        React.createElement('div', { className: "bg-white p-6 rounded-lg shadow-md" },
          React.createElement('h3', { className: "text-xl font-bold text-gray-800 border-b pb-2 mb-4" }, "Información de Contacto"),
          React.createElement('div', { className: "space-y-3 text-gray-700" },
            React.createElement('p', null, React.createElement('span', { className: "font-semibold" }, "Email:"), ` ${professor.email}`),
            React.createElement('p', null, React.createElement('span', { className: "font-semibold" }, "Oficina:"), ` ${professor.office}`),
            React.createElement('p', null, React.createElement('span', { className: "font-semibold" }, "Departamento:"), ` ${professor.department}`)
          )
        ),
        React.createElement('div', { className: "bg-white p-6 rounded-lg shadow-md" },
          React.createElement('h3', { className: "text-xl font-bold text-gray-800 border-b pb-2 mb-4" }, "Perfil Académico"),
          React.createElement('div', { className: "space-y-3 text-gray-700" },
            React.createElement('p', null, React.createElement('span', { className: "font-semibold" }, "Especialidad:"), ` ${professor.specialty}`),
            React.createElement('p', null, React.createElement('span', { className: "font-semibold" }, "Año de Ingreso:"), ` ${professor.startYear}`),
            React.createElement('p', { className: "pt-2 italic" }, `"${professor.bio}"`)
          )
        )
      ),
      React.createElement('div', { className: "md:col-span-2 space-y-6" },
        React.createElement('div', { className: "bg-white p-6 rounded-lg shadow-md" },
          React.createElement('h3', { className: "text-xl font-bold text-gray-800 border-b pb-2 mb-4" }, "Proyectos en la Universidad"),
          React.createElement('ul', { className: "list-disc list-inside space-y-2 text-gray-700" },
            professor.projects.map((project, index) => React.createElement('li', { key: index }, project))
          )
        ),
        React.createElement('div', { className: "bg-white p-6 rounded-lg shadow-md" },
          React.createElement('h3', { className: "text-xl font-bold text-gray-800 border-b pb-2 mb-4" }, "Alumnos Ayudantes"),
          React.createElement('ul', { className: "list-disc list-inside space-y-2 text-gray-700" },
            professor.assistants.map((assistant, index) => React.createElement('li', { key: index }, assistant))
          )
        )
      )
    )
  );
};


// Main List View Component
const ProfesoresPage = ({ onBack }) => {
  const [professors, setProfessors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProfessor, setSelectedProfessor] = useState(null);

  useEffect(() => {
    setProfessors(generateProfessors(15));
  }, []);
  
  const filteredProfessors = searchTerm
    ? professors.filter(p => 
        `${p.firstName} ${p.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.startYear.toString().includes(searchTerm)
      )
    : professors;
  
  if (selectedProfessor) {
    return React.createElement('div', { className: "p-6 md:p-12 bg-gray-50 flex-grow w-full" },
      React.createElement(ProfessorDetailView, { professor: selectedProfessor, onBack: () => setSelectedProfessor(null) })
    );
  }

  return React.createElement('div', { className: "p-6 md:p-12 bg-gray-50 flex-grow w-full" },
    React.createElement('div', { className: "flex justify-between items-center mb-6" },
      React.createElement('h2', { className: "text-3xl font-bold text-gray-800" }, "Directorio de Profesores"),
      React.createElement('button', { onClick: onBack, className: "px-4 py-2 text-sm font-semibold text-white bg-[#37517E] hover:bg-[#2a3f64] rounded-lg transition-colors" }, "\u2190 Volver al Menú")
    ),
    React.createElement('div', { className: "bg-white p-4 rounded-lg shadow-md mb-6 flex items-center gap-4" },
      React.createElement('label', { htmlFor: "search-term", className: "font-semibold text-gray-700" }, "Buscar profesor:"),
      React.createElement('input', {
        id: "search-term",
        type: "text",
        value: searchTerm,
        onChange: (e) => setSearchTerm(e.target.value),
        placeholder: "Nombre, departamento, año de ingreso...",
        className: "border border-gray-300 rounded-md px-3 py-2 w-full max-w-sm"
      })
    ),
    React.createElement('div', { className: "overflow-x-auto bg-white rounded-lg shadow-md" },
      React.createElement('table', { className: "w-full text-sm text-left text-gray-600" },
        React.createElement('thead', { className: "text-xs text-gray-700 uppercase bg-gray-100" },
          React.createElement('tr', null,
            React.createElement('th', { scope: "col", className: "px-6 py-3" }, "Nombre Completo"),
            React.createElement('th', { scope: "col", className: "px-6 py-3" }, "Departamento"),
            React.createElement('th', { scope: "col", className: "px-6 py-3" }, "Especialidad"),
            React.createElement('th', { scope: "col", className: "px-6 py-3" }, "Año de Ingreso"),
            React.createElement('th', { scope: "col", className: "px-6 py-3" }, "Email")
          )
        ),
        React.createElement('tbody', null,
          filteredProfessors.map((prof) => 
            React.createElement('tr', { 
              key: prof.id, 
              className: "bg-white border-b hover:bg-gray-100 cursor-pointer",
              onClick: () => setSelectedProfessor(prof)
            },
              React.createElement('td', { className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap" }, `${prof.firstName} ${prof.lastName}`),
              React.createElement('td', { className: "px-6 py-4" }, prof.department),
              React.createElement('td', { className: "px-6 py-4" }, prof.specialty),
              React.createElement('td', { className: "px-6 py-4 text-center" }, prof.startYear),
              React.createElement('td', { className: "px-6 py-4" }, prof.email)
            )
          ),
          filteredProfessors.length === 0 &&
            React.createElement('tr', null,
              React.createElement('td', { colSpan: 5, className: "text-center py-8 text-gray-500" }, "No se encontraron profesores con ese criterio de búsqueda.")
            )
        )
      )
    )
  );
};

export default ProfesoresPage;