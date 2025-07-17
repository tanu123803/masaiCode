import React, { useEffect, useState } from "react";

function Home(){
    const [state,setState]=useState([]);
    const[data,setData]=useState([]);
    const [error,seterror]=useState([])

    async function fetchdata(){
        try {
            const response=await fetch(`limit=10&skip=(page‑1)*10`)
            const result=await response.json()
            setData(result)
            
        } catch (error) {
            seterror(error"having issue with fetching the data")
            
        }
    }
    useEffect(()=>{
        fetchdata()
    },[])



    return(
        <>
        <h1>course catolouge</h1>
        <div key={card.id}>
            <p>{card.title}cousre title  </p>
            <p>{card.price}</p>
        </div>
        <button onClick={handleClick}>Add button</button>
        </>

    )
}

export default Home