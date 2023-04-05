const User = require("../model/User");

// rendering 'index.ejs'
// 함수 작성과 동시에 작동
exports.main = (req, res) => {
   res.render('index');
}

// 실습1 정답 ==============================================
exports.practice2 = (req, res) => {
   const userData = User.getUserInfo();
   console.log(userData);
   // {realId : 'banana', realPw : '4321'}
   // 로그인 성공/실패 로직
   // 아이디, 비번 모두 일치 => 로그인 성공
   // 아이디와 비번 중에서 하나라도 일치하지 않으면 => 실패
   if (
      userData.realId === req.body.userId &&
      userData.realPw === req.body.userPw
   ) {
      res.send({ isLogin: true, userInfo: req.body })
   } else {
      res.send({ isLogin: false });
   }

   // 내코드 ===============================================
   // 정답 아이디/비밀번호 vs 사용자가 폼에 입력한 아이디/비밀번호
   if (realId === req.body.userId && realPw === req.body.userPw) {
      // 정답 아이디랑 사용자가 입력한 아이디가 같고, 정답 비번이랑 사용자가 입력한 비번이 같음 
      // -> 로그인 성공
      res.send({ isLogin: true, userInfo: req.body })
   } else {
      // 그렇지 않으면
      // => 로그인 실패
      res.send({ isLogin: false });
   }
}

// 실습2 정답 ==============================================
exports.practice2 = (req, res) => {
   const userDatas = User.users.split('\n')
   console.log(userDatas);

   const users = [] // 유저 정보 배열
   const userIds = []; // 유저 아이디만 저장 배열

   for (let user of userDatas) {
      console.log(user);
      // apple//1234//사과사과
      // banana//4321//바나나나나
      // happy//qwer1234//해피해피

      users.push({
         realId: user.split('//')[0], // apple -> banana -> happy
         realPw: user.split('//')[1], // 1234 -> 4321 -> qwer1234
         name: user.split('//')[2], // 사과사과 -> 바나나나나 -> 해피해피
      });
      userIds.push(user.split('//')[0]); // apple -> banana -> happy
   }
   console.log(users);
   console.log(userIds);

   // 사용자가 폼에 입력한 값 vs 정답 배열 비교
   // 사용자가 폼에 입력한 아이디 : req.body.userId
   const idx = userIds.indexOf(req.body.userId)
   if (idx >= 0) {
      // 아이디 있음
      console.log(users[idx]);
      // { realId: 'banana', realPw: '4321', name: '바나나나' }
      if (users[idx].realPw === req.body.userPw) {
         // 아이디 있고, 비번 맞음
         res.send({ isLogin: true, userInfo: users[idx] });
      } else {
         // 아이디 있고, 비번 틀림
         res.send({ isSucces: false })
      }
   } else {
      // 아이디 없음
      res.send({ isSucces: false })
   }
};



/** Controller 
   : View 와 Model을 연결
   : 경로와 연결되는 함수 내용을 판단, 정의
   : 경로와 연결되는 함수 = (req,res) 객체 사용 가능
 */