import React from "react";
import { HOBBIES } from "../../HOBBIES/HOBBIES";

const Read = () => {
  const { title, authorName, authorSurname, genre, bookImage } = HOBBIES.read;
  return (
    <>
      <h2>{title}</h2>
      <img src={bookImage} alt={title} width="300" height="400" />
      <p>Genre: {genre}</p>
      <h3>
        {authorName} {authorSurname}
      </h3>
    </>
  );
};

export default Read;
