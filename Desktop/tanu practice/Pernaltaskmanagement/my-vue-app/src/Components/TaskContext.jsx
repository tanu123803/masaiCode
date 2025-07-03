import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const TaskContext= createContext()
 export function TaskProvider({Children}){
    const [task,setTask]=useState([])

    useEffect(()=>{
        setTimeout(()=>{
            setTask([
                {id:1,title:sampletask,discription:ExampleTask,completed:false}
                

            ])


        },1000)
    },[])
    return(
        <>
        <input type="text" />
        <input type="text" />
        <button>Add Task</button>
        </>

    )
}
