import Linked from "@/icons/Linked";
import Microphone from "@/icons/Microphone";
import Play from "@/icons/Play";
import React from "react";

const SendMessageBar = () => {
  return (
    <form className="flex border-t border-gray-700/60">
      <div className="flex gap-x-10 px-7 py-6 w-full border-r border-gray-700/60">
        <input
          type="text"
          required
          placeholder="Write a message for Michael..."
          className="text-sm w-full bg-transparent outline-none text-white"
        />
        <div className="flex gap-x-5 text-gray-400">
          <button className="w-5 h-5">
            <Linked />
          </button>
          <button className="w-5 h-5">
            <Microphone />
          </button>
        </div>
      </div>
      <button className="my-5 px-6 text-violet-500">
        <span className="w-5 h-5">
          <Play />
        </span>
      </button>
    </form>
  );
};

export default SendMessageBar;
