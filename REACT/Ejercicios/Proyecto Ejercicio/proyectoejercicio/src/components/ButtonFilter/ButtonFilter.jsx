import React from "react";

const ButtonFilter = ({ value, className, onClick, text }) => {
  return (
    <button value={value} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonFilter;
