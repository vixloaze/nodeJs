const express = require('express');
const router = express.Router();
const logging = require("./middleware/logging");

// 이 변수를 사용하는 도메인은 인증된 사용자만 사용할 수 있게 함
const verify = require("./middleware/jwtVerify"); 

const multer = require('multer');
const upload = multer({ dest: 'storage/' });

// 웹 페이지들의 controller 
const webController = require('./web/controller');
const userController = require('./api/user/controller');
const feedController = require('./api/feed/controller');
const fileController = require('./api/file/controller');

// 메인 페이지 도메인
router.get("/", webController.home);
router.get('/page/:page', webController.page);
// logging 을 사용한 후에 대한 도메인들에만 미들웨어 적용
router.use(logging);
router.get('/sitemap', webController.sitemap);

// 파일 도메인
router.post('/api/file', upload.single('file'), fileController.upload);
router.get('/api/file/:id', fileController.download);

// 유저 도메인
router.post('/api/user/register', userController.register);
router.post('/api/user/login', userController.login);
router.get('/api/user/mypage', verify ,userController.mypage);

// 피드 도메인
router.get('/api/feed', verify, feedController.index);
router.post('/api/feed', verify, feedController.create);
router.get('/api/feed/:id', verify, feedController.feedInfo);
router.post('/api/feed/:id',verify, feedController.update);
router.post('/api/feed/:id/delete', verify, feedController.delete);

module.exports = router;