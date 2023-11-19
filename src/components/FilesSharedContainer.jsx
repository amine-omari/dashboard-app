import React from "react";

const FilesSharedContainer = ({ src, filesnametype, storagedata, date }) => {
  return (
    <div className="flex gap-x-3 items-center">
      <button className="py-4 px-5 border-2 border-gray-700/60 rounded-full hover:bg-gray-800/40">
        <img src={src} alt="docs img" className="w-4 h-6" />
      </button>
      <div className="space-y-1">
        <h3 className="text-sm text-white">{filenamestype}</h3>
        <span className="flex gap-x-2 text-sm text-gray-500">
          <p>{storagedata}</p>
          <span className="w-1 h-1 bg-gray-500 rounded-full mt-2"></span>
          <time>{date}</time>
        </span>
      </div>
    </div>
  );
};

export default FilesSharedContainer;
