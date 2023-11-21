import Seen from "@/icons/Seen";
import React from "react";
import MessageNotification from "./MessageNotification";

const MessagePreview = ({
  src,
  name,
  lastMessage,
  time,
  seen,
  notification,
}) => {
  return (
    <button className="p-5 flex items-center space-x-3 w-full border-b border-gray-700/60 hover:bg-gray-700/50">
      <div className="flex-1">
        <img src={src} alt="profile pic" className="w-12 h-12 rounded-full" />
      </div>

      <div className="flex flex-col items-start">
        <p className="text-gray-200">{name}</p>
        <p className="text-gray-500 text-sm text-left truncate w-[250px] flex-2">
          {lastMessage}
        </p>
      </div>

      <div className="text-sm mt-2 flex flex-col items-center space-y-0.5 flex-1">
        <time className="text-gray-500 text-xs">{time}</time>
        {seen && <Seen />}
        {notification && <MessageNotification />}
      </div>
    </button>
  );
};

export default MessagePreview;
