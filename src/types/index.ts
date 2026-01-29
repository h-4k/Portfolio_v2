// Type definitions for Multi-Personality Portfolio

export type PersonalityType = 'cyber' | 'design' | 'music' | 'aerospace';

export interface PersonalityConfig {
  id: PersonalityType;
  name: string;
  title: string;
  tagline: string;
  description: string;
  accentColor: string;
  secondaryColor?: string;
  glowColor: string;
  icon: string;
  cursorStyle: 'crosshair' | 'brush' | 'pick' | 'target';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  demo?: string;
  personality: PersonalityType;
  featured?: boolean;
  date?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  personality: PersonalityType;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  verificationLink?: string;
  personality: PersonalityType;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  personality?: PersonalityType;
}

export interface AnimationVariants {
  initial: any;
  animate: any;
  exit?: any;
  transition?: any;
  [key: string]: any;
}
