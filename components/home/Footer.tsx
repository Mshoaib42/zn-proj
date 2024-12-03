import Image from "next/image";
import React from "react";
import logo from "@/assets/wtsp logo.png";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiLogoInstagramAlt, BiPhone } from "react-icons/bi";
import { IoMapOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-8 bg-[#1799CE] px-4 md:px-8 lg:px-16 text-white">
      <div className="w-full flex flex-col items-center gap-6 px-4 md:px-8">
        {/* Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20 pb-8 border-b border-gray-400 w-full">
          {/* Logo and Social Links */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <Image src={logo} alt="logo" width={40} height={40} />
              <span className="text-2xl md:text-3xl font-bold">VOB ICU</span>
            </div>
            <div className="my-2 text-sm md:text-base">
              <p>Lorem, ipsum dolor sit amet,</p>
              <p>consectetur adipiscing elit.</p>
            </div>
            <div className="flex gap-4">
              <FaFacebook size={20} />
              <FaTwitter size={20} />
              <FaLinkedin size={20} />
              <BiLogoInstagramAlt size={20} />
            </div>
          </div>

          {/* Helpful Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg md:text-xl font-bold pb-2 border-b-2 border-blue-600 w-36">
              Helpful Links
            </h4>
            <ul className="flex flex-col gap-2 text-sm md:text-base">
              <li>About us</li>
              <li>Pricing</li>
              <li>Resources</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg md:text-xl font-bold pb-2 border-b-2 border-blue-700 w-36">
              Support
            </h4>
            <ul className="flex flex-col gap-2 text-sm md:text-base">
              <li>Privacy Policy</li>
              <li>Support</li>
              <li>FAQ</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg md:text-xl font-bold pb-2 border-b-2 border-blue-700 w-36">
              Contact Us
            </h4>
            <div className="flex flex-col gap-2 text-sm md:text-base">
              {/* Email Input */}
              <div className="flex gap-2  justify-center items-center relative">
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  className="w-full p-3 rounded-md border border-gray-300 text-black"
                />
                <button className="bg-primary text-white p-2 rounded-lg hover:bg-primary/80 text-sm md:text-base absolute right-2 top-2">
                  Subscribe
                </button>
              </div>
              {/* Address */}
              <div className="flex gap-2 items-center">
                <IoMapOutline size={20} />
                <div className="flex flex-col">
                  <p>1630 South Congress Ave. Suite 102</p>
                  <p>Palm Springs, FL 33461</p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex gap-2 items-center">
                <BiPhone size={20} />
                <span>(561) 530-5755</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full text-xs md:text-sm">
          <p>Vob.icu</p>
          <p>© 2024 VOB ICU®, LLC | All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
