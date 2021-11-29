import { BoardType, PlayerSkinType } from "../tictactoe"
import { Cell } from "./Cell"

type boardProps = {
    board: BoardType;
    setBoard: Function;
    skins: PlayerSkinType;
}

export const Board = ({board, setBoard, skins}: boardProps) => {
    return (
        <table>
            <tbody>
                {
                    board.map((row, y) => (
                        <tr key={y}>
                            {
                                row.map((cell,x) => (
                                    <Cell key={`${x}.${y}`} board={board} setBoard={setBoard} x={x} y={y} content={cell} skins={skins}/>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}