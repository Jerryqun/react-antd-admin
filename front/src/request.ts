import { notification } from "antd";
import axios, { AxiosResponse } from "axios";
const api = 'http://121.4.49.147:9000'
const client = axios.create({
  // baseURL:  
});
interface HttpParams {
  url: string;
  token?: string;
  baseUrl?: string;
  data?: any;
  fullpath?: boolean;
  method?:
    | "post"
    | "get"
    | "GET"
    | "delete"
    | "DELETE"
    | "head"
    | "HEAD"
    | "options"
    | "OPTIONS"
    | "POST"
    | "put"
    | "PUT"
    | "patch"
    | "PATCH"
    | "purge"
    | "PURGE"
    | "link"
    | "LINK"
    | "unlink"
    | "UNLINK"
    | undefined;
}
// 添加请求拦截器

client.interceptors.request.use(
  function (config) {
    config.headers = {
      //请求头数据
      ...config.headers,
    };
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
client.interceptors.response.use(
  function ({ config, ...response }) {
      return {
        status: response.status,
        statusText: '200',
        headers:{},
        config:{},
        ...response.data
      }
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export function http({ url, data = {}, method = "get" }: HttpParams): any {
  return new Promise((resolve, reject) => {
    let params = {};
    if (data?.params) {
      params =
        method === "get" && Object.keys(data.params).length ? data.params : {};
    }
    client({
      method,
      url,
      data,
      params,
      withCredentials: true,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(`请求异常：${error.msg}`);

        notification.error({
          message: "提示",
          description: `请求异常：${error.msg || "网络错误"}`,
        });
        throw error.msg;
      });
  });
}

export function get(url: string, data?: any) {
  return http({ url, data, method: "get" });
}

export function post(url: string, data?: any) {
  return http({ url, data, method: "post" });
}
