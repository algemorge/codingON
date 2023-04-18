const lists = ['apple', 'banana']
console.log(lists[0]);

// 배열 구조분해할당 
[item1, item2, item3 = 'peach'] = lists;
console.log('item1 : ', item1);
console.log('item2 : ', item2);
console.log('item3 : ', item3);

// 배열 구조분해할당을 사용하는 이유 : 순서 변경 가능
let x = 1, y = 2;
console.log('x:', x, 'y:', y);

[x, y] = [y, x]
console.log('x:', x, 'y:', y);

console.log("===============================");
// 객체 구조분해 할당
const obj = {
   key1: 'one',
   key2: 'two'
}
console.log(obj.key1);

// key1을 다시 사용하려면 :이용해 새로운 값 넣기 가능
const { key1: newKey, key2, key3 = 'three' } = obj;
// console.log('key1:', key1); ==> 사용불가 
console.log('key2:', key2);
console.log('newKey:', newKey);
console.log('key3:', key3);

// 정의하지 않은 값은 undefined
const { a, b } = { a: 10, b: 20 }
console.log('a:', a);
console.log('c:', b);

// spread 연산자 : 배열을 가져와 쓸때 사용
// 함수 호출에 점(...)을 사용하는 경우 spread 연산자 
const a1 = [1, 2, 3, 4, 5]
console.log(...a1);

// rest 파라미터 : 남은 인수들을 묶어서 배열로 반환
// 함수 매개변수에 점(...) 을 사용하는 경우 rest 매개변수
const data = { c: 30, d: 40, e: 50, f: 60 }
const { c, d, ...rest } = data
console.log("c:", c);
console.log("d:", d);
console.log("rest:", rest);

// 배열분해 할당
const newArr = ['one', 'two', 'three']
const [one, two, three, four = 'four'] = newArr;
console.log(one, two, three, four);

// swap
let newA = 11, newB = 22;
console.log(newA, newB);
[newA, newB] = [newB, newA]
console.log(newA, newB);

// 객체분해할당 연습
// 기존 코드
const newObj = {
   one: 'one',
   two: 'two',
   three: 'three'
}
console.log(newObj.one);
console.log(newObj.two);
console.log(newObj.three);

// 객체분해할당 
const { one: newOne, two: newTwo, three: newThree } = newObj
console.log(newOne);
console.log(newTwo);
console.log(newThree);

// spread 연산자
// : 객체의 값을 펼치는 연산자 
// 서로다른 배열을 합칠때 
const t1 = [1, 2, 3]
const t2 = [4, 5]
const t3 = [...t1, ...t2]
console.log(t3);

const cookie = {
   base: 'cookie',
   madeIn: 'korea'
}
const chocoCookie = {
   ...cookie,
   toping: 'chocochip'
}

console.log('chocoCookie:', chocoCookie);

const noTopingCookie = ['촉촉한 쿠키', '안촉촉한 쿠키']
const topingCookie = ['바나나쿠키', '딸기쿠기', '블루베리쿠키']
const allCookies = [...noTopingCookie, '초코칩쿠키', ...topingCookie]
console.log(allCookies);

