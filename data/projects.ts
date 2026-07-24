export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Carbnb',
    description:
      'Full-stack car subscription platform with booking management, Curlec payments, an inventory dashboard, master calendar, and PWA support.',
    logo: '/logos/react_icon.svg',
    link: 'https://github.com/olishiz/bookcars',
    slug: 'carbnb',
  },
  {
    title: 'The Shiz',
    description:
      'A web and application studio delivering tailored websites, business platforms, e-commerce, hosting, SEO, and ongoing support.',
    logo: '/logos/vscode_icon.svg',
    link: 'https://github.com/olishiz/the-shiz.co',
    slug: 'the-shiz',
  },
  {
    title: 'EA Portal AI Chatbot',
    description:
      'An AI-enabled enterprise assistant exploring contextual knowledge retrieval and modern conversational application patterns.',
    logo: '/logos/react_icon.svg',
    link: 'https://github.com/olishiz/eaportal-ai-chatbot',
    slug: 'ea-portal-ai-chatbot',
  },
  {
    title: 'Task Management Platform',
    description:
      'A full-stack task management application with a NestJS backend, React frontend, and PostgreSQL database.',
    logo: '/logos/js_icon.svg',
    link: 'https://github.com/olishiz/task-management-app',
    slug: 'task-management-app',
  },
  {
    title: 'TamaKaki',
    description:
      'A modern virtual pet experience spanning life stages, skills, adventures, and home customization across devices.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/olishiz/Tamakaki',
    slug: 'tamakaki',
  },
];
