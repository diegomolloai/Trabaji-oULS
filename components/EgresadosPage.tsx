import React, { useState, useEffect } from 'react';
import type { Alumnus } from '../types.ts';
import { generateAlumni } from '../utils/dataGenerator.ts';

interface EgresadosPageProps {
  onBack: () => void;
}

const EgresadosPage: React.FC<EgresadosPageProps> = ({ onBack }) => {
  const [alumni, setAlumni] = useState<Alumnus[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>('');

  useEffect(() => {
    setAlumni(generateAlumni(20));
  }, []);
  
  const filteredAlumni = selectedYear
    ? alumni.filter(a => a.graduationYear.toString() === selectedYear)
    : alumni;

  return (
    <div className="p-6 md:p-12 bg-gray-50 flex-grow w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Listado de Egresados</h2>
        <button
          onClick={onBack}
          className="px-4 py-2 text-sm font-semibold text-white bg-[#37517E] hover:bg-[#2a3f64] rounded-lg transition-colors"
        >
          &larr; Volver al Menú
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex items-center gap-4">
        <label htmlFor="year-filter" className="font-semibold text-gray-700">Buscar por año de egreso:</label>
        <select
          id="year-filter"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2"
        >
          <option value="">Todos los años</option>
          {Array.from({ length: 6 }, (_, i) => 2020 + i).map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">Nombre Completo</th>
              <th scope="col" className="px-6 py-3">Carrera</th>
              <th scope="col" className="px-6 py-3">Año Egreso</th>
              <th scope="col" className="px-6 py-3">Nombre de la Memoria</th>
              <th scope="col" className="px-6 py-3">N° Registro de Libro</th>
            </tr>
          </thead>
          <tbody>
            {filteredAlumni.map((alum) => (
              <tr key={alum.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{`${alum.firstName} ${alum.lastName}`}</td>
                <td className="px-6 py-4">{alum.career}</td>
                <td className="px-6 py-4 text-center">{alum.graduationYear}</td>
                <td className="px-6 py-4">{alum.thesisTitle}</td>
                <td className="px-6 py-4">{alum.registrationNumber}</td>
              </tr>
            ))}
             {filteredAlumni.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-8 text-gray-500">
                  No se encontraron egresados para el año seleccionado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EgresadosPage;