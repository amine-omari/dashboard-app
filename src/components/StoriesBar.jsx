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
    <div className="flex min-h-[120px] items-center gap-x-6 overflow-x-scroll whitespace-nowrap border-b border-gray-700/60 px-5 scrollbar-thin scrollbar-thumb-gray-700">
      <button className="flex flex-col space-y-1 text-sm font-semibold text-gray-200">
        <span className="rounded-full border border-gray-700 p-4 text-gray-400">
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
