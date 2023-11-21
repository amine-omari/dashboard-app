import React from "react";
import ImgsSharedContainer from "./ImgsSharedContainer";

const SharedImagesBar = () => {
  const SHARED_IMGS_DATA = [
    {
      id: 1,
      src: "/imgs/GradientImg1.jpg",
    },
    {
      id: 2,
      src: "/imgs/GradientImg2.jpg",
    },
    {
      id: 3,
      src: "/imgs/GradientImg3.jpg",
    },
    {
      id: 4,
      src: "/imgs/GradientImg4.jpg",
    },
    {
      id: 5,
      src: "/imgs/GradientImg1.jpg",
    },
  ];

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <h2 className="text-white">Shared Images</h2>
        <button className="text-violet-500 text-sm">Show all</button>
      </div>
      <div className="flex overflow-auto scrollbar-thin scrollbar-thumb-gray-700/30 py-2 gap-x-2.5">
        {SHARED_IMGS_DATA.map(({ id, src }) => (
          <ImgsSharedContainer key={id} src={src} />
        ))}
      </div>
    </div>
  );
};

export default SharedImagesBar;
