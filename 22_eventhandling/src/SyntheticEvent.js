function SyntheticEvent() {
   function syntheticEvent(e) {
      // Sythentic Event : 합성이벤트
      // 리액트는 웹 브라우저의 nativeEvent 가 아니라 
      // nativeEvent 를 감싼 Sythentic Event 를 사용
      // 즉, 리액트 고유 이벤트 객체!
      console.log(e);
   }

   // 인풋에 변화가 생기면 콘솔 찍기 
   function printInputValue(e) {
      console.log(e.target.value);
   }

   return (
      <div>
         <button onClick={syntheticEvent}>합성 이벤트 콘솔 찍기</button>
         <input type="text" placeholder="아무거나 입력!" onChange={printInputValue} />
      </div>
   )
}

export default SyntheticEvent;