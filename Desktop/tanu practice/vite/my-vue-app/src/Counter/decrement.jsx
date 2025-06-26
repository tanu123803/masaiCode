import React from "react";

function Decrement({ count, setCount }){
    return(
        <div>
           
            <button onClick={()=>setCount(count-1)}  disabled={count <= 0}>Decrement</button>
        </div>
        
        

    )
}

export default Decrement