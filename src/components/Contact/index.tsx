import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.footer}>
        Made with ❤️ by
        <span>
          <Link href='https://gomestzx.github.io'> gomestzx</Link>
        </span>
      </div>
    </div>
  );
};

export default Contact;
