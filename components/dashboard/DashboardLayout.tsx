"use client";
import React, { useState } from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import SidebarMenu from "./SidebarMenu";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="flex flex-col h-screen">
      {/* TopBar */}
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <TopBar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="flex-shrink-0 sticky top-0 h-full">
          <Sidebar />
        </div>

        {/* Sidebar Menu */}

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Show ActionBar only when records are selected */}
          {/* {selectedRecords.length > 0 && (
            <div className="sticky top-0 z-40 bg-white border-b">
              <ActionBar handleDelete={handleDelete} />
            </div>
          )} */}
          <div className="flex-1 flex overflow-auto">
            {sidebarOpen && (
              <div
                className={`flex-shrink-0 w-64 lg:block ${
                  sidebarOpen ? "block" : "hidden"
                } bg-gray-50 border-r border-gray-200`}
              >
                <SidebarMenu />
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
