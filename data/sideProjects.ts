export interface SideProject {
  title: string;
  slug: string;
  link: string;
  linkLabel: string;
  image: string;
  imageAlt: string;
  tagline: string;
  problem: string;
  what: string[];
  stack: string[];
  build: { summary: string; detail: string };
}

export const sideProjects: SideProject[] = [
  {
    title: 'JomLari',
    slug: 'jomlari',
    link: 'https://jomlari.app',
    linkLabel: 'jomlari.app',
    image: '/side-projects/jomlari.svg',
    imageAlt: 'JomLari home page: “What’s running in Kuala Lumpur” with club logo cards and a haze advisory',
    tagline: 'Who’s running tonight? A clean, Luma-style finder for run clubs across Malaysia.',
    problem:
      'KL and Malaysian run clubs post across Instagram, Strava, Luma and WhatsApp, so finding a run tonight means checking ten places.',
    what: [
      '147 clubs across Malaysia, sorted by when they run in KL time',
      'Tonight / Tomorrow / Weekend chips, monthly calendar, map and near-me',
      'Real club logos, verified schedules and haze notices',
      'One-tap add-to-calendar (Apple, Google, Outlook)',
      'Scraper refreshes live sources every 6 hours',
    ],
    stack: ['Next.js 14 static export', 'TypeScript strict', 'Tailwind', 'Leaflet / OSM', 'Node scraper on GitHub Actions', 'Vercel'],
    build: {
      summary: '~20 min to v1 · ~5 h total',
      detail: 'Started 14:52, v1 live ~15:12, then 7 iterations through 19:48 (UTC+8) on 17 Oct 2026.',
    },
  },
];
