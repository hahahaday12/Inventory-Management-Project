const fs = require("fs");
const path = require("path");
const { Sequelize, DataTypes, Op, QueryTypes } = require("sequelize");
const basename = path.basename(__filename);

require('dotenv').config();

const sequelize = new Sequelize(process.env.REACT_APP_DATABASE, process.env.REACT_APP_USER, process.env.REACT_APP_PASSWORD, {
  host: process.env.REACT_APP_HOST,
  dialect: 'mysql',
  operatorsAliases: 0,
  timezone: "+09:00",
  pool: {
    max: 10,
    min: 1,
    idle: 10000,
  },
  //ssl: true  //나중에 rds보안할 경우에 root계정이 아닌 권한이 제한된 사용자로 rds와 통신해야하는데, 그 경우 이 옵션을 안넣으면 연결 오류가 뜰 수 있어서 넣어줘야 함.
});



// 외래키 쓸때 key와value로 구분시켜줄 때, db.sequelize = sequelize; db.Op = Op; db.QueryTypes = QueryTypes; 사용할 때 필요하다. 이 안에 담아뒀다가 꺼내서 사용
let db = [];

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js"
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

//외래키 있으면 외래키끼리 연결시켜줌
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Op = Op;
db.QueryTypes = QueryTypes;

module.exports = db;