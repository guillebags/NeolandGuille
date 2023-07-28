//imports

const template = `
<div id="ticPageContainer">
    <h2>Tic Tac Toe</h2>
    <div id="chooseContainer"></div>
    <div id="boardTic">
        <button></button><button></button><button></button><button></button><button></button><button></button><button></button><button></button><button></button>
    </div>
</div>
`;

export const PrintTicTacToe = () => {
  document.querySelector("main").innerHTML = "";
  document.querySelector("#app").innerHTML = template();
};
