import { useState } from 'react'
import Increment from './Counter/Increment'
import Decrement from './Counter/decrement'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>{count}</h1>
       <Increment count={count} setCount={setCount} />
     
      <Decrement count={count} setCount={setCount}/>
    </div>
      
    </>
  )
}

export default App
