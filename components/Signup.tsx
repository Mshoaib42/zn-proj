"use client";

import React, { useLayoutEffect, useState } from "react";
import Doctor from "../assets/doctor.png";
import Image from "next/image";
import { IoCallSharp } from "react-icons/io5";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Logo from "../assets/wtsp logo.png";
import { CgProfile } from "react-icons/cg";
import { FaCheckCircle, FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";
import Cookies from "js-cookie";
import { SignupByPaying } from "@/services/userApi";
import { toast } from "sonner";

interface SignupResponse {
  status: number;
  response: {
    data: {
      message: string;
    };
  };
  data: {
    url: string;
  };
}
const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    const token = Cookies.get("accessToken");
    if (token) {
      window.location.href = "/";
    }
  }, []);

  const handleSignup = async () => {
    try {
      setLoading(true);
      if (email === "" || password === "" || name === "") {
        toast.error("Please fill all the fields");
        setLoading(false);
        return;
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const response = (await SignupByPaying(
        name,
        email,
        password
      )) as SignupResponse;
      if (response.status !== 200) {
        toast.error(response.response.data.message);
        setLoading(false);
        return;
      }
      if (response.status === 200) {
        toast.success("Signup successful");
        window.location.href = response.data.url;
      } else {
        toast.error("Signup failed");
        setLoading(false);
        return;
      }
    } catch (err) {
      // disable-next-line @typescript-eslint/no-unsafe-argument
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      console.log(err);
      toast.error("Error while getting login URL");
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
            SUBMIT YOUR VOB REQUEST
          </h1>
          <p className="text-sm md:text-lg mb-6">
            This version highlights the key action and purpose, making it
            visually impactful with large, bold text.
          </p>
          <div className="flex gap-6 justify-center">
            <Link
              href="/login"
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
        <h2 className="text-xl md:text-3xl font-bold mb-4">Sign up</h2>
        <p className="text-sm text-center md:text-lg text-gray-500 mb-6">
          Welcome! Join VOB and create your account for just $10.
          <br />
          Enjoy secure payments through <br />
          Stripe and start accessing seamless benefits verification today.
        </p>
        <form className="w-full max-w-md space-y-6">
          {/* Name Input */}
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded-md"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <CgProfile className="absolute top-10 right-3 text-gray-500" />
          </div>

          {/* Email Input */}
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaRegEyeSlash
              className="absolute top-10 right-3 text-gray-500 cursor-pointer"
              onClick={handlePasswordVisibility}
            />
          </div>

          {/* Stripe Payment */}
          <div className="relative">
            <label
              htmlFor="stripePayment"
              className="block text-sm font-medium"
            >
              Stripe Payment
            </label>
            <button
              type="button"
              className="w-full flex items-center justify-between p-3 border-2 border-[#1799CE] rounded-xl"
            >
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#1799CE]" />
                Pay & Create Account
              </div>
              <span className="text-lg font-bold text-[#1799CE]">$10</span>
            </button>
          </div>

          <button
            type="button"
            onClick={handleSignup}
            className="w-full bg-[#1799CE] text-white py-2 rounded-xl hover:bg-primary/80"
            disabled={loading}
          >
            {loading ? "Processing..." : "Pay $10 & Create Account"}
          </button>
        </form>
        <Link
          href="/pricing"
          className="text-sm text-[#1799CE] mt-4 hover:underline"
        >
          See Pricing Plan
        </Link>
      </div>
    </div>
  );
};

export default Signup;
