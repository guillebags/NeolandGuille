import React from "react";
import ButtonFilter from "../ButtonFilter/ButtonFilter";

const FilterDiv = ({ onClick }) => {
  return (
    <div className="btnFilter">
      <ButtonFilter
        value="gryffindor"
        className="btnGryf"
        onClick={onClick}
        text="Gryffindor"
      />
      <ButtonFilter
        value="ravenclaw"
        className="btnRave"
        onClick={onClick}
        text="Ravenclaw"
      />
      <ButtonFilter
        value="slytherin"
        className="btnSlyt"
        onClick={onClick}
        text="Slytherin"
      />
      <ButtonFilter
        value="hufflepuff"
        className="btnHuff"
        onClick={onClick}
        text="Hufflepuff"
      />
    </div>
  );
};

export default FilterDiv;
