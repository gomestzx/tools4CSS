import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

export default function HeaderApp() {
  return (
    <header className={styles.header}>
      <a className={styles.logo}>
        <h1>Tools4CSS</h1>
      </a>
      <input className={styles.menuBtn} type='checkbox' id='menu-btn' />
      <label className={styles.menuIcon} htmlFor='menu-btn'>
        <span className={styles.navicon} />
      </label>
      <ul className={styles.menu}>
        <li>
          <Link href='/tools/neumorphism'>Tools</Link>
        </li>
        <li>
          <Link href='#about'>About</Link>
        </li>
        <li>
          <Link href='#blog'>Blog</Link>
        </li>
        <li>
          <Link href='#contact'>Contact</Link>
        </li>
      </ul>
    </header>
  );
}
