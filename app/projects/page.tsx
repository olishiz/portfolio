import { Metadata } from 'next';
import { VscBeaker, VscFolderOpened, VscGithub, VscLinkExternal } from 'react-icons/vsc';

import ProjectCard from '@/components/ProjectCard';
import SideProjectCard from '@/components/SideProjectCard';
import { projects } from '@/data/projects';
import { sideProjects } from '@/data/sideProjects';

import styles from '@/styles/ProjectsPage.module.css';

export const metadata: Metadata = {
  title: 'Projects',
};

const ProjectsPage = () => {
  const totalProjects = projects.length;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.iconWrapper}>
              <VscFolderOpened className={styles.icon} size={24} />
            </div>
            <div className={styles.meta}>
              <span className={styles.count}>{totalProjects} Projects</span>
            </div>
          </div>
          
          <div className={styles.headerContent}>
            <h1 className={styles.title}>Featured Work</h1>
            <p className={styles.subtitle}>
              Selected products and experiments across full-stack engineering,
              enterprise AI, business platforms, and playful product design.
            </p>
          </div>
        </header>

        <div className={styles.timeline}>
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.slug} 
              project={project}
              index={index + 1}
            />
          ))}
        </div>

        <section className={styles.section} id="side-projects" aria-labelledby="side-projects-title">
          <div className={styles.sectionHeader}>
            <div className={styles.iconWrapper}>
              <VscBeaker className={styles.icon} size={20} />
            </div>
            <div>
              <h2 id="side-projects-title" className={styles.sectionTitle}>Side projects</h2>
              <p className={styles.sectionSubtitle}>Small things I build fast and ship for real people.</p>
            </div>
          </div>
          <div className={styles.sideList}>
            {sideProjects.map((project) => (
              <SideProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerLine} />
          <a 
            href="https://github.com/olishiz?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            <VscGithub size={18} />
            <span>Explore more on GitHub</span>
            <VscLinkExternal size={14} />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default ProjectsPage;
