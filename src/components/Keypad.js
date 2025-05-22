// Code Keypad Component Here
import React from "react";

function Keypad (){
    function inputData () {
        console.log("Entering password...")
    }
    return(
        <input 
        type="password" 
        onChange={inputData}
        onClick={inputData}
        />
    )
}

export default Keypad;
