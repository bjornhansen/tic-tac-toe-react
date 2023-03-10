import {useState} from "react";
import Board from "@/components/Board";

const initialBoardState = [null, null, null, null, null, null, null, null, null];

export default function Game() {
    const [board, setBoard] = useState(initialBoardState);
    const [player, setPlayer] = useState(true);

    const winner = calculateWin(board);
    let winnerText;
    if (winner === true || winner === false) {
        winnerText = winner ? `Winner: player 1` : `Winner: player 2`;
    } else if (player) {
        winnerText = `Player 1's turn`;
    } else {
        winnerText = `Player 2's turn`;
    }

    function handleClick(number) {
        if (board[number] === null) {
            setBoard(board.map((e, i) => {
                if (i === number) {
                    const value = player ? 'X' : 'O';
                    setPlayer(!player);
                    return value;
                } else {
                    return e;
                }
            }));
        }
    }

    return (
        <>
            <Board board={board} handleClick={handleClick}></Board>
            <div>{winnerText}</div>
        </>
    )
}

function calculateWin(board) {
    // Horizontal win conditions.
    for (let i = 0; i < 7; i += 3) {
        if (board[i] === board[i + 1] && board[i + 1] === board[i + 2]) {
            if (board[i] === 'X') {
                return true;
            } else if (board[i] === 'O') {
                return false;
            }
        }
    }

    // Vertical win conditions.
    for (let i = 0; i < 3; i++) {
        if (board[i] === board[i + 3] && board[i + 3] === board[i + 6]) {
            if (board[i] === 'X') {
                return true;
            } else if (board[i] === 'O') {
                return false;
            }
        }
    }

    // Top left to bottom right diagonal.
    if (board[0] === board[4] && board[4] === board[8]) {
        if (board[0] === 'X') {
            return true;
        } else if (board[0] === 'O') {
            return false;
        }
    }

    // Top right to bottom left diagonal.
    if (board[2] === board[4] && board[4] === board[6]) {
        if (board[2] === 'X') {
            return true;
        } else if (board[2] === 'O') {
            return false;
        }
    }

    return null;
}