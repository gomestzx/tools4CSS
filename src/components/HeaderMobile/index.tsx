import Link from 'next/link';
import { useState } from 'react';
import Modal from 'react-modal';
import style from './styles.module.scss';

export function Links() {
  return (
    <>
      <div className={style.links}>
        <Link href='/tools/neumorphism'>
          <div className={style.row}>
            <div className={style.text}>
              <div className={style.link}>Neumorphism</div>
            </div>
          </div>
        </Link>
        <Link href='/tools/glassmorphism'>
          <div className={style.row}>
            <div className={style.text}>
              <div className={style.link}>Glassmorphism</div>
            </div>
          </div>
        </Link>
        <Link href='/tools/claymorphism'>
          <div className={style.row}>
            <div className={style.text}>
              <div className={style.link}>Claymorphism</div>
            </div>
          </div>
        </Link>
        <Link href='/tools/text-gradient'>
          <div className={style.row}>
            <div className={style.text}>
              <div className={style.link}>Text Gradient</div>
            </div>
          </div>
        </Link>
        <Link href='/tools/background-gradient'>
          <div className={style.row}>
            <div className={style.text}>
              <div className={style.link}>Background Gradient</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default function HeaderMobile() {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className={style.headerMobile}>
      <button onClick={() => setModal(true)} className={style.btnOpen}>
        Tools 🛠️
      </button>

      {modal ? (
        <>
          <Modal isOpen={modal} className={style.modal}>
            <button className={style.btnClose} onClick={() => setModal(false)}>
              Close 👋
            </button>
            <Links />
          </Modal>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
