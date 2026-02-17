
import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  benefits: string[];
}

export interface PartnerItem {
  id: number;
  name: string;
  industry: string;
  logo: string;
  description: string;
  synergy: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

// Added ProjectItem interface to fix missing types in constants
export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  result: string;
  description: string;
  image: string;
  client: string;
}
