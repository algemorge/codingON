import { useState } from 'react';
import React from 'react';

function TestComponent3() {
   const [text, setText] = useState("검정색 글씨");
   const [color, setColor] = useState("black");
   const Red = () => {
      setColor("red")
      setText("빨간색 글씨")
   }
   const Blue = () => {
      setColor("blue")
      setText("파란색 글씨")
   }
   return (
      <>
         <div style={{ color: color }}>
            <h5>{text}</h5>
            <button onClick={Red}>빨간색</button>
            <button onClick={Blue}>파란색</button>
         </div >
      </>
   )
}

export default TestComponent3;