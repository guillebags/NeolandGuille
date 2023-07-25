import "./QuizPokemon.css";

export const PrintQuiz = (data) => {
  document.getElementById("spinner").innerHTML = "";

  const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const correctIndex = getRandom(0, 135);

  const getDifferentIndex = (excluded) => {
    let newIndex = getRandom(0, 135);
    while (excluded.includes(newIndex)) {
      newIndex = getRandom(0, 135);
    }
    return newIndex;
  };

  const incorrect1 = getDifferentIndex([correctIndex]);
  const incorrect2 = getDifferentIndex([correctIndex, incorrect1]);

  const correctPokemon = data[correctIndex];
  console.log(correctPokemon);
  const incorrectPokemon1 = data[incorrect1];
  const incorrectPokemon2 = data[incorrect2];
  const answersArray = [correctPokemon, incorrectPokemon1, incorrectPokemon2];
  console.log(answersArray);
  answersArray.sort((a, b) => (a.name < b.name ? -1 : 1));
  console.log(answersArray);
  const answerElements = answersArray.reduce(
    (acc, { name }) => acc + `<li><button>${name}</button></li>`,
    ""
  );

  const templateQuestion = `<figure id="questionPokemon">
    <img
      src=${correctPokemon.image}
      alt="Who's this pokemon?"
      class="questionImage"
    />
    <h2>Who's this pokemon?</h2>
  </figure> `;

  const templateAnswer = `
    <div id="answerContainer">
      <ul id="answerList">
        ${answerElements}
      </ul>
    </div>
  `;
  document.getElementById("question").innerHTML = templateQuestion;
  document.getElementById("answer").innerHTML = templateAnswer;
};
