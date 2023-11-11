import React from "react";

const StoryPreview = ({ src, text }) => {
  return (
    <button className="flex flex-col items-center text-gray-200 font-semibold text-sm">
      <span>
        <img src={src} className="min-w-[58px] min-h-[58px] rounded-full" />
      </span>
      <p>{text}</p>
    </button>
  );
};

export default StoryPreview;
