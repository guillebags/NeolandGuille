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

  addListeners();
};

const addListeners = () => {
  const buttons = document.querySelectorAll(".answerButton");
  buttons.forEach((answer) => {
    let attribute = answer.getAttribute("iscorrect");
    answer.addEventListener("click", () => {
      if (attribute == "true") {
        answer.style.background = "#419b45";
        answer.setAttribute("disabled", "");
        buttons.forEach((answer) => {
          answer.setAttribute("disabled", "");
        });
      } else {
        answer.style.background = "#eb0004";
        buttons.forEach((answer) => {
          answer.setAttribute("disabled", "");
        });
      }
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
  document.querySelector("main").innerHTML = template();

  const startButtonQuiz = document.getElementById("startButtonQuiz");
  startButtonQuiz.addEventListener("click", () => {
    PrintQuizSpinner();
    dataGetter();
  });
};

//? document.getElementById("questionPokemon").innerHTML = "";
