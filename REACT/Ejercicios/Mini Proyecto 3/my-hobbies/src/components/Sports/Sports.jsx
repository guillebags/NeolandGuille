import React from "react";
import { HOBBIES } from "../../HOBBIES/HOBBIES";

const Sports = () => {
  return HOBBIES.sports.map((sport) => (
    <section>
      <h3>{sport.name}</h3>
      <p>My favorite team is {sport.favoriteTeam}</p>
    </section>
  ));
};

export default Sports;
