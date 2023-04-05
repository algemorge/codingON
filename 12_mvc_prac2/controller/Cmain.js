const user = require("../model/user");

exports.main = (req, res) => {
   res.render('test');
}

const userId = User.split('\n');
const realId = 'banana'; // 정답 아이디 
const realPw = '4321'; // 정답 비번

// exports.practice2 = (req, res) => {
//    console.log(req.body);
//    // 정답 아이디/비밀번호 vs 사용자가 폼에 입력한 아이디/비밀번호
//    if (userId === req.body.userId && userId === req.body.userPw) {
//       // 정답 아이디랑 사용자가 입력한 아이디가 같고, 정답 비번이랑 사용자가 입력한 비번이 같음 
//       // -> 로그인 성공
//       res.send({ isLogin: true, userInfo: req.body })
//    } else {
//       // 그렇지 않으면
//       // => 로그인 실패
//       res.send({ isLogin: false });
//    }
// }

// exports.practice2 = (req, res) => {
//    console.log(req.body);
//    // 입력한 아이디와 비밀번호를 가져옴
//    const { userId, userPw } = req.body;

//    // 정답 아이디와 비밀번호와 일치하는 유저를 찾음
//    const matchedUser = userList.find(user => user.userId === realId && user.userPw === realPw);

//    if (matchedUser && matchedUser.userId === userId && matchedUser.userPw === userPw) {
//       // 일치하는 유저가 있고, 입력한 아이디와 비밀번호가 일치하면 로그인 성공
//       res.send({ isLogin: true, userInfo: matchedUser });
//    } else {
//       // 그렇지 않으면 로그인 실패
//       res.send({ isLogin: false });
//    }
// }


exports.practice2 = (req, res) => {
   const { userId, userPw } = req.body; // 사용자가 입력한 아이디와 비밀번호

   const users = user.users.split('\n').map(userInfo => {
      const [id, pw, name] = userInfo.split('//');
      return { id, pw, name };
   }); // 유저 정보를 가져와서 각각 id, pw, name으로 분리한 후, 객체로 만들어 배열에 저장

   const matchedUser = users.find(user => user.id === userId && user.pw === userPw); // 유저 정보 중에서 아이디와 비밀번호가 일치하는 객체 찾기

   if (matchedUser) {
      // 일치하는 유저 정보가 있으면 로그인 성공
      res.send({ isLogin: true, userInfo: matchedUser });
   } else {
      // 일치하는 유저 정보가 없으면 로그인 실패
      res.send({ isLogin: false });
   }
}