console.log(123);

// 변수
var name = '홍길동';
console.log(name);

// 재선언
var name = '이몽룡';
console.log(name);

/** let
 * 1. 재선언 불가, 재할당 가능
 * 2. 선언과 동시에 초기화하지 않아도 됨
 */

let a = 1;
a = 2;
console.log(a);

// 선언만해도 됌, 초기화 필요 없음
let aa;
aa = 123;
console.log(aa);

/** const
 * 1. 재선언 불가, 재할당 불가
 * 2. 선언과 동시에 초기화 필요
 */

const b = 3;
console.log(b);

console.log('=====================');
let q1 = 2
q1 - 2; // 2
q1 = q1 - 2; // 0
console.log(q1);

const q2 = 5;
// 불가
// q2 = q2 - 5;
console.log('=====================');


// 식별자 (변수, 함수) 이름 규칙
// 1. $ _ 만 가능
// 2. 숫자가 맨 처음이면 안됨
// 3. 예약어 금지 (let, var, const, if, for ... )

let $ = 5;
console.log($);

let _ = 10;
console.log(_);

// 변수명은 숫자로 시작불가
// let 1st = 34;

