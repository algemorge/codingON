// console.log('연결!');

for (let i = 0; i < 10; i++) {
   console.log('안녕', i);
}
console.log('=========== 2씩 증가 ============');

for (let i = 0; i < 10; i += 2) {
   console.log(`hi, ${i}`);
}

console.log('=========== 3씩 증가 ============');
for (let f = 0; f < 10; f += 3) {
   console.log(f);
}

console.log('=========== 1~5 ============');
for (let d = 1; d <= 5; d++) {
   console.log(d);
}
for (let d = 0; d < 5; d++) {
   console.log(d + 1);
}

// for (let i = 5; i > 0; i--1) {
//    console.log(i);
// }

console.log('=========== 1 부터 n 까지의 합 ============');
let n = 11;
let sum = 0;
for (let i = 1; i <= n; i++) {
   sum = sum + i
   // sum += i
}

console.log(sum);

// 배열과 for 문

let fruits = ['사과', '배', '포도', '망고'];
for (let i = 0; i < fruits.length; i++) {
   console.log(fruits[i]);
}

// 배열 내의 숫자의 합 구하기
let numsArr = [90, 50, 30, 20, 11];
let numsSum = 0;

for (let i = 0; i < numsArr.length; i++) {
   numsSum = numsSum + numsArr[i];
}
console.log(numsSum);

// 1~20 중 짝수인 수 구하기 

let sum2 = 0;
for (let i = 0; i = 20; i++) {
   if (i % 2 === 0) {
      sum2 = sum2 + i;
   }
}
console.log(sum2);


let sum3 = Number(prompt('숫자를 입력해주세요 '));
for (let i = 0; i <= 10000; i++) {
   if (i % 13 === 0 && i % 2 === 1) {
   }
}
console.log(i);

// 구구단 만들기

for (let i = 2; i < 10; i++) {
   console.log(`========${i}단========`)

   for (let j = 1; j < 10; j++) {
      console.log(`${i} X ${j}`);
   }
}
