// console.log(1);
// setTimeout(() => {
//    console.log(2);
// }, 2000);
// console.log(3);


// setTimeout(() => {
//    document.querySelector('body').style.backgroundColor = 'pink'
// }, 1000);

// function changeColor() {
//    document.querySelector('h1').style.backgroundColor = 'skyblue'
// }
// setTimeout(changeColor, 1000)


// ########################################
// 비동기 처리 -> callback 함수 

// function goMart() {
//    console.log('마트에 가서 어떤 음료를 살지 고민한다');
// }
// function pickDrink() {
//    setTimeout(function () {
//       console.log('고민 끝~');
//       product = '제로콜라';
//       price = 2000;
//    }, 3000);
// }

// function pay(product, price) {
//    console.log(`상품명: ${product}, 가격:${price}`);
// }

// let product;
// let price;
// goMart();
// pickDrink();
// pay(product, price);


// ########################################
// 비동기 처리 -> callback 함수 
// callback 함수  
// : 다른 함수의 실행이 끝난 뒤에 실행되는 함수
// : 어떤 함수를 파라미터 (매개변수, 인자)로 실행

// function goMart() {
//    console.log('마트에 가서 어떤 음료를 살지 고민한다');
// }
// function pickDrink(callback) {
//    // callback : 매개변수가 될 콜백함수
//    setTimeout(function () {
//       console.log('고민 끝~');
//       product = '제로콜라';
//       price = 2000;
//       callback(product, price) // 매개변수로 넘긴 콜백함수를 실행
//    }, 3000);
// }

// let product;
// let price;
// goMart();
// pickDrink(function pay(product, price) {
//    console.log(`상품명: ${product}, 가격:${price}`);
// });

// 콜백 지옥이란?
// 무지개색 setTimeout을 만들어보자
setTimeout(() => {
   document.querySelector('body').style.backgroundColor = 'red'
   setTimeout(() => {
      document.querySelector('body').style.backgroundColor = 'orange'
      setTimeout(() => {
         document.querySelector('body').style.backgroundColor = 'yellow'
         setTimeout(() => {
            document.querySelector('body').style.backgroundColor = 'green'
            setTimeout(() => {
               document.querySelector('body').style.backgroundColor = 'skyblue'
               setTimeout(() => {
                  document.querySelector('body').style.backgroundColor = 'blue'
                  setTimeout(() => {
                     document.querySelector('body').style.backgroundColor = 'blueviolet'
                  }, 1000)
               }, 1000)
            }, 1000)
         }, 1000)
      }, 1000)
   }, 1000)
}, 1000)