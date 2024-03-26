import axios, { AxiosInstance } from "axios";

const axiosClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL_PRODUCTION,
});

export default axiosClient;
