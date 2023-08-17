const Button = ({ setCount }) => {
  const handleButton = () => {
    //el estado es del padre por lo que hay que meter una callback
    setCount((value) => value + 1);
  };
  return <button onClick={() => handleButton()}>Button</button>;
};

export default Button;
