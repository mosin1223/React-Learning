import { useState } from "react";

function Ludo(){
    let [moves , setmoves] = useState({blue:0 , red:0 , yellow:0 , green:0});
    let updateBlue = () => {
        return setmoves({...moves , blue : moves.blue + 1})
    }
    let updateYellow = () => {
        return setmoves({...moves , yellow : moves.yellow + 1})
    }
    let updateGreen = () => {
        return setmoves({...moves , green : moves.green + 1})
    }
    let updateRed = () => {
        return setmoves({...moves , red : moves.red + 1})
    }
    return(
        <div>
            <h1>Ludo Game</h1>

            <div> 
                <p>BLUE = {moves.blue}</p>
                <button style={{backgroundColor : "blue"}} onClick={updateBlue}>+1</button>
                <p>YELLOW = {moves.yellow}</p>
                <button style={{backgroundColor : "yellow" }} onClick={updateYellow}>+1</button>
                <p>GREEN = {moves.green}</p>
                <button style={{backgroundColor : "green"}} onClick={updateGreen}>+1</button>
                <p>RED   = {moves.red}</p>
                <button style={{backgroundColor : "red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
        
    );
}
export default Ludo;