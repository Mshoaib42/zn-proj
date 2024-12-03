"use client";

import Bio from "../assets/bio.png";
import Image from "next/image";
import { IoCallSharp } from "react-icons/io5";
import {
  BiLeftArrowAlt,
  BiRightArrowAlt,
  BiSolidFilePdf,
} from "react-icons/bi";
import Logo from "../assets/wtsp logo.png";
import { RiShareForwardBoxFill } from "react-icons/ri";
import { SiApplemusic } from "react-icons/si";
import Link from "next/link";
import withAuth from "@/lib/withAuth";

const Result = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 min-h-screen">
      {/* Left Section */}
      <div className="col-span-1 md:col-span-4 relative text-white flex items-center justify-center p-6 bg-gradient-to-r from-[#2683a8] to-[#1799CE]">
        <Image
          src={Bio}
          alt="Results"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg opacity-50"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#2683a8] opacity-60 rounded-lg"></div>
        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-end mb-6">
            <IoCallSharp size={20} />
            <span className="ml-2 text-sm md:text-lg">+94 11016 789 754</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Your VOB Results Are Ready
          </h1>
          <p className="text-sm md:text-lg mb-6">
            View, listen, and download your verified VOB results. You can also
            forward them via email or request prior authorizations with a single
            click.
          </p>
          <div className="flex gap-6 justify-center">
            <Link
              href="/request"
              className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-white rounded-full"
            >
              <BiLeftArrowAlt size={24} />
            </Link>
            <Link
              href="/vobicu"
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
        <h2 className="text-xl md:text-3xl font-bold mb-4">
          VOB Results Are Ready!
        </h2>
        <p className="text-sm md:text-lg text-gray-500 mb-6 text-center">
          View, listen, and download your verified VOB results. You can also
          forward them via email or request prior authorizations with a single
          click.
        </p>
        <div className="w-full max-w-md space-y-6">
          {/* PDF Download */}
          <div className="flex flex-col">
            <label className="text-sm md:text-lg font-medium mb-2">
              Download PDF
            </label>
            <button className="w-full bg-[#1799CE] text-white py-2 rounded-xl flex justify-center items-center gap-2 hover:bg-primary/80">
              PDF Download
              <BiSolidFilePdf size={20} />
            </button>
          </div>

          {/* MP3 Download */}
          <div className="flex flex-col">
            <label className="text-sm md:text-lg font-medium mb-2">
              Download Audio (MP3)
            </label>
            <button className="w-full bg-[#1799CE] text-white py-2 rounded-xl flex justify-center items-center gap-2 hover:bg-primary/80">
              MP3 Download
              <SiApplemusic size={20} />
            </button>
          </div>

          {/* Share Input */}
          <div className="flex flex-col">
            <label className="text-sm md:text-lg font-medium mb-2">
              Share:
            </label>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="flex-1 p-2 border rounded-lg"
              />
              <button className="bg-[#1799CE] text-white py-2 px-4 rounded-lg hover:bg-primary/80">
                <RiShareForwardBoxFill size={20} />
              </button>
            </div>
          </div>

          {/* Continue Button */}
          <button className="w-full bg-[#1799CE] text-white py-2 rounded-xl hover:bg-primary/80">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Result);
