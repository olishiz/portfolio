import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://olishiz.github.io/portfolio/'),
  title: {
    default: 'Side projects | Oliver Sim',
    template: 'Oliver Sim | %s',
  },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

// Applies the VS Code portfolio's saved theme before paint (no-op on other pages).
const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      if (theme) document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {}
  })();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
