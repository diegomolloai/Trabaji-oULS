import type { Alumnus, Professor } from '../types.ts';

const firstNames = ["Juan", "María", "José", "Ana", "Carlos", "Laura", "Pedro", "Sofía", "Luis", "Elena", "Miguel", "Lucía", "Javier", "Carmen", "David", "Isabel", "Daniel", "Paula", "Manuel", "Sara"];
const lastNames = ["García", "Rodríguez", "González", "Fernández", "López", "Martínez", "Sánchez", "Pérez", "Gómez", "Martín", "Jiménez", "Ruiz", "Díaz", "Moreno", "Muñoz", "Álvarez", "Romero", "Alonso", "Gutiérrez", "Nava"];
const careers = ["Ingeniería de Software", "Diseño Gráfico", "Administración de Empresas", "Psicología", "Derecho", "Medicina", "Arquitectura"];
const thesisTitles = [
    "Sistema de Gestión para Pequeñas Empresas", 
    "Análisis de la Experiencia de Usuario en Aplicaciones Móviles",
    "Impacto de las Redes Sociales en el Marketing Digital",
    "Estudio sobre la Ansiedad en Estudiantes Universitarios",
    "La Evolución del Derecho Constitucional en el Siglo XXI"
];
const departments = ["Departamento de Ingeniería", "Escuela de Diseño", "Facultad de Negocios", "Departamento de Humanidades", "Facultad de Derecho"];
const specialties = ["Inteligencia Artificial", "Diseño UX/UI", "Finanzas Corporativas", "Psicología Clínica", "Derecho Penal"];
const projectTitles = [
    "Optimización de Algoritmos de Machine Learning",
    "Desarrollo de una Plataforma Educativa Interactiva",
    "Investigación sobre Energías Renovables",
    "Análisis del Comportamiento del Consumidor Online",
    "Estudio de Impacto de Políticas Públicas",
    "Digitalización de Archivos Históricos",
    "Creación de un Framework para Desarrollo Ágil",
    "Modelo de Predicción de Riesgos Financieros"
];
const bios = [
    "Apasionado por la enseñanza y la investigación en tecnologías emergentes.",
    "Experto en metodologías de diseño centrado en el usuario.",
    "Enfocado en el análisis de mercados y estrategias de crecimiento.",
    "Especialista en desarrollo cognitivo y comportamiento humano.",
    "Dedicado al estudio y la aplicación de la justicia restaurativa."
];


const getRandomItem = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const generateCompoundName = (arr: string[]): string => `${getRandomItem(arr)} ${getRandomItem(arr)}`;
const getRandomNumber = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;


export const generateAlumni = (count: number): Alumnus[] => {
    const alumni: Alumnus[] = [];
    for (let i = 1; i <= count; i++) {
        alumni.push({
            id: i,
            firstName: generateCompoundName(firstNames),
            lastName: generateCompoundName(lastNames),
            career: getRandomItem(careers),
            graduationYear: 2020 + Math.floor(Math.random() * 6),
            thesisTitle: getRandomItem(thesisTitles),
            registrationNumber: `LIB-${Math.floor(Math.random() * 1000)}-${2020 + Math.floor(Math.random() * 6)}`
        });
    }
    return alumni;
};

export const generateProfessors = (count: number): Professor[] => {
    const professors: Professor[] = [];
    for (let i = 1; i <= count; i++) {
        const profFirstNames = generateCompoundName(firstNames);
        const profLastNames = generateCompoundName(lastNames);

        // Generate projects (2 to 5)
        const numProjects = getRandomNumber(2, 5);
        const projects: string[] = [];
        for (let p = 0; p < numProjects; p++) {
            projects.push(getRandomItem(projectTitles));
        }

        // Generate assistants (2 to 3)
        const numAssistants = getRandomNumber(2, 3);
        const assistants: string[] = [];
        for (let a = 0; a < numAssistants; a++) {
            assistants.push(`${getRandomItem(firstNames)} ${getRandomItem(lastNames)}`);
        }
        
        professors.push({
            id: i,
            firstName: profFirstNames,
            lastName: profLastNames,
            department: getRandomItem(departments),
            email: `${profFirstNames.split(' ')[0].toLowerCase()}.${profLastNames.split(' ')[0].toLowerCase()}${i}@university.edu`,
            specialty: getRandomItem(specialties),
            startYear: 2005 + Math.floor(Math.random() * 20),
            projects: projects,
            assistants: assistants,
            office: `${getRandomItem(['A', 'B', 'C'])}-${getRandomNumber(101, 305)}`,
            bio: getRandomItem(bios),
        });
    }
    return professors;
};