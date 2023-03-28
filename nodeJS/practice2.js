// 실습2. Promise -> async/await 기본코드
// call, back, hell 함수: 실습 23의 함수와 동일
function call(name) {
   return new Promise(function (resolve, reject) {
      setTimeout(function () {
         console.log(name);
         resolve(name); // 작업 성공시 then(name)
      }, 1000);
   });
}

function back() {
   return new Promise(function (resolve, reject) {
      setTimeout(function () {
         console.log('back');
         resolve('back'); // 작업 성공시 then('back')
      }, 1000);
   });
}

function hell() {
   return new Promise(function (resolve, reject) {
      setTimeout(function () {
         resolve('callback hell');
      }, 1000);
   });
}

async function exac() {
   const name = await call('kim')
   console.log(`${name} 반가워`);
   const result = await back();
   console.log(`${result}를 실행했구나`);
   const msg = await hell()
   console.log(`여기는 ${msg}`);
}
exac()