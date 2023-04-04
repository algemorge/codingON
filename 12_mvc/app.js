const { query } = require('express');
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true })); //form전송시 body를 사용하기 위해 
app.use(express.json());

// require은 파일을 불러옴, 폴더까지만 접근하게 되는경우 -> 자동으로 index.js 파일 추적
const indexRouter = require("./routes")

// 주소창의 http://xxxx/~~ 슬래쉬 뒤에 오는 모든 라우터를 /routes/index.js 에 정의 해 놨으니,
// /routes/index.js 이 파일을 읽으면 된다
app.use("/", indexRouter);


// 가장 마지막에 오는 에러메세지
app.get('*', (req, res) => {
   // res.send('404 Error! 잘못된 주소 형식입니다.');
   res.render('404');
});

app.listen(PORT, () => {
   console.log(`http://localhost:${PORT}`);
});
