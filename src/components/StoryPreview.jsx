import React from "react";

const StoryPreview = ({ src, alt, text }) => {
  return (
    <button className="flex flex-col items-center text-gray-200 font-semibold text-sm space-y-1">
      <span className="w-14 h-14 bg-red-500 rounded-full overflow-hidden ">
        <img src={src} alt={alt} />
      </span>
      <p>{text}</p>
    </button>
  );
};

export default StoryPreview;
