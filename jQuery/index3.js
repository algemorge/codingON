console.log(window);

// jquery로 window 객체를 뽑아보자
console.log($(window));
console.log($(document));

//==============================================
//==================== mouse event =======================
// click(function(){}), mouseover(function(){})
// hover ( function(){}, function(){}) 
// hover ( 인자1 마우스올릴때, 인자2 마우스뗄때)

// 1. click
$('.p-msg').click(function () {
   $('.p-msg').css('color', 'red')
})
// on() == addEventListener()
$('.num').on('click', function () {
   // this - 클릭되는 Li 하나만 선택
   // num - li 전체 선택
   $(this).css('background - color', 'yellowgreen')
})

$('.div-hover').hover(
   function () {
      $(this).addClass('hover1')
   },
   function () {
      $(this).removeClass('hover1')
   })


// scroll 구현
$(window).scroll(function () {
   // console.log('scrollllll');
})

// ===================== ON =========================
// on 을 이용한 keydown 찍기
// 선택요소.addEventListener('keydown', function(){})
$('.input-key').keydown(function (e) {
   // console.log(e.code);
   if (e.code === 'ArrowLeft') {
      console.log('LEFT');
   } else if (e.code === 'ArrowRight') {
      console.log('RIGHT');
   } else if (e.code === 'ArrowUp') {
      console.log('UP');
   } else if (e.code === 'ArrowDown') {
      console.log('DOWN');
   } else { alert('뱡향키가 아닙니다') }
})

console.log('=================================');
// =============== jquery로 todoList 만들기 ====================

// form 에 submit 을 적용하기
$('#todo-form').on('submit', function (e) {
   e.preventDefault(); // 이벤트 막기

   const todo = $('input[name="todo"]').val();
   $('ul.todos').append(`<li>${todo}</li>`);
   $('input[name="todo"]').val('');

})