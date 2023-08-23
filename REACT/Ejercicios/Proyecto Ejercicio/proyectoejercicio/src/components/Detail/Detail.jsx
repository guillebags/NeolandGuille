const Detail = ({ character }) => {
  const { alternate_names, house, dateOfBirth, patronus, name, image } =
    character;
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
    </section>
  );
};

export default Detail;
