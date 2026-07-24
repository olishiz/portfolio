import type { Metadata } from 'next';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://olishiz.github.io/portfolio/'),
  title: {
    default: 'Oliver Sim | Senior Full Stack Engineer',
    template: 'Oliver Sim | %s',
  },
  description:
    'Portfolio of Oliver Sim, a senior full stack engineer building enterprise applications, cloud platforms, and AI-enabled systems in Malaysia.',
  keywords: [
    'Oliver Sim',
    'Oliver Sim Choo Howe',
    'senior full stack engineer',
    'Malaysia software engineer',
    'React Node.js Java Kotlin',
    'Azure OpenAI developer',
    'enterprise application developer',
    'VS Code portfolio',
  ],
  openGraph: {
    title: 'Oliver Sim | Senior Full Stack Engineer',
    description:
      'Enterprise applications, cloud platforms, DevOps, and AI-enabled systems—presented inside a portfolio that feels like VS Code.',
    images: ['https://olishiz.github.io/portfolio/og.png'],
    url: 'https://olishiz.github.io/portfolio/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oliver Sim | Senior Full Stack Engineer',
    description:
      'Enterprise applications, cloud platforms, DevOps, and AI-enabled systems.',
    images: ['https://olishiz.github.io/portfolio/og.png'],
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
