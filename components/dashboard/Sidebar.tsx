import React from "react";
import {
  Star,
  AlertCircle,
  Trash2,
  Mail,
  Clock,
  CheckCircle,
  Folder,
  MoreVertical,
} from "lucide-react"; // Icons
import { Button } from "@/components/ui/button"; // ShadCN UI Button

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-16 h-screen bg-gray-100 border-r border-gray-200">
      {/* Icon Buttons */}
      <Button variant="ghost" size="icon" className="my-2">
        <Star className="w-5 h-5" />
      </Button>
      <Button variant="ghost" size="icon" className="my-2">
        <AlertCircle className="w-5 h-5" />
      </Button>
      <Button variant="ghost" size="icon" className="my-2">
        <Trash2 className="w-5 h-5" />
      </Button>
      <Button variant="ghost" size="icon" className="my-2">
        <Mail className="w-5 h-5" />
      </Button>
      <Button variant="ghost" size="icon" className="my-2">
        <Clock className="w-5 h-5" />
      </Button>
      <Button variant="ghost" size="icon" className="my-2">
        <CheckCircle className="w-5 h-5" />
      </Button>
      <Button variant="ghost" size="icon" className="my-2">
        <Folder className="w-5 h-5" />
      </Button>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* More Options */}
      <Button variant="ghost" size="icon" className="my-2">
        <MoreVertical className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Sidebar;
