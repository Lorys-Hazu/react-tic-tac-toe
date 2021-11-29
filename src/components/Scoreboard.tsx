import { useEffect, useState } from "react";
import { BoardType, findUrl, getNextPlayer, getWinner, isFinished, PlayerSkinType, PlayerType, skinURL } from "../tictactoe";

type SBProps = {
    board: BoardType;
    skins: PlayerSkinType;
}

export const Scoreboard = ({board, skins}:SBProps) => {

    const [pOneScore, setp1Score] = useState(0)
    const [pTwoScore, setp2Score] = useState(0)

    const checkWinner = () => {
        getWinner(board) 
        && (getWinner(board) === 1 ? setp1Score(pOneScore + 1) : setp2Score(pTwoScore + 1))
    }

    useEffect(checkWinner, board)

    return (
        <>
            <div>
                <img className="SBIcon" src={findUrl(skins[1])} alt={"Player 1 skin is a " + skins[1]} />
                <p>{`wins: ${pOneScore}`}</p>
            </div>
            <h1>
                {getWinner(board) ? `player ${getWinner(board)} wins` : isFinished(board) ? "It's a draw" : <img className="SBIcon" src={findUrl(skins[getNextPlayer(board)])}/>}
            </h1>
            <div>
                <img className="SBIcon" src={findUrl(skins[2])} alt={"Player 1 skin is a " + skins[2]}/>
                <p>{`wins: ${pTwoScore}`}</p>
            </div>
        </>
    )
}