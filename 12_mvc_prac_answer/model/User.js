// 함수 선언과 동시에 exports -> controller 에게 전달 가능해짐

// 실습1 ==========================================
exports.getUserInfo = () => {
   return {
      realId: 'banana',
      realPw: '4321',
   }

   /* 위와 같은 구조 */
   // const info = {
   //    realId: 'banana',
   //    realPw: '4321',
   // }
   // return Info
}


// 실습2 ==========================================
exports.users = `apple//1234//사과사과
banana//4321//바나나나
happy//qwer1234//해피해피`;


/* Model
   : 데이터를 처리 
   : DB와 연결 
*/
