import React from "react";
import ChatTopbarFeatures from "./ChatTopbarFeatures";
import VideoCamera from "@/icons/VideoCamera";
import PhoneCall from "@/icons/PhoneCall";
import Camera from "@/icons/Camera";
import ChevronRight from "@/icons/ChevronRight";
import { MESSAGE_IMGS_DATA } from "./MessagesBar";

const ChatTopbar = ({ ActiveUser }) => {
  const FEATURES_DATA = [
    {
      id: 1,
      icon: <VideoCamera />,
      textcolor: "text-blue-300",
      hovertext: "hover:text-blue-400",
    },
    {
      id: 2,
      icon: <PhoneCall />,
      textcolor: "text-green-300",
      hovertext: "hover:text-green-400",
    },
    {
      id: 3,
      icon: <Camera />,
      textcolor: "text-gray-400",
      hovertext: "hover:text-gray-300",
    },
  ];

  return (
    <div className="relative flex min-h-[120px] items-center justify-between border-b border-gray-700/60 pl-7 pr-12">
      <div className="flex items-center">
        <div className="flex gap-x-4">
          <img
            src={ActiveUser ? ActiveUser.src : MESSAGE_IMGS_DATA[0].src}
            alt="ProfilePic"
            className="h-12 w-12 rounded-full"
          />
          <div>
            <h2 className="text-2xl text-white">
              {ActiveUser
                ? ActiveUser.profileName
                : MESSAGE_IMGS_DATA[0].profileName}
            </h2>
            <p className="text-xs text-gray-500">Offline</p>
          </div>
        </div>
      </div>
      <div className="flex gap-x-5">
        {FEATURES_DATA.map(({ id, icon, textcolor, hovertext }) => (
          <ChatTopbarFeatures
            key={id}
            icon={icon}
            textcolor={textcolor}
            hovertext={hovertext}
          />
        ))}
      </div>
      <div className="absolute -right-[13px]">
        <button className="rounded-full border border-gray-700/60 bg-gray-900 p-1.5 text-white hover:bg-gray-800">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ChatTopbar;
