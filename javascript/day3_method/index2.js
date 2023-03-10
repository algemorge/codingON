// JS 표준 내장 객체
// 자바스크립트가 기본적으로 가지고 있는 객체
/**
 * Object
 * Array
 * String
 * Number
 * Boolean
 
 * Math
 * Date : 시간, 날짜에 대한 정보
 * 
 */

let now = new Date()
console.log(now);
console.log(now.getFullYear(), '년');
console.log(now.getMonth() + 1, '월');
console.log(now.getDate(), '일');
console.log(now.getHours(), '시');
console.log(now.getMinutes(), '분');
console.log(now.getSeconds(), '초');
console.log(now.getMilliseconds(), 'ms');
console.log(now.getDay()); //요일 - 0:일요일 ~ 6:토요일

// Date 객체를 이용해 오늘의 요일을 얻고
// 평일 or 주말 출력


// swith 문 풀이 
switch (now.getDay()) {
   case 0: // sun
   case 6: // sat
      console.log('주말');
      break;
   // case 1:
   // case 2:
   // case 3:
   // case 4:
   // case 5:
   default: // 주중은 default 로 가능
      console.log('평일2');
      break;
}

// 삼항연산자 풀이 1
let day = now.getDay() === 0 || now.getDay() === 6 ? '주말' : '평일3'
console.log(day);

// 삼항연산자 풀이 2
let today = now.getDay()
let week = today === 0 || today === 6 ? '주말' : '평일1'
console.log(week);

console.log('================ Math ===============');
// Math 객체
// 속성
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT1_2); //루트 2

// 메소드
console.log(Math.min(45, 36, 7, 2, -1));
console.log(Math.max(34, 25, 6, 1, 0, -1));
console.log(Math.random());
console.log(Math.round(5.1)); // 반올림
console.log(Math.floor(5.5)); // 내림
console.log(Math.ceil(5.22)); // 올림

console.log(Math.floor(Math.random() * 10)); // 0 ~ < 10


// 1 ~ 100 까지 랜덤 정수 뽑기 
console.log(Math.floor(Math.random() * 100) + 1);