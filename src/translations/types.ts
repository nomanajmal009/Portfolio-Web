export interface Translation {
  header: {
    name: string;
    title: string;
    location: string;
    dob: string;
    phone: string;
    email: string;
    toggleTheme: string;
    toggleLanguage: string;
  };
  experience: {
    title: string;
    items: Array<{
      company: string;
      role: string;
      period: string;
      description: string;
    }>;
  };
  projects: {
    title: string;
    items: Array<{
      name: string;
      description: string;
      technologies: string[];
      link: string;
    }>;
  };
  skills: {
    title: string;
    items: string[];
  };
  certifications: {
    title: string;
    items: Array<{
      name: string;
      issuer: string;
      date: string;
      link: string;
      description?: string;
    }>;
  };
  education: {
    title: string;
    items: Array<{
      institution: string;
      degree: string;
      period: string;
      description: string;
    }>;
  };
  contact: {
    title: string;
    email: string;
    phone: string;
    social: {
      github: string;
      linkedin: string;
      twitter: string;
    };
  };
  technicalSkills: {
    title: string;
    items: string[];
  };
  personality: {
    title: string;
    items: string[];
  };
  languages: {
    title: string;
    items: Array<{ name: string; level: number }>;
  };
  hobbies: {
    title: string;
    items: string[];
  };
}
