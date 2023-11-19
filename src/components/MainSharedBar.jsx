import React from "react";
import SharedImagesBar from "./SharedImagesBar";
import SharedFilesBar from "./SharedFilesBar";
import SharedLinksBar from "./SharedLinksBar";

const MainSharedBar = () => {
  return (
    <div className="bg-gray-900 p-5 w-[25%] space-y-8">
      <SharedImagesBar />
      <SharedFilesBar />
      <SharedLinksBar />
    </div>
  );
};

export default MainSharedBar;
