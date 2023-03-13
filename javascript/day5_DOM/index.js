console.log('hi');

/** 요소 선택
 * - querySelector
 * - querySelectorAll
 * - getElementById
 * - getElementByClassName - 배열형태로 가져옴
 * 
 */
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);

// 1. getElementById
console.log(document.getElementById('green'));
console.log(document.getElementById('red'));


// 2. getElementByClassName
// 배열로 접근 가능
console.log(document.getElementsByClassName('pink'));
console.log(document.getElementsByClassName('others'));
console.log(document.getElementsByClassName('others')[0]);


// 3. getElementByTagName
console.log(document.getElementsByTagName('div'));


// 4. getElementByName
console.log(document.getElementsByName('id'));


// 5. querySelector
// 1개 선택
// ('선택자') - 모든 선택자 사용 가능
console.log(document.querySelector('.pink'));
console.log(document.querySelector('.others'));
console.log(document.querySelector('#green'));
console.log(document.querySelector('#red'));
console.log(document.querySelector('div'));
console.log(document.querySelector('[name="id"]'));

// 6. querySelectorAll
console.log(document.querySelectorAll('.pink'));
console.log(document.querySelectorAll('input'));

console.log(document.querySelectorAll('.pink')[0]);
console.log(document.querySelectorAll('.pink')[1]);
console.log(document.querySelectorAll('.pink')[2]);
console.log(document.querySelectorAll('.pink')[3]);


console.log('======================');

// 요소를 querySelectorAll 로 불러와서 for of 로 출력하기
let pinks = document.querySelectorAll('.pink');
console.log(pinks);

// for of
for (let pink of pinks) {
   console.log(pink);
}

// for
for (let i = 0; i < pinks.length; i++) {
   console.log(i);
}

