import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../features/Counter/counterSlice';


const store = configureStore({
  reducer: {
    counter:counterReducer
  }
  
});

export default store;