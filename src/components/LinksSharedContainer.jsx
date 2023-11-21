import React from "react";

const LinksSharedContainer = ({ src, storename, linkcode }) => {
  return (
    <div className="flex gap-x-3 items-center">
      <button className="hover:opacity-80">
        <img src={src} alt="store img" className="w-16 h-16 rounded-xl" />
      </button>
      <div className="flex flex-col gap-y-1 text-sm truncate">
        <h2 className="text-white">{storename}</h2>
        <a href="https://dribbble.com/shots/17171600" className="text-gray-500">
          {linkcode}
        </a>
      </div>
    </div>
  );
};

export default LinksSharedContainer;
