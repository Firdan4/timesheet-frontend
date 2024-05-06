import axios from "axios";

export const API = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API,
  headers: {
    "Content-Type": "application/json",
  },
});
