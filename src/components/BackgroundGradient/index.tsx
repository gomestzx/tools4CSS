import React, { useState } from 'react';
import style from './styles.module.scss';
import { Slider } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { RgbaColorPicker } from 'react-colorful';

const Background = () => {
  const [color1, setColor1] = useState<string>('#37E2D5');
  const [text, setText] = useState<string>('COPY');
  const Copy = () => {
    setText('COPIED 🎉');
    setTimeout(() => {
      setText('COPY');
    }, 2500);
  };
  return (
    <div className={style.app}>
      <div className={style.background}>
        <div
          className={style.container}
          style={{
            
            height: '100px',
            backgroundColor: `rgba(142, 209, 252, 0.35)`,
            margin: '20px',
          }}
        ></div>
      </div>
      <div>
        <div className={style.controls}>
          <div className={style.flex}>
            <section className={style.colorPicker}>
              <RgbaColorPicker style={{ height: 150 }} />
            </section>
            <section className={style.colorPicker}>
              <RgbaColorPicker style={{ height: 150 }} />
            </section>
          </div>
        </div>
      </div>
      <div className={style.cssCopy}>
        <textarea
          className={style.textarea}
          value={`background: rgb(148,187,233); \nbackground: linear-gradient(56deg, rgba(148,187,233,1) 10%, rgba(238,174,202,1) 100%);`}
          readOnly
        ></textarea>
        <br />
        <CopyToClipboard text={``}>
          <button onClick={() => Copy()}>{text}</button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Background;
