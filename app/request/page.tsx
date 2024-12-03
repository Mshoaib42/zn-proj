"use client";
import RequestForm from "@/components/RequestForm";
import withAuth from "@/lib/withAuth";
import React from "react";

const page = () => {
  return <RequestForm />;
};

export default withAuth(page);
