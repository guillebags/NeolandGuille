import React from "react";
import "./Picture.css";

const Picture = ({ src, alt, width, height }) => {
  return <img src={src} alt={alt} width={width} height={height} />;
};

export default Picture;
