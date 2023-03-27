// promise
// : 비동기 함수 동기처리하기 위해 만든 객체
// : 성공, 실패 분리해서 반환

// 성공이든 실패든 무언가의 "최종 결과" 
// resolved : 성공
// rejected : 실패
// 프로미스를 콜백함수 전달할 필요 없음. 그냥 호출하면 됨

// ############################################################

// 1. 프로미스 생성하는 코드
// new :  새로운 객체 생성
// promise 함수의 return 값이 Promise 객체
// - resolve(): 성공한 경우, 프로미스 사용시 then 메서드와 연결
// - reject(): 실패한 경우, 프로시스 사용시 catch 메서드와 연결
function promise1(flag) {
   return new Promise(function (resolve, reject) {
      if (flag) {
         resolve(`promise 상태는 fulfilled! then 으로 연결됩니다 \n 이때의 flag는 ${flag} 입니다.`)
      } else {
         reject(`promise의 상태는 rejected!!! catch로 연결됩니다. \n 이때의 flag는 ${flag}입니다.`)
      }
   })
}

// 2. 프로미스 사용(소비)코드
// promise1() //true, false 넣을수 있음
//    .then(function (result) {
//       console.log(result);
//    })
//    .catch(function (err) {
//       console.log(err);
//    })

// 2-1. goMart()에서 프로미스 코드 사용
// function goMart() {
//    console.log('마트에 가서 어떤 음료를 살지 고민한다');
// }

// // promise
// function pickDrink() {
//    return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//          console.log('고민 끝~');
//          product = '제로콜라';
//          price = 4000; // 2000 -> "상품명", 4000 -> "금액 부족"
//          if (price <= 2000) {
//             resolve();
//          } else {
//             reject();
//          }
//       }, 3000);
//    });
// }

// function pay() {
//    console.log(`상품명: ${product}, 가격:${price}`);
// }

// function nopay() {
//    console.log('금액 부족!');
// }

// let product;
// let price;
// goMart();

// pickDrink() // pickDrink 함수 안에서 
//    .then(pay) // reslov 가 실행되면 .then(pay) 로 연결
//    .catch(nopay) // reject 가 실행되면 .catch(nopay) 로 연결


//############################################################
// promise chaning

// 함수를 이용해서 (4+3) * 2 -1 = 13 연산을 해보자!
// 1. add(4,3)
// 2. mul(add(4,3) *2)
// 3. sub(nul(add(4,3) *2) -1)

//step1 - 콜백합수로 해결하기
// function add(n1, n2, cb) {
//    setTimeout(function () {
//       let result = n1 + n2;
//       cb(result)
//    }, 1000)
// }

// function mul(n, cb) {
//    setTimeout(function () {
//       let result = n * 2;
//       cb(result)
//    }, 700)
// }

// function sub(n, cb) {
//    setTimeout(function () {
//       let result = n - 1;
//       cb(result)
//    }, 500)
// }


// add(4, 3, function (x) {
//    console.log('1: ', x);
//    mul(x, function (y) {
//       console.log('2: ', y);
//       sub(y, function (z) {
//          console.log('3: ', z);
//       })
//    })
// })

// step2 - promise chaining 을 이용해보자!
// 장점1 - then 메서드 연속 사용 가능! -> 순차적인 작업 가능
//        콜백 지옥에서 탈출!
// 장점2 - 예외처리 간편
// = 마지막에 catch 구문에서 한 번에 에러 처리 가능

function add(n1, n2) {
   return new Promise(function (resolve, reject) {
      setTimeout(function () {
         let result = n1 + n2;
         resolve(result);
      }, 1000)
   })
};
function mul(n) {
   return new Promise(function (resolve, reject) {
      setTimeout(function () {
         let result = n * 2;
         resolve(result)
      }, 700)
   })
}
function sub(n) {
   return new Promise(function (resolve, reject) {
      setTimeout(function () {
         let result = n - 1;
         // resolve(result)
         // 에러 테스트
         reject(new Error('의도적으로 에러 발생!!'));
      }, 500)
   })
}

add(4, 3)
   .then(function (result) {
      console.log(('1: ', result));
      return mul(result)
   })
   .then(function (result) {
      console.log(('2: ', result));
      return sub(result)
   })
   .then(function (result) {
      console.log(('3: ', result));
   })
   // promise chaining의 예외처리
   .catch(function (error) {
      console.log('실패!');
      console.log(error);
   })


