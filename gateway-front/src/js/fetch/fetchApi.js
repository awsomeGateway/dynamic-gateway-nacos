import fetchUtil from './index';

const { location } = window;
let baseUrl = '';
const env = process.env.REACT_APP_ENV;
const reg = /[a-z]/g;
const host = location.hostname;
let flag = false;
if (host.match(reg)) {
  flag = true;
} else {
  flag = false;
}
if (env === 'product') {
  if (flag) {
    baseUrl = process.env.REACT_APP_API_URL;
  } else {
    baseUrl = process.env.REACT_APP_API_URL_PRODUCT;
  }
} else if (env === 'local') {
  baseUrl = process.env.REACT_APP_API_URL_LOCAL;
} else {
  baseUrl = process.env.REACT_APP_API_URL;
}

/**
 *
 * @param config 接口配置相关，必选参数path，可选参数url,method,timeout，默认没有method则使用POST，
 * 没有url就从环境变时里读url,timeout默认30s超时
 * @param data 请求数据，json或者object
 * @returns {Promise}
 */
const fetchApi = (config, data) => {
  const { method, path, url, timeout } = config;
  const param = {};
  param.method = method || 'POST';
  param.body = data;
  param.timeout = timeout || 10;
  const host = url || baseUrl;
  return fetchUtil(host, path, param);
};

export default fetchApi;
