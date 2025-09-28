import React from 'react';

export interface Service {
  name: string;
  icon: React.ReactNode;
  highlighted?: boolean;
  link?: string;
}

export interface Alumnus {
  id: number;
  firstName: string;
  lastName: string;
  career: string;
  graduationYear: number;
  thesisTitle: string;
  registrationNumber: string;
}

export interface Professor {
    id: number;
    firstName: string; // Holds two first names
    lastName:string; // Holds two last names
    department: string;
    email: string;
    specialty: string;
    startYear: number;
    projects: string[];
    assistants: string[];
    office: string;
    bio: string;
}
