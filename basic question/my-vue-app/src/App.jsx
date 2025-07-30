import { useState } from 'react'
import './App.css'
import DataComponent from './Components/DataComponent'
import { DataProvider } from './context/DataProvider'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'

function App() {
  

  return (
    <>
    <h1>helloe from react</h1> 
    <DataProvider>
       <DataComponent/>
    </DataProvider>
    <ProductList/>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
   
    </>
  )
}

export default App
