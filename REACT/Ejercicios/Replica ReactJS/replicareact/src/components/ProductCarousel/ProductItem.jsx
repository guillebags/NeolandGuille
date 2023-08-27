const ProductItem = ({ item }) => {
  return (
    <figure key={item}>
      <img src={item.icon} />
      <p>{item.price}€</p>
      <p>{item.name}</p>
    </figure>
  );
};

export default ProductItem;
