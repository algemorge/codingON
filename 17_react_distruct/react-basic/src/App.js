// import ClassComponent from "./ClassComponent";
// import FunctionComponent from "./FunctionComponent";
import './App.css'

import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import HiComponent from './HiComponent';
import TestComponent from './TestComponent';
import TestComponent2 from './TestComponent2';
import TestComponent3 from './TestComponent3';
import TestComponent4 from './TestComponent4';
function App() {
  const test = () => {
    console.log('콘솔체크');
  };
  return (
    <>
      {/* <ClassComponent name={'홍길동'} age={13} func={test} /> */}
      {/* <ClassComponent name="성춘향" age="11" /> */}
      {/* <ClassComponent /> */}
      {/* <FunctionComponent name="둘리" age="300" /> */}
      {/* <FunctionComponent /> */}
      {/* <HiComponent /> */}
      {/* <TestComponent /> */}
      {/* <TestComponent2 /> */}
      {/* <TestComponent3 /> */}
      <TestComponent4 />
    </>
  );
}

// 0418 실습
// function App() {
//   const name = '쿠키'
//   const animal = '강아지'
//   let a = 1;
//   let b = 0;

//   return (
//     // 문제 1
//     <div>
//       이것은 div 입니다.
//       <h3>
//         이것은  div 안에 있는 h3태그 입니다
//       </h3>

//       {/* 문제 2 */}
//       <h2>
//         제 반려 동물의 이름은 <u>{name}</u>입니다. <br />
//         <u>{name}</u>은 <u>{animal}</u>입니다.
//       </h2>

//       {/* 문제 3 */}
//       {3 + 5 === 8 ? "정답입니다!" : "오답입니다!"}

//       {/* 문제 4 */}
//       {a > b && <p>a 가 b 보다 큽니다</p>}

//       {/* 문제 5 */}
//       <div className="test">
//         <h1>Hello World</h1>
//         <div className='input'>
//           아이디: <input type={Text} />
//           <br />
//           <br />
//           비밀번호: <input type={'password'} />
//         </div>
//       </div>

//       {/* 문제 6 */}
//       <div className='rainbow'>
//         <div className='red'></div>
//         <div className='orange'></div>
//         <div className='yellow'></div>
//         <div className='green'></div>
//         <div className='blue'></div>
//         <div className='navy'></div>
//         <div className='purple'></div>
//       </div>

//     </div>
//   )
// }
export default App;


{/* <ClassComponent name="홍길동" age='16' /> */ }
{/* <ClassComponent name="성춘향" age='15' /> */ }
{/* <ClassComponent /> */ }
{/* <FunctionComponent name="둘리" age="300" />
<FunctionComponent /> */}
