const players = [
  {
    name: "psyduck",
    src: "https://res.cloudinary.com/dluwybogp/image/upload/v1690555451/Pokemon_Go-39_icon-icons.com_67619_ldtpl2.png",
  },
  {
    name: "nidorina",
    src: "https://res.cloudinary.com/dluwybogp/image/upload/v1690555450/Pokemon_Go-29_icon-icons.com_67608_kkyzyu.png",
  },
  {
    name: "nidorino",
    src: "https://res.cloudinary.com/dluwybogp/image/upload/v1690555450/Pokemon_Go-30_icon-icons.com_67610_cn2sh1.png",
  },
  {
    name: "sandshrew",
    src: "https://res.cloudinary.com/dluwybogp/image/upload/v1690555450/Pokemon_Go-28_icon-icons.com_67623_cicvp2.png",
  },
  {
    name: "bulbasaur",
    src: "https://res.cloudinary.com/dluwybogp/image/upload/v1690555449/Pokemon_Go-21_icon-icons.com_67626_cwuqvw.png",
  },
  {
    name: "squirtle",
    src: "https://res.cloudinary.com/dluwybogp/image/upload/v1690555449/Pokemon_Go-23_icon-icons.com_67622_xo4rj0.png",
  },
  {
    name: "charmander",
    src: "https://res.cloudinary.com/dluwybogp/image/upload/v1690555449/Pokemon_Go-22_icon-icons.com_67617_myfgxx.png",
  },
  {
    name: "caterpie",
    src: "https://res.cloudinary.com/dluwybogp/image/upload/v1690555450/Pokemon_Go-12_icon-icons.com_67629_h6obz5.png",
  },
];

const checkWin = (ticButtons) => {
  let winPosition = 0;

  const firstRow =
    Number(ticButtons[0].value) +
    Number(ticButtons[1].value) +
    Number(ticButtons[2].value);
  const secondRow =
    Number(ticButtons[3].value) +
    Number(ticButtons[4].value) +
    Number(ticButtons[5].value);
  const thirdRow =
    Number(ticButtons[6].value) +
    Number(ticButtons[7].value) +
    Number(ticButtons[8].value);
  const firstColumn =
    Number(ticButtons[0].value) +
    Number(ticButtons[3].value) +
    Number(ticButtons[6].value);
  const secondColumn =
    Number(ticButtons[1].value) +
    Number(ticButtons[4].value) +
    Number(ticButtons[7].value);
  const thirdColumn =
    Number(ticButtons[2].value) +
    Number(ticButtons[5].value) +
    Number(ticButtons[8].value);
  const firstDiag =
    Number(ticButtons[0].value) +
    Number(ticButtons[4].value) +
    Number(ticButtons[8].value);
  const secondDiag =
    Number(ticButtons[2].value) +
    Number(ticButtons[4].value) +
    Number(ticButtons[6].value);

  if (firstRow == 3) {
    winPosition = 1;
  }
  if (firstRow == -3) {
    winPosition = -1;
  }

  if (secondRow == 3) {
    winPosition = 2;
  }
  if (secondRow == -3) {
    winPosition = -2;
  }

  if (thirdRow == 3) {
    winPosition = 3;
  }
  if (thirdRow == -3) {
    winPosition = -3;
  }

  if (firstColumn == 3) {
    winPosition = 4;
  }
  if (firstColumn == -3) {
    winPosition = -4;
  }

  if (secondColumn == 3) {
    winPosition = 5;
  }
  if (secondColumn == -3) {
    winPosition = -5;
  }

  if (thirdColumn == 3) {
    winPosition = 6;
  }
  if (thirdColumn == -3) {
    winPosition = -6;
  }

  if (firstDiag == 3) {
    winPosition = 7;
  }
  if (firstDiag == -3) {
    winPosition = -7;
  }

  if (secondDiag == 3) {
    winPosition = 8;
  }
  if (secondDiag == -3) {
    winPosition = -8;
  }

  return winPosition;
};

const playerWin = () => {
  document.getElementById("ticText").innerText = "You win!";

  const ticButtons = Array.from(document.getElementsByClassName("ticButton"));

  ticButtons.forEach((button) => {
    button.disabled = true;
  });
};

const iaWin = () => {
  document.getElementById("ticText").innerText = "Psyduck wins!";

  const ticButtons = Array.from(document.getElementsByClassName("ticButton"));

  ticButtons.forEach((button) => {
    button.disabled = true;
  });
};

const checkEnd = (placed) => {
  if (placed === 8) {
    document.getElementById("ticText").innerText = "Nobody wins!";
  }
};

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const iaMove = (ticButtons, placed) => {
  let positionIa = getRandom(0, 8);
  if (placed < 8) {
    while (
      ticButtons[positionIa].classList.contains("iaClicked") ||
      ticButtons[positionIa].classList.contains("clicked")
    ) {
      positionIa = getRandom(0, 8);
    }

    ticButtons[positionIa].classList.add("iaClicked");
    ticButtons[
      positionIa
    ].style.background = `#eef0f2b4 url("https://res.cloudinary.com/dluwybogp/image/upload/v1690555451/Pokemon_Go-39_icon-icons.com_67619_ldtpl2.png") center`;
    ticButtons[positionIa].style.backgroundSize = "contain";

    ticButtons[positionIa].value = -1;

    const ticButtonsForIa = Array.from(
      document.getElementsByClassName("ticButton")
    );
    let possibleIaWin = checkWin(ticButtonsForIa);

    if (possibleIaWin < 0) {
      tictactoeService.iaWin();
    }
  }
};

const playerMove = (clickedButton) => {
  if (
    !clickedButton.classList.contains("iaClicked") &&
    !clickedButton.classList.contains("clicked")
  ) {
    clickedButton.classList.add("clicked");
    clickedButton.style.background = `#eef0f2b4 url(${players[1].src}) center`;
    clickedButton.style.backgroundSize = "contain";

    clickedButton.value = 1;
  }
  const ticButtons = Array.from(document.getElementsByClassName("ticButton"));

  let possibleWin = checkWin(ticButtons);

  if (possibleWin > 0) {
    tictactoeService.playerWin();
  }
};

export const tictactoeService = {
  checkWin,
  playerWin,
  iaWin,
  checkEnd,
  iaMove,
  playerMove,
};
