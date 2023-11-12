import Seen from "@/icons/seen";
import React from "react";

const MessagePreview = ({
  src,
  name,
  lastMessage,
  time,
  seen,
  notification,
}) => {
  return (
    <button className="p-5 flex justify-between w-full">
      <span>
        <img
          src={src}
          alt="profile pic"
          className="max-w-12 max-h-12 rounded-full"
        />
      </span>
      <div className="flex flex-col items-start">
        <h3 className="text-gray-200">{name}</h3>
        <p className="text-gray-500 text-sm">{lastMessage}</p>
      </div>
      <div className="text-sm mt-2 flex flex-col items-center space-y-0.5">
        <time className="text-gray-500 text-xs">{time}</time>
        <p className="text-white bg-violet-500 px-1.5 rounded-full">
          {seen && <Seen />}
          {notification && <Notification />}
        </p>
      </div>
    </button>
  );
};

export default MessagePreview;
