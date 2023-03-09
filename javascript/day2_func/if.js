console.log('연결!');
/* 조건문 */
//1. if 문
if (5 > 3) {
   console.log('마자용');
}

//2. else if
if (5 > 3) {
   console.log('마자용');
}

// 화면에서 숫자를 받아서 조건문에 넣기
// prompt 는 string을 받기 때문에 형변환필요
// number = Number(number);
// let number = Number(prompt("숫자를 입력해 주세요."));
// console.log(typeof number);

// if (number > 10) {
//    console.log('이 수는 10보다 크다.');
// } else {
//    console.log('이 수는 10보다 작거나 같다.');
// }

// if (number > 10) {
//    console.log('이 수는 10보다 크다.');
// } else if (number = 10) {
//    console.log('이 수는 10이다.');
// } else {
//    console.log('이 수는 10보다 작다.');
// }

console.log('=========== 성적 산출 프로그램 =============');
// 성적산출 프로그램
// if (number > 100 || number < 0) {
//    console.log('입력값이 잘못되었습니다!');
// } else if (number >= 90) {
//    console.log('A');
// } else if (number >= 80) {
//    console.log('B');
// } else if (number >= 70) {
//    console.log('C');
// } else if (number >= 60) {
//    console.log('D');
// } else {
//    console.log('F');
// }


console.log('=========== 나이 검사 프로그램 =============');
// let age = Number(prompt("숫자를 입력해 주세요."));
let age = 15
if (age >= 20) {
   console.log('성인');
} else if (age > 17) {
   console.log('고등학생');
} else if (age > 14) {
   console.log('중학생');
} else if (age > 8) {
   console.log('초등학생');
} else if (age > 0) {
   console.log('유아');
}

let age1 = 155;
if (age1 > 0 && age1 < 8) {
   console.log('유아');
} else if (age1 >= 8 && age1 < 14) {
   console.log('초등학생');
} else if (age1 >= 14 && age1 < 17) {
   console.log('중학생');
} else if (age1 >= 17 && age1 < 20) {
   console.log('고등학생');
} else if (age1 >= 20) {
   console.log('성인');
}

console.log('============ 로그인 함수 =============');
// db
// let userId = 'user01';
// let userPw = '1234qwer';

// function loginUser() {
//    let inputId = prompt('ID를 입력하세요.')
//    let inputPw = prompt('비밀번호를 입력하세요.')
//    if (userId === inputId) {
//       if (userPw === inputPw) {
//          alert('로그인성공!')
//          console.log(`안녕하세요. ${inputId}님!`);
//       } else {
//          alert('비밀번호가 틀렸습니다!')
//       }
//    } else if (inputId === '') {
//       alert('ID를 입력하지 않았습니다.')
//    } else {
//       alert('ID가 틀렸습니다.')
//    }
// }

// loginUser();

console.log('============= switch ===============');
//2. switch
let a = 4;
switch (a) {
   case 3:
      console.log('a가 3이군요');
      break;
   case 4:
      console.log('a가 4군요');
      break;
   case 5:
      console.log('a가 5군요');
      break;
   default:
      console.log('a가 무슨 값인지 모르겠습니다.');

   // break; 생략가능
}


// 성적산출 프로그램 -> switch 문
// let d = 5;
let number = 90;
console.log(parseInt(number / 10));
switch (parseInt(number / 10)) {
   case 10:
   case 9:
      console.log('A');
      break;
   case 8:
      console.log('B');
      break;
   case 7:
      console.log('C');
      break;
   case 6:
      console.log('D');
      break;
   default:
      console.log('F');
}

console.log('============= 삼항연산자 ===============');
let num = 19;
if (num % 2 == 1) {
   console.log('홀수');
} else {
   console.log('짝수');
}

// 삼항연산자
num % 2 === 1 ? console.log('홀수') : console.log('짝수');;


console.log('============= 시간 받아오기 실습 ===============');

let now = new Date().getHours();
console.log(now);
// console.log(now < 12 ? '오전' : '오후');
let time = now < 12 ? '오전' : '오후'
console.log(time);


