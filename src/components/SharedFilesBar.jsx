import React from "react";
import FilesSharedContainer from "./FilesSharedContainer";

const SharedFilesBar = () => {
  const SHARED_FILES_DATA = [
    {
      id: 1,
      src: "/imgs/DocsImg1.jpg",
      filesnametype: "User Scenario",
      storagedata: "12 MB",
      date: "Jan 21, 2022",
    },
    {
      id: 2,
      src: "/imgs/DocsImg2.jpg",
      filesnametype: "Design System Template",
      storagedata: "24 MB",
      date: "Dec 28, 2021",
    },
    {
      id: 3,
      src: "/imgs/DocsImg1.jpg",
      filesnametype: "TimeSheet - Freelance",
      storagedata: "3 MB",
      date: "Jan 7, 2022",
    },
    {
      id: 4,
      src: "/imgs/DocsImg2.jpg",
      filesnametype: "Finance Dashboard - Final",
      storagedata: "432 MB",
      date: "April 19, 2021",
    },
  ];

  return (
    <div className="space-y-5">
      <div className="flex justify-between">
        <h2 className="text-white">Shared Files</h2>
        <button className="text-sm text-violet-500">Show all</button>
      </div>
      <div className="space-y-3">
        {SHARED_FILES_DATA.map(
          ({ id, src, filesnametype, storagedata, date }) => (
            <FilesSharedContainer
              key={id}
              src={src}
              filesnametype={filesnametype}
              storagedata={storagedata}
              date={date}
            />
          )
        )}
      </div>
    </div>
  );
};

export default SharedFilesBar;
