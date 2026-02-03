

import axios,{ type AxiosInstance } from "axios";

console.log("MODE:", import.meta.env.MODE);
console.log("API:", import.meta.env.VITE_API_BASE_URL);
const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;