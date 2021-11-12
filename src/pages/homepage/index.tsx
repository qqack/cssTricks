import React from 'react';
import { Link } from 'umi';
import styles from './index.less';

const listData = [{ title: '颜色继承', path: './color' }];

export default function Homepage() {
  return (
    <div className={styles.homepage}>
      <div className="nav">菜单</div>
      {/* TODO 弹性布局 可以随意改变左右区域的大小 */}
      <div className="content">
        <h2>这里是我的css练习课堂，总结遇到的各种css解决办法.</h2>
        <div>参考You-need-to-know-css， 希望能在这里做一些自己的css总结。</div>
        {listData.map(item => {
          return (
            <div>
              <Link to={item.path}>{item.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
