import Seen from "@/icons/Seen";
import React from "react";
import MessageNotification from "./MessageNotification";

const MessagePreview = ({
  OnClick,
  src,
  profileName,
  lastMessage,
  time,
  seen,
  notification,
}) => {
  return (
    <button
      onClick={OnClick}
      className="flex w-full items-center space-x-3 border-b border-gray-700/60 p-5 hover:bg-gray-700/50 2xl:justify-between"
    >
      <div className="flex">
        <img src={src} alt="profile pic" className="h-12 w-12 rounded-full" />
      </div>

      <div className="flex flex-col items-start">
        <p className="text-gray-200">{profileName}</p>
        <p className="w-[230px] truncate text-left text-sm text-gray-500">
          {lastMessage}
        </p>
      </div>

      <div className="mt-2 flex flex-col items-center space-y-0.5 text-sm">
        <time className="text-xs text-gray-500">{time}</time>
        {seen && <Seen />}
        {notification && <MessageNotification />}
      </div>
    </button>
  );
};

export default MessagePreview;
