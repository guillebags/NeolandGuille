import React from "react";
import { HOBBIES } from "../../HOBBIES/HOBBIES";

const Languages = () => {
  const { language, wrlevel, splevel } = HOBBIES.languages;
  return (
    <>
      <h2>My favorite language is {language}</h2>
      <p>
        Writing level: {wrlevel} || Spelling level: {splevel}
      </p>
    </>
  );
};

export default Languages;
