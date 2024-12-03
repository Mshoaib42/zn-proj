import React from "react";

const Trail = () => {
  return (
    <div className="w-full h-full p-4 md:p-8 my-6 flex justify-center items-center">
      <div className="bg-[#1799CE] w-full md:w-[75%] lg:w-[50%] rounded-3xl flex flex-col justify-center items-center gap-6 md:gap-8 px-6 md:px-12 lg:px-16 py-6 md:py-8">
        {/* Heading */}
        <h1 className="text-white text-lg md:text-2xl font-bold text-center">
          Start Your Free One-Month Trial!
        </h1>

        {/* Description */}
        <div className="flex flex-col gap-2 md:gap-1 text-center">
          <p className="text-white text-sm md:text-lg">
            Eliminate the headaches of terminated coverage and denied claims.
          </p>
          <p className="text-white text-sm md:text-lg">
            Simplify admissions and boost timely reimbursements with accurate,
          </p>
          <p className="text-white text-sm md:text-lg">
            up-front insurance information provided by instantvob.
          </p>
        </div>

        {/* Button */}
        <button className="bg-white text-[#1799CE] font-bold text-sm md:text-base px-4 md:px-5 py-2 md:py-3 rounded-3xl hover:bg-gray-200 transition">
          Claim Your Free Month
        </button>
      </div>
    </div>
  );
};

export default Trail;
