import { get, post } from "@/request";

export const login = (data) => {
  return post("/auth/login", data);
};
