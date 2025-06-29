import { useEffect,useState } from "react"



function Counter(){
    const[count,setCount]=useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1)
        },1000)
    },[])

    return(
        <h1>Count:{count}</h1>
    )
}

export default Counter