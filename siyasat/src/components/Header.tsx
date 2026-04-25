import React from "react";
import { Search } from "lucide-react";
import type { ViewState } from "../types";

interface HeaderProps {
  onNavigate: (view: ViewState) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="absolute top-0 w-full z-50 flex items-center justify-between px-8 md:px-12 py-4 text-white">
      <div
        className="flex items-center gap-4 cursor-pointer group"
        onClick={() => onNavigate("home")}
      >
        {/* UPDATED: Pointing to the SVG in your public folder */}
        <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center drop-shadow-xl group-hover:scale-105 transition-transform">
          <img
            src="/upminlogo.svg"
            alt="UP Mindanao Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col">
          <div className="font-abhaya text-[13.6px]  tracking-wide drop-shadow-md opacity-95 leading-none">
            University of the Philippines
          </div>

          <div className="font-abhaya text-2xl md:text-3xl tracking-widest drop-shadow-md leading-none -mt-0 md:-mt-.0">
            MINDANAO
          </div>
        </div>
      </div>

      <nav className="flex items-center gap-8 text-sm font-medium drop-shadow-md">
        <button
          onClick={() => onNavigate("home")}
          className="hover:text-gray-200 transition-colors"
        >
          Home
        </button>
        <button className="hover:text-gray-200 transition-colors">About</button>
        <button className="flex items-center gap-2 hover:text-gray-200 transition-colors">
          <Search size={16} /> Search
        </button>
      </nav>
    </header>
  );
}
