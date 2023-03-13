let div1 = document.getElementById('div1')
console.log(div1);


// innerHTML - 효과가 적용됨, console에 찍힘
div1.innerHTML = '여기는 <b>첫번째</b> 태그입니다. &hearts;'
console.log(div1.innerHTML);

//innerTEXT - 화면에 찍힘
div1.innerText = '여기는 <b>첫번째</b> 태그입니다. &hearts;'


// innerTEXT VS innerContent
// - textContent 
//    - 공백문자 그대로 반환
//    - IE9 이전에는 사용 안됨
// - innerContent
//    - 공백 문자 제거 
// div1.innerHTML = '<ul><li>1</li><li>2</li></ul>'

div1.innerHTML = '여기는      <b>첫번째</b>       태그입니다. &hearts;'
console.log(div1.innerText);
div1.innerContent = '여기는       <b>첫번째</b>       태그입니다. &hearts;'
console.log(div1.innerContent);

console.log('===============');
// 속성변경

// a 태그의 주소변경
let naver = document.getElementById('naver')
naver.setAttribute('href', 'https://www.google.com')

// 직접 접근 - 이미지 변경
console.log(document.getElementById('pooh').getAttribute('src'));
console.log(document.getElementById('pooh').id);
naver.href = '#';

// css 지정
let h1 = document.querySelector('h1');
let list = document.querySelectorAll('li');

console.log(h1);
console.log(list);
// 1. style 속성 사용
list[0].style.backgroundColor = 'teal';

// 전체 적용 for문
for (let li of list) {
   li.style.backgroundColor = 'yellow';
   li.style.color = '#444'
   li.style.fontSize = '1.5rem';
}

// 2. classList
console.log(h1.classList);

h1.classList.add('add-h1');

//classList.add : 클래스 추가
//classList.remove : 클래스 제거
//classList.contains : 클래스 유무 확인; true/false 반환 - if 문 활용
//classList.toggle : 해당 클래스가 있으면 제거, 없으면 추가


console.log('====== 노드 찾기 =====');
/* 노드찾기 */
let friends = document.querySelector('#friends')
let tigger = document.querySelector('#tigger')
console.log(friends);
console.log(tigger);


console.log('===== 자식 노드 ======');
console.log(friends.children);
console.log(friends.children[0]);

console.log('===== 부모 노드 ======');
console.log(tigger.parentNode);

console.log('===== 형제 노드 ======');
console.log(tigger.previousElementSibling);
console.log(tigger.nextElementSibling.nextElementSibling);

console.log('====== 노드 찾기 =====');
// 요소 생성, 추가, 삭제
let container = document.querySelector('.container')
console.log(container);

// 생성 (화면에 찍히지 X)
let p = document.createElement('p') // 생성
p.innerText = '새로 추가된 p'
p.style.fontWeight = '700'
p.backgroundColor = 'red'


// 추가 (화면에 찍힘)
// 요소.append : 선택된 요소의 맨 마지막 자식으로 추가됨
container.append(p)

let p2 = document.createElement('p')
let p3 = document.createElement('p')
p2.innerHTML = 'p2'
p3.textContent = 'p3'

p2.classList.add('p-2')
p3.classList.add('p-3')


container.append(p2, p3)

//appenChild - 하나만 가능
// container.append(p2, p3)

// 요소.prepend : 선택된 요소의 맨 첫번째 자식으로 추가됨
let li1 = document.createElement('li')
li1.textContent = '애플'
friends.prepend(li1)

/* before & after

* before : 선택된 요소의 앞으로 추가
 * after : 선택된 요소의 뒤로 추가
*/

// afer : h3을 h1뒤에 붙이기 
let h3 = document.createElement('h3');
h3.innerText = 'h3'
h1.after(h3)

// before : h2를 h1앞에 붙이기 
let h2 = document.createElement('h2')
h2.innerText = 'h2'
h1.before(h2)


// 요소 삭제 
/* remove & removeChild
*  요소.remove() : 선택된 요소 삭제
*  요소.removeChild(자식요소) : 요소의 '자식요소'가 삭제

*/
let first1 = document.querySelector('li')
console.log(first1);
let ul = first1.parentNode;
console.log(ul);

// 'apple' 삭제 
// first1.remove();
// ul.removeChild(first1);


console.log('=======이미지 태그 만들어서 추가=======');
// container 클래스의 마지막 자식으로 img 태그 추가

// 내가 한거
let img = document.createElement('img')
img.innerHTML = '<img src="./img/google.png" alt="google">'
container.append(img)
console.log(container);

// 정답
let img1 = createElement('img');
container.append(img1);
img1.setAttribute('src', './img/google.png');
img1.setAttribute('alt', 'google')