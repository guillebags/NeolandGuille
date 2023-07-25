import { PrintQuiz } from "../../components";
import { dataPokemon } from "../../utils";
import { PrintQuizSpinner } from "../../components/QuizSpinner/QuizSpinner";
import "./quiz.css";

const template = () => `<div id="quizContainer">
  <div id="spinner"></div>
  <div id="startButtonContainer">
    <button type="button" id="startButtonQuiz">Get Started!</button>
  </div>
  <div id="question"></div>
  <div id="answer"></div>
</div> `;

const dataGetter = async () => {
  const getData = await dataPokemon();

  const { pokemonData } = getData;

  PrintQuiz(pokemonData);

  //   addListeners();
};

// const addListeners = () => {};

export const PrintQuizPage = () => {
  document.querySelector("main").innerHTML = template();

  const startButtonQuiz = document.getElementById("startButtonQuiz");
  startButtonQuiz.addEventListener("click", () => {
    PrintQuizSpinner();
    dataGetter();
  });
};
