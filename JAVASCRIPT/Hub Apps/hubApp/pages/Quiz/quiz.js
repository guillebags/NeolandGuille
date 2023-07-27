import { PrintQuiz } from "../../components";
import { dataPokemon, printEndQuiz } from "../../utils";
import { PrintQuizSpinner } from "../../components/QuizSpinner/QuizSpinner";

import "./quiz.css";

const template = () => `<div id="quizContainer">
  <div id="quizSpinner"></div>
  <div id="startButtonContainer">
    <button type="button" id="startButtonQuiz"><h2>Get Started!</h2></button>
  </div><div id="quizActive">
  <div id="question"></div>
  <div id="answer"></div></div>
</div> `;

export const dataGetter = async () => {
  const getData = await dataPokemon();

  const { pokemonData } = getData;

  PrintQuiz(pokemonData);

  addListeners();
};

let counter = 0;
let counterTrue = 0;

const addListeners = () => {
  const buttons = document.querySelectorAll(".answerButton");
  buttons.forEach((answer) => {
    let attribute = answer.getAttribute("iscorrect");
    answer.addEventListener("click", () => {
      counter++;
      if (attribute == "true") {
        counterTrue++;
        answer.style.background = "#c9e8cb";
        answer.setAttribute("disabled", "");
        buttons.forEach((answer) => {
          answer.setAttribute("disabled", "");
        });
      } else {
        answer.style.background = "#ffb3b3";
        buttons.forEach((answer) => {
          answer.setAttribute("disabled", "");
        });
        let correctAnswer = document.querySelector('[iscorrect="true"]');
        correctAnswer.style.border = "5px solid #a6d9a9";
      }
      counter === 5 &&
        setTimeout(() => {
          printEndQuiz(counter, counterTrue);
        }, 1000);
    });
  });
  const tryAgainButton = document.getElementById("nextQuestion");
  tryAgainButton.addEventListener("click", () => {
    document.getElementById("question").innerHTML = "";
    document.getElementById("answer").innerHTML = "";
    document.getElementById("buttonContainer").innerHTML = "";
    PrintQuizSpinner();
    dataGetter();
  });
};

export const PrintQuizPage = () => {
  counterTrue = 0;
  counter = 0;
  document.querySelector("main").innerHTML = "";
  document.querySelector("main").innerHTML = template();

  const startButtonQuiz = document.getElementById("startButtonQuiz");
  startButtonQuiz.addEventListener("click", () => {
    PrintQuizSpinner();
    dataGetter();
  });
};

//? document.getElementById("questionPokemon").innerHTML = "";
