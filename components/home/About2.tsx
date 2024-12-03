"use client";

import Bio from "../../assets/doctor.png";
import Image from "next/image";
import Link from "next/link";
import { IoIosCheckmarkCircle } from "react-icons/io";

const About2 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 p-4 lg:px-14 md:px-8 px-2">
      <div className="col-span-3 rounded-l-lg px-6 h-full relative text-white flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-centera">
          <Image
            src={Bio}
            alt="Doctor"
            className=" rounded-3xl w-auto h-[70vh]"
          />
        </div>
      </div>
      <div className="col-span-3 flex flex-col items-start gap-1 rounded-r-lg p-6 lg:p-10">
        <div className="flex justify-start">
          <button className="bg-white text-[#1799CE] p-1 rounded-lg hover:scale-105 duration-300 ease-in-out text-sm font-medium shadow-sm border">
            More About us
          </button>
        </div>
        <h1 className="lg:text-4xl md:text-3xl text-xl font-bold text-black mt-4 w-full">
          No More Waiting on Hold. instantvob® Gives You Instant Access
          Anywhere.
        </h1>

        <p className="lg:text-lg md:text-base text-base font-medium text-[#1799CE] my-4">
          Immediate Insurance Benefit Verification at Your Fingertips.
        </p>
        <p className="lg:text-lg md:text-base text-base font-medium text-gray-500 w-full">
          Submit the patient’s basic information and receive instant
          verification of benefits (VOB) data, including:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-6">
          <div className="flex items-center gap-1">
            <IoIosCheckmarkCircle size={20} className="text-[#1799CE]" />
            <span className="lg:text-xl md:text-lg text-base font-semibold">
              Active policy status
            </span>
          </div>
          <div className="flex items-center gap-1">
            <IoIosCheckmarkCircle size={20} className="text-[#1799CE]" />
            <span className="lg:text-xl md:text-lg text-base font-semibold">
              Remaining deductible amount
            </span>
          </div>
          <div className="flex items-center gap-1">
            <IoIosCheckmarkCircle size={20} className="text-[#1799CE]" />
            <span className="lg:text-xl md:text-lg text-base font-semibold">
              Specialty coverage details
            </span>
          </div>
          <div className="flex items-center gap-1">
            <IoIosCheckmarkCircle size={20} className="text-[#1799CE]" />
            <span className="lg:text-xl md:text-lg text-base font-semibold">
              Remaining out-of-pocket limit
            </span>
          </div>
          <div className="flex items-center gap-1">
            <IoIosCheckmarkCircle size={20} className="text-[#1799CE]" />
            <span className="lg:text-xl md:text-lg text-base font-semibold">
              Patient demographics
            </span>
          </div>
          <div className="flex items-center gap-1">
            <IoIosCheckmarkCircle size={20} className="text-[#1799CE]" />
            <span className="lg:text-xl md:text-lg text-base font-semibold">
              Co-pay and co-insurance info...
            </span>
          </div>
        </div>
        <Link
          href="/request"
          className="bg-[#1799CE] text-white text-sm md:text-lg lg:text-xl p-2 md:p-3 rounded-lg hover:bg-primary/80 flex items-center justify-center"
        >
          Start Instant Verification
        </Link>
      </div>
    </div>
  );
};

export default About2;
