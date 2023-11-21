import React from "react";
import Button from "./Button";
import InboxIcon from "@/icons/InboxIcon";
import Calender from "@/icons/Calender";
import Users from "@/icons/Users";
import VideoCamera from "@/icons/VideoCamera";
import DocumentDuplicate from "@/icons/DocumentDuplicate";
import Camera from "@/icons/Camera";

const Navbar = () => {
  const BUTTON_ARRAY = [
    InboxIcon,
    Calender,
    Users,
    VideoCamera,
    DocumentDuplicate,
    Camera,
  ];

  return (
    <nav className="bg-gray-900 w-20 h-screen">
      <div className="text-center pt-3 pb-5 font-semibold text-white text-4xl">
        c<span className="text-violet-500/90">.</span>
      </div>
      <div className="text-white flex flex-col mt-32">
        {BUTTON_ARRAY.map((Icon, index) => (
          <Button key={index} icon={<Icon />} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
