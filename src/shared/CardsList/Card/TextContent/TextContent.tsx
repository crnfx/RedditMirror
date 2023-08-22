import React from 'react';
import styles from './textcontent.css';
import avatarDmitry from './dmitry-user.png'
import { Title } from './Title'

export function TextContent() {
  return (
    <div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img className={styles.avatar} src={avatarDmitry} alt="avatar" />
            <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
          </div>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано </span>
            4 часа назад
            </span>
        </div>
        <Title />
      </div>
  );
}
