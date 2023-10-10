const options = document.querySelectorAll("button");
let shift = 0;

const board = [];

window.addEventListener("DOMContentLoaded", pressButton);

function pressButton() {
  options.forEach((item, idx) =>
    item.addEventListener("click", (event) => pressedButton(event, idx))
  );
}

function pressedButton(event, pos) {
  let x = "X";
  let o = "O";
  let currentBtn = event.target;

  if (shift % 2 === 0) {
    currentBtn.style.backgroundColor = "pink";
    currentBtn.textContent = x;
    board[pos] = x;
    shift++;
  } else {
    currentBtn.style.backgroundColor = "#cf42fe";
    currentBtn.textContent = o;
    board[pos] = o;
    shift++;
  }


  const winner = validateGame();
  if (winner){
    swal.fire({
      title: 'Ganador:' + winner,
      width: '400px',
      padding: '3rem',
      color: 'pink'
    });
    options:forEach(item => item.disabled = true);
  }else if (shift === 9){
    swal.fire({
      title: 'Empate',
      width: '400px',
      padding: '3rem',
      color:'purple'
    });
  }
}
function validateGame() {
  if (board[0] === board[1] && board[0] === board[2] && board[0]) {
    return board[0];
  } else if (board[3] === board[4] && board[3] === board[5] && board[3]) {
    return board[3];
  } else if (board[6] === board[7] && board[6] === board[8] && board[6]) {
    return board[6];
  } else if (board[0] === board[3] && board[0] === board[6] && board[0]) {
    return board[0];
  } else if (board[1] === board[4] && board[1] === board[7] && board[1]) {
    return board[1];
  } else if (board[2] === board[5] && board[2] === board[8] && board[2]) {
    return board[2];
  } else if (board[0] === board[4] && board[0] === board[8] && board[0]) {
    return board[0];
  } else if (board[2] === board[4] && board[2] === board[6] && board[2]) {
    return board[2];
  } else return false
}

console.log(options);