// const Comment = require("../model/Comment");

exports.main = (req, res) => {
   res.render('test');
}

const realId = 'banana'; // 정답 아이디 
const realPw = '4321'; // 정답 비번

exports.practice2 = (req, res) => {
   console.log(req.body);
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

