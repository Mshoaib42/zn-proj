"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import Logo from "../../assets/wtsp logo.png";
import { useState } from "react";
import { toast } from "sonner";
import { createVobForm } from "@/services/vobFormApi";
interface VobFormResponse {
  status: number;
  data: {
    message: string;
  };
}
const RequestDialog = ({
  isDialogOpen,
  setIsDialogOpen,
}: {
  isDialogOpen: boolean;
  setIsDialogOpen: (value: boolean) => void;
}) => {
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
    <div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request</DialogTitle>
            <DialogDescription>
              <div className="grid grid-cols-1 ">
                <div className="col-span-1 md:col-span-4 flex flex-col items-center justify-center p-6 bg-white rounded-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <Image src={Logo} alt="Logo" className="w-10" />
                    <span className="text-2xl font-bold text-[#1799CE]">
                      VOB ICU
                    </span>
                  </div>
                  <h2 className="text-xl md:text-3xl font-bold mb-4">
                    VOB Request Form!
                  </h2>
                  <p className="text-sm md:text-lg text-gray-500 mb-6 text-center">
                    Please fill out the VOB request form with patient details to
                    verify benefits quickly and efficiently.
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
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RequestDialog;
