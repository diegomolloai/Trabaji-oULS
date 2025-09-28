import React, { useState, useEffect } from 'react';
import type { Professor } from '../types';
import { generateProfessors } from '../utils/dataGenerator';

interface ProfesoresPageProps {
  onBack: () => void;
}

// Detail View Component
const ProfessorDetailView: React.FC<{ professor: Professor; onBack: () => void }> = ({ professor, onBack }) => {
  return (
    <div>
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">{`${professor.firstName} ${professor.lastName}`}</h2>
            <button
              onClick={onBack}
              className="px-4 py-2 text-sm font-semibold text-white bg-[#37517E] hover:bg-[#2a3f64] rounded-lg transition-colors"
            >
              &larr; Volver al Directorio
            </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="md:col-span-1 space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">Información de Contacto</h3>
                    <div className="space-y-3 text-gray-700">
                        <p><span className="font-semibold">Email:</span> {professor.email}</p>
                        <p><span className="font-semibold">Oficina:</span> {professor.office}</p>
                        <p><span className="font-semibold">Departamento:</span> {professor.department}</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">Perfil Académico</h3>
                    <div className="space-y-3 text-gray-700">
                        <p><span className="font-semibold">Especialidad:</span> {professor.specialty}</p>
                        <p><span className="font-semibold">Año de Ingreso:</span> {professor.startYear}</p>
                        <p className="pt-2 italic">"{professor.bio}"</p>
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="md:col-span-2 space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">Proyectos en la Universidad</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {professor.projects.map((project, index) => <li key={index}>{project}</li>)}
                    </ul>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">Alumnos Ayudantes</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {professor.assistants.map((assistant, index) => <li key={index}>{assistant}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
};


// Main List View Component
const ProfesoresPage: React.FC<ProfesoresPageProps> = ({ onBack }) => {
  const [professors, setProfessors] = useState<Professor[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedProfessor, setSelectedProfessor] = useState<Professor | null>(null);


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
    return (
        <div className="p-6 md:p-12 bg-gray-50 flex-grow w-full">
            <ProfessorDetailView professor={selectedProfessor} onBack={() => setSelectedProfessor(null)} />
        </div>
    )
  }

  return (
    <div className="p-6 md:p-12 bg-gray-50 flex-grow w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Directorio de Profesores</h2>
        <button
          onClick={onBack}
          className="px-4 py-2 text-sm font-semibold text-white bg-[#37517E] hover:bg-[#2a3f64] rounded-lg transition-colors"
        >
          &larr; Volver al Menú
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex items-center gap-4">
        <label htmlFor="search-term" className="font-semibold text-gray-700">Buscar profesor:</label>
        <input
          id="search-term"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Nombre, departamento, año de ingreso..."
          className="border border-gray-300 rounded-md px-3 py-2 w-full max-w-sm"
        />
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">Nombre Completo</th>
              <th scope="col" className="px-6 py-3">Departamento</th>
              <th scope="col" className="px-6 py-3">Especialidad</th>
              <th scope="col" className="px-6 py-3">Año de Ingreso</th>
              <th scope="col" className="px-6 py-3">Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredProfessors.map((prof) => (
              <tr 
                key={prof.id} 
                className="bg-white border-b hover:bg-gray-100 cursor-pointer"
                onClick={() => setSelectedProfessor(prof)}
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{`${prof.firstName} ${prof.lastName}`}</td>
                <td className="px-6 py-4">{prof.department}</td>
                <td className="px-6 py-4">{prof.specialty}</td>
                <td className="px-6 py-4 text-center">{prof.startYear}</td>
                <td className="px-6 py-4">{prof.email}</td>
              </tr>
            ))}
             {filteredProfessors.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-8 text-gray-500">
                  No se encontraron profesores con ese criterio de búsqueda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfesoresPage;
