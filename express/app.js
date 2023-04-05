const express = require('express');
const app = express();
const port = 8080;

// - request : 클라이언트가 서버에게 보내는 요청
// - response : 서버가 클라이언트에게 보내는 응답

// set(a,b) : a를 b로 설정
app.set('view engine', 'ejs')
app.set('/views', 'views')
// static이란 폴더가 없어도 지정해놓으면 다른이름의 폴더도 static으로 간주함
app.use('/static', express.static(__dirname + '/static'))

app.get('/', function (request, response) {
   response.render('test');
})

app.get('/login', (req, res) => {
   res.render('login');
})

app.get('/login/register', (req, res) => {
   res.render('register')
})
app.get('/register', (req, res) => {
   res.render('register')
})


// .listen 지정된 포트와 서버 연결
app.listen(port, () => {
   console.log(port + 'its open!');
})

