import "./Spinner.css";

const template = () => `<div class="lds-ellipsis">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div> `;
export const PrintSpinner = () => {
  document.getElementById("spinner").innerHTML = template();
};
