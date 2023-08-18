import { useState } from "react";
import "./App.css";
import { CV } from "./data/Cv";
import Hero from "./components/Hero/Hero";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import About from "./components/About/About";
import More from "./components/More/More";

const { hero, education, experience, languages, habilities, volunteer } = CV;

const App = () => {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <>
      <Hero hero={hero} />
      <About about={hero} />
      <button
        className="custom-btn btn4"
        onClick={() => setShowEducation(true)}
      >
        Education
      </button>
      <button
        className="custom-btn btn4"
        onClick={() => setShowEducation(false)}
      >
        Experience
      </button>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>

      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
      />
    </>
  );
};

export default App;
