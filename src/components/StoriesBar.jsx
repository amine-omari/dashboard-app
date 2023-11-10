import Plus from "@/icons/plus";
import React from "react";

const StoriesBar = () => {
  return (
    <div className="p-5">
      <button className="flex flex-col text-gray-200 font-semibold text-sm">
        <span className="border border-gray-700 p-4 rounded-full text-gray-400">
          <Plus />
        </span>
        <p>My Story</p>
      </button>
    </div>
  );
};

export default StoriesBar;
