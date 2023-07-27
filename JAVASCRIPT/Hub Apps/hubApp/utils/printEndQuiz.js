import JSConfetti from "js-confetti";
import { PrintQuizPage } from "../pages";
import { PrintQuizSpinner } from "../components/QuizSpinner/QuizSpinner";
import { PrintQuiz } from "../components";

const template = (counterTrue) => `
  <div id="endQuizContainer">
  <div id="score">
    <h2>
      ${
        counterTrue === 0
          ? `Ooops...`
          : counterTrue === 5
          ? `You're incredible!!`
          : `Well done!`
      }
    </h2>
    <h3>Score: ${counterTrue} / 5</h3>
    </div>
    <div id="restartContainer"><button id="playAgainButton">Play Again</button></div>
  </div>
`;

export const printEndQuiz = (counter, counterTrue) => {
  document.getElementById("quizActive").innerHTML = "";
  document.getElementById("quizContainer").innerHTML = template(counterTrue);
  if (counterTrue === 5) {
    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti();
  } else {
    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti({
      emojis: ["😭"],
    });
  }
  const playAgain = document.querySelector("#playAgainButton");
  playAgain.addEventListener("click", () => {
    console.log("entro play");
    counterTrue = 0;
    counter = 0;
    PrintQuizPage();
  });
};
