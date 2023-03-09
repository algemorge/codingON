// console.log('hello');


console.log('============ 함수 선언 방식 =============');
// 함수 선언문
// colsole.log 
function helloWolrd1() {
   console.log('helloWolrd1');
}
helloWolrd1()

// return
function helloWolrd2() {
   return 'helloWolrd2';
}
helloWolrd2();


function add1(num1, num2) {
   return num1 + num2;
}
add1(1, 2);

function add2(num1, num2) {
   console.log(num1 + num2);
}

let result = add1(4, 5);
let result2 = add2(4, 5);


// 2.함수 표현식 - 순서 중요
let helloWolrd3 = function () {
   console.log('helloWolrd3');
}
helloWolrd3()

// 3.화살표 함수
let helloWolrd4 = () => {
   console.log('helloWolrd4');
}
helloWolrd4();

console.log('============ 매개변수 =============');
// 4. 매개변수 있는 ver.
function sayHello1(text) {
   return text;
}

console.log(sayHello1(123));
console.log(sayHello1('안녕하세요'));

function sayHello2(text, name) {
   return `${text} ${name}`;
}

console.log(sayHello2('hi', 'Sean'));

// 4-1.함수 표현식
let sayHello3 = function (text, name) {
   return `${text} ${name}`
}

console.log(sayHello3('hello', 'mine'));

// 4-2.화살표 함수 
let sayHello4 = () => {
   return `${text} ${name}`;
}
console.log(sayHello3('hello1', 'mine1'));


console.log('============ 실습1 Multifly =============');

// 1. 매개변수 2
// 2. 두 인자의 곱을 반환 - return
// 3. 출력 X 반환 O
// 4. 콘솔창에 출력-> 테스트

// 함수 표현식
let multifly = function (num1, num2) {
   return num1 * num2;
}
console.log(multifly(2, 5));

// 화살표 함수
let multifly2 = (num1, num2) => {
   return num1 * num2;
}
console.log(multifly2(2, 6));

// 함수 선언문
function multifly3(num1, num2) {
   return num1 * num2;
}
console.log(multifly3(5, 6));



console.log('============ 실습2 square =============');
// square 함수

//함수 표현식
let square1 = function (num) {
   console.log(num * num);
}
square1(4);

// 함수 선언문
function square2(num) {
   console.log(num * num);
}
square2(8);

// 화살표
let square = (num) => {
   console.log(num ** 2);
}
square(5)