"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/wtsp logo.png"; // Ensure the path to the logo is correct
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Ensure `lucide-react` is installed
import useUserStore from "@/store/UserAuth";
import Cookies from "js-cookie";

const NAV_ITEMS = [
  { name: "About us", href: "/about-us" },
  { name: "Pricing", href: "/pricing" },
  { name: "Dashboard", href: "/vobicu/inbox" },
  { name: "Request", href: "/request" },
];
const Navbar = () => {
  const [active, setActive] = useState<string>("About us");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useUserStore();
  const clearUser = useUserStore((state) => state.clearUser);
  const handleLogout = () => {
    clearUser();
    Cookies.remove("accessToken");
    window.location.href = "/login";
  };
  return (
    <nav className="w-full bg-white shadow-sm ">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={40} height={40} />
          <span className="text-2xl font-bold text-[#1799CE]">VOB ICU</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-black">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.name}
              className={`text-lg font-medium cursor-pointer  ${
                active === item.name ? "text-[#1799CE]" : "text-black"
              }`}
              onClick={() => setActive(item.name)}
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        {user ? (
          <Link
            href="/login"
            className="bg-[#1799CE] text-white px-4 py-2 rounded-lg text-lg font-semibold"
            onClick={handleLogout}
          >
            Logout
          </Link>
        ) : (
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-[#1799CE] px-4 py-2 rounded-lg text-lg font-semibold border border-[#1799CE]"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-[#1799CE] text-white px-4 py-2 rounded-lg text-lg font-semibold"
            >
              Sign up
            </Link>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden z-50 text-gray-700"
          onClick={() => {
            setSidebarOpen(!sidebarOpen);
          }}
        >
          {sidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 w-64 transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center px-4 py-4">
          <Image src={logo} alt="logo" width={40} height={40} />
          <button
            aria-label="Close Menu"
            className="text-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col space-y-6 px-4 mt-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-gray-700 hover:text-primary cursor-pointer"
              onClick={() => setSidebarOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {user ? (
            <Link
              href="/login"
              className="text-primary px-4 py-2 rounded-lg text-lg font-semibold border border-primary"
              onClick={handleLogout}
            >
              Logout
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="text-primary px-4 py-2 rounded-lg text-lg font-semibold border border-primary"
                onClick={() => setSidebarOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-primary text-white px-4 py-2 rounded-lg text-lg font-semibold"
                onClick={() => setSidebarOpen(false)}
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
