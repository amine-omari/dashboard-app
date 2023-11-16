import React from "react";
import ChatTopbar from "./ChatTopbar";
import ChatBarSection from "./ChatBarSection";
import SendMessageBar from "./SendMessageBar";

const MainChatBar = () => {
  return (
    <div className="bg-gray-900 w-[650px] flex flex-col justify-between border-x border-gray-700/60">
      <ChatTopbar />
      <ChatBarSection />
      <SendMessageBar />
    </div>
  );
};

export default MainChatBar;
