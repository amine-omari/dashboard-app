import React from "react";
import StoriesBar from "./StoriesBar";
import MessagePreview from "./MessagePreview";

const MessagesStoriesBar = () => {
  return (
    <div className="bg-gray-900/95 flex flex-col min-h-screen w-[370px]">
      <StoriesBar />
      <MessagePreview />
    </div>
  );
};

export default MessagesStoriesBar;
