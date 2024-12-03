"use client";

import Bio from "../../assets/nurse.png";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const Availability = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#F1F8FF] my-10 ">
      <div className="col-span-1"></div>
      <div className="col-span-5 flex flex-col items-start gap-1 rounded-r-lg lg:px-16 md:px-12 px-8 py-10  ml-[-10] justify-center">
        <div className="flex justify-start ">
          <button className="bg-white  border-[#1799CE] text-[#1799CE] p-1 rounded-lg hover:scale-105 duration-300 ease-in-out text-sm font-medium shadow-sm border">
            The Best Availability
          </button>
        </div>
        <h1 className="lg:text-4xl md:text-3xl text-xl font-bold text-black w-full leading-10 my-6">
          Access Benefits Data 24/7
        </h1>

        <p className="lg:text-lg md:text-base text-base font-medium leading-10 mb-10">
          Healthcare never sleeps, and neither does instantvob. Our cloud-based
          solution offers 24/7 access, allowing admissions teams and providers
          to verify benefits after hours and on weekends for urgent cases.7
        </p>

        <Link
          href="/request"
          className="bg-[#1799CE] text-white text-sm md:text-lg lg:text-xl p-2 md:p-3 rounded-lg hover:bg-primary/80 flex items-center justify-center"
        >
          Get 24/7 Access Now
          <MdArrowOutward size={30} className="ml-2" />
        </Link>
      </div>
      <div className="col-span-6 rounded-l-lg h-full relative text-white flex justify-start items-center">
        <div className="w-full h-full flex justify-center items-center">
          <Image
            src={Bio}
            alt="Doctor"
            className=" rounded-3xl w-auto h-[60vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default Availability;
