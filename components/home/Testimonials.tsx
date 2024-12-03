import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";
import Image from "next/image";
import Women from "../../assets/women.png";
import Men from "../../assets/men.png";

const Testimonials = () => {
  return (
    <div className="w-full h-full px-4 md:px-8 lg:px-16 py-10 my-6 bg-[#EAF3F8]">
      <div className="flex flex-col gap-8 p-4 md:p-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <div className="flex flex-col gap-1">
              <h1 className="text-xl md:text-3xl font-bold">
                What healthcare professionals
              </h1>
              <h1 className="text-xl md:text-3xl font-bold">
                are saying about instantvob!
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm md:text-base">
                We take care of our patients just like a family member.
              </p>
              <p className="text-sm md:text-base">
                Read the testimonials from our patients.
              </p>
            </div>
          </div>
          <div className="flex gap-4 md:gap-8">
            <MdKeyboardArrowLeft
              size={30}
              className="cursor-pointer bg-[#1799CE] text-white rounded-full"
            />
            <MdKeyboardArrowRight
              size={30}
              className="cursor-pointer bg-[#1799CE] text-white rounded-full"
            />
          </div>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 justify-between w-full">
          {/* Testimonial Card 1 */}
          <div className="bg-white p-6 md:p-8 flex flex-col gap-4 rounded-3xl">
            <RiDoubleQuotesL size={30} color="#25496B" />
            <p className="text-sm md:text-lg leading-6 md:leading-8">
              Instantvob has transformed our patient intake process. We can now
              verify benefits in seconds, saving us valuable time!
            </p>
            <div className="flex gap-4 items-center mt-4 md:mt-8">
              <Image
                src={Women}
                alt="testimonial1"
                className="rounded-full w-12 h-12 md:w-14 md:h-14"
              />
              <div className="flex flex-col gap-1">
                <p className="font-bold text-base md:text-lg">
                  Dr. Sara Thompson
                </p>
                <p className="text-sm md:text-base text-gray-500">
                  Family Medicine
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-white p-6 md:p-8 flex flex-col gap-4 rounded-3xl">
            <RiDoubleQuotesL size={30} color="#25496B" />
            <p className="text-sm md:text-lg leading-6 md:leading-8">
              The seamless integration with our existing systems made a huge
              difference. Instantvob is a game-changer for our admissions team!
            </p>
            <div className="flex gap-4 items-center mt-4 md:mt-8">
              <Image
                src={Men}
                alt="testimonial2"
                className="rounded-full w-12 h-12 md:w-14 md:h-14"
              />
              <div className="flex flex-col gap-1">
                <p className="font-bold text-base md:text-lg">James Parker</p>
                <p className="text-sm md:text-base text-gray-500">
                  Health Services Administrator
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Card 3 */}
          <div className="bg-white p-6 md:p-8 flex flex-col gap-4 rounded-3xl">
            <RiDoubleQuotesL size={30} color="#25496B" />
            <p className="text-sm md:text-lg leading-6 md:leading-8">
              Thanks to instantvob, our staff spends less time on paperwork and
              more time with patients. It’s truly made our workflow more
              efficient.
            </p>
            <div className="flex gap-4 items-center mt-4 md:mt-8">
              <Image
                src={Women}
                alt="testimonial3"
                className="rounded-full w-12 h-12 md:w-14 md:h-14"
              />
              <div className="flex flex-col gap-1">
                <p className="font-bold text-base md:text-lg">Linda Johnson</p>
                <p className="text-sm md:text-base text-gray-500">
                  Nurse Manager
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Card 4 */}
          <div className="bg-white p-6 md:p-8 flex flex-col gap-4 rounded-3xl">
            <RiDoubleQuotesL size={30} color="#25496B" />
            <p className="text-sm md:text-lg leading-6 md:leading-8">
              The WordPress plugin is incredibly user-friendly. Our patients
              love the easy online forms, and we appreciate the quick data flow!
            </p>
            <div className="flex gap-4 items-center mt-4 md:mt-8">
              <Image
                src={Men}
                alt="testimonial4"
                className="rounded-full w-12 h-12 md:w-14 md:h-14"
              />
              <div className="flex flex-col gap-1">
                <p className="font-bold text-base md:text-lg">Emily Roberts</p>
                <p className="text-sm md:text-base text-gray-500">
                  Practice Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
