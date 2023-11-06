import InboxIcon from "@/icons/InboxIcon";
import React from "react";

const Button = (icon) => {
  return (
    <button className="group relative p-6 focus:bg-gradient-to-r focus:from-violet-950/50 focus:to-gray-900">
      <InboxIcon />
      <div className="absolute left-0 top-0 h-full w-2 group-focus:bg-violet-500/90"></div>
    </button>
  );
};

export default Button;
