import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";

 export default function DataComponent(){
    const{state,fetchData}=useContext(DataContext)

    return(
        <div>
            <button onClick={fetchData}>fetchData</button>
            {state.loading&&<p>loading.....</p>}
            {state.error&&<p>error:{state.error}</p>}
            {state.data&&state.data.map(post=> <p key={post.id}>{post.title}{post.image}</p>)}
        </div>

    )
}