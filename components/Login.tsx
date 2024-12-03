"use client";

import React, { useLayoutEffect, useState } from "react";
import Doctor from "../assets/doctor.png";
import Image from "next/image";
import { IoCallSharp } from "react-icons/io5";
import {
  BiLeftArrowAlt,
  // BiLogoInstagramAlt,
  BiRightArrowAlt,
} from "react-icons/bi";
import Logo from "../assets/wtsp logo.png";
import {
  FaFacebook,
  FaLinkedin,
  FaRegEyeSlash,
  FaTwitter,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { login } from "@/services/userApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import useUserStore from "@/store/UserAuth";

interface LoginResponse {
  status: number;
  data: {
    id: string;
    email: string;
    token: string;
    name: string;
    isSubscribed: boolean;
  };
}
interface UserProfile {
  id: string;
  email: string;
  token: string;
  name: string;
  isSubscribed: boolean;
}
const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useRouter();

  useLayoutEffect(() => {
    const token = Cookies.get("accessToken");
    if (token) {
      window.location.href = "/";
    }
  }, [navigate]);

  const handleLogin = async () => {
    try {
      setLoading(true);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const response: LoginResponse = await login(email, password);
      if (response.status !== 200) {
        toast.error("Login failed");
        setLoading(false);
        return;
      }
      if (response.status === 200) {
        Cookies.set("accessToken", response.data.token, {
          secure: true,
          sameSite: "Strict",
        });
        toast.success("Login successful");
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const userRes: UserProfile = {
          id: response.data.id,
          email: response.data.email,
          token: response.data.token,
          name: response.data.name,
          isSubscribed: response.data.isSubscribed,
        };
        setUser(userRes);

        navigate.push("/vobicu/inbox");
      } else {
        toast.error("Login failed");
        setLoading(false);
        return;
      }
    } catch (err: unknown) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 min-h-screen">
      {/* Left Section */}
      <div className="col-span-1 md:col-span-4 relative text-white flex items-center justify-center p-6 bg-gradient-to-r from-[#2683a8] to-[#1799CE]">
        <Image
          src={Doctor}
          alt="Doctor"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg opacity-50"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#2683a8] opacity-60 rounded-lg"></div>
        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-end mb-6">
            <IoCallSharp size={20} />
            <span className="ml-2 text-sm md:text-lg">+94 11016 789 754</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Welcome to VOB ICU
          </h1>
          <p className="text-sm md:text-lg mb-6">
            Log in to submit VOB requests, view results in PDF or audio, and
            manage prior authorizations securely with Stripe integration.
          </p>
          <div className="flex gap-6 justify-center">
            <Link
              href="/signup"
              className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-white rounded-full"
            >
              <BiLeftArrowAlt size={24} />
            </Link>
            <Link
              href="/signup"
              className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-white rounded-full"
            >
              <BiRightArrowAlt size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="col-span-1 md:col-span-4 flex flex-col items-center justify-center p-6 bg-white rounded-lg">
        <div className="flex items-center gap-4 mb-6">
          <Image src={Logo} alt="Logo" className="w-10" />
          <span className="text-2xl font-bold text-[#1799CE]">VOB ICU</span>
        </div>
        <h2 className="text-xl md:text-3xl font-bold mb-4">Sign in</h2>
        <p className="text-sm md:text-lg text-gray-500 mb-6">
          If you don’t have an account,{" "}
          <Link href="/signup" className="text-[#1799CE]">
            Register here!
          </Link>
        </p>
        <form className="w-full max-w-md space-y-6">
          {/* Email Input */}
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <AiOutlineMail className="absolute top-10 right-3 text-gray-500" />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaRegEyeSlash
              className="absolute top-10 right-3 text-gray-500 cursor-pointer"
              onClick={handlePasswordVisibility}
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm font-medium">Remember me</span>
            </label>
            <button
              type="button"
              className="text-sm font-medium text-[#1799CE]"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-[#1799CE] text-white py-2 rounded-xl hover:bg-primary/80"
            disabled={loading}
          >
            {loading ? "Processing..." : "Login"}
          </button>
        </form>

        {/* Social Media */}
        <div className="mt-6 flex items-center justify-center gap-6">
          <div className="w-20 h-[1px] bg-gray-300"></div>
          <span className="text-sm text-gray-500">or continue with</span>
          <div className="w-20 h-[1px] bg-gray-300"></div>
        </div>
        <div className="mt-4 flex items-center justify-center gap-4">
          <FaFacebook className="text-primary" />
          <FaTwitter className="text-primary" />
          <FaLinkedin className="text-primary" />
          {/* <FaInstagram className="text-pink-500" /> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
