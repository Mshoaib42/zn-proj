"use client";
import React from "react";
import Navbar from "./Navbar";
import Bio from "../../assets/lady.png";
import Laptop from "../../assets/laptop.png";
import Image from "next/image";
import { MdWavingHand } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";
import { FaComputer } from "react-icons/fa6";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full bg-[#F2F7FF] py-4 px-4 md:px-8 lg:px-16">
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 p-4 lg:px-14 md:px-8 px-2 my-10">
        {/* Left Section */}
        <div className="col-span-3 flex flex-col items-start gap-4 lg:gap-1 rounded-r-lg p-4 md:p-10">
          <div className="flex justify-start">
            <button className="bg-white text-[#1799CE] p-2 rounded-sm font-semibold hover:scale-105 duration-300 ease-in-out text-xs md:text-sm shadow-sm border flex items-center">
              <MdWavingHand size={16} className="mr-2 text-[#FFDC5D]" />
              Hey! We Are Vob.icu
            </button>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-black mt-6 w-full">
            Streamline Intake with Fast, Accurate Benefit Verification.
          </h1>
          <p className="text-sm md:text-lg lg:text-2xl font-medium text-gray-500 w-full my-4 md:my-6">
            Our software makes the complicated process of confirming patient
            benefits easier than ever.
          </p>
          <Link
            href="/request"
            className="bg-[#1799CE] text-white text-sm md:text-lg lg:text-xl p-2 md:p-3 rounded-lg hover:bg-primary/80 flex items-center justify-center"
          >
            Request Free Demo
          </Link>
        </div>

        {/* Right Section */}
        <div className="col-span-3 rounded-l-lg px-4 md:px-6 h-full relative text-white flex justify-center items-center">
          <div className="w-full h-full flex justify-center items-center">
            <Image
              src={Bio}
              alt="Doctor"
              className="rounded-3xl w-auto h-[40vh] md:h-[57vh]"
            />
          </div>
          <div className="hidden lg:flex justify-center items-center absolute bottom-6 left-[-3%]">
            <Image
              src={Laptop}
              alt="Doctor"
              className="rounded-3xl w-full h-full"
            />
          </div>

          {/* Availability Time */}
          <div className="h-16 w-auto bg-white rounded-xl flex justify-center gap-2 items-center absolute top-8 left-4 md:left-16 p-4 md:p-8">
            <Ri24HoursFill size={24} className="mr-2 text-[#1799CE]" />
            <div className="flex flex-col">
              <span className="text-black text-sm md:text-base font-bold">
                Availability Time
              </span>
              <span className="text-gray-500 text-xs md:text-sm font-semibold">
                24/7
              </span>
            </div>
          </div>

          {/* Integration */}
          <div className="h-16 w-auto bg-white rounded-xl flex justify-center gap-2 items-center absolute bottom-8 right-4 md:right-16 p-4 md:p-8">
            <FaComputer size={24} className="mr-2 text-[#1799CE]" />
            <div className="flex flex-col">
              <span className="text-black text-sm md:text-base font-bold">
                Integration
              </span>
              <span className="text-gray-500 text-xs md:text-sm font-semibold">
                Multiple devices
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
