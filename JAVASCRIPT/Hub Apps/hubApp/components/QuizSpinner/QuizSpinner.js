import "./QuizSpinner.css";

const template =
  () => `<div id="loadingDiv"><span>Get ready...</span><div class="lds-ellipsis">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div></div> `;
export const PrintQuizSpinner = () => {
  document.getElementById("startButtonContainer").innerHTML = "";
  document.getElementById("spinner").innerHTML = template();
};
