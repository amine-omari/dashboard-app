import React from "react";

const NavbarButton = ({ icon, onClick, chatSection }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative p-6 ${
        chatSection &&
        "focus:border-y-[0.2px] focus:border-gray-800/60 focus:bg-gradient-to-r focus:from-violet-950/50 focus:to-gray-900"
      }`}
    >
      {icon}
      {chatSection && (
        <div className="absolute left-0 top-0 h-full w-1 group-focus:bg-violet-500/90"></div>
      )}
    </button>
  );
};

export default NavbarButton;
