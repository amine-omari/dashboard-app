import React from "react";
import SharedImagesBar from "./SharedImagesBar";
import SharedFilesBar from "./SharedFilesBar";
import SharedLinksBar from "./SharedLinksBar";

const MainSharedBar = () => {
  return (
    <div className="bg-gray-900 p-5 w-[25%] space-y-8 overflow-auto scrollbar-none">
      <SharedImagesBar />
      <SharedFilesBar />
      <SharedLinksBar />
    </div>
  );
};

export default MainSharedBar;
