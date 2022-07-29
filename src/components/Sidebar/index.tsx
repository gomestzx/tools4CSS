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
        <Link href='/tools/neumorphism'>Neumorphism</Link>
      </div>
      <div className={style.link}>
        <Link href='/tools/glassmorphism'>Glassmorphism</Link>
      </div>
      <div className={style.link}>
        <Link href='/tools/claymorphism'>Claymorphism</Link>
      </div>
      <div className={style.link}>
        <Link href='/tools/text-gradient'>Text Gradient</Link>
      </div>
      <div className={style.footer}>
        Made with ❤️ by <span><Link href='https://gomestzx.github.io'>gomestzx</Link></span>
      </div>
    </div>
  );
};

export default Sidebar;
