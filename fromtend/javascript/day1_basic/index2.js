/**
 * 자료형
 * - 기본
 *    - string
 *    - number
 *    - boolean
 *    - null
 *    - undefined
 *
 * - 객체
 *    - array
 *    - object
 */

// 1. string
let myName = "길동";
let email = "gildong@naver.com";
let city = "서울";

console.log(myName);
console.log(email);
console.log(city);

// 문자와 변수를 동시에 출력
console.log("내 이름은", myName, "이고 이메일은", email, "입니다. ");
console.log("내 이름은" + myName + "이고 이메일은" + email + "입니다. ");

// 템플릿 리터럴
console.log(`내 이름은 ${myName}`);

// 2. number
let number = 123;
let opacity = 0.5;
console.log(number);
console.log(opacity);
// nan
console.log("apple" - 3);

//3. boolean - 참/거짓
let checked = true;
let unchecked = false;
console.log(checked);
console.log(unchecked);

//4. undefined
let undef;
console.log(undef);

//5. null
let empty = null;
console.log(empty);

// 6. array 배열

// 1차원 배열
let fruits = ["apple", "banana", "orange", "lemon"];
let fruits2 = new Array("apple", "banana", "orange", "lemon");
//  원하는배열[]
console.log(fruits[1]);

let data = [1, "sean", false, null, undefined];
console.log(data[4]);

// array : 2차원 배열
let korean = [
   ["가", "나", "다"],
   ["라", "마", "바"],
   ["사", "아", "자"],
];
// 배열 안의 배열 뽑기 [n번째 배열][n번째 요소]
console.log(korean[0][0]);
console.log(korean[0]);

// 아이스크림 뽑기
let letters = [
   ["사", "스", "자", "크"],
   ["진", "안", "리", "이"],
   ["가", "수", "림", "나"],
   ["아", "으", "차", "운"],
];

console.log(letters[3][0]);
console.log(letters[1][3]);
console.log(letters[0][1]);
console.log(letters[0][3]);
console.log(letters[2][2]);

// 3차원 배열
let nums = [
   [
      [1, 2, 3],
      [4, 5, 6],
   ],
   [
      [7, 8, 9],
      [10, 11, 12],
   ],
];

console.log(nums[1][0][1]);

// 7. object
let cat = {
   name: '나비',
   age: 1,
   isCute: true,
   mew: function () {
      return '냐옹';
   },
}

// 점 표기법
// 오브젝트이름.key이름
console.log(cat);
console.log(cat.name);
console.log(cat.age);
console.log(cat.mew());

// 대괄호 표기법
// ['대괄호']에 키값 넣어 호출
console.log(cat['name']);

let mine = {
   name: '신현아',
   phone: 'iphone13 mini',
   height: 166,
   isGood: true,
   sayHI: function () {
      return '안녕하세용'
   }
}

console.log(mine);


// typeof 사용
console.log(typeof '문자');
console.log(typeof 123);
console.log(typeof mine.height);
console.log(typeof cat);
console.log(typeof true);
console.log(typeof nums);
console.log(typeof NaN);
console.log(typeof null);
console.log(typeof und);


// 실습 1
let obs = [[123], ['hi']];
let obs2 = {
   o1: 123,
   o2: 'hi'
};

console.log(`${typeof 123}` + " isn't" + ` ${typeof 'hi'}` + " data type.");
console.log(`${typeof obs2.o1}`);

// 정답
console.log(`${typeof 1} ist't ${typeof "string"} data type.`);
console.log('typeof 를 ');

// 형변환
// prompt 는 문자열을 입력받음
// 덧셈 X 이어쓰기 O
// let mathScore = prompt('수학 점수를 입력하세요.')
// let engScore = prompt('영어 점수를 입력하세요.')
// 두 과목의 평균 구하기 
// let avg = (mathScore + engScore) / 2;
// console.log(avg);

// 명시적 형변환
// 1. -> 문자 string()
let str1 = true;
let str2 = 123;
let str3 = null;

console.log(typeof String(str1));
console.log(typeof str1.toString());

console.log("======================");
let n1 = true;
let n2 = false;
let n3 = '123.9';

console.log(typeof n1);
console.log(typeof n2);
console.log(typeof n3);

console.log(typeof Number(n1)); //1
console.log(typeof Number(n2)); //0
console.log(typeof Number(n3));
console.log("======================");

console.log(Number(n1));
console.log(Number(n2));
console.log(Number(n3));
// parseInt : 소수점 버리고 정수형으로만 변환
console.log(parseInt(n3));
console.log("======================");



// 두 과목의 평균 구하기 + 형변환
let mathScore = "77";
let engScore = "88";
let avgScore = (Number(mathScore) + Number(engScore)) / 2;
console.log(avgScore);

//소수점 버리기 - parseInt
let mathS = "77.6";
let engS = "88.9";
let avgS = (parseInt(mathS) + parseInt(engS)) / 2;
console.log(parseInt(avgS));

// float?
let mathS1 = "77.6";
let engS1 = "88.9";
let avgS1 = (parseFloat(mathS1) + parseFloat(engS1)) / 2;
console.log(`학생의 수학점수는 ${parseInt(mathS1)}점 이고, 영어점수는 ${parseInt(engS1)}점 입니다. `);
console.log();

// 변수
