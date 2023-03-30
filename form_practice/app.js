const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs"); // view 엔진 등록
app.use("/views", express.static(__dirname + "/views")) // ejs를 담을 views 폴더 경로 설정
app.use(express.urlencoded({ extended: true })) // post 요청으로 들어오는 모든 형식의 데이터를 파싱(분석
app.use(express.json()); //json 형태로 데이터를 주고 받음

// root 를 index2 로 설정
app.get('/', (req, res) => {
   res.render('index2');
})
app.get('/practice1', (req, res) => {
   res.render('practice1');
})
app.get('/practice2', (req, res) => {
   res.render('practice2');
})


// practice1 페이지를 호출하면 result1페이지 띄우기
// userInfo 에 담아 정보 한번에 처리
app.get('/result1', function (req, res) {
   console.log(req.query); //{ id: 'shin', pw: '1234' }
   res.render('result', { //result 페이지로 이동
      title: '실습1 폼 전송 완료!',
      userInfo: req.query,

   })
});

// practice2 페이지를 호출하면 result2페이지 띄우기
app.post('/result2', function (req, res) {
   console.log(req.body); //{ id: 'iddldld', pw: '1234' }
   res.render('result', {
      title: '실습2 폼 전송 완료!',
      userInfo: req.body,
   })
})

app.listen(PORT, function () {
   console.log(`[${PORT}] 포트가 실행되었습니다.`);
   // console.log(`http://localhost:${PORT}`);
})