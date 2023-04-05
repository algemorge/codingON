// 연산자 

/** 산술 연산자
 * 1. +
 * 2. =
 * 3. /
 * 4. *
 */

let a = 5;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);

/** 논리연산자
 * 1. || or - 이거나 
 * 2. && and
 * 3. ! not
 */
console.log('==========================');
// 비교연산자
// == : 값만 비교
console.log(1 == 1);
console.log(1 == 2);
console.log(1 != 2); // != 같지 않음
console.log(1 != 1); // != 같지 않음
console.log('1' == 1);
console.log('1' != 1);

console.log('==========================');
// === : type과 값 모두 비교
console.log(1 === 1);
console.log(1 !== 1);
console.log(1 !== 2);
console.log(1 !== 1);
console.log('1' === 1);
console.log('1' !== 1);

console.log('==========================');
// 크기 비교
// > < <= >=
console.log(2 > 1);
console.log(2 >= 2);
console.log(2 < 1);
console.log(2 <= 2);

console.log('==========================');
// 논리연산자
console.log(!true);
console.log(!false);
console.log(!!true);

console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(false || false);
console.log(false || true);
console.log(true || true);

console.log('==========================');
console.log(!(2 > 1)); //false
console.log((2 > 1 && -2 < 1)); //true
console.log((2 > 1 && -2 < 1) || 5 > 2); //true

console.log('==========================');

// 동등연산자 2개 (관대한 연산자)
console.log(1 == '1');
console.log('0' == false);
console.log('' == 0);
console.log(null == undefined);

console.log('==========================');
// 자동형변환
let num1 = '3';
let num2 = 2;
let num3 = '10';

// 문자열끼리의 연산
// 더하기 : 나열됨
console.log(num1 + num3);
// 나머지 연산 : 자동형변환하여 계산
console.log(num3 - num1);
console.log(num1 * num3);
console.log(num1 / num3);

// 문자열 & 숫자
// 더하기 : 숫자가 문자열로 변환됨
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);





