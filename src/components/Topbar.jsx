import Bell from "@/icons/Bell";
import Search from "@/icons/Search";
import React from "react";

const Topbar = () => {
  return (
    <div className="flex justify-between h-20 bg-gray-900 w-full border border-gray-700">
      <div className="ml-10 py-7 flex gap-x-4">
        <div className="text-gray-400">
          <Search />
        </div>
        <input
          className="bg-transparent w-[260px] focus:outline-none placeholder:text-gray-500 text-white"
          type="search"
          placeholder="Search for activies, people, events"
        />
      </div>
    </div>
  );
};

export default Topbar;
