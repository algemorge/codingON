import { useState } from 'react';
import React from 'react';

function TestComponent2() {
   const [counter, setCounter] = useState(0);
   const Increase = () => {
      setCounter(counter + 1)
   }
   const Decrease = () => {
      setCounter(counter - 2)
   }
   return (
      <>
         <div>
            <h5>{counter}</h5>
            <button onClick={Increase}>증가</button>
            <button onClick={Decrease}>감소</button>
         </div >
      </>
   )

}

export default TestComponent2;