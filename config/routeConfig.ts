/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2020-04-22 16:17:52
 * @LastEditors: 仇艳
 * @LastEditTime: 2021-11-12 09:57:08
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
    // component: '@/layouts/BasicLayout',
    // wrappers: ['@/wrappers/auth', '@/wrappers/guard'],
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
        path: '*',
        component: './404',
      },
    ],
  },
];
