import { useState } from 'react'

function App() {
  const[user,setUser]=useState("john")
  return ( 
    <Parent user={user}/>
  )
}
function Parent({user}){
  return(
    <Child user={user}/>
  )
}
function Child({user}){
  return(
    <GrandChild user={user}/>
  )
}
function GrandChild({user}){
  return <h1>hello,{user}</h1>
}




export default App
