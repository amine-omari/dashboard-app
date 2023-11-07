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
    <nav className="bg-gray-900 w-[100px] h-screen">
      <div className="text-white flex flex-col mt-20">
        {BUTTON_ARRAY.map((Icon, index) => (
          <Button key={index} icon={<Icon />} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
