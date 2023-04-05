// 선언
let btn1 = document.querySelector('.btn-black')
let btn2 = document.querySelector('.btn-green')
let btn3 = document.querySelector('.btn-blue')
let btn4 = document.querySelector('.btn-red')
let container = document.getElementById('container')


console.log(btn1, btn2, btn3, btn4);

// addEventListener
// btn1.addEventListener('동작이름','함수')

// 클릭 ======================================

btn1.addEventListener('click', function () {
   alert('button 1 을 클릭하셨네요')
})

btn1.addEventListener('mouseover', function () {
   this.style.backgroundColor = 'aqua';
})

console.log(container);

// 
btn2.addEventListener('click', () => {
   let div = document.createElement('div');
   div.style.backgroundColor = 'pink';
   div.innerHTML = 'hi';
   container.append(div)
})

// 버튼3에 이벤트리스너 걸기 - 함수에 괄호 사용 X
btn3.addEventListener('click', changeColor);

// container의 div의 색을 변경하는 함수 
function changeColor() {
   let divs = document.querySelectorAll('#container div');
   for (let div of divs) {
      div.style.backgroundColor = 'skyblue'
   }
   // divs 의 마지막요소만 색 변경 
   // divs 의 마지막요소 = divs-1
   divs[divs.length - 1].style.backgroundColor = 'yellow';
}

// this - 자신
btn4.addEventListener('click', changeBtnColor)
function changeBtnColor() {
   this.style.backgroundColor = 'yellow';
   this.style.color = '#000';
}


// scroll ======================================

console.log(window);
window.addEventListener('scroll', function (event) {
   console.log(event);
   console.log(scrollY);

   let pos = document.querySelector('.pos')
   if (this.scrollY > 700) {
      pos.style.opacity = '1';
   }

})


// key ======================================

const btn = this.document.querySelector('button');
const input = document.querySelector('input');
console.log(btn, input);

btn.addEventListener('click', function (event) {
   console.log(event);
})

input.addEventListener('keydown', function (e) {
   console.log(e.code);
   console.log(e.key);
   if (e.code === 'ArrowUp') {
      console.log('위쪽 방향키를 누르셨군요');
   } else if (e.code === 'ArrowDown') {
      console.log('아래방향키를 누르셨군요');
   } else if (e.code === 'ArrowLeft') {
      console.log('왼쪽방향키를 누르셨군요');
   } else if (e.code === 'ArrowRight') {
      console.log('오른쪽방향키를 누르셨군요');
   } else { console.log('others'); }
})

// todo list ======================================


const todoForm = document.getElementById('todo-form');
const todos = document.querySelector('.todos')
// console.log(todoForm, todos);

// form 은 submit을 누르면 제출 => 제출되는것 막기위해 사용되는 pre~
todoForm.addEventListener('submit', (e) => {
   console.log('submit');
   // 실제로 폼이 전달되는것을 저지
   // 이벤트 전달을 막는 방법
   e.preventDefault();
   const todoInput = document.querySelector('input[name="todo"]')
   console.log(todoInput);
   // 데이터 출력 - 숫자를써도 문자열로 들어옴
   console.dir(todoInput);
   console.log(todoInput.value);

   // todo의 문자열 저장
   // const todo = todoInput.value;

   // const newTodo = document.createElement('li') // <li></li>
   // newTodo.append(todo) // <li>todo</li>
   // todos.append(newTodo)

   const todo = todoInput.value.trim();
   if (todo !== '') {
      // const todo = todoInput.value;
      const newTodo = document.createElement('li') // <li></li>
      newTodo.append(todo) // <li>todo</li>
      todos.append(newTodo);

   }
   // 입력값 초기화
   todoInput.value = '';
})


console.log('============================');

const chgInput = document.querySelector('#change-input')
chgInput.addEventListener('change', function () {
   console.log('change!!');
})
chgInput.addEventListener('change', function () {
   console.log('change?');
   let div = document.querySelector('.intro');
   div.innerHTML = chgInput.value;
});



