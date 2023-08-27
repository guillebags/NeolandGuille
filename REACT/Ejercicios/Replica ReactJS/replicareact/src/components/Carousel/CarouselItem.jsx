export const CarouselItem = ({ item }) => {
  return (
    <figure key={item}>
      <img src={item.icon} />
      <p>{item.description}</p>
    </figure>
  );
};
