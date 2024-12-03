"use client";
import Result from "@/components/Result";
import withAuth from "@/lib/withAuth";
import React from "react";

const page = () => {
  return <Result />;
};

export default withAuth(page);
