// console.log('hi');

/*============ value =============*/
function getValue() {
   let value = $('input').val();
   // let value2 = document.querySelector('input').value // 동일
   alert(value)
}

function setValue() {
   $('input').val('설정!!')
}


/*============= css =================*/
function changeCssJS() {
   let span = document.querySelector('span');
   span.style = 'font-size : 20px; color : red;'
}

function changeCssJquery() {
   $('span').css('font-size', '40px')
   $('span').css('color', 'blue')
   console.log($('span').css('color'));
}

/*============= attr =================*/
function changeAttrJS() {
   let a = document.querySelector('a')
   a.setAttribute('href', 'https://www.naver.com')
   a.innerText = 'naver'
}

function changeAttrJquery() {
   $('a').attr('href', 'https://www.daum.net')
   // $('a').attr('a', 'daum')
}

/*============= text =================*/
//  innerText = 태그 적용 X
function changeTextJS() {
   let p = document.querySelector('p');
   p.innerText = '<b>js</b>로 바꿨습니다.'
}

function changeTextJquery() {
   $('.p-text').text('<b>jquery</b>로 바꿨습니다.')
}


/*============= html =================*/
// innerHTML = 태그 적용 O
function changeHtmlJS() {
   let p = document.querySelector('.p-html')
   p.innerHTML = '<b>js</b>로 바꿨습니다.'
}

function changeHtmlJquery() {
   $('.p-html').html('<b>jquery</b>로 바꿨습니다.')
}


/*============= 요소추가 =================*/
// append()
function appendJS() {
   // 새로운 태그 생성
   let li = document.createElement('li')
   // 새로운 태그에 문자열 생성
   li.innerText = 'append()로 추가된 JS'
   // li 가 들어갈 ul 선택
   let ul = document.querySelector('ul')
   // ul 의 마지막 자식요소로 li 추가
   ul.append(li)
}

// 태그를 먹기 때문에 새로 createElement 할 필요 없음<li></li>
function appendJquery() {
   $('.colors').append('<li>append()로 추가된 jquery</li>')
}

// pretend
function preppendJS() {
   let lif = document.createElement('li')
   lif.innerHTML = 'preppend()로 추가된 JS'
   let ul = document.querySelector('ul')
   ul.prepend(lif)
}

function preppendJquery() {
   $('.colors').prepend('<li>preppend()로 추가된 jquery</li>')
}

//after
function afterJS() {
   let green = document.querySelector('.green')
   let li = document.createElement('li')
   li.innerText = 'after() 형제요소로 추가된 JS'
   green.after(li)
}

function afterJquery() {
   $('.green').after('<li>after() 형제요소로 추가된 Jquery</li>')
}

function beforeJS() {
   let orange = document.querySelector('.orange')
   let li = document.createElement('li')
   li.innerText = 'berfore() 로 추가된 JS'
   orange.before(li)
}


/*============= 요소삭제 =================*/
/*============= remove =================*/
function removeJS() {
   let li = document.querySelector('#li2')
   li.remove()
}

function removeJquery() {
   $('#li2').remove();
}

/*============= empty =================*/
// ul 안에 태그를  없애고 빈값을 덮어씌움
function emptyJS() {
   let nums = document.querySelector('ul.nums')
   nums.innerHTML = ''
}

function emptyJquery() {
   $('ul.nums').empty()
}


/*============= 요소 탐색 =================*/

function findParent() {
   // 부모요소 반환
   // js에는 없는 요소
   console.log($('.child2').parent());
}

function findParents() {
   // 모든 부모요소 반환
   console.log($('.child2').parents());
}

function findNext() {
   // next() : 바닐라에서 nextSibling 과 같음
   console.log($('.child2').next());
}

function findPrev() {
   // next() : 바닐라에서 perviousSibling 과 같음
   console.log($('.child2').prev());
}

function findChildren() {
   // children : 자식 요소 모두 반환, js에서 children과 같음
   console.log($('.parent').children());
   console.log(document.querySelector('.parent').children);

}


/*============= 클래스 조작 =================*/
// 모두 js에서 사용가능
function addClass() {
   $('#hi').addClass('fs-50')
}

function removeClass() {
   // $('#hi').removeClass('fs-50') // 특정 클래스 제거
   // 인자를 빈값으로 두면 클래스를 모두 삭제
   $('#hi').removeClass()
}

function hasClass() {
   // true 나 false 로 반환
   console.log($('#hi').hasClass('fs-50'));
}

function toggleClass() {
   // on&off 기능 - 있으면 제거, 없으면 생성
   $('#hi').toggleClass('bg-pink')
}


