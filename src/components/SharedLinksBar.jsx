import React from "react";
import LinksSharedContainer from "./LinksSharedContainer";

const SharedLinksBar = () => {
  const SHARED_LINKS_DATA = [
    {
      id: 1,
      src: "/imgs/CarStoreImg1.jpg",
      storename: "Car Parts Store - concept design",
      linkcode: "https://dribbble.com/shots/17171600",
    },
    {
      id: 2,
      src: "/imgs/StorageAppImg.jpg",
      storename: "Car Parts Store - concept design",
      linkcode: "https://dribbble.com/shots/17171600",
    },
    {
      id: 3,
      src: "/imgs/WatchesStoreImg.jpg",
      storename: "Car Parts Store - concept design",
      linkcode: "https://dribbble.com/shots/17171600",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h2 className="text-white">Shared Files</h2>
        <button className="text-sm text-violet-500">Show all</button>
      </div>
      {SHARED_LINKS_DATA.map(({ id, src, storename, linkcode }) => (
        <LinksSharedContainer
          key={id}
          src={src}
          storename={storename}
          linkcode={linkcode}
        />
      ))}
    </div>
  );
};

export default SharedLinksBar;
