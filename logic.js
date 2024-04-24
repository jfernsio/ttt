let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg");
let newgame = document.querySelector("#newGame");
let msg = document.querySelector("#msg");
let turn0 = true; //player 0

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      //   console.log("print");
      box.innerText = "X";
      turn0 = false;
    } else {
      box.innerText = "O";
      turn0 = true;
    }
    box.disabled = true;

    Cwinner();
  });
});

const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add('hide');
  newgame.classList.add('hide');
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
     box.innerText = "";
    }

}

const disbaledoces = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const showWinner = (winner) => {
  msg.innerHTML = ` Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  newgame.classList.remove('hide');
  disbaledoces();
};

const Cwinner = () => {
  for (let patterns of winPattern) {
    let pos1val = boxes[patterns[0]].innerText;
    let pos2val = boxes[patterns[1]].innerText;
    let pos3val = boxes[patterns[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    }
  }
};

resetBtn.addEventListener('click',resetGame);
newgame.addEventListener('click',resetGame);