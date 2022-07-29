import React, { useState } from 'react';
import style from './styles.module.scss';
import { Slider } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Neumorphism = () => {
  const [blur, setBlur] = useState<number>(8);

  const [text, setText] = useState<string>('COPY');
  const [distance, setDistance] = useState<number>(10);
  const [borderRadius, setBorderRadius] = useState<number>(12);
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
            width: '300px',
            height: '320px',
            backgroundColor: 'rgba(142, 209, 252, 0.15)',
            borderRadius: `${borderRadius}px`,
            boxShadow: `${distance}px ${distance}px ${blur}px #b2b8c9, -${distance}px -${distance}px ${blur}px #f0f8ff`,
          }}
        ></div>
      </div>
      <div className={style.flex}>
        <div className={style.controls}>
          <div className={style.label}>
            <span>Distance</span>
            <span> {distance}</span>
          </div>
          <Slider
            value={distance}
            onChange={(e, value) => setDistance(value as number)}
            defaultValue={30}
            className={style.slider}
            max={60}
          />
          <div className={style.label}>
            <span>Blur</span>
            <span> {blur}</span>
          </div>
          <Slider
            value={blur}
            onChange={(e, value) => setBlur(value as number)}
            defaultValue={30}
            className={style.slider}
          />
          <div className={style.label}>
            <span>Border Radius</span>
            <span> {borderRadius}</span>
          </div>
          <Slider
            value={borderRadius}
            onChange={(e, value) => setBorderRadius(value as number)}
            defaultValue={30}
            className={style.slider}
            max={60}
          />
        </div>
        <div className={style.cssCopy}>
          <textarea
            className={style.textarea}
            value={`boxShadow: ${distance}px ${distance}px ${blur}px #b2b8c9, -${distance}px -${distance}px ${blur}px #f0f8ff;\n-webkit-box-shadow: ${distance}px ${distance}px ${blur}px #b2b8c9, -${distance}px -${distance}px ${blur}px #f0f8ff;\nborder-radius: ${borderRadius}px;`}
            readOnly
          ></textarea>
          <br />
          <CopyToClipboard
            text={`boxShadow: ${distance}px ${distance}px ${blur}px #b2b8c9, -${distance}px -${distance}px ${blur}px #f0f8ff;\n-webkit-box-shadow: ${distance}px ${distance}px ${blur}px #b2b8c9, -${distance}px -${distance}px ${blur}px #f0f8ff;\nborder-radius: ${borderRadius}px;`}
          >
            <button onClick={() => Copy()}>{text}</button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default Neumorphism;
