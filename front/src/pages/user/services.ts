import { get, post } from "@/request";

export const getList = (data) => {
  return post("/proxy/user/list", data);
};

export const add = (data) => {
  return post("/proxy/user/add", data);
};

export const update = (data) => {
  return post("/proxy/user/update", data);
};

export const remove = (id) => {
  return get(`/proxy/user/delete?id=${id}`);
};
