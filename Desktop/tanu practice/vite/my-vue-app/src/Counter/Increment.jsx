import React from "react";

function Increment({ count, setCount }){
    return(
        <button onClick={() => setCount(count + 1)}>increment</button>

    )
}
export default Increment


