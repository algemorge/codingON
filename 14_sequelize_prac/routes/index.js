const express = require('express')
const controller = require('../controller/Cvisitor')
const router = express.Router()

// GET / => localhost:PORT/
router.get('/', controller.main)

// GET /visitor => localhost:PORT/visitor
router.get('/visitor', controller.getVisitors) // 전체 조회

// POST /visitor/write
router.post('/visitor/write', controller.postVisitor) // 하나 추가 

// GET /visitor/get
router.get('/visitor/get', controller.getVisitor) // 하나 조회

// PATCH /visitor/edit
router.patch('/visitor/edit', controller.patchVisitor) // 하나 수정

// DELETE /visitor/delete
router.delete('/visitor/delete', controller.deleteVisitor) // 하나 삭제



// GET /user/signup 
router.get('/user/signup', controller.signup); // 회원가입 

// POST /user/signup
router.post('/user/signup', controller.post_signup); // 회원가입

// // GET /user/signin
router.get('/user/signin', controller.signin); // 로그인

// // POST /user/signin
router.post('/user/signin', controller.post_signin);

// // POST /user/profile
router.post('/user/profile', controller.post_profile); // 프로필

// // POST /user/profile/edit
router.post('/user/profile/edit', controller.edit_profile);

// // POST /user/profile/delete
router.post('/user/profile/delete', controller.delete_profile);


// screen
router.get('/screen', controller.screen);
// screen2
router.get('/screen2', controller.screen2);

module.exports = router; 