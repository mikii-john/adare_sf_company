
export enum ServiceCategory {
  WEB_DEV = 'Custom Website Development',
  MAINTENANCE = 'Maintenance & Hosting',
  AI_INTEGRATION = 'AI Integration'
}

export interface Service {
  id: string;
  title: string;
  category: ServiceCategory;
  description: string;
  icon: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  challenge: string;
  solution: string;
  technologies: string[];
  url?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface Stats {
  label: string;
  value: string;
  icon: string;
}
