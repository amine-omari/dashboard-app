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
    <button className="p-5 flex justify-around items-center gap-x-3 w-full border-y border-gray-700/60 hover:bg-gray-700/50">
      <span>
        <img
          src={src}
          alt="profile pic"
          className="max-w-12 max-h-12 rounded-full"
        />
      </span>
      <div className="flex flex-col items-start w-[70%]">
        <p className="text-gray-200">{name}</p>
        <p className="text-gray-500 text-sm text-left truncate w-full">
          {lastMessage}
        </p>
      </div>
      <div className="text-sm mt-2 flex flex-col items-center space-y-0.5">
        <time className="text-gray-500 text-xs">{time}</time>
        {seen && <Seen />}
        {notification && <MessageNotification />}
      </div>
    </button>
  );
};

export default MessagePreview;
