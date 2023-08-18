import React from "react";
import "./More.css";

const More = ({ languages, habilities, volunteer }) => {
  const { language, wrlevel, splevel } = languages;

  return (
    <div className="more">
      <section className="languages">
        <h3>Languages</h3>

        <p>{language}</p>
        <p>✏️ {wrlevel}</p>
        <p>💬 {splevel}</p>
      </section>
      <section className="habilities">
        <h3>Habilities</h3>
        <ul>
          {habilities.map((item) => {
            return <li key={JSON.stringify(item)}>{item}</li>;
          })}
        </ul>
      </section>
      <section className="volunteer">
        {volunteer.map((item) => {
          const { name, where, description } = item;
          return (
            <div key={JSON.stringify(item)}>
              <h4>🕊️ {name}</h4>
              <h5>{where}</h5>
              <p>{description}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default More;
