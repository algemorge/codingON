import { useState } from 'react';
import React from 'react';

function TestComponent4() {
   const [display, setDisplay] = useState("block");
   return (
      <>
         <h2 style={{ display: display }}>안녕하세요</h2>
         <button onClick={() => { setDisplay("none") }}>사라져라</button>
      </>
   );
};

export default TestComponent4;