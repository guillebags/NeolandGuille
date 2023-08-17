import React from "react";

const Card = (props) => {
  const { character } = props;

  return (
    <div key={character.id}>
      <h2>name: {character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>
        {character.name} is {character.status} || Origin:{" "}
        {character.origin.name}
      </p>
    </div>
  );
};

export default Card;
