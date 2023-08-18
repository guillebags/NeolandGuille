import { useState } from "react";

export const MyState = () => {
  const [mySign, setMySign] = useState("---");

  return (
    <>
      <h1>My zodiac sign is: {mySign}</h1>
      <input type="text" onChange={(e) => setMySign(e.target.value)} />
    </>
  );
};
