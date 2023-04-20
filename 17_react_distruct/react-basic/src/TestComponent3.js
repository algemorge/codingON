import { useState } from 'react';
import React from 'react';

// 내 풀이 
// function TestComponent3() {
//    const [text, setText] = useState("검정색 글씨");
//    const [color, setColor] = useState("black");
//    const Red = () => {
//       setColor("red")
//       setText("빨간색 글씨")
//    }
//    const Blue = () => {
//       setColor("blue")
//       setText("파란색 글씨")
//    }
//    return (
//       <>
//          <div style={{ color: color }}>
//             <h5>{text}</h5>
//             <button onClick={Red}>빨간색</button>
//             <button onClick={Blue}>파란색</button>
//          </div >
//       </>
//    )
// }

// 풀이 2
const TestComponent3 = () => {
   const [state, setState] = useState({
      color: 'black',
      text: '검정색 글씨'
   })

   const onClickRed = () => {
      setState({
         color: 'red',
         text: '빨간색 글씨'
      })
   }

   const onClickBlue = () => {
      setState({
         color: 'red',
         text: '빨간색 글씨'
      })
   }
   return (
      <>
         <h1 style={{ color: state.color }}>{state.text}</h1>
         <button onClick={onClickRed}>빨간색</button>
         <button onClick={onClickBlue}>파란색</button>
      </>
   );
}



// 풀이 1
// const TestComponent3 = () => {
//    const [color, setColor] = useState('black')
//    const [text, setText] = useState('검정색 글씨')

//    const onClickRed = () => {
//       setText('빨간색 글씨')
//       setColor('red')
//    }
//    const onClickBlue = () => {
//       setText('빨간색 글씨')
//       setColor('blue')
//    }
//    return (
//       <>
//          <h1 style={{ color: color }}>{text} </h1>
//          <button onClick={onClickRed}>빨간색 글씨</button>
//          <button onClick={onClickBlue}>파란색 글씨</button>
//       </>
//    )
// }

export default TestComponent3;