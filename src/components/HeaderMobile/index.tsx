import Link from 'next/link';
import { useState } from 'react';
import Modal from 'react-modal';
import Sidebar from '../Sidebar';
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

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div className={style.headerMobile}>
      <button onClick={() => setModal(true)} className={style.btnOpen}>see tools 🦄</button>
      

      {modal ? (
        <>
          <Modal isOpen={modal} className={style.modal}>
            <button className={style.btnClose} onClick={() => setModal(false)}>X</button>
            <Links />
          </Modal>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
