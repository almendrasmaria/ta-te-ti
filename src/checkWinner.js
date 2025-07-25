export const checkWinner = (board) => {
  for (let combo of winCombos) {
    const [pos1, pos2, pos3] = combo;
    if (
      board[pos1] &&
      board[pos1] === board[pos2] &&
      board[pos1] === board[pos3]
    ) {
      return board[pos1];
    }
  }
  return null;
};

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
