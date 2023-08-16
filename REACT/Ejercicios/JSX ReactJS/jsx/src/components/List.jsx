import React from "react";

const List = ({ question, answer }) => {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        <li>{answer}</li>
        <li>{answer}</li>
        <li>{answer}</li>
      </ul>
    </div>
  );
};

export default List;
