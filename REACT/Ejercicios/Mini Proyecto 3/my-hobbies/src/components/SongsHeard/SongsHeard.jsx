import React from "react";
import { HOBBIES } from "../../HOBBIES/HOBBIES";

const SongsHeard = () => {
  return (
    <>
      <h2>I love Aurora and her songs:</h2>
      <ul>
        {HOBBIES.songsHeard.map((song) => (
          <li>{song}</li>
        ))}
      </ul>
    </>
  );
};

export default SongsHeard;
