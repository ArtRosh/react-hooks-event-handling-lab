// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe () {
    function eyesOnMe (){
        console.log("Good!")
    }

    function whenBlur () {
        console.log("Hey! Eyes on me!")
    }
    return (
        <button
        onFocus={eyesOnMe}
        onBlur={whenBlur}
        >"Eyes on me"</button>
    )
}

export default EyesOnMe;
