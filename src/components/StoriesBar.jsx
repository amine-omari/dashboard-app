import Plus from "@/icons/Plus";
import React from "react";
import StoryPreview from "./StoryPreview";

const StoriesBar = () => {
  const STORY_IMGS_data = [
    {
      id: 1,
      src: "/imgs/StoryImg1.jpg",
      text: "Arthur M.",
    },
    {
      id: 2,
      src: "/imgs/StoryImg2.jpg",
      text: "Jake K.",
    },
    {
      id: 3,
      src: "/imgs/StoryImg3.jpg",
      text: "Kate R.",
    },
    {
      id: 4,
      src: "/imgs/StoryImg4.jpg",
      text: "Jack M.",
    },
  ];

  return (
    <div className="overflow-auto whitespace-nowrap flex justify-between gap-x-6 p-5">
      <button className="flex flex-col text-gray-200 font-semibold text-sm">
        <span className="border border-gray-700 p-4 rounded-full text-gray-400">
          <Plus />
        </span>
        <p>My Story</p>
      </button>
      {STORY_IMGS_data.map((item) => (
        <StoryPreview key={item.id} src={item.src} text={item.text} />
      ))}
    </div>
  );
};

export default StoriesBar;
