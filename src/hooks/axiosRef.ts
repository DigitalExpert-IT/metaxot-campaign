import axios from "axios";
import Cookies from "js-cookie";

interface IError {
  status: string;
  message: string;
}

const axiosRef = axios.create({
  baseURL: import.meta.env.VITE_METAXOT_API,
  timeout: 5000,
});

axiosRef.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject<IError>({
        status: error.response.data.status,
        message: error.response.data.result?.message,
      });
    }

    return Promise.reject(error);
  }
);

axiosRef.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.code === "ERR_NETWORK" || error?.code === "ECONNABORTED") {
      return Promise.reject<IError>({
        status: "time_out",
        message: "Error timeout",
      });
    }

    if (error.response && error.response.status === 401) {
      Cookies.remove("token");
      localStorage.removeItem("userData");
      window.location.replace("/login");
    }

    if (
      error.response &&
      error.response.data?.result?.name === "FirebaseError"
    ) {
      return Promise.reject<IError>({
        status: error.response.data?.result?.code,
        message: error.response.data?.result?.code,
      });
    }

    if (error.response && error.response.data) {
      return Promise.reject<IError>({
        status: error.response.data.result?.title,
        message: error.response.data.result?.message,
      });
    }

    return Promise.reject(error);
  }
);

export default axiosRef;
