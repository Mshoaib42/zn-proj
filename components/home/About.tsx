"use client";

import Bio from "../../assets/highTech.png";
import Image from "next/image";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 p-4 lg:px-14 md:px-8 px-2">
      <div className="col-span-3 flex flex-col items-start gap-1 rounded-r-lg p-10">
        <div className="flex justify-start">
          <button className="bg-white text-[#1799CE] p-1 rounded-lg hover:scale-105 duration-300 ease-in-out text-sm font-medium shadow-sm border">
            More About us
          </button>
        </div>
        <h1 className="lg:text-4xl md:text-3xl text-xl font-bold text-black mt-4 w-full">
          Integrate Seamlessly with Your Existing Systems
        </h1>

        <p className="lg:text-lg md:text-base text-base font-medium text-[#1799CE] my-4">
          Streamline Your Workflow with instantvob.
        </p>
        <p className="lg:text-lg md:text-base text-base font-medium text-gray-500 w-full">
          Instantvob easily integrates with your current software for a smooth
          experience. You have the flexibility to embed instantvob data into
          your workflow, eliminating the hassle of switching between different
          portals
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-6">
          <div className="flex items-center gap-1">
            <IoIosCheckmarkCircle size={20} className="text-[#1799CE]" />
            <span className="lg:text-xl md:text-lg text-base font-semibold">
              Seamless Integration
            </span>
          </div>
          <div className="flex items-center gap-1">
            <IoIosCheckmarkCircle size={20} className="text-[#1799CE]" />
            <span className="lg:text-xl md:text-lg text-base font-semibold">
              Flexible Embedding
            </span>
          </div>
          <div className="flex items-center gap-1">
            <IoIosCheckmarkCircle size={20} className="text-[#1799CE]" />
            <span className="lg:text-xl md:text-lg text-base font-semibold">
              Direct Data Flow
            </span>
          </div>
          <div className="flex items-center gap-1">
            <IoIosCheckmarkCircle size={20} className="text-[#1799CE]" />
            <span className="lg:text-xl md:text-lg text-base font-semibold">
              Simplified Patient Intake
            </span>
          </div>
          <div className="flex items-center gap-1">
            <IoIosCheckmarkCircle size={20} className="text-[#1799CE]" />
            <span className="lg:text-xl md:text-lg text-base font-semibold">
              Efficiency Gains
            </span>
          </div>
          <div className="flex items-center gap-1">
            <IoIosCheckmarkCircle size={20} className="text-[#1799CE]" />
            <span className="lg:text-xl md:text-lg text-base font-semibold">
              Streamlined Integration
            </span>
          </div>
        </div>
        <button className="bg-[#1799CE] text-white lg:p-3 md:p-2 p-2 rounded-lg hover:bg-primary/80 lg:text-xl md:text-lg text-base flex items-center justify-center">
          Explore Integration Options
          <MdArrowOutward size={30} className="ml-2" />
        </button>
      </div>
      <div className="col-span-3 rounded-l-lg px-6 h-full relative text-white flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center">
          <Image
            src={Bio}
            alt="Doctor"
            className=" rounded-3xl w-auto h-[70vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
