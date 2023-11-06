import React from "react";
import Button from "./Button";

const BUTTON_ARRAY = [];

const Navbar = () => {
  return (
    <nav className="bg-gray-900 w-[100px] h-screen">
      <div className="text-white flex flex-col mt-40">
        <Button />
      </div>
    </nav>
  );
};

export default Navbar;
