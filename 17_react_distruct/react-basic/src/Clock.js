function Clock() {
   return (
      <div className="clock-container">
         {/* toLocaleTimeString() : 현재 사용자의 문화권에 맞는 시간을 표기 */}
         <h1>현재시간은 {new Date().toLocaleTimeString()}</h1>
      </div>
   )
}

// export : 해당 파일의 함수(Clock)을 외부로 보내는 코드
export default Clock;


// 컴포넌트는 한개의 파일에 하나만 만든다