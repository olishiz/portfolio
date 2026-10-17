import { Metadata } from 'next';
import { VscBook, VscCheck, VscGlobe } from 'react-icons/vsc';

import styles from '@/styles/CredentialsPage.module.css';

export const metadata: Metadata = {
  title: 'Credentials',
};

const certifications = [
  'Microsoft Certified: Azure Solutions Architect Expert',
  'Microsoft Certified: Azure Administrator Associate',
  'Microsoft Certified: Azure Developer Associate',
  'Microsoft Certified: Azure AI Fundamentals',
  'Rancher Academy: Kubernetes Basics',
];

export default function CredentialsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerMain}>
            <div className={styles.iconWrapper}>
              <VscBook className={styles.icon} size={24} />
            </div>
            
            <div className={styles.headerContent}>
              <div className={styles.headerTop}>
                <h1 className={styles.title}>Credentials</h1>
                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <VscGlobe size={14} />
                    <span>Malaysia</span>
                  </div>
                  <div className={styles.divider} />
                  <div className={styles.stat}>
                    <span>7+ years</span>
                  </div>
                </div>
              </div>
              
              <p className={styles.subtitle}>
                Formal education and professional certifications supporting
                hands-on delivery across software, cloud, and AI.
              </p>
            </div>
          </div>
        </header>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>Education</div>
          <article className={styles.educationCard}>
            <span className={styles.period}>2016 — 2019</span>
            <h2>Bachelor of Computer Science (Honours)</h2>
            <p>Taylor&apos;s University Lakeside Campus · Subang Jaya</p>
            <div className={styles.score}>CGPA 3.88 / 4.00</div>
          </article>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>Professional certifications</div>
          <div className={styles.certificationList}>
            {certifications.map((certification) => (
              <div className={styles.certification} key={certification}>
                <span className={styles.check}>
                  <VscCheck size={16} />
                </span>
                <span>{certification}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>Delivery highlights</div>
          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <strong>20+</strong>
              <span>production releases at Maybank</span>
            </div>
            <div className={styles.highlight}>
              <strong>1,000+</strong>
              <span>enterprise requests made searchable</span>
            </div>
            <div className={styles.highlight}>
              <strong>500+</strong>
              <span>active users supported on SME BizCare</span>
            </div>
            <div className={styles.highlight}>
              <strong>80%+</strong>
              <span>SonarQube quality gate maintained</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
