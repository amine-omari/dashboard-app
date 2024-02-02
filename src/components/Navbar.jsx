import React from "react";
import InboxIcon from "@/icons/InboxIcon";
import Calender from "@/icons/Calender";
import Users from "@/icons/Users";
import VideoCamera from "@/icons/VideoCamera";
import DocumentDuplicate from "@/icons/DocumentDuplicate";
import Camera from "@/icons/Camera";
import NavbarButton from "./NavbarButton";

const Navbar = ({ setChatSection, chatSection }) => {
  const BUTTON_ARRAY = [
    { id: 0, icon: <InboxIcon />, onClick: () => setChatSection(!chatSection) },
    { id: 1, icon: <Calender /> },
    { id: 2, icon: <Users /> },
    { id: 3, icon: <VideoCamera /> },
    { id: 4, icon: <DocumentDuplicate /> },
    { id: 5, icon: <Camera /> },
  ];

  return (
    <nav className="h-screen w-20 bg-gray-900">
      <div className="pb-5 pt-3 text-center text-4xl font-semibold text-white">
        c<span className="text-violet-500/90">.</span>
      </div>
      <div className="mt-32 flex flex-col text-white">
        {BUTTON_ARRAY.map(({ icon, index, onClick }) => (
          <NavbarButton key={index} icon={icon} onClick={onClick} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
