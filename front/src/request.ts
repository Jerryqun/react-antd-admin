import { getLocalStore, unsetLocalStore } from "./utils/index";
import { message, notification } from "antd";
import axios from "axios";
const baseURL = "http://1.15.184.206:9003";
const client = axios.create({
  baseURL,
  withCredentials: false,
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
      "jwt-token": getLocalStore("jwt-token"),
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
    if (response.data.code !== 200) {
      message.error(response.data.msg);
    }
    if (response.data.code === 40000) {
      unsetLocalStore("jwt-token");
      location.href = `${origin}/${location.pathname}#/login`;
    }
    return {
      data: {},
      status: response.status,
      ...response.data,
    };
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export function http({
  url,
  data = {},
  method = "get",
}: HttpParams): Promise<any> {
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
