// map()

// 일반 for문으로 배열의 각 원소를 출력
// for (let i = 0; i < list.length; i++) {
//    console.log(list[i]);
// }


console.log('==========map==========');
// map()

const list = ['a', 'b', 'c', 'd', 'e']

const items = list.map((txt, id, arr) => {
   console.log('text: ', txt); // 원소의 value 값
   console.log('id: ', id);    // 원소의 위치
   console.log('arr: ', arr);  // 현재 순회하는 배열 전체
   return `${id} 위치에 ${txt} 원소가 있음`
})
console.log('items >>', items);


console.log('==========filter==========');
// filter()

// - js 배열 내장 함수
// - 주어진 함수의 테스트를 통과하는 모든 요소를 모아서 
// (true 면 요소 유지, false면 버림) "새로운 배열"을 반환

const animals = ['dog', 'cat', 'rabbit']
// .length : 글자수가 3이상인 것
const newAnimals = animals.filter((animal) => {
   return animal.length > 3
})
console.log(newAnimals); // [ 'rabbit' ]

// .includes : 글자에 a 가 들어가는 것
const newAnimals2 = animals.filter((animal) => {
   return animal.includes('a')
})
console.log(newAnimals2); // [ 'cat', 'rabbit' ]

//===========================================================================
console.log('==========quiz==========');

const nums = [1, 2, 3, 4, 5]
const words = ['dog', 'cat', 'rabbit', 'apple', 'wow']

// 1. map()을 이용해서 dobbleNums 배열에 [2,4,6,8,10]이 반환되도록 코드 작성
const dobbleNums = nums.map((arr) => arr * 2);
console.log(dobbleNums);

// 2. filter()를 이용해서 글자에 t 포함하는 newWords 배열 작성
const newWords = words.filter((words) => words.includes('t'))
console.log(newWords);

// 화살표 함수를 쓸 경우 -> 로직이 1개면 return , {} 생략가능

//===========================================================================
console.log('==========quiz2==========');

const tripleNums = nums.map((n) => n * 3)
console.log(tripleNums);
console.log(tripleNums.includes(3)); // 5 원소가 있는가? => true
console.log(tripleNums.includes(7));// 7 원소가 있는가? => false
console.log(tripleNums.indexOf(9)); // 9 원소의 인덱스 위치는? => 2
console.log(tripleNums.indexOf(7)); // 7 원소의 인덱스 위치는? => -1 = 없음

const aaa = ['a', 'b', 'c']
const bbb = ['d', 'e', 'f']

// concat() : 배열 합치기
console.log(aaa.concat(bbb)) //[ 'a', 'b', 'c', 'd', 'e', 'f' ]

const arr1 = [
   { name: 'a', id: 1 },
   { name: 'b', id: 2 },
   { name: 'c', id: 3 }
]

const arr2 = [
   { name: 'd', id: 4 },
   { name: 'e', id: 5 }
]

const arr3 = arr1.concat(arr2)
console.log(arr3);
// [
//    { name: 'a', id: 1 },
//    { name: 'b', id: 2 },
//    { name: 'c', id: 3 },
//    { name: 'd', id: 4 },
//    { name: 'e', id: 5 }
//  ]
