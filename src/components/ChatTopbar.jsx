import React from "react";
import ChatTopbarFeatures from "./ChatTopbarFeatures";

const ChatTopbar = () => {
  return (
    <div className="h-[139px] border-b border-gray-700/60 flex items-center justify-between px-10">
      <div className="flex gap-x-4 items-center">
        <img
          src="/imgs/ProfilePic2.jpg"
          alt="ProfilePic"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="text-white text-2xl">Michael Dias</h2>
          <p className="text-gray-500 text-xs">Offline</p>
        </div>
      </div>
      <div className="flex gap-x-5">
        <ChatTopbarFeatures />
      </div>
    </div>
  );
};

export default ChatTopbar;
