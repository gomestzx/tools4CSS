import React, { useState } from 'react';
import style from './styles.module.scss';
import { Slider } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Background = () => {
  const [color1, setColor1] = useState<string>('#12C2E9');
  const [color2, setColor2] = useState<string>('#d954c8');
  const [background, setBackground] = useState<string>('#f2f4f6')
  const [text, setText] = useState<string>('COPY');
  const Copy = () => {
    setText('COPIED 🎉');
    setTimeout(() => {
      setText('COPY');
    }, 2500);
  };

  return (
    <div className={style.app}  style={{backgroundColor: `${background}`}}>
      <div className={style.background}>
        <div className={style.container}>
          <h1
            className={style.textGradient}
            style={{
              WebkitTextFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              backgroundClip: 'text',
              background: `linear-gradient(to right, ${color1}, ${color2})`,
            }}
          >
            Tools4CSS
          </h1>
        </div>
      </div>
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
          <div>
            <div className={style.label}>
              <span>Background </span>
            </div>
            <input
              type='color'
              onChange={(e) => setBackground(e.target.value)}
              value={background}
            />
          </div>
        </div>
        <div className={style.cssCopy}>
          <textarea
            className={style.textarea}
            value={`background: -webkit-linear-gradient(to right, ${color1}, ${color2});\nbackground: linear-gradient(to right, ${color1}, ${color2});\n-webkit-background-clip: text;\nbackground-clip: text;\ncolor: transparent;`}
            readOnly
          ></textarea>
          <br />
          <CopyToClipboard
            text={`background: -webkit-linear-gradient(to right, ${color1}, ${color2});\nbackground: linear-gradient(to right, ${color1}, ${color2});\n-webkit-background-clip: text;\nbackground-clip: text;\ncolor: transparent;`}
          >
            <button onClick={() => Copy()}>{text}</button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default Background;
