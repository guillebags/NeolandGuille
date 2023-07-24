import "./Spinner.css";

const template =
  () => `<div id="loadingDiv"><span>Loading Pokedex...</span><div class="lds-ellipsis">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div></div> `;
export const PrintSpinner = () => {
  document.getElementById("spinner").innerHTML = template();
};
