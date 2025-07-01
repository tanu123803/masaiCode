import { useState } from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar'
import { Route,Routes } from 'react-router-dom'


function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
 
    </>
  )
}

export default App
