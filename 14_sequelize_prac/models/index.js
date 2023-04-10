// models/index.js
// sequelize-cli 자동 생성한 코드

// sequelize 모듈 불러오기
const Sequelize = require('sequelize');

// 
const config = require(__dirname + '/../config/config.json')['development'];

// const a = require(__dirname + '/../config/config,json');
// a 에는 다음 정보가 찍힘
// {
//   "development": {
//     "username": "user",
//     "password": "1234",
//     "database": "codingon",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {},
//   "production": {},
// const config = a["development"]

// db라는 이름의 빈 객체 정의 (다른 파일에서 사용할수 있도록 내보내려는 값)
const db = {};

// sequelize 객체 선언시 매개변수로 db명, 유저명, 비번, 정보전체를 넘겨줌
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// db = {sequelize: sequelize, Sequelize:Sequelize}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db = {sequelize: sequelize, Sequelize:Sequelize, Visitor:"xx"}
db.Visitor = require('./Visitor')(sequelize, Sequelize)
db.User = require('./User')(sequelize, Sequelize)

module.exports = db;
