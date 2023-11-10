import Search from "@/icons/Search";
import React from "react";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between h-20 bg-gray-900 w-full border border-gray-800">
      <div className="flex gap-x-4 ml-10">
          <div className="text-white">
            <Search />
          </div>
          <input
            className="w-[250px] bg-transparent outline-none placeholder:text-gray-600 text-white"
            type="search"
            placeholder="Search activies, people, events"
          />
      </div>
    </div>
  );
};

export default Topbar;
