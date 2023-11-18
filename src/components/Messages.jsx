import React from "react";
import ChatProfilePic from "./ChatProfilePic";

const Messages = ({ img, children, rounded, rightleft, time }) => {
  return (
    <div className="flex gap-x-3">
      {img && <ChatProfilePic />}
      <div
        className={`relative bg-gray-800 p-3 border-2 space-y-4 border-gray-700/60 ${rounded}`}
      >
        {children}
        <time className={`absolute text-xs text-gray-500 ${rightleft}`}>
          {time}
        </time>
      </div>
    </div>
  );
};

export default Messages;
