const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs"); // view 엔진 등록
app.use("/views", express.static(__dirname + "/views")) // ejs를 담을 views 폴더 경로 설정
app.use(express.urlencoded({ extended: true })) // post 요청으로 들어오는 모든 형식의 데이터를 파싱(분석
app.use(express.json()); //json 형태로 데이터를 주고 받음

// 라우팅(routing) : 경로 설정
// 브라우저에서 어떤 url 로 접속했을때 어떤 페이지를 보여줄 것인가
// localhost:PORT/접속했을때 index.ejs를 보여주겠다
app.get('/', (req, res) => {
   //views/index.ejs 파일을 찾아서 응답
   const myTitle = '폼 실습을 합시다~!'
   res.render("index", { title: myTitle }); // 그림 4번 작업 역할
})

app.get('/getForm', function (req, res) {
   // console.log(req); // 뭔가 많이 나옴 -> 그래서 .query를 찍어오는것
   console.log(req.query); //{ id: 'shin', pw: '1234' }
   res.send('get 요청 성공!!!') // 프론트로 전달 -> 우리에게 보여줌
});

app.post('/postForm', function (req, res) {
   console.log(req.body); //{ id: 'iddldld', pw: '1234' }
   res.send('post 요청 성공!')
})

app.listen(PORT, function () {
   console.log(`[${PORT}] 포트가 실행되었습니다.`);
   // console.log(`http://localhost:${PORT}`);
})