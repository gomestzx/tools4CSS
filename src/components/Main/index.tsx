import Image from 'next/image';
import style from './styles.module.scss';
import React, { useEffect, useState } from 'react';
import { Slider } from '@material-ui/core';
import { useRouter } from 'next/router';
import Link from 'next/link';

//#623cea
export default function Main() {
  const router = useRouter();
  const [blur, setBlur] = useState<number>(0);
  const [color, setColor] = useState<string>('#096FFE');

  const Redirect = () => {
    router.push('/tools/text-gradient');
  };

  interface IHexToRGBA {
    m: string;
    r: string;
    g: string;
    b: string;
  }

  function hexToRgb(hex: any) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function ({ m, r, g, b }: IHexToRGBA) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  const r = hexToRgb(color)?.r;
  const g = hexToRgb(color)?.g;
  const b = hexToRgb(color)?.b;
  return (
    <>
      <div className={style.container}>
        <div className={style.row}>
          <h1>
            Build great <br />
            designs with
            <br />
            our tools
          </h1>
          <div className={style.content}>
            <p
              onClick={() => Redirect()}
              style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
            >
              Try it for free 🚀
            </p>
            <a
              href='https://www.producthunt.com/posts/tools4css?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tools4css'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=356512&theme=light'
                alt='Tools4CSS - Tools&#0032;to&#0032;help&#0032;developers&#0032;build&#0032;interfaces&#0032;modern&#0032;quickly | Product Hunt'
              />
            </a>
          </div>
        </div>

        <div className={style.row}>
          <div className={style.textMobile}>
            <h2>
              Build great designs
              <br />
              with our tools
            </h2>
          </div>
          <div className={style.mainImg}>
            <div className={style.background}>
              <div
                className={style.container}
                style={{
                  backdropFilter: `blur(${blur}px)`,
                  WebkitBackdropFilter: `blur(${blur}px)`,
                  width: '300px',
                  height: '320px',
                  borderRadius: 12,
                  backgroundColor: `rgba(${r}, ${g}, ${b}, 0.25)`,
                }}
              ></div>
            </div>
            <label>Change the blur 👇</label>
            <Slider
              value={blur}
              onChange={(e, value) => setBlur(value as number)}
              defaultValue={30}
              className={style.slider}
            />
            <input
              type='color'
              onChange={(e) => setColor(e.target.value)}
              value={color}
            />
            <label>Change the color 👆</label>
          </div>
        </div>
      </div>
    </>
  );
}
