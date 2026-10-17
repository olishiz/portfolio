/**
 * Side projects shown on the /portfolio index, newest last.
 * To add one: drop a 1200x750 screenshot in public/showcase/ and append an entry.
 */
export interface ShowcaseProject {
  slug: string;
  name: string;
  /** One line, shown under the name. */
  description: string;
  tags: string[];
  year: number;
  /** Absolute URL, or a path inside this site (base path is added for you). */
  href: string;
  /** What the card shows as the address, e.g. "jomlari.app". */
  hrefLabel: string;
  /** Screenshot in public/, 16:10. */
  image: string;
  imageAlt: string;
  /** Show the "Live preview" button (needs a site that allows being framed). */
  livePreview?: boolean;
}

export const showcase: ShowcaseProject[] = [
  {
    slug: 'vscode-portfolio',
    name: 'VS Code Portfolio',
    description:
      'My developer portfolio as a VS Code workspace: explorer, tabs, command palette, a working terminal and switchable editor themes.',
    tags: ['Next.js', 'React 19', 'TypeScript', 'CSS Modules', 'GitHub Pages'],
    year: 2026,
    href: '/vscode/',
    hrefLabel: 'olishiz.github.io/portfolio/vscode',
    image: '/showcase/vscode.svg',
    imageAlt: 'VS Code Portfolio: a dark VS Code-style editor showing “Hello, I’m Oliver Sim”',
    livePreview: true,
  },
  {
    slug: 'jomlari',
    name: 'JomLari',
    description:
      'Who’s running tonight? 147 run clubs across Malaysia sorted by when they run, with a calendar, map, verified schedules and one-tap add-to-calendar.',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind', 'Leaflet', 'GitHub Actions', 'Vercel'],
    year: 2026,
    href: 'https://jomlari.app',
    hrefLabel: 'jomlari.app',
    image: '/showcase/jomlari.svg',
    imageAlt: 'JomLari: “What’s running in Kuala Lumpur” with run club logo cards',
    livePreview: true,
  },
];
