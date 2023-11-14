import React from "react";
import ChatTopbar from "./ChatTopbar";
import ChatBarSection from "./ChatBarSection";

const MainChatBar = () => {
  return (
    <div className="bg-gray-900 w-[650px] flex flex-col">
      <ChatTopbar />
      <ChatBarSection/>
    </div>
  );
};

export default MainChatBar;
