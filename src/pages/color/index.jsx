import React from 'react';
import styles from './index.less';

export default function color() {
  return <div>
    <h2>使用颜色继承：</h2>
    <h3>使用currentColor</h3>
    <div className={styles.currentColor}>hello world</div>
    <h3>使用inherit</h3>
    <div className={styles.currentColor}>
      <div className={styles.inheritColor}>hello world</div>
    </div>
  </div>
}