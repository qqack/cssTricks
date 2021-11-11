import React from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import { history } from 'umi';
import { ClickParam } from 'antd/es/menu';
import { UserOutlined } from '@ant-design/icons';

export default function CustomHeaderRight(/** props: HeaderViewProps */) {
  const handleMenuClick = ({ key }: ClickParam) => {
    switch (key) {
      case 'personal':
      default:
        alert('你点击的是个人信息');
        break;
      case 'logout':
        history.replace('/user/login');
        break;
    }
  };

  return (
    <div style={{ padding: '0 24px', display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: 10 }}>自定义头部右侧内容</div>
      <Dropdown
        overlay={
          <Menu onClick={handleMenuClick}>
            <Menu.Item key="personal">个人信息</Menu.Item>
            <Menu.Item key="logout">退出登录</Menu.Item>
          </Menu>
        }
      >
        <Avatar size="large" icon={<UserOutlined />} />
      </Dropdown>
    </div>
  );
}
