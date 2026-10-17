import { Metadata } from 'next';

import ContactCode from '@/components/ContactCode';

import styles from '@/styles/ContactPage.module.css';

export const metadata: Metadata = {
  title: 'Contact',
};

const ContactPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Contact Me</h1>
      <p className={styles.pageSubtitle}>
        Let&apos;s talk about enterprise applications, platform modernization,
        cloud delivery, or practical AI. I&apos;m always open to thoughtful
        collaborations and new connections.
      </p>
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <ContactCode />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
