const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs"); // view 엔진 등록
app.use("/views", express.static(__dirname + "/views")) // ejs를 담을 views 폴더 경로 설정
app.use(express.urlencoded({ extended: true })) // post 요청으로 들어오는 모든 형식의 데이터를 파싱(분석
app.use(express.json()); //json 형태로 데이터를 주고 받음

// Routing (주소설정)
app.get('/', (req, res) => {
   res.render('test');
})

const realId = 'banana';
const realPw = '4321';

// // 1-1. /ajax get 요청 : query 
// app.get('/ajax', function (req, res) {
//    console.log(req.query);
//    res.send(req.query)
// })

// // 1-2. /ajax post 요청 : body
// app.post('/ajax', function (req, res) {
//    console.log(req.body);
//    res.send(req.body)
// })

// 2-1. /axios Get 요청
app.get('/axios', function (req, res) {
   console.log(req.query);
   res.send(req.query)
})

// 2-2. /axios Post 요청
// app.post('/axios', function (req, res) {
//    console.log('req.body');
//    res.send(req.body)
// })


app.post('/axios', function (req, res) {
   console.log(req.body);
   if (realId === req.body.userid && realPw === req.body.userpw) {
      res.send({ isLogin: true, userInfo: req.body });
   } else {
      res.send({ isLogin: false })
   }
});


app.listen(PORT, function () {
   console.log(`[${PORT}] 포트가 실행되었습니다.`);
})

