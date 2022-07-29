import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

export default function HeaderApp() {
  return (
    <header className={styles.header}>
      <a className={styles.logo}>
        <Image src='/logo.png' alt='' width={190} height={60} />
      </a>
      <input className={styles.menuBtn} type='checkbox' id='menu-btn' />
      <label className={styles.menuIcon} htmlFor='menu-btn'>
        <span className={styles.navicon} />
      </label>
      <ul className={styles.menu}>
        <li>
          <Link href='/tools/glassmorphism'>Tools</Link>
        </li>
        <li>
          <Link href='#faqs'>About</Link>
        </li>
        <li>
          <Link href='/tools/background-gradient'>Blog</Link>
        </li>
        <li>
          <Link href='#contact'>Contact</Link>
        </li>
      </ul>
    </header>
  );
}
