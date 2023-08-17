import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import Picture from "../Picture/Picture";

const ItemList = ({ data }) => {
  const { name, origin, image, status } = data;
  return (
    <li>
      <Paragraph text={name} />
      <Picture src={image} alt={name} width="400" height="400" />
      <Paragraph text={status} />
      <Paragraph text={origin.name} />
    </li>
  );
};

export default ItemList;
