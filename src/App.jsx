import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementAsync, incrementByAmount } from './store/reducers/counterSlice';



function App() {

  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();



  return (
    <div className='text-center'>
      <h1>
        counter : {value}
      </h1>

      <div className='text-center'>
        <button onClick={() => dispatch(increment())} className='border-2 rounded bg-transparent px-4 py-2 border-cyan-500 mx-5'>Increment</button>
        <button onClick={() => dispatch(decrement())} className='border-2 rounded bg-transparent px-4 py-2 border-red-500'>Decrement</button>
        <button onClick={() => dispatch(incrementAsync(-5))} className='border-2 rounded bg-transparent px-4 py-2  border-green-500 mx-5'>Increment by 5</button>

      </div>
    </div>
  )
}

export default App
