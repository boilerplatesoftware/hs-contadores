
import React from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Users, 
  TrendingUp, 
  Gavel, 
  Briefcase 
} from 'lucide-react';
import { NavItem, ServiceItem, PartnerItem, ProjectItem } from './types';

export const WHATSAPP_CONFIG = {
  number: '573008889000',
  agentName: 'Soporte Senior HS',
  initialMessage: 'Hola, estoy interesado en una consultoría corporativa.'
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Casos de Éxito', href: '#proyectos' },
  { label: 'Socios', href: '#socios' },
  { label: 'Contacto', href: '#contacto' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'Auditoría Integral',
    description: 'Revisiones exhaustivas bajo estándares internacionales (NIAS) para garantizar transparencia.',
    icon: <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />,
    benefits: ['Cumplimiento Normativo 100%', 'Mitigación de Riesgos Operativos', 'Reportes de Transparencia'],
  },
  {
    id: 2,
    title: 'Estrategia Tributaria',
    description: 'Planeación fiscal inteligente para optimizar legalmente la carga impositiva corporativa.',
    icon: <FileText className="w-8 h-8 text-[#D4AF37]" />,
    benefits: ['Optimización de Flujo de Caja', 'Defensa ante Entes Reguladores', 'Incentivos Fiscales'],
  },
  {
    id: 3,
    title: 'Gestión de Capital Humano',
    description: 'Outsourcing de nómina y cumplimiento prestacional con tecnología de última generación.',
    icon: <Users className="w-8 h-8 text-[#D4AF37]" />,
    benefits: ['Precisión en Liquidaciones', 'Reducción de Litigios Laborales', 'Portal de Empleados'],
  },
  {
    id: 4,
    title: 'Consultoría Financiera',
    description: 'Modelado financiero y análisis de viabilidad para proyectos de expansión global.',
    icon: <TrendingUp className="w-8 h-8 text-[#D4AF37]" />,
    benefits: ['Valuación de Empresas', 'Estructuración de Deuda', 'Análisis de Rentabilidad'],
  },
  {
    id: 5,
    title: 'Derecho Corporativo',
    description: 'Acompañamiento legal en fusiones, adquisiciones y estructuración de contratos mercantiles.',
    icon: <Gavel className="w-8 h-8 text-[#D4AF37]" />,
    benefits: ['Blindaje Legal Contractual', 'Gestión de Actas y Libros', 'Due Diligence'],
  },
  {
    id: 6,
    title: 'Outsourcing BPO',
    description: 'Transformación digital de sus procesos contables con soporte experto 24/7.',
    icon: <Briefcase className="w-8 h-8 text-[#D4AF37]" />,
    benefits: ['Información en Tiempo Real', 'Soporte Multidisciplinario', 'Reducción de Costos Fijos'],
  },
];

export const PARTNERS: PartnerItem[] = [
  {
    id: 1,
    name: 'Logistica Global S.A.',
    industry: 'Transporte & Supply Chain',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&h=200&q=80',
    description: 'Líder regional en distribución con presencia en 8 países.',
    synergy: 'Optimización de estructura tributaria cross-border y auditoría de cumplimiento.',
    testimonial: {
      quote: 'HS Contadores no solo lleva nuestros números, diseña nuestra expansión fiscal con una precisión milimétrica.',
      author: 'Carlos Mendoza',
      role: 'CFO Regional'
    }
  },
  {
    id: 2,
    name: 'TechInnova Group',
    industry: 'Software & IA',
    logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=200&h=200&q=80',
    description: 'Unicornio tecnológico enfocado en soluciones de IA generativa.',
    synergy: 'Gestión BPO integral y estructuración de incentivos por innovación tecnológica.',
    testimonial: {
      quote: 'Su agilidad estratégica es fundamental para el ritmo de crecimiento de una empresa tech de alto nivel.',
      author: 'Laura Ortiz',
      role: 'CEO & Founder'
    }
  },
  {
    id: 3,
    name: 'Inmobiliaria ArchiTrust',
    industry: 'Real Estate & Inversión',
    logo: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=200&h=200&q=80',
    description: 'Fondo de inversión inmobiliaria con activos superiores a los $100M USD.',
    synergy: 'Consultoría M&A y auditoría preventiva de activos financieros.',
    testimonial: {
      quote: 'El blindaje legal y financiero que nos brindan es la base de nuestra tranquilidad operativa.',
      author: 'Roberto Silva',
      role: 'Director de Inversiones'
    }
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: 'Optimización de Estructura Holdings',
    category: 'Fiscal',
    result: '+22% Eficiencia',
    description: 'Reestructuración integral de grupo empresarial para optimizar la carga impositiva global.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    client: 'InverLatam Group'
  },
  {
    id: 2,
    title: 'Auditoría Forense Preventiva',
    category: 'Auditoría',
    result: 'Zero Risk',
    description: 'Implementación de protocolos de auditoría en tiempo real para detección temprana de anomalías.',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea10c4a?auto=format&fit=crop&w=800&q=80',
    client: 'BankTrust S.A.'
  },
  {
    id: 3,
    title: 'Blindaje Legal Corporativo',
    category: 'Legal',
    result: '100% Secure',
    description: 'Estructuración de contratos y protocolos de cumplimiento para expansión a mercados norteamericanos.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    client: 'TechNova Solutions'
  }
];

export const SPRING_TRANSITION = {
  type: 'spring',
  stiffness: 120,
  damping: 20,
} as const;
