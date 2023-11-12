import React from "react";

const MessagesBar = () => {
  return (
    <div>
      <button className="p-5 flex justify-between w-full">
        <span>
          <img
            src="/imgs/ProfilePic1.jpg"
            alt="profile pic"
            className="max-w-12 max-h-12 rounded-full"
          />
        </span>
        <div className="flex flex-col items-start">
          <h3 className="text-gray-200">Arthur Maliza</h3>
          <p className="text-gray-500 text-sm">
            It is a long established fact that a...
          </p>
        </div>
        <div className="text-sm mt-1.5 flex flex-col items-center">
          <time className="text-gray-500">6:03</time>
          <p className="text-white bg-violet-500 px-1.5 rounded-full">1</p>
        </div>
      </button>
    </div>
  );
};

export default MessagesBar;
