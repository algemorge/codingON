//async / await 
// 비동기 처리 패턴 중 가장 최신 문법
// promise 기반 코드를 더 가독성 있게 하기 위해 등장

// 구조 
// -함수 앞에 async 키워드 붙이기
// - 비동기 처리 메서드 앞에 await 키워드 붙이기 (해당 작업을 기다려 줄것)
// async 와 await는 세트! 같이 쓰자!
// - try 블록 코드가 실행
// - try 
async function 함수명() {
   await 비동기처리_메서드명();
}

// ############################################################
// 1초 뒤에 과일 배열을 출력하는 코드
function fetchFruits() {
   return new Promise(function (resolve, reject) {
      setTimeout(function () {
         const fruits = ['🍎', '🍋', '🍊']
         resolve(fruits)
         // reject(new Error('알수 없는 에러 발생!! 아이템을 가져올 수 없음!'))
      }, 1000)
   })
}

// #1. promise
// fetchFruits().then(function (fruits) {
//    console.log(fruits);
// }).catch(function (error) {
//    console.log(error);
// })

// try {
//    //코드실행
//    // 에러 발생시 catch로 이동
// } catch (error) {
//    // 에러관리
// }

// #2. async/await
// 예외처리 try/catch
async function printItems() {
   try {
      const fruits = await fetchFruits();
      console.log(fruits);
   } catch (error) {
      console.log(error);
   }
}
printItems();
// ############################################################

// goMart 를 async/await 이용해서 변경하기
function goMart() {
   console.log('마트에 가서 어떤 음료 살지 고민!');
}

function pickDrink() {
   return new Promise(function (resolve, reject) {
      setTimeout(function () {
         console.log('고민 끝~!');
         product = '제로 콜라';
         price = 4000;
         resolve();
      }, 3000);
   });
}
function pay() {
   console.log(`상품명: ${product}, 가격: ${price}`);
}

//========================================================
async function exec() {
   // goMart(); //1번 실행
   // await pickDrink(); // 2번 실행
   // pay() //2번이 완료되어야 3번 실행
   const gomart = await goMart();
   console.log(gomart);
   const pickdrink = await pickDrink();
   console.log(pickdrink);
   const payn = await pay();
   console.log(payn);
}
let product;
let price;
exec();


