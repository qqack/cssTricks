import React from 'react';
import { Menu } from 'antd';
import { Link } from 'umi';
import styles from './index.less';

const { SubMenu } = Menu;

const menus = [{ title: '颜色', children: [{ title: '颜色继承', path: './color' }] }];

export default function Sider() {
  return (
    <div className={styles.menu}>
      {menus.map((menu) => (
        <Menu mode="inline">
          <SubMenu key={menu.title} title={menu.title}>
            {menu.children.map((child) => (
              <Menu.Item key={child.title}>
                <Link to={child.path}>{child.title}</Link>
              </Menu.Item>
            ))}
          </SubMenu>
        </Menu>
      ))}
    </div>
  );
}
