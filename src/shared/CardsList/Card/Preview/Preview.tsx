import React from 'react';
import styles from './preview.css';
import previewDmitry from './dmitry-preview.png'

export function Preview() {
  return (
    <div className={styles.preview}>
        <img className={styles.previewImg} src={previewDmitry} alt="Картинка" />
      </div>
  );
}
