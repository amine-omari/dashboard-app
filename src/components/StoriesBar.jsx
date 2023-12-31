import Plus from "@/icons/Plus";
import React from "react";
import StoryPreview from "./StoryPreview";

const StoriesBar = () => {
  const STORY_IMGS_data = [
    {
      id: 1,
      src: "/imgs/ProfilePic1.jpg",
      alt: "profile-img1",
      text: "Arthur M.",
    },
    {
      id: 2,
      src: "/imgs/ProfilePic2.jpg",
      alt: "profile-img2",
      text: "Jake K.",
    },
    {
      id: 3,
      src: "/imgs/ProfilePic3.jpg",
      alt: "profile-img3",
      text: "Kate R.",
    },
    {
      id: 4,
      src: "/imgs/ProfilePic4.jpg",
      alt: "profile-img4",
      text: "Jack M.",
    },
    {
      id: 5,
      src: "/imgs/ProfilePic1.jpg",
      alt: "profile-img1",
      text: "Creme D.",
    },
  ];

  return (
    <div className="overflow-scroll whitespace-nowrap scrollbar-thin scroll scrollbar-thumb-gray-700/30 flex gap-x-6 items-center px-5 min-h-[120px] border-b border-gray-700/60">
      <button className="flex flex-col text-gray-200 font-semibold text-sm space-y-1">
        <span className="border border-gray-700 p-4 rounded-full text-gray-400">
          <Plus />
        </span>
        <p>My Story</p>
      </button>
      {STORY_IMGS_data.map((item) => (
        <StoryPreview
          key={item.id}
          src={item.src}
          alt={item.alt}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default StoriesBar;
