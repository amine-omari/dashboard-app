import Bell from "@/icons/Bell";
import ChevronDown from "@/icons/ChevronDown";
import Search from "@/icons/Search";
import React from "react";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between h-20 bg-gray-900 w-full border border-gray-800">
      <div className="flex gap-x-4 ml-10">
        <div className="text-gray-400">
          <Search />
        </div>
        <input
          className="w-[250px] bg-transparent outline-none placeholder:text-gray-600 text-white"
          type="search"
          placeholder="Search activies, people, events"
        />
      </div>
      <div className="flex items-center gap-x-6 mr-10">
        <div className="relative text-gray-400">
          <span className="absolute h-1.5 w-1.5 bg-red-500 rounded-full right-1 top-0"></span>
          <Bell />
        </div>
        <div className="text-white flex items-center gap-x-3">
          <div>
            <img
              src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yNF9pc29sYXRlZF8zZF9pbGx1c3RyYXRpb25fb2ZfcHJvZmlsZV9pY29uX2ZhY18zOWE2ZTBiMC0zNTg3LTQ4OTUtYjgyNi01MGUzYmQ4MDA3MTMucG5n.png"
              alt="profile image"
              className="w-8 h-8 rounded-full"
            />
          </div>
          <div className="flex items-center gap-x-3">
            <p>Dominik Tyka</p>
            <span className="text-gray-400">
              <ChevronDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
