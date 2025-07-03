import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home'
import  { TaskProvider } from './Components/TaskContext'




function App() {
 

  return (
    <>
    <Navbar/>
    <TaskProvider/>
    <Routes>
      <Route key={"/"} element={<TaskContext/>}/>
      <Route key={"/About"} element={<About/>}/>
      <Route key={"/Home"} element={<TaskContext/>}/>
      <Route key={"/TaskContext"} element={<TaskContext/>}/>
    </Routes>
      
      
      
    </>
  )
}

export default App
