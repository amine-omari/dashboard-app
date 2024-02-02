import React from "react";
import ChatTopbar from "./ChatTopbar";
import ChatBarSection1 from "./ChatBarSection1";
import SendMessageBar from "./SendMessageBar";

const MainChatBar = ({ ActiveUser }) => {
  return (
    <div className="bg-gray-900 w-[48%] flex flex-col justify-between border-x border-gray-700/60 min-h-[90%]">
      <ChatTopbar ActiveUser={ActiveUser} />
      <ChatBarSection1 />
      <SendMessageBar />
    </div>
  );
};

export default MainChatBar;
