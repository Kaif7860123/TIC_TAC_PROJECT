let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let turnO = true;
let msgContainer = document.querySelector(".msg-container");
let wins = document.querySelector(".win");
let newGame = document.querySelector(".newGame-btn");
let winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "x";
      turnO = false;
    } else {
      box.innerHTML = "o";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const showWinner = (val) => {
  wins.innerHTML = " congratulation  winner is " + val;
  msgContainer.classList.remove("hide");
  disabledbtn();
};
const disabledbtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enabledbtn = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};
const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};
reset.addEventListener("click", () => {
  turnO = true;
  enabledbtn();
  msgContainer.classList.add("hide");
});
newGame.addEventListener("click", () => {
  turnO = true;
  enabledbtn();
  msgContainer.classList.add("hide");
});
