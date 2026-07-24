import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'olishiz.github.io',
    href: 'https://olishiz.github.io',
  },
  {
    social: 'email',
    link: 'zhuen1101@hotmail.com',
    href: 'mailto:zhuen1101@hotmail.com',
  },
  {
    social: 'github',
    link: 'olishiz',
    href: 'https://github.com/olishiz',
  },
  {
    social: 'linkedin',
    link: 'olishiz',
    href: 'https://www.linkedin.com/in/olishiz/',
  },
  {
    social: 'location',
    link: 'Selangor, Malaysia',
    href: 'https://www.google.com/maps/search/?api=1&query=Selangor%2C%20Malaysia',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
