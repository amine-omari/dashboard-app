import React from "react";

const ImgsSharedContainer = ({ src }) => {
  return (
    <img
      src={src}
      alt="Shared Img"
      className="rounded-xl w-16 h-16"
    />
  );
};

export default ImgsSharedContainer;
