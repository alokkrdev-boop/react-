import { useState } from "react";

function Ludoboard() {
    const [moves, setMoves] = useState({
        blue: 0,
        yellow: 0,
        green: 0,
        red: 0,
    });

    let [arr, setArr] =useState(["no moves"]);

    function updateBlue() {
        setMoves(prev => ({ ...prev, blue: prev.blue + 1 }));
        arr.push("blue moves");
        setArr(arr);
    }

    function updateYellow() {
        setMoves(prev => ({ ...prev, yellow: prev.yellow + 1 }));
    }

    function updateGreen() {
        setMoves(prev => ({ ...prev, green: prev.green + 1 }));
    }

    function updateRed() {
        setMoves(prev => ({ ...prev, red: prev.red + 1 }));
    }

    return (
        <div>
            <p>Game begins</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>

                <p>Yellow moves = {moves.yellow}</p>
                <button style={{ backgroundColor: "yellow", color: "black" }} onClick={updateYellow}>+1</button>

                <p>Green moves = {moves.green}</p>
                <button style={{ backgroundColor: "green" }} onClick={updateGreen}>+1</button>

                <p>Red moves = {moves.red}</p>
                <button style={{ backgroundColor: "red" }} onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}

export { Ludoboard };
