import { VscGithub, VscMail } from 'react-icons/vsc';
import Link from 'next/link';

import styles from '@/styles/AboutPage.module.css';

const experience = [
  {
    period: 'Mar 2025 — Present',
    role: 'Senior Full Stack Engineer',
    company: 'Maybank · Kuala Lumpur',
    highlights: [
      'Building an enterprise request and approval portal with React, Node.js, and MongoDB.',
      'Modernizing workloads and supporting production migration from AWS to Azure.',
      'Delivering contextual enterprise search with Azure OpenAI, Azure AI Search, documents, databases, and blob storage.',
      'Shipped 20+ production releases using zero-downtime deployment practices.',
    ],
  },
  {
    period: 'Jul 2022 — Dec 2024',
    role: 'Senior Backend Engineer',
    company: 'EDAG Malaysia · Shah Alam',
    highlights: [
      'Designed high-throughput Spring Boot and Kotlin services for data-intensive workloads.',
      'Optimized Oracle and PostgreSQL queries, schemas, and data access patterns.',
      'Built delivery pipelines with Bamboo, Docker, Kubernetes, Helm, and OpenShift.',
      'Implemented ETL services, RBAC, and JWT authentication while maintaining SonarQube quality gates above 80%.',
    ],
  },
  {
    period: 'Aug 2020 — Jul 2022',
    role: 'Full Stack Developer',
    company: 'Etiqa Insurance & Takaful · Kuala Lumpur',
    highlights: [
      'Delivered Angular, Node.js, Express, and MariaDB workflows for enterprise insurance operations.',
      'Built SME BizCare across frontend and backend modules for more than 500 active users.',
      'Automated XLSX reporting and credit-breach notifications to reduce manual operations.',
      'Supported production releases, hotfixes, and application stability.',
    ],
  },
  {
    period: 'Feb 2019 — Jan 2020',
    role: 'IT Specialist · Full Stack Developer',
    company: 'iFAST Service Centre · Kuala Lumpur',
    highlights: [
      'Built reusable FAQ and translation modules with Angular and Java.',
      'Enabled English and Chinese language switching in the Client 3.0 login portal.',
      'Supported secure high-risk transactions through biometric soft-token features.',
      'Streamlined staging and production delivery with Git and Jenkins.',
    ],
  },
];

const skillGroups = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Kotlin', 'Java'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Angular', 'Material', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Spring Boot', 'Node.js', 'NestJS', 'Express', 'Hibernate'],
  },
  {
    title: 'Data',
    skills: ['MongoDB', 'Oracle', 'PostgreSQL', 'MariaDB', 'MySQL'],
  },
  {
    title: 'Cloud & AI',
    skills: ['Azure', 'Azure OpenAI', 'AI Search', 'Foundry', 'AWS'],
  },
  {
    title: 'DevOps',
    skills: ['Kubernetes', 'Docker', 'OpenShift', 'Helm', 'Argo CD', 'GitHub Actions'],
  },
];

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.name}>Oliver Sim Choo Howe</h1>
              <p className={styles.role}>Senior Full Stack Engineer at Maybank</p>
              <div className={styles.location}>
                <span className={styles.dot} />
                Selangor, Malaysia
              </div>
            </div>
          </div>
          
          <div className={styles.headerActions}>
            <a
              href="https://github.com/olishiz"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link href="/vscode/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          {/* Bio Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>About</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                I&apos;m a versatile full stack engineer with more than seven years of
                experience developing, integrating, and operating enterprise
                applications across frontend, backend, cloud, and DevOps.
              </p>
              
              <p className={styles.paragraph}>
                I work end to end—from React and Angular interfaces to Java, Kotlin,
                and Node.js services, databases, delivery pipelines, and AI-enabled
                knowledge systems. I care about pragmatic architecture, dependable
                releases, and software that creates measurable operational value.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Experience</h2>
            </div>
            
            <div className={styles.sectionBody}>
              {experience.map((item) => (
                <div className={styles.experienceCard} key={item.company}>
                  <div className={styles.expMeta}>
                    <span className={styles.expPeriod}>{item.period}</span>
                  </div>
                  <h3 className={styles.expRole}>{item.role}</h3>
                  <p className={styles.expCompany}>{item.company}</p>
                  <ul className={styles.expList}>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Skills</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                {skillGroups.map((group) => (
                  <div className={styles.skillCategory} key={group.title}>
                    <h4 className={styles.skillTitle}>{group.title}</h4>
                    <div className={styles.skillTags}>
                      {group.skills.map((skill) => (
                        <span className={styles.skillTag} key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Delivery Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>How I Work</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                I bring a strong end-to-end delivery mindset: clarify the problem,
                choose maintainable technology, build with quality gates, automate
                delivery, and stay close through production stabilization.
              </p>
              <p className={styles.paragraph}>
                That approach has helped me deliver scalable cloud migrations,
                high-volume services, enterprise portals, search experiences,
                and production automation across banking, automotive, insurance,
                and wealth technology.
              </p>
            </div>
          </section>

          {/* Education Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>05</span>
              <h2 className={styles.sectionTitle}>Education</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                Bachelor of Computer Science (Honours), Taylor&apos;s University
                Lakeside Campus, 2016–2019. Graduated with a CGPA of 3.88/4.00.
              </p>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Link href="/vscode/projects" className={styles.footerLink}>
            View my projects →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
