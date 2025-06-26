import { useState } from 'react'
import ToggleButton from './ToggleButton/togglebutton';


function App() {
  
  

  return (
    <>
    <ToggleButton/>
    <ToggleButton label="Wi-Fi" />
      <ToggleButton label="Bluetooth" />
      <ToggleButton label="Dark Mode" />
      
    </>
  )
}

export default App
