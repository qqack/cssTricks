/*
 * @文件描述: 路由拦截器，判断当前访问的路由是否在系统的路由系统中
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2020-05-20 10:54:46
 * @LastEditors: 仇艳
 * @LastEditTime: 2021-11-11 16:19:24
 */
import React from 'react';
import { IRouteComponentProps, Route } from 'umi';
import arrayUtils from '@/utils/array';

const Guard: React.FC<IRouteComponentProps> = props => {
  const {
    location: { pathname },
    route: { routes = [] },
  } = props;

  const flattenRoutes = arrayUtils.deepFlatten(routes, 'routes');
  if (flattenRoutes.find(item => item.path === pathname)) {
    return <>{props.children}</>;
  }
  const notFoundRoute = flattenRoutes.find(item => item.path === '/*')! as any;

  return <Route {...notFoundRoute} />;
};

export default Guard;
