import React, { useState } from 'react';
import './TicTacToe.css';

function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const handleClick = (index) => {
        if (board[index] || calculateWinner(board)) return;
        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const calculateWinner = (board) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let line of lines) {
            const [a, b, c] = line;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        if (board.every((square) => square !== null)) {
            return 'Draw'; // Return 'Draw' if the board is full and no winner
        }
        return null;
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };

    const winner = calculateWinner(board);
    const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

    return (
        <div className="container" style={{ minHeight: '100vh' }}>
            <div className="col-md-12 text-section">
                <h1 className="mt-5">TicTacToe</h1>
                <p>{status}</p>
                <button
                    onClick={resetGame}
                    className="btn btn-reset"
                    style={{
                        backgroundColor: '#ff0000',
                        marginTop: '10px',
                        color: '#ffffff',
                        marginLeft: '10px',
                    }}
                >
                    Reset Game
                </button>
            </div>
            <div className="board">
                {board.map((value, index) => (
                    <div key={index} className="square" onClick={() => handleClick(index)}>
                        {value}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TicTacToe;