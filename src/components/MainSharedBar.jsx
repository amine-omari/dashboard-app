import React from "react";
import SharedImagesBar from "./SharedImagesBar";
import SharedFilesBar from "./SharedFilesBar";

const MainSharedBar = () => {
  return (
    <div className="bg-gray-900 p-5 w-[25%]">
      <SharedImagesBar />
      <SharedFilesBar />
    </div>
  );
};

export default MainSharedBar;
