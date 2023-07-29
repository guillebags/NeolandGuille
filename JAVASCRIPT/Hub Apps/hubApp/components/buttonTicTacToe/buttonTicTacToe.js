import "./buttonTicTacToe.css";

export const PrintButtonTicTacToe = () => {
  let turn = 1;
  let players = [
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
  //   let token = [players[0], players[1]];
  let token = ["O", "X"];
  let placed = 0;

  let ticButtons = Array.from(document.getElementsByClassName("ticButton"));

  const setToken = (event) => {
    let clickedButton = event.target;

    const getClicked = (button) => {
      button.classList.add("clicked");
    };

    getClicked(clickedButton);

    const status = () => {
      let winPosition = 0;
      let winStatus = 0;

      const areEquals = (...args) => {
        values = args.map((button) => button.innerHTML);
        if (
          values[0] != "" &&
          values.every((button, i, arr) => button === arr[0])
        ) {
          args.forEach((button) => (button.style.backgroundColor = "green"));
          return true;
        } else {
          return false;
        }
      };
      if (areEquals(ticButtons[0], ticButtons[1], ticButtons[2])) {
        winPosition = 1;
      } else if (areEquals(ticButtons[3], ticButtons[4], ticButtons[5])) {
        winPosition = 2;
      } else if (areEquals(ticButtons[6], ticButtons[7], ticButtons[8])) {
        winPosition = 3;
      } else if (areEquals(ticButtons[0], ticButtons[3], ticButtons[6])) {
        winPosition = 4;
      } else if (areEquals(ticButtons[1], ticButtons[4], ticButtons[7])) {
        winPosition = 5;
      } else if (areEquals(ticButtons[2], ticButtons[5], ticButtons[8])) {
        winPosition = 6;
      } else if (areEquals(ticButtons[0], ticButtons[4], ticButtons[8])) {
        winPosition = 7;
      } else if (areEquals(ticButtons[2], ticButtons[4], ticButtons[6])) {
        winPosition = 8;
      }

      //quien ha ganado
      if (winPosition > 0) {
        turn == 1 ? (winStatus = 1) : (winStatus = -1);
      }
      return winStatus;
    };

    if (clickedButton.classList.contains("clicked")) {
      clickedButton.style.background = `#eef0f2b4 url(${players[1].src}) center`;
      clickedButton.style.backgroundSize = "contain";

      placed++;
      console.log("placed", placed);

      let roundStatus = status();

      if (roundStatus == 0) {
        changeTurn();
        if (placed < 9) {
          ia();
          roundStatus = status();
          placed++;
          changeTurn();
        }
      }

      if (roundStatus == 1) {
        PrintEndTicTacToe("win");
        isFinished = true;
      } else if (roundStatus == -1) {
        PrintEndTicTacToe("lost");
        isFinished = true;
      }

      const changeTurn = () => {
        turn == 1 ? (turn = 0) : (turn = 1);
      };

      const ia = () => {
        const getRandom = (min, max) => {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        let values = ticButtons.map((button) => button.innerHTML);
        let position = -1;

        if (values[4] == "") {
          position = 4;
        } else {
          let n = getRandom(0, ticButtons.length - 1);
          while (values[n] != "") {
            n = getRandom(0, ticButtons.length - 1);
          }
          position = n;
        }
        ticButtons[position].innerHTML = "O";
        //to do meter psyduck
        return position;
      };
    }
    /* if (clickedButton.innerHtml == "") {
      clickedButton.innerHtml = token[turn];
      //to do meter player.token
      placed++;

      let roundStatus = status();

      if (roundStatus == 0) {
        changeTurn();
        if (placed < 9) {
          ia();
          roundStatus = status();
          placed++;
          changeTurn();
        }
      }

      if (roundStatus == 1) {
        PrintEndTicTacToe("win");
        isFinished = true;
      } else if (roundStatus == -1) {
        PrintEndTicTacToe("lost");
        isFinished = true;
      }

      const changeTurn = () => {
        turn == 1 ? (turn = 0) : (turn = 1);
      };

      const ia = () => {
        const getRandom = (min, max) => {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        let values = ticButtons.map((button) => button.innerHTML);
        let position = -1;

        if (values[4] == "") {
          position = 4;
        } else {
          let n = getRandom(0, ticButtons.length - 1);
          while (values[n] != "") {
            n = getRandom(0, ticButtons.length - 1);
          }
          position = n;
        }
        ticButtons[position].innerHTML = "O";
        //to do meter psyduck
        return position;
      };

      const status = () => {
        let winPosition = 0;
        let winStatus = 0;

        const areEquals = (...args) => {
          let values = args.map(button, button.innerHTML);
          if (
            values[0] != "" &&
            values.every((button, i, arr) => button === arr[0])
          ) {
            args.forEach((button) => (button.style.backgroundColor = "green"));
            return true;
          } else {
            return false;
          }
        };
        if (areEquals(ticButtons[0], ticButtons[1], ticButtons[2])) {
          winPosition = 1;
        } else if (areEquals(ticButtons[3], ticButtons[4], ticButtons[5])) {
          winPosition = 2;
        } else if (areEquals(ticButtons[6], ticButtons[7], ticButtons[8])) {
          winPosition = 3;
        } else if (areEquals(ticButtons[0], ticButtons[3], ticButtons[6])) {
          winPosition = 4;
        } else if (areEquals(ticButtons[1], ticButtons[4], ticButtons[7])) {
          winPosition = 5;
        } else if (areEquals(ticButtons[2], ticButtons[5], ticButtons[8])) {
          winPosition = 6;
        } else if (areEquals(ticButtons[0], ticButtons[4], ticButtons[8])) {
          winPosition = 7;
        } else if (areEquals(ticButtons[2], ticButtons[4], ticButtons[6])) {
          winPosition = 8;
        }

        //quien ha ganado
        if (winPosition > 0) {
          turn == 1 ? (winStatus = 1) : (winStatus = -1);
        }
        return winStatus;
      };
    } */
  };

  ticButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      setToken(e);
    });
  });
};
