import "./QuizSpinner.css";

const template = () => `<div id="loadingDivQuiz">
  <span>Get ready...</span>
  <div class="lds-ellipsisQuiz">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div> `;
export const PrintQuizSpinner = () => {
  document.getElementById("startButtonContainer").innerHTML = "";
  document.getElementById("quizSpinner").innerHTML = template();
};
