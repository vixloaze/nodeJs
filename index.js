require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-hbs');
const path = require('path')
const app = express();
const port = process.env.PORT || 3000;

// 핸들바 설정
app.engine('hbs', hbs.express4({
    defaultLayout: __dirname + "/views/layouts/web"
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

const router = require('./src/routes');

// JSON 형식의 본문을 처리하기 위한 미들웨어
app.use(bodyParser.json());

// URL 인코딩된 본문을 처리하기 위한 미들웨어 (form data)
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', router);

app.listen(port, () => {
    console.log(`웹 서버 구동... ${port}`);
})