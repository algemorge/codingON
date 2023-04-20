import { useState } from 'react';

function HiComponent() {
   const [message, setMessage] = useState("hi")
   const [bool, setBool] = useState(false)
   const Enter = () => {
      setMessage('입장했습니다')
   }
   const Out = () => {
      setMessage('퇴장했습니다')
   }
   const onClick = () => {
      setBool(true)
   }
   return <>
      {bool && (
         <>
            <h1>{message}</h1>
            <button onClick={Enter}>입장</button>
            <button onClick={Out}>퇴장</button>
         </>
      )}
      <button onClick={onClick}>로그인 성공</button>
   </>

}

export default HiComponent;