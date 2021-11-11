import { extend, ResponseError } from 'umi-request';
import { message } from 'antd';
import { history } from 'umi';
import { LOGIN_FAILURE } from './constant';

const controller = new AbortController();
const { signal } = controller;

const codeMessage: { [key: number]: string } = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

export function errorHandler(error: ResponseError) {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    throw new Error(JSON.stringify({
      message: errorText,
      description: `请求错误 ${status}: ${url}`,
    }));
  }
  throw error;
}

const getToken = () =>
  new Promise(resolve => {
    setTimeout(() => {
      const token = localStorage.getItem('accessToken');
      resolve(token);
    }, 0);
  });

export const initRequest = async () => {
  const token = await getToken();
  /** 这边可对接口请求做一些统一的封装 */
  const request = extend({
    useCache: false,
    ttl: 60000,
    credentials: 'same-origin',
    headers: {
      accessToken: token! as string,
    },
    errorHandler,
    signal,
  });

  request.interceptors.response.use(response => {
    response
      .clone()
      .json()
      .then(res => {
        if ([LOGIN_FAILURE['不允许登录'], LOGIN_FAILURE['登录过期']].includes(res.code)) {
          controller.abort();
          history.replace('/user/login');
        }
      });
    return response;
  });

  return request;
};

/** table的默认配置 */
export const defaultTableProps = {
  onRequestError: (error: Error) => {
    console.error(error.message);
    message.error('数据加载失败');
  },
  bordered: false,
  search: true,
  pagination: {
    size: 'default',
  },
  dateFormatter: 'string',
  tableAlertRender: false,
};
