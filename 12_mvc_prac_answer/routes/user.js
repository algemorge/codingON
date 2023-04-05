const express = require("express");
const controller = require("../controller/Cuser")
const router = express.Router();


router.get('/', controller.main)
router.post('/practice2', controller.practice2)

// exports -> app.js Line 10
module.exports = router;



/* routes
   : 요청과 메소드방법만 정의
   : 경로 설정
*/