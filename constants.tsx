import React from 'react';

// Generic placeholder icons
const IconPlaceholder = ({ className, children }) => (
    React.createElement('div', { className: `w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 ${className}` },
        children
    )
);

// Icons for the 4 main services
const GraduationCapIcon = () => (
    React.createElement(IconPlaceholder, null,
        React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 },
            React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-2.072-1.036A59.922 59.922 0 0112 3.493a59.922 59.922 0 0110.072 5.617l-2.072 1.036m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5z" })
        )
    )
);

const SearchIcon = () => (
    React.createElement(IconPlaceholder, null,
        React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 },
            React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6" })
        )
    )
);

const DocumentChartIcon = () => (
    React.createElement(IconPlaceholder, null,
        React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 },
            React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" })
        )
    )
);

const UsersIcon = () => (
    React.createElement(IconPlaceholder, null,
        React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 },
            React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" })
        )
    )
);


export const services = [
    { name: "Egresados", icon: React.createElement(GraduationCapIcon, null) },
    { name: "Consultas", icon: React.createElement(SearchIcon, null) },
    { name: "Informes", icon: React.createElement(DocumentChartIcon, null) },
    { name: "Profesores", icon: React.createElement(UsersIcon, null) },
];

export const PlaceholderLogo = () => (
    React.createElement('svg', { viewBox: "0 0 100 100", className: "w-12 h-12 text-[#C00]" },
        React.createElement('path', { d: "M 50,5 A 45,45 0 0 1 50,95 A 45,45 0 0 1 50,5 Z", fill: "#37517E", stroke: "white", strokeWidth: "5" }),
        React.createElement('path', { d: "M 50 20 L 75 35 L 75 65 L 50 80 L 25 65 L 25 35 Z", fill: "none", stroke: "white", strokeWidth: "5" }),
        React.createElement('path', { d: "M 40 40 C 40 30, 60 30, 60 40 L 60 60 C 60 70, 40 70, 40 60 L 40 40", stroke: "white", strokeWidth: "5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement('line', { x1: "30", y1: "50", x2: "70", y2: "50", stroke: "white", strokeWidth: "5" })
    )
);

export const SettingsIcon = () => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" }),
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" })
    )
);