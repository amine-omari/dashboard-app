import React from "react";
import Messages from "./Messages";

const ChatBarSection = () => {
  return (
    <main className="px-7 overflow-auto scrollbar-none pt-20">
      <section className="space-y-10">
        <div className="w-[66%]">
          <Messages
            img={true}
            time="11:02 AM"
            rightleft="right-0"
            rounded="rounded-r-2xl rounded-b-2xl"
          >
            <a
              href="https://dribbble.com/shots/17171600"
              className="text-gray-500 underline"
            >
              https://dribbble.com/shots/17171600
            </a>
            <div className="flex gap-x-3">
              <span className="w-1.5 bg-violet-500 rounded-full"></span>
              <div>
                <h2 className="text-violet-500">Dribbble</h2>
                <h2 className="text-white">Car Parts Store - concept design</h2>
                <p className="text-sm text-gray-400">
                  Hello! Today we would like to present concept of the store
                  with aerodynamic parts for the cars. Each items is fully
                  customizable to give performance and soul to your dream car...
                </p>
                <img
                  src="/imgs/CarStoreImg1.jpg"
                  alt="cars store pic"
                  className="mt-5 rounded-xl"
                />
              </div>
            </div>
          </Messages>
        </div>
        <div className="-space-y-5">
          <Messages
            img={true}
            time="11:03 AM"
            rightleft="right-0"
            rounded="rounded-r-2xl rounded-b-2xl"
          >
            <p className="text-sm text-gray-400">check his profile, fireeee</p>
          </Messages>
          <div className="flex justify-end">
            <Messages
              img={false}
              time="11:24 AM"
              rightleft="left-0"
              rounded="rounded-l-2xl rounded-b-2xl"
            >
              <p className="text-sm text-gray-400">wow, really cool</p>
            </Messages>
          </div>
        </div>
      </section>
      <p className="text-gray-500 text-xs my-4">Michael is typing...</p>
    </main>
  );
};

export default ChatBarSection;
