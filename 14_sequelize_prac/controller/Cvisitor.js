// [before]
// const Visitor = require('../model/Visitor');
// [after]
// models 변수 값 = models/index.js에서 export 한 db 객체
const models = require('../models'); // models/index.js 내보내는 값
// console.log(models);

// (1) GET / => localhost:PORT/
exports.main = (req, res) => {
   res.render('index');
};

// (2) GET /visitor => localhost:PORT/visitor
exports.getVisitors = async (req, res) => {
   // [bofore] mysql db 연결!
   // Visitor.getVisitors((result) => {
   //   console.log('Cvisitor.js >>', result);  // => [ {}, {}, {} ]
   //   res.render('visitor', { data: result });
   // });
   // => SELECT * FROM visitor;

   // [after] sequelize
   // ver1. then() 메서드 사용
   // models.Visitor.findAll().then((result) => {
   //    console.log('findAll >> ', result);
   //    res.render('visitor', { data: result });
   // });

   // ver2. async await 사용
   const result = await models.Visitor.findAll()
   console.log('findAll >>', result);
   res.render('visitor', { data: result })
};

// (3) POST /visitor/write
exports.postVisitor = async (req, res) => {
   // [before]
   // console.log(req.body);
   // Visitor.postVisitor(req.body, (result) => {
   //    console.log('Cvisitor.js >>', result); // model 코드에서 데이터를 추가한 결과인 rows.insertId
   //    res.send({ id: result, name: req.body.name, comment: req.body.comment });
   // });
   // => INSERT INTO visitor(name, comment) values ('${data.name}', '${data.comment}')

   // [after]
   const result = await models.Visitor.create({
      name: req.body.name,
      comment: req.body.comment,
   })
   console.log('create >> ', result);
   // visitor {
   //    dataValues: { id: 18, name: '22', comment: '22' },
   //    _previousDataValues: { name: '22', comment: '22', id: 18 },
   //    uniqno: 1,
   //    _changed: Set(0) {},
   //    _options: {
   //      isNewRecord: true,
   //      _schema: null,
   //      _schemaDelimiter: '',
   //      attributes: undefined,
   //      include: undefined,
   //      raw: undefined,
   //      silent: undefined
   //    },
   //    isNewRecord: false
   res.send(result) // 1
};

// (5) DELETE /visitor/delete
exports.deleteVisitor = async (req, res) => {
   // [before]
   // console.log(req.body); // { id: n }
   // Visitor.deleteVisitor(req.body.id, (result) => {
   //    console.log('Cvisitor.js >> ', result);
   //    res.send('삭제 성공!!');
   // });
   // => delete from visitor where id=${id}

   //[after]
   const result = await models.Visitor.destroy({
      where: { id: req.body.id } //post 요청이라 body로 보냄
   })
   console.log(result);
   res.end() // 삭제하고나면 받을것이 없음
};

exports.getVisitor = async (req, res) => {
   // [before]
   // console.log('*', req.query); // { id: n }
   // Visitor.getVisitor(req.query.id, (result) => {
   //    console.log('**', result); // model callback에서 넘겨주는 rows[0] => {}
   //    res.send(result);
   // });
   // => select * from visitor where id=${id}

   // [after]
   const result = await models.Visitor.findOne({
      where: { id: req.query.id } // get 요청 -> query로 보냄
   })
   console.log('findOne >> ', result);
   res.send(result)
};


exports.patchVisitor = async (req, res) => {
   // [before]
   // console.log(req.body);
   // Visitor.patchVisitor(req.body, () => {
   //    res.send('수정 성공!');
   // });
   //=> update visitor set name='${data.name}', comment='${data.comment}', id=''

   //[after]
   const result = await models.Visitor.update(
      {
         name: req.body.name,
         comment: req.body.comment,
      },
      {
         where: {
            id: req.body.id,
         }
      }
   )
   console.log('update >>', result);
   // res.end()
   res.send('수정!')
};


// 회원가입
exports.signup = (req, res) => {
   res.render('signup');
};

// 회원가입 성공 [after]
exports.post_signup = async (req, res) => {
   //    // User.post_signup(req.body, () => {
   //    //    res.send(true);
   //    // });
   const result = await models.User.create({
      userid: req.body.userid,
      pw: req.body.pw,
      name: req.body.name,
   })
   console.log('create >>', result);
   res.send(result)
};


// 로그인
exports.signin = (req, res) => {
   res.render('signin');
};

// 로그인 성공 [after]
exports.post_signin = async (req, res) => {
   const result = await models.User.findOne({
      where: {
         userid: req.body.userid,
         pw: req.body.pw
      }
   })
   console.log('findOne >> ', result);
   res.send(result)
};

// profile 페이지에 정보 가져오기
// try findOne()
exports.post_profile = async (req, res) => {
   try {
      const result = await models.User.findOne({
         where: {
            userid: req.body.userid
         }
      });

      console.log('findOne >>', result);

      if (result) {
         // Login successful, render profile page
         res.render('profile', { data: result });
      } else {
         // Login failed, redirect to signin page
         res.redirect('/user/signin');
      }
   } catch (error) {
      console.error(error);
      res.redirect('/user/signin');
   }
}


// try findAll()
// exports.post_profile = async (req, res) => {
//    const result = await models.User.findAll({
//       where: {
//          userid: req.body.userid
//       }
//    })
//    console.log(result);
//    console.log('findAll >>', result);
//    if (result.length > 0) {
//       // 로그인 성공; views/profile.ejs 렌더링
//       res.render('profile', { data: result[0] });
//    } else {
//       // 로그인 실패; /user/signin 현재 주소 다시 접속
//       res.redirect('/user/signin');
//    }
// }

// edit_profile
exports.edit_profile = async (req, res) => {
   const result = await models.User.update(
      {
         userid: req.body.userid,
         name: req.body.name,
         pw: req.body.pw,
      },
      {
         where: {
            id: req.body.id,
         }
      }
   )
   console.log('update >>', result);
   // res.end()
   res.send('수정!')
};


// delete_profile
exports.delete_profile = async (req, res) => {
   // console.log(req.body);
   // User.delete_profile(req.body.id, () => {
   //    // res.redirect(주소): 리다이렉트할 주소와 함께 응답 보내기!!
   //    // res.redirect('/user/signin');
   //    // res.redirect('/user');
   //    // => delete from visitor where id=${id}

   //    res.send(true);
   const result = await models.Visitor.destroy({
      where: { id: req.body.id }
   })
   console.log(result);
   res.end()
};


exports.screen = (req, res) => {
   res.render('screen');
};
exports.screen2 = (req, res) => {
   res.render('screen2');
};