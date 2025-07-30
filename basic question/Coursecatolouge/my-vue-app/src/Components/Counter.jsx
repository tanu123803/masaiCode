import React from "react";
import { useState } from "react";

function counter(){
    const[count,setCount]=useState(0)

    const handleIncrement()=>{
        count=count+1
    }
    const handledecrement(){
        count=count-1
    }
    const hsndlereset(){
        count=0
    }

    return(
        <>
        <button onClick={handleIncrement}> increment</button>
        <button onClick={handledecrement}>decrement</button>
        <button onClick={handlreset}>reset</button>
        </>
    )
}
export default counter