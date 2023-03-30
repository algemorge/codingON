const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs"); // view 엔진 등록
app.use("/views", express.static(__dirname + "/views")) // ejs를 담을 views 폴더 경로 설정
app.use(express.urlencoded({ extended: true })) // post 요청으로 들어오는 모든 형식의 데이터를 파싱(분석
app.use(express.json()); //json 형태로 데이터를 주고 받음

app.get('/', (req, res) => {
   res.render('index');
})


app.listen(PORT, function () {
   console.log(`[${PORT}] 포트가 실행되었습니다.`);
   // console.log(`http://localhost:${PORT}`);
})

