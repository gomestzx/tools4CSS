import Image from 'next/image';
import React from 'react';
import styles from './styles.module.scss';



const VideoComponent = () => {
  return (
    <div className={styles.video}>
      <h1>Preview</h1>
      <video loop autoPlay id="vid" muted>
        <source src="/review.mp4" />
      </video>
      <div className={styles.gif}>
        <Image src='/review.gif' width={1280} height={720} alt='review'/>
      </div>
      
       
      
    </div>
  );
};

export default VideoComponent;
