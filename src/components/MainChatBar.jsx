import React from "react";
import ChatTopbar from "./ChatTopbar";
import ChatBarSection from "./ChatBarSection";
import SendMessageBar from "./SendMessageBar";

const MainChatBar = () => {
  return (
    <div className="bg-gray-900 w-[48%] flex flex-col justify-between border-x border-gray-700/60 min-h-[90%]">
      <ChatTopbar />
      <ChatBarSection />
      <SendMessageBar />
    </div>
  );
};

export default MainChatBar;
