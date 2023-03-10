/* 문자열 관련 함수 + 속성(length) */
/* - toUpperCase(), toLowerCase()
 * - trim() 
 * - indexOf()
 * - slice()
 * - replace(), replaceAll()
 * - repeat()
 */

let str1 = 'Strawberry Moon';
let str2 = '   Strawberry Moon';
// 문자열 인덱싱
console.log(str1[0]);
console.log(str2[3]);

console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9]);
console.log(str1.length);
console.log(str2.length);

let msg = 'Happy Birthday!'
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(str2.trim().length);
console.log(str2.length);

let msg2 = '   Hello World!!  '
console.log(msg.trim().toUpperCase());

// 매개변수 있는 함수
let fruit = 'applemango'
// 문자열 a 의 배열번호를 반환
console.log(fruit.indexOf('a')); //0
// apple이라는 문자의 시작점을 반환
console.log(fruit.indexOf('apple')); //0

// 배열의 인덱스 번호를 넣으면 해당하는 문자열을 반환
console.log(fruit.charAt(3));

console.log(fruit.slice(5));
console.log(fruit.slice(3, 6));
console.log(fruit.slice(-3));

// replace = 매개변수1을 매개변수2로 변경
let msg3 = 'Wow! it is so amazing!!'
console.log(msg3.replace('Wow', 'Hey'));
console.log(msg3.replaceAll('o', 'a'));
console.log(msg3.replace('o', 'a'));

// split - 매개변수 기준으로 분할
let date = '23.03.10'
console.log(date.split('.')); // '23', '03', '10'

//repeat
console.log('hi'.repeat(5));

console.log('============= 배열 method ==============');
//Push, pop, unshift, shift -> 원본 배열 변화
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['quakka', 'rabbit', 'puppy', 'hamster'];
arr1[5] = 6
console.log(arr1);
arr1[8] = 6; // 중간에 공백 생길수 있음
console.log(arr1);

arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
arr1.push(18);
console.log(arr1);

console.log(arr1.pop());
console.log(arr1);
console.log(arr1.pop());
console.log(arr1);

arr2.unshift('cat')
console.log(arr2.shift());
console.log(arr2);

// 배열. include(요소) 요소가 있는지 없는지 검사
// true , flase 반환
console.log(arr2.includes('quakka'));

console.log(arr2.indexOf('quakka'));

console.log(arr1.reverse());

str1 = arr1.join('');
console.log(str1);

console.log('================for method============');
// for of
let arr3 = [1, 3, 5, 4, 6];
let alphabets = ['a', 'b', 'c', 'd', 'e']

for (let i = 0; i < arr3.length; i++) {
   console.log(arr3[i]);
}

for (let number of arr3) {
   console.log(number);
}
for (let alphabet of alphabets) {
   console.log(alphabet);
}

// forEach
arr3.forEach(function (data, index, arr) {
   console.log(data, index, arr);
})

arr3.forEach((data, index) => {
   console.log(data, index);
})

arr3.forEach(function (data) {
   console.log(data);
})

console.log('================filter============');

// filter
// arr3에서 3 이상만 추출하기
arr3 = arr3.filter(function (num) {
   return num > 3;
})
console.log(arr3);

// 필터를 걸고나면 새로운 변수에 넣을 필요있음
let six = arr2.filter(function (el) {
   return el.length >= 6;
})
console.log(six);

/* map, find */

// map : 배열내의 모든 원소에 대해 연산한 결과를 모아서 새로운 배열 반환
// [1,2,3].map(function)


let arr4 = [1, 2, 3].map(function (el) {
   return el * 3;
})
console.log(arr4);

arr4 = [1, 2, 3, 4, 5];
arr4 = arr4.map((num) => num * 10);
console.log(arr4);

// arr4 = 10,20,30,40,50
// find : 특정 조건을 만족하는 첫번재 요소 반환
let findResult = arr4.find((num) => num >= 30);
console.log(findResult);


console.log('================ 실습 ================');
// 1 ~100 까지의 배열을 for 문 이용해서 만들기
// 배열에 1~100까지의 데이터 넣기
// push, unshift 이용
arr1 = []
for (let i = 1; i <= 100; i++) {
   arr1.push(i)
}
console.log(arr1);

// 배열 숫자 내 합 구하기
// for 문
let sum1 = 0;
for (let i = 0; i < arr1.length; i++) {
   sum1 = sum1 + arr1[i];
}
console.log(sum1);


// for of 문
for (let number of arr1) {
   sum1 = sum1 + number
}
console.log(sum1);

// forEach 문
let sum2 = 0;
arr1.forEach((number) => {
   sum2 = sum2 + number
})
console.log(sum2);


console.log('=================실습 2================');
let fruits1 = ['사과', '딸기', '파인애플', '수박', '참외', '오렌지', '자두']
let fruits2 = ['사과', '딸기', '파인애플', '수박', '참외', '오렌지', '복숭아']

let same = [];
let diff = [];

// for 문 이용
for (let i = 0; i < fruits1.length; i++) {
   if (fruits2.includes(fruits1[i])) {
      same.push(fruits1[i]);
   } else {
      diff.push(fruits1[i]);
   }
}
console.log(same);
console.log(diff);

// filter 사용 
let same2 = fruits1.filter((fruit) => fruits2.includes(fruit));
let diff2 = fruits1.filter((fruit) => !fruits2.includes(fruit));
console.log(same2);
console.log(diff2);



