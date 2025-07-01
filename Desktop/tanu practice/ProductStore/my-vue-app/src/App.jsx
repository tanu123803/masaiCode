import { useState } from 'react'
import Productdetails from './Components/Product'
import { Route, Routes } from 'react-router-dom'


function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Productdetails/>}/>
    </Routes>
    </>
  )
}

export default App
