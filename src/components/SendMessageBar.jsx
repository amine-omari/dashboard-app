import React from "react";

const SendMessageBar = () => {
  return (
    <form className="flex items-center">
      <input
        type="text"
        required
        placeholder="Write a message for Michael Dias"
        className="truncate w-[190px] text-sm"
      />
    </form>
  );
};

export default SendMessageBar;
