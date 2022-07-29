import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

export default function HeaderMobile() {
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
          <Link href='/tools/neumorphism'>Neumorphism</Link>
        </li>
        <li>
          <Link href='/tools/glassmorphism'>Glassmorphism</Link>
        </li>
        <li>
          <Link href='/tools/claymorphism'>Claymorphism</Link>
        </li>
        <li>
          <Link href='/tools/text-gradient'>Text Gradient</Link>
        </li>
      </ul>
    </header>
  );
}
