const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs"); // view 엔진 등록
app.use("/views", express.static(__dirname + "/views")) // ejs를 담을 views 폴더 경로 설정

// 라우팅(routing) : 경로 설정
// 브라우저에서 어떤 url 로 접속했을때 어떤 페이지를 보여줄 것인가
// localhost:PORT/접속했을때 index.ejs를 보여주겠다
app.get('/', (req, res) => {
   //views/index.ejs 파일을 찾아서 응답
   res.render("index");
})

app.listen(PORT, function () {
   console.log(`[${PORT}] 포트가 실행되었습니다.`);
   // console.log(`http://localhost:${PORT}`);
})