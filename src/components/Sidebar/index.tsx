import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from './styles.module.scss';

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.logo}>
        <Image src='/logo-white.png' alt='' width={190} height={60} />
      </div>
      <div className={style.link}>
        <Link href='/tools/glassmorphism'>Glassmorphism</Link>
      </div>
      <div className={style.link}>
        <Link href='/teste'>Neumorphism</Link>
      </div>
      <div className={style.link}>
        <Link href='/tools/background-gradient'>Background Gradient</Link>
      </div>
      <div className={style.link}>
        <Link href='/teste'>Text Gradient</Link>
      </div>
      <div className={style.footer}>
        Made with ❤️ by <span>gomestzx</span>
      </div>
    </div>
  );
};

export default Sidebar;
