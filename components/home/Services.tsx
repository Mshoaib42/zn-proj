import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

// Define a type for the service colors
type ServiceColorMap = {
  [key: string]: string;
};

const Services = () => {
  const healthcareServices = [
    {
      category: "Allergy Testing & Treatment",
      services: [
        "Anesthesia Services",
        "ASC Facility",
        "Chiropractic Care",
        "Diagnostic Services",
        "Emergency Services",
        "Fertility Service",
      ],
    },
    {
      category: "General Practitioners",
      services: [
        "Home Health Care",
        "Hospice Care",
        "Immunization Treatment",
        "Maternity Care",
        "Mental Health Services",
        "Occupational Therapy",
      ],
    },
    {
      category: "Optometry (Vision)",
      services: [
        "Pharmacy Services",
        "Physical Therapy",
        "Podiatry",
        "Primary Care",
        "Psychotherapy",
        "Radiation Therapy",
      ],
    },
    {
      category: "Routine Physicals",
      services: [
        "Skilled Nursing Facility",
        "Specialist Services",
        "Substance Abuse Treatment",
        "Telemedicine Services",
        "Urgent Care",
        "X-Ray Services",
      ],
    },
  ];

  // Define the serviceColors object with the type
  const serviceColors: ServiceColorMap = {
    "Anesthesia Services": "#1799CE",
    "ASC Facility": "#1799CE",
    "Chiropractic Care": "#1799CE",
    "Home Health Care": "#1799CE",
    "Emergency Services": "#1799CE",
    "Pharmacy Services": "#1799CE",
    "Mental Health Services": "#1799CE",
    "Physical Therapy": "#1799CE",
    "Substance Abuse Treatment": "#1799CE",
  };

  return (
    <div className="w-full lg:px-20 md:px-16 px-6 p-4">
      <button className="bg-white text-[#1799CE] lg:p-3 md:p-2 p-2 rounded-lg lg:text-xl md:text-lg text-base flex items-center justify-center border shadow-sm">
        The Best Services Plan
      </button>
      <h1 className="lg:text-4xl md:text-2xl text-xl font-bold my-6">
        Built for the Unique Needs of Healthcare Professionals.
      </h1>
      <p className="lg:text-xl md:text-lg text-base text-gray-500">
        Our platform is tailored to serve professionals across the entire
        healthcare spectrum. We recognize that each specialty faces distinct
        administrative challenges, which is why instantvob is crafted to
        simplify workflows so that providers can focus on what they do
        best—providing patient care.
      </p>
      <div className="overflow-x-auto bg-white border border-gray-200 my-4 rounded-3xl">
        <table className="min-w-full ">
          <tbody>
            {healthcareServices.map((item, index) => (
              <tr
                key={index + 1}
                className={`text-center ${
                  index % 2 === 0 ? "bg-[#F5F6FA]" : "bg-white"
                } font-semibold`}
              >
                <td className="lg:p-5 p-2 border-b">{item.category}</td>
                {item.services.map((service, i) => (
                  <td
                    key={i + 1}
                    className="p-4 border-b"
                    style={{ color: serviceColors[service] || "text-gray-700" }} // Apply specific color if defined, else use black
                  >
                    {service}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center gap-4 my-4">
        <Link
          href="/signup"
          className="border-primary border text-primary text-sm md:text-lg lg:text-xl p-2 md:p-3 rounded-lg  flex items-center justify-center"
        >
          See Pricing Plan <MdArrowOutward size={30} className="ml-2" />
        </Link>
        <Link
          href="/signup"
          className="bg-primary  text-white text-sm md:text-lg lg:text-xl p-2 md:p-3 rounded-lg hover:bg-primary/80 flex items-center justify-center"
        >
          Start Free Trial
          <MdArrowOutward size={30} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default Services;
