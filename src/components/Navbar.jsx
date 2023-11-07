import React from "react";
import Button from "./Button";
import InboxIcon from "@/icons/InboxIcon";


const Navbar = () => {
  const BUTTON_ARRAY = [
    InboxIcon,
  ];

  return (
    <nav className="bg-gray-900 w-[100px] h-screen">
      <div className="text-white flex flex-col mt-40">
        {BUTTON_ARRAY.map((Icon, index) => (
          <Button key={index} icon={<Icon />} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
