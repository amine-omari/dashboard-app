import React from "react";
import StoriesBar from "./StoriesBar";
import MessagesBar from "./MessagesBar";

const MessagesStoriesBar = ({ setActiveUser }) => {
  return (
    <div className="bg-gray-900/95 flex flex-col w-[27%] h-full">
      <StoriesBar />
      <MessagesBar setActiveUser={setActiveUser} />
    </div>
  );
};

export default MessagesStoriesBar;
