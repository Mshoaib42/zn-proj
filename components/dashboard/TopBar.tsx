import React from "react";
import { Menu, Search, HelpCircle, Grid, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useUserStore from "@/store/UserAuth";
import Cookies from "js-cookie";
interface TopBarProps {
  onToggleSidebar: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onToggleSidebar }) => {
  const { user } = useUserStore();
  const clearUser = useUserStore((state) => state.clearUser);
  const handleLogout = () => {
    clearUser();
    Cookies.remove("accessToken");
    window.location.href = "/login";
  };
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 shadow-sm">
      {/* Left Section: Menu Icon and Logo */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" onClick={onToggleSidebar}>
          <Menu className="w-5 h-5" />
        </Button>
        <span className="text-lg font-semibold text-primary">VOB ICU</span>
      </div>

      {/* Middle Section: Search Bar */}
      <div className="hidden sm:flex shadow-sm flex-1 mx-4 max-w-md items-center">
        <input
          type="text"
          placeholder="Search results"
          className="w-full outline-none border-none "
        />
        <Button variant="ghost" size="icon">
          <Search className="w-5 h-5" />
        </Button>
      </div>

      {/* Right Section: Icons */}
      <div className="flex items-center space-x-4 ">
        <Button variant="ghost" size="icon">
          <HelpCircle className="w-5 h-5" />
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48 p-4 space-y-2">
            <div className="text-sm font-semibold text-gray-700">Settings</div>
            <button className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100">
              Preferences
            </button>
            <button className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100">
              Notifications
            </button>
            <button className="w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-100">
              Account
            </button>
          </PopoverContent>
        </Popover>
        <Button variant="ghost" size="icon">
          <Grid className="w-5 h-5" />
        </Button>

        {/* Popover for User Profile */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 mr-2 p-2 space-y-2">
            <div className="text-sm font-semibold text-gray-700">
              {user && user?.name}
            </div>
            <div className="text-sm text-gray-500">{user && user?.email}</div>
            <div className="border-t border-gray-200 mt-2"></div>
            <button className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100">
              Profile
            </button>
            <button className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100">
              Settings
            </button>
            <button
              onClick={handleLogout}
              className="w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-100"
            >
              Logout
            </button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default TopBar;
