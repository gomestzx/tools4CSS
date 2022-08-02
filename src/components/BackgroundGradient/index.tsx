import React, { useState } from 'react';
import style from './styles.module.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const BackgroundGradient = () => {
  const [color1, setColor1] = useState<string>('#12C2E9');
  const [color2, setColor2] = useState<string>('#d954c8');
  const [direction, setDirection] = useState<string>('to top');
  const [text, setText] = useState<string>('COPY');
  const Copy = () => {
    setText('COPIED 🎉');
    setTimeout(() => {
      setText('COPY');
    }, 2500);
  };

  return (
    <div
      className={style.app}
      style={{
        backgroundImage: `linear-gradient(${direction}, ${color1}, ${color2})`,
        height: '100vh'
      }}
    >
      <div className={style.background}></div>
      <div className={style.flex}>
        <div className={style.controls}>
          <div>
            <div className={style.label}>
              <span>Color 1</span>
            </div>
            <input
              type='color'
              onChange={(e) => setColor1(e.target.value)}
              value={color1}
            />
          </div>
          <div>
            <div className={style.label}>
              <span>Color 2</span>
            </div>
            <input
              type='color'
              onChange={(e) => setColor2(e.target.value)}
              value={color2}
            />
          </div>
          <div className={style.directions}>
            <div className={style.label}>
              <span>Directions </span>
            </div>
            <button onClick={() => setDirection('to top')}>👆</button>
            <button onClick={() => setDirection('to bottom')}>👇</button>
            <button onClick={() => setDirection('to left')}>👈</button>
            <button onClick={() => setDirection('to right')}>👉</button>
          </div>
        </div>
        <div className={style.cssCopy}>
          <textarea
            className={style.textarea}
            value={`background-image: linear-gradient(${direction}, ${color1}, ${color2})`}
            readOnly
          ></textarea>
          <br />
          <CopyToClipboard
            text={`background-image: linear-gradient(${direction}, ${color1}, ${color2})`}
          >
            <button onClick={() => Copy()}>{text}</button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default BackgroundGradient;
