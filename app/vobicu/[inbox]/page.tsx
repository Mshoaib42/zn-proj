"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import VobIcuDashboard from "@/components/dashboard/VobIcuDashboard";
import { VobRecord } from "@/types/types";
import { toast } from "sonner";
import { getByCategory } from "@/services/vobFormApi";

import Loading from "@/components/Loading";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
interface categoryResponse {
  status: number;
  data: VobRecord[];
}
const InboxPage = () => {
  const params = useParams();
  const [data, setData] = useState<VobRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const inbox = params.inbox as string;

  const fetchCategoryWiseData = async (status: string) => {
    setLoading(true);

    try {
      const response = (await getByCategory(status)) as categoryResponse;
      if (response.status === 200) {
        setData(response.data);
      } else {
        toast.error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryWiseData(inbox);
  }, [inbox]);

  return (
    <DashboardLayout>
      {loading ? (
        <div className="flex w-full justify-center  ">
          <Loading />
        </div>
      ) : (
        <VobIcuDashboard data={data} setData={setData} />
      )}
    </DashboardLayout>
  );
};

export default InboxPage;
