import { get, post } from "@/request";

export const getList = (data) => {
  return get("/resource/list", {
    params: data,
  });
};
export const add = (data) => {
  return post("/resource/add", data);
};
export const del = (data) => {
  return get("/resource/del", {
    params: data,
  });
};
