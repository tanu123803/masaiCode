import { useState ,useDispatch,useSelector} from 'react'
import { increment } from './features/Counter/counterSlice';
import { decrement } from './features/Counter/counterSlice';

function App() {
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();

  function handleIncrementClick(){
    dispatch(increment)

  }
  function handledeecrementClick(){
    dispatch(decrement)

  }
  
  return (
    <>
      
      <div>
        <button onClick={handleIncrementClick}>increment</button>
        <p>Count:{count}</p>
        <button onClick={handledeecrementClick}>decrement</button>
      </div>
    </>
  )
}

export default App
