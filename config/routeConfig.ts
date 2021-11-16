/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2020-04-22 16:17:52
 * @LastEditors: 仇艳
 * @LastEditTime: 2021-11-16 11:16:58
 */
export default [
  {
    path: '/user',
    // component: '@/layouts/SignInLayout',
    routes: [
      {
        path: '/user/login',
        component: './user/login',
        title: '登录',
      },
      {
        path: '/user/register',
        component: './user/register',
        title: '注册',
      },
    ],
  },
  {
    path: '/',
    routes: [
      {
        path: '/homepage',
        component: './homepage',
      },
      {
        path: '/',
        redirect: '/homepage',
      },
      {
        path: '/color',
        component: './color',
      },
      {
        path: '*',
        component: './404',
      },
    ],
  },
];
