const express = require("express");
const controller = require("../controller/Cmain")
// controller = {
//    main: () => { }
//    comments: () => { }
// }

// 라우터를 만들어주는 객체 -> app.get 처럼 router.get 으로 사용
const router = express.Router();

// ? 파일 명과 달라도 괜찮은가?
router.get('/', controller.main)
router.get('/comments', controller.comments)
router.get('/comment/:id', controller.comment)


// 미사용시 모듈을 찾을 수 없다는 오류 뜸
module.exports = router;