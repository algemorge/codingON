console.log($('button'));
console.log(document.querySelector('button'));

// 배열형태에 걸어줘도 인덱스번호 필요없이 전부 변화
$('button').css('color', 'red')

function submitjs() {
   document.querySelector('#div1').innerHTML = '반갑습니다'
   document.querySelector('#div1').setAttribute('style', 'border:1px solid red')

}
function submitjquery() {
   $('#div1').html('잘지내세요')
   $('#div1').css('border', '3px dotted red')
}
