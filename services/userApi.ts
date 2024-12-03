import axios from "axios";
import { api } from "./interceptor";

// Get user
export const getUser = async () => {
  try {
    const response = await api.get("/api/user");
    return response;
  } catch (error) {
    return error;
  }
};

// Login
export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
      {
        email,
        password,
      }
    );
    return response; // Successful response
  } catch (error: any) {
    // Return error response with a standardized structure
    return error.response
      ? error.response
      : { message: "Unknown error occurred" };
  }
};

// Register
export const SignupByPaying = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout-session`,
      { name, email, password }
    );

    return response;
  } catch (error) {
    return error;
  }
};
