'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  VscAccount,
  VscSettings,
  VscMail,
  VscGithubAlt,
  VscCode,
  VscFiles,
  VscBook,
} from 'react-icons/vsc';

import styles from '@/styles/Sidebar.module.css';

const sidebarTopItems = [
  { Icon: VscFiles, path: '/vscode' },
  { Icon: VscGithubAlt, path: '/vscode/github' },
  { Icon: VscCode, path: '/vscode/projects' },
  { Icon: VscBook, path: '/vscode/credentials' },
  { Icon: VscMail, path: '/vscode/contact' },
];

const sidebarBottomItems = [
  { Icon: VscAccount, path: '/vscode/about' },
  { Icon: VscSettings, path: '/vscode/settings' },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                pathname === path && styles.active
              }`}
            >
              <Icon
                size={16}
                fill={
                  pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <div className={styles.iconContainer} key={path}>
            <Link href={path}>
              <Icon
                fill={
                  pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
