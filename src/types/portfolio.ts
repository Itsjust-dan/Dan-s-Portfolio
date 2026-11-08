export type ProjectCategory = 'all' | 'cybersecurity' | 'risk' | 'web' | 'uiux';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface SecurityControl {
  framework: string; // e.g. "ISO 27001", "CBN Cybersecurity Guidelines", "PCI-DSS"
  controlId: string; // e.g. "A.9.4.2", "CBN-S4.1"
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'cybersecurity' | 'risk' | 'web' | 'uiux';
  categoryLabel: string;
  year: string;
  subtitle: string;
  summary: string;
  challenge: string;
  solution: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  metrics: ProjectMetric[];
  techStack: string[];
  securityControls?: SecurityControl[];
  designHighlights?: string[];
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  category: 'cybersecurity' | 'risk' | 'cloud' | 'development';
  skills: string[];
  status: 'Verified' | 'Active' | 'Candidate';
  verifyUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  department: string;
  location: string;
  period: string;
  type: string;
  overview: string;
  achievements: string[];
  frameworks: string[];
  tools: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  capstoneTitle: string;
  capstoneSummary: string;
  coursework: string[];
  honors: string[];
}

export interface RiskScenario {
  id: string;
  title: string;
  category: string;
  description: string;
  threatActor: string;
  affectedAsset: string;
  defaultLikelihood: number; // 1 to 5
  defaultImpact: number; // 1 to 5
  frameworkStandard: string;
  recommendedMitigation: string;
  targetResidualRisk: string;
}
