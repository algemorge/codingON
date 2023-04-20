import PropTypes from 'prop-types'; // 빈값 오류 검출
import { useState } from 'react';

function FunctionComponent() {
   //const list = 'abc'
   const [counter, setCounter] = useState(0);
   const [text, setText] = useState(0);
   console.log(counter);
   //console.log(props);
   //props = {name:"둘리", age: "400"}
   const onClick = () => {
      setCounter(counter + 1);
      console.log('클릭되었습니다');
   };
   const entry = () => {
      setText('입장했습니다')
   };
   const exit = () => {
      setText('퇴장했습니다');
   };

   return (
      <div>
         <h1>Hello World, Function Component</h1>
         <h5>{counter}</h5>
         <button onClick={onClick}>숫자업</button> <br />
         <h5>{text}</h5>
         <button onClick={entry}>입장</button><br />
         <h5>{text}</h5>
         <button onClick={exit}>퇴장</button>
         {/* <h5>{name}</h5>
       <h5>{age}</h5> */}
      </div >
   );
}

// FunctionComponent.prototype = {
//    name: PropTypes.string.isrequired,
//    age: PropTypes.string,
// }

// 화살표 함수 사용법
// const FunctionComponent = () => {
// }

export default FunctionComponent;