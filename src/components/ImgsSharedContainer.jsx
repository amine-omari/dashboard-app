import React from "react";

const ImgsSharedContainer = ({ src }) => {
  return (
    <img
      src={src}
      alt="Shared Img"
      className="rounded-xl w-16 h-16 hover:opacity-80 hover:cursor-pointer"
    />
  );
};

export default ImgsSharedContainer;
