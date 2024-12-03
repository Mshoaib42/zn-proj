import React from "react";
import {
  ArrowLeft,
  Star,
  AlertCircle,
  Trash2,
  Mail,
  Clock,
  CheckCircle,
  Folder,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button"; // ShadCN UI Button

const ActionBar: React.FC<{ handleDelete: () => void }> = ({
  handleDelete,
}) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200">
      {/* Left Section: Icons */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Star className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <AlertCircle className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" onClick={handleDelete}>
          <Trash2 className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Mail className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Clock className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <CheckCircle className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Folder className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <MoreVertical className="w-5 h-5" />
        </Button>
      </div>

      {/* Right Section: Page Info and Navigation */}
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600">1–50 of 2,619</span>
        <Button variant="ghost" size="icon">
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default ActionBar;
