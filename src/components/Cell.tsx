import { BoardType, CellType, findUrl, play, PlayerSkinType } from "../tictactoe"

type cellProps = {
    board: BoardType;
    setBoard: Function;
    x: number;
    y: number;
    content: CellType;
    skins: PlayerSkinType;
}

export const Cell = ({board, setBoard, x, y, content, skins}:cellProps) => {
    return (
        <td onClick={() => setBoard(play(board, x, y))} >
    {content === 1 
    ? <img className="cellIcon" src={findUrl(skins[1])} alt="" />
    : content === 2 
    ? <img className="cellIcon" src={findUrl(skins[2])} alt="" />  : null}
  </td>
    )
}