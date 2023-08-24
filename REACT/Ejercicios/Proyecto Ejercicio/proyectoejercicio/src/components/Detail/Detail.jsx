import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../../services/characters.service";

const Detail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({});
  const { image, name, alternate_names, house, dateOfBirth, patronus } =
    character.data[0];

  useEffect(() => {
    (async () => {
      setCharacter(await getById(id));
    })();
  }, []);
  return (
    <section>
      <figure>
        <img src={image} alt={name} />
        <h2>{name}</h2>
      </figure>
      <ul>
        <li>
          <p>
            {name}, also known as {alternate_names}.
          </p>
        </li>
        <li>
          <p> This character belongs to the Hogwart house of {house}.</p>
        </li>
        <li>
          <p>Date of birth: {dateOfBirth}</p>
        </li>
        <li>Their patronus is a {patronus}</li>
      </ul>
      {console.log(character)}
    </section>
  );
};

export default Detail;
