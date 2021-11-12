/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2020-04-22 16:22:12
 * @LastEditors: 仇艳
 * @LastEditTime: 2021-11-11 16:24:04
 */
import { Settings } from '@ant-design/pro-layout';

const defaultSettings: Partial<Settings> = {
  navTheme: 'dark',
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  menu: {
    locale: false,
    defaultOpenAll: false,
  },
  title: 'CSS Tricks',
};

export default defaultSettings;
