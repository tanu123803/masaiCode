import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import counter from './Components/Counter'
import togglebutton from './Components/Togglebutton'



function App() {
  

  return (
    <>
    <Routes>
      <Route path='/Home'/ element={<Home/>}>
      <Route path='/counter'/ element={<counter/>}>
      <Route path='/togglebutton'/ element={<togglebutton/>}>
      
    </Routes>
      
    </>
  )
}

export default App
