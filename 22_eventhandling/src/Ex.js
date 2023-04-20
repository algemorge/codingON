import React from 'react';
import { useState } from 'react'

// 클래스 ver.
// class Ex extends React.Component {
//    state = {
//       text: "Hello Wolrd!"
//    };

//    greet = () => {
//       this.setState({ text: 'goodbye world' })
//    }

//    render() {
//       const { text } = this.state;

//       return (
//          <div>
//             <h1>{text}</h1>
//             <button onClick={() => this.greet()}>클릭</button>
//          </div>
//       )
//    }
// }

// 함수 ver.
// const Ex = () => {
//    // const [text, setText] = useState()
//    // const greetToggle = () => {
//    //    setText('Goodbye JS')
//    // }

//    const [visible, setVisible] = useState()
//    const toggle = () => {
//       setVisible(!visible)
//    }
//    return (
//       <>
//          {/* <h1>{text}</h1> */}
//          {/* <button onClick={greet}>클릭</button> */}
//          <h1>{visible && 'Hello JS' || 'Bye JS'}</h1>
//          <button onClick={toggle}>클릭</button>
//       </>
//    )
// }


// toggle 문제 연습
const Hello = () => {
   const [visible, setVisible] = useState(true)
   const toggle = () => {
      setVisible(!visible)
   }
   return (
      <>
         <button onClick={toggle}>{visible ? '사라져라' : '보여라'}</button>
         <h1>{visible && '안녕하세요'}</h1>
      </>
   )
}

export default Hello;