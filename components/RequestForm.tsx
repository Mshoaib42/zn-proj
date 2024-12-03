"use client";
import Tech from "../assets/tech.png";
import Image from "next/image";
import { IoCallSharp } from "react-icons/io5";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Logo from "../assets/wtsp logo.png";
import Link from "next/link";
import { useState } from "react";
import { createVobForm } from "@/services/vobFormApi";
import { toast } from "sonner";
interface VobFormResponse {
  status: number;
  data: {
    message: string;
  };
}
const RequestForm = () => {
  const [npi, setNpi] = useState<string>("");
  const [patientId, setPatientId] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [patientName, setPatientName] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async () => {
    if (!npi || !patientId || !dob || !patientName) {
      toast.error("Please fill all the fields");
      return;
    }
    setLoading(true);
    try {
      const response = (await createVobForm({
        patientName,
        npiNumber: npi,
        dateOfBirth: new Date(dob),
        requestDate: new Date(),
        resultStatus: "Pending",
        coverageType: "Medicare",
        requestedBy: "Patient",
        insuranceCarrier: "Medicare",
        pdfLink: "",
        audioLink: "",
      })) as VobFormResponse;
      if (response.status !== 201) {
        toast.error(response.data.message);
        return;
      }
      toast.success(response.data.message);
      setNpi("");
      setPatientId("");
      setDob("");
      setPatientName("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 min-h-screen">
      {/* Left Section */}
      <div className="col-span-1 md:col-span-4 relative text-white flex items-center justify-center p-6 bg-gradient-to-r from-[#2683a8] to-[#1799CE]">
        <Image
          src={Tech}
          alt="Tech Background"
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
              href="/vobicu"
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
          VOB Request Form!
        </h2>
        <p className="text-sm md:text-lg text-gray-500 mb-6 text-center">
          Please fill out the VOB request form with patient details to verify
          benefits quickly and efficiently.
        </p>
        <div className="w-full max-w-md space-y-6">
          {/* NPI Number Input */}
          <div className="flex flex-col">
            <label
              htmlFor="npi"
              className="text-sm md:text-lg font-medium mb-2"
            >
              NPI Number
            </label>
            <input
              type="text"
              id="npi"
              className="w-full p-2 border rounded-md"
              placeholder="Enter NPI Number"
              value={npi}
              onChange={(e) => setNpi(e.target.value)}
            />
          </div>

          {/* Patient ID Input */}
          <div className="flex flex-col">
            <label
              htmlFor="patientId"
              className="text-sm md:text-lg font-medium mb-2"
            >
              Patient ID
            </label>
            <input
              type="text"
              id="patientId"
              className="w-full p-2 border rounded-md"
              placeholder="Enter Patient ID"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
            />
          </div>

          {/* Patient DOB Input */}
          <div className="flex flex-col">
            <label
              htmlFor="dob"
              className="text-sm md:text-lg font-medium mb-2"
            >
              Patient Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              className="w-full p-2 border rounded-md"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          {/* Patient Name Input */}
          <div className="flex flex-col">
            <label
              htmlFor="patientName"
              className="text-sm md:text-lg font-medium mb-2"
            >
              Patient Name
            </label>
            <input
              type="text"
              id="patientName"
              className="w-full p-2 border rounded-md"
              placeholder="Enter Patient Name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
          </div>

          {/* Continue Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-[#1799CE] text-white py-2 rounded-xl hover:bg-primary/80"
            disabled={loading}
          >
            {loading ? "Processing..." : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
