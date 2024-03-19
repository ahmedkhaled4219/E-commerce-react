import { axiosInstance } from "./config";

export const getProducts = (params, headers) => {
  return axiosInstance.get("/products", { params, headers });
};
