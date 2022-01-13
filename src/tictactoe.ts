export type PlayerType = 1 | 2;
export type PlayerSkinType = {
    1: string,
    2: string
}
export type CellType = PlayerType | null;
export type RowType = CellType[];
export type BoardType = RowType[];

export const skinList = [
    "circle",
    "cross",
    "triangle",
    "square"
]
export const skinURL = [ 
        ["circle","https://cdn-icons.flaticon.com/png/512/597/premium/597669.png?token=exp=1642107192~hmac=dca5e0e4b1d603dc95bba41430aca7c9"],
        ["cross", "https://cdn-icons-png.flaticon.com/512/748/748122.png"],
        ["triangle","https://cdn-icons-png.flaticon.com/512/481/481099.png"],
        ["square", "https://cdn-icons-png.flaticon.com/512/545/545666.png"]
]

export const findUrl = (name: string) => skinURL.filter(skin => skin[0] === name)[0][1]

export const defaultSkins: PlayerSkinType = {
    1: skinList[0],
    2: skinList[1]
}

export const initialState: BoardType = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

export function getWinner(board: BoardType): PlayerType | null {
  const rows = board;
  const columns = [
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]]
  ];
  const diagonals = [
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]]
  ];

  const getOwner = (cells: CellType[]): PlayerType | null =>
    cells.every((cell) => cell === cells[0] && cell !== null) ? cells[0] : null;

  const owners = [...rows, ...columns, ...diagonals]
    .map(getOwner)
    .filter((owner) => owner !== null);

  return owners.length === 0 ? null : owners[0];
}

export function isFinished(board: BoardType): boolean {
    return !board[0].includes(null) && !board[1].includes(null) && !board[2].includes(null)
}

function isValidMove(board: BoardType, x: number, y: number): boolean {
  return board[y][x] === null;
}

function isEven(number: number): boolean {
  return number % 2 === 0;
}

export function getNextPlayer(board: BoardType): PlayerType {
  const emptyCellCount = board
    .map((row) => row.filter((cell) => cell === null).length)
    .reduce((sum, count) => sum + count);

  return isEven(emptyCellCount) ? 2 : 1;
}

function playMove(board: BoardType, x: number, y: number): BoardType {
  const nextPlayer = getNextPlayer(board);

  return board.map((row, rowY) =>
    rowY === y
      ? row.map((cell, cellX) => (cellX === x ? nextPlayer : cell))
      : row
  );
}

export function play(board: BoardType, x: number, y: number): BoardType {
  const winner = getWinner(board);
  const isValid = isValidMove(board, x, y);

  return !winner && isValid ? playMove(board, x, y) : board;
}
