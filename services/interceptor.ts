import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { toast } from "sonner";

// Create Axios instance
// baseURL: import.meta.env.VITE_API_HOST, // Environment variable for the base URL
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Environment variable for the base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to automatically add the token to each request
api.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("accessToken"); // Retrieve the token from cookies

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`; // Add the token to the headers
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Error handler for all APIs
const errorHandler = (error: AxiosError<unknown>) => {
  const statusCode = error.response?.status;

  // Handle cancelled API requests
  if (error.code === "ERR_CANCELED") {
    console.error("API canceled!");
    return Promise.resolve();
  }

  // Log other errors except 401 (authentication issues)
  if (statusCode && statusCode !== 401) {
    if (statusCode == 403) {
      toast.error("User has insufficient permissions to access this resource");
      return "User has insufficient privileges";
    }
    console.error(error?.response?.data || "An error occurred");
    toast.error(error?.response?.data as string);
    return error?.response?.data;
  }

  return Promise.reject(error?.response?.data || "An error occurred");
};

// Response interceptor to handle API errors
api.interceptors.response.use(
  (response) => response, // Return the response if no error
  (error) => {
    const statusCode = error.response?.status;
    if (statusCode == 401) {
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");

      window.location.href = `/login`;
    } else {
      errorHandler(error);
    }

    if (statusCode == 403) {
      toast.error("User has insufficient privileges");
      return "User has insufficient privileges";
    }
    return Promise.reject(error);
  } // Handle errors using the error handler
);

export default api;
