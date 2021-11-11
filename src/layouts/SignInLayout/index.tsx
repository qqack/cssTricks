import React from 'react';
import { Layout, message } from 'antd';
import { CopyrightOutlined } from '@ant-design/icons';
import { IRouteComponentProps } from 'umi';
import { UseRequestProvider } from 'ahooks';
import loginLeft from '../../assets/login_left.png';
import signLogo from '../../assets/signin_logo.png';
import loginBg from '../../assets/login_bg.png';

const { Header, Content, Footer } = Layout;

export default function SignInLayout(props: IRouteComponentProps) {
  return (
    <UseRequestProvider
      value={{
        /** 全局请求的默认配置 */
        onError: (error: Error) => {
          console.error(error);
          if (error) {
            const errorJSON = JSON.parse(error.message);
            message.error(errorJSON.message);
          }
        },
      }}
    >
      <Layout
        style={{
          backgroundImage: `url(${loginBg})`,
        }}
      >
        <Header style={{ height: 100, paddingLeft: 320, paddingRight: 320 }}>
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <img src={signLogo} alt="雷数科技" />
          </div>
        </Header>
        <Content
          style={{
            paddingLeft: 220,
            paddingRight: 250,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div style={{ flex: 1 }}>
            <img src={loginLeft} alt="" style={{ width: '100%' }} />
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {props.children}
          </div>
        </Content>
        <Footer>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
            }}
          >
            Copyright&nbsp;
            <CopyrightOutlined />
            &nbsp;杭州雷数前端团队出品
          </div>
        </Footer>
      </Layout>
    </UseRequestProvider>
  );
}
