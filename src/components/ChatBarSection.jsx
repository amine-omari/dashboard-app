import React from "react";

const ChatBarSection = () => {
  return (
    <div className="px-7 overflow-auto scrollbar-none max-h-[67%]">
      <section className="space-y-8">
        <div className="relative flex gap-x-3 mt-10">
          <img
            src="/imgs/ProfilePic2.jpg"
            alt="ProfilePic"
            className="w-10 h-10 rounded-full"
          />
          <div className="bg-gray-800 p-4 space-y-4 w-[66%] border-2 border-gray-700/60 rounded-r-2xl rounded-b-2xl">
            <a
              href="https://dribbble.com/shots/17171600"
              className="text-gray-500 underline"
            >
              https://dribbble.com/shots/17171600
            </a>
            <div className="flex gap-x-3">
              <span className="w-2 bg-violet-500 rounded-full"></span>
              <div>
                <h3 className="text-violet-500">Dribbble</h3>
                <p className="text-white">Car Parts Store - concept design</p>
                <p className="text-gray-500">
                  Hello! Today we could like to present concept of the store
                  with aerodynamic parts for the cars. Each items is fully
                  customizable to give performance and soul to your dream car...
                </p>
                <img
                  src="https://bonhommeparis.com/api/content/uploads/2016/07/Bonhomme-GDB_Asset_4.jpg"
                  alt="cars store"
                  className="mt-5"
                />
              </div>
            </div>
          </div>
          <time className="absolute text-xs right-40 -bottom-5 text-gray-500">
            11:02 AM
          </time>
        </div>
        <div className="-space-y-5">
          <div className="relative flex gap-x-3">
            <img
              src="/imgs/ProfilePic2.jpg"
              alt="ProfilePic"
              className="w-10 h-10 rounded-full"
            />
            <p className="p-3 bg-gray-800 text-gray-500 border-2 border-gray-700/60 rounded-r-2xl rounded-b-2xl">
              check this profile, fireee
            </p>
            <time className="absolute text-xs left-48 -bottom-5 text-gray-500">
              11:03 AM
            </time>
          </div>
          <div className="relative flex gap-x-3 justify-end">
            <p className="p-3 bg-gray-800 text-gray-500 border-2 border-gray-700/60 rounded-l-2xl rounded-b-2xl">
              check this profile, fireee
            </p>
            <time className="absolute text-xs right-36 -bottom-5 text-gray-500">
              11:24 AM
            </time>
          </div>
        </div>
      </section>
      <p className="text-gray-500 text-xs my-4">Michael is typing...</p>
    </div>
  );
};

export default ChatBarSection;
