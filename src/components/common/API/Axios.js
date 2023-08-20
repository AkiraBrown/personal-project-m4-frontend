import axios from "axios";

const AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3003"
      : "https://m4personalproject-ab.onrender.com",
  timeout: 50000,
});

export default AxiosInstance;
