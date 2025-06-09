import React from "react";
import { useState } from "react";
async function Fetchdata(){
    const[user,setUser]=useState("user")
    return(
        try {
        const response=await(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
        const result=await response.json()
        setUser(result)
        console.log(result)

        
        
    } catch (error) {
        console.log("error occured")
        
    }

    )
    
}
export default Fetchdata