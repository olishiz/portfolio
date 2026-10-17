import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import Clock from '@/components/showcase/Clock';
import ShowcaseCard from '@/components/showcase/ShowcaseCard';
import { showcase } from '@/data/showcase';
import { withBasePath } from '@/lib/basePath';

import '@/styles/showcase-base.css';
import styles from '@/styles/Showcase.module.css';

const sans = Geist({ subsets: ['latin'], variable: '--sc-sans', display: 'swap' });
const mono = Geist_Mono({ subsets: ['latin'], variable: '--sc-mono', display: 'swap' });

export const metadata: Metadata = {
  title: { absolute: 'Side projects | Oliver Sim' },
  description: 'Things Oliver Sim builds on the side: small products, tools and experiments, shipped for real.',
  openGraph: {
    title: 'Side projects | Oliver Sim',
    description: 'Things I build on the side: small products, tools and experiments, shipped for real.',
    url: 'https://olishiz.github.io/portfolio/',
    images: ['https://olishiz.github.io/portfolio/og.png'],
    type: 'website',
  },
};

export default function SideProjectsPage() {
  const years = [...new Set(showcase.map((p) => p.year))].sort((a, b) => b - a);

  return (
    <div className={`${styles.root} ${sans.variable} ${mono.variable}`}>
      <header className={styles.top}>
        <a href="https://olishiz.github.io/" className={styles.brand}>
          <span className={styles.brandDot} aria-hidden="true" />
          Oliver Sim
        </a>
        <nav className={styles.nav} aria-label="Elsewhere">
          <a href="https://olishiz.github.io/">Home</a>
          <a href={withBasePath('/vscode/')}>VS Code</a>
          <a href="https://github.com/olishiz" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.intro}>
          <p className={styles.eyebrow}>Side projects</p>
          <h1 className={styles.title}>Things I build after hours. Small, useful, and actually shipped.</h1>
        </section>

        {years.map((year) => (
          <section key={year} className={styles.year} aria-label={String(year)}>
            <div className={styles.yearLabel}>
              <span className={styles.yearDot} aria-hidden="true" />
              {year}
            </div>
            <div className={styles.cards}>
              {showcase
                .map((p, i) => ({ p, i }))
                .filter(({ p }) => p.year === year)
                .map(({ p, i }) => <ShowcaseCard key={p.slug} project={p} index={i} />)}
            </div>
          </section>
        ))}
      </main>

      <footer className={styles.foot}>
        <span>© {new Date().getFullYear()} Oliver Sim.</span>
        <Clock className={styles.clock} />
      </footer>
    </div>
  );
}
