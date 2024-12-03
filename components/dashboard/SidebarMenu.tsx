import React, { useState } from "react";
import {
  Inbox,
  Star,
  Clock,
  Send,
  FileText,
  AlertCircle,
  Trash2,
  BadgePlus,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import RequestDialog from "./RequestDialog";

const SidebarMenu: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const menuItems = [
    {
      label: "Inbox",
      route: "/vobicu/inbox",
      icon: Inbox,
      count: 3,
    },
    {
      label: "Request",
      route: null, // No route for "Request" since it's handled by the dialog
      icon: BadgePlus,
    },
    { label: "Starred", route: "/vobicu/starred", icon: Star },
    { label: "Snoozed", route: "/vobicu/snoozed", icon: Clock },
    { label: "Sent", route: "/vobicu/sent", icon: Send },
    { label: "Drafts", route: "/vobicu/drafts", icon: FileText, count: 1 },
    { label: "Spam", route: "/vobicu/spam", icon: AlertCircle, count: 3 },
    { label: "Trash", route: "/vobicu/trash", icon: Trash2 },
    { label: "More", icon: ChevronDown },
  ];

  return (
    <div className="w-64 p-4 bg-gray-50 border-r border-gray-200">
      <ul className="space-y-2">
        {menuItems.map((item, index: number) => {
          if (item.label === "Request") {
            return (
              <li key={index}>
                <button
                  onClick={() => setIsDialogOpen(true)}
                  className="flex items-center justify-between w-full px-4 py-2 rounded-md cursor-pointer hover:bg-gray-100"
                >
                  <div className="flex items-center space-x-4">
                    <item.icon className="w-5 h-5" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                </button>
                <RequestDialog
                  isDialogOpen={isDialogOpen}
                  setIsDialogOpen={setIsDialogOpen}
                />
              </li>
            );
          }

          const isActive = false; // Replace with actual logic if needed
          return (
            <Link
              href={item?.route || ""}
              key={index}
              className={cn(
                "flex items-center justify-between px-4 py-2 rounded-md cursor-pointer",
                isActive
                  ? "bg-red-50 text-red-600 font-semibold"
                  : "hover:bg-gray-100"
              )}
            >
              <div className="flex items-center space-x-4">
                <item.icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </div>
              {/* {item.count !== undefined && (
                <span
                  className={cn(
                    "text-xs font-medium rounded-full px-2",
                    isActive
                      ? "bg-red-100 text-red-600"
                      : "bg-gray-200 text-gray-600"
                  )}
                >
                  {item.count}
                </span>
              )} */}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarMenu;
