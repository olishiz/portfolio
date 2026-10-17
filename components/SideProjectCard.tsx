import Image from 'next/image';
import { VscLinkExternal, VscWatch } from 'react-icons/vsc';

import { SideProject } from '@/data/sideProjects';

import { withBasePath } from '@/lib/basePath';
import styles from '@/styles/SideProjectCard.module.css';

const SideProjectCard = ({ project }: { project: SideProject }) => (
  <article className={styles.card} data-side-project={project.slug}>
    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.shot} aria-label={`Open ${project.title}`}>
      <Image
        src={withBasePath(project.image)}
        alt={project.imageAlt}
        width={1200}
        height={750}
        sizes="(max-width: 640px) 100vw, 576px"
        className={styles.image}
      />
    </a>

    <div className={styles.body}>
      <div className={styles.header}>
        <h3 className={styles.title}>{project.title}</h3>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
          {project.linkLabel}
          <VscLinkExternal size={12} />
        </a>
      </div>

      <p className={styles.tagline}>{project.tagline}</p>
      <p className={styles.problem}>
        <span className={styles.label}>Problem</span> {project.problem}
      </p>

      <ul className={styles.features}>
        {project.what.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <ul className={styles.stack} aria-label="Stack">
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <p className={styles.build}>
        <VscWatch size={14} />
        <span>
          <strong>{project.build.summary}</strong> · {project.build.detail}
        </span>
      </p>
    </div>
  </article>
);

export default SideProjectCard;
