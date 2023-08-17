import React from "react";
import { HOBBIES } from "../../HOBBIES/HOBBIES";

const Movies = () => {
  return HOBBIES.movies.map((movie) => (
    <section>
      <h2>{movie.type}</h2>
      <h3>{movie.name}</h3>
      <p>
        This {movie.genre} {movie.type} has a score of {movie.vote}
      </p>
    </section>
  ));
};

export default Movies;
