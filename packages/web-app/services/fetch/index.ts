import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const service = axios.create({
  baseURL: process.env.API_URL,
  timeout: 60000
});

service.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response.data;
  },
  async (error: AxiosError) => {
    return Promise.reject(error);
  }
);

service.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    Promise.reject(error);
  }
);

export default service;
