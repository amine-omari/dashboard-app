import Search from "@/icons/Search";
import React from "react";

const Topbar = () => {
  return (
    <div className="flex flex-row h-20 bg-gray-900 w-full border border-gray-700">
      <div className="ml-10 text-white py-7 flex gap-x-4">
        <Search />
        <input
          className="bg-transparent w-[260px] focus:outline-none placeholder:text-gray-500"
          type="search"
          placeholder="Search for activies, people, events"
        />
      </div>
    </div>
  );
};

export default Topbar;
