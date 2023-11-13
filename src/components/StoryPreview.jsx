import React from "react";

const StoryPreview = ({ src, alt, text }) => {
  return (
    <button className="flex flex-col items-center text-gray-200 font-semibold text-sm space-y-1">
      <span>
        <img
          src={src}
          className="max-w-[58px] max-h-[58px] rounded-full"
          alt={alt}
        />
      </span>
      <p>{text}</p>
    </button>
  );
};

export default StoryPreview;
