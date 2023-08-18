import React from "react";
import "./About.css";

const About = ({ about }) => {
  const { aboutMe } = about;
  return (
    <div className="about">
      <h3>About me</h3>
      <ul>
        {aboutMe.map((item) => {
          return <li key={JSON.stringify(item)}>{item.info}</li>;
        })}
      </ul>
    </div>
  );
};

export default About;
