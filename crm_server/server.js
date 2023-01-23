const express = require('express');
const moment = require('moment');
//import {express, Request, Response} from "express"
const app = express();
const port = 3001;
const cors = require('cors');
const db = require('./src/models');
const Router = require('./src/routes'); 
const timeDate = require('./src/utils/timeDate');

const { swaggerUi, specs } = require('./src/utils/swagger');

const cookieParser  = require('cookie-parser');

//const helmet = require('helmet'); //보안처리
const compression = require('compression');
const bodyParser = require('body-parser');

const logger = require('morgan');

require('dotenv').config();


app.use(cors({
  origin:true,
  credentials:true
}));

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(compression());
app.use(logger('dev'));

app.use(express.json()); 

app.use(express.urlencoded( {extended : false } ));

moment().add('9','h').format('YYYY-MM-DD HH:mm:ss');

db.sequelize
  .authenticate()
  .then(async () => {
    try {
      console.log('db connect ok');
      await db.sequelize.sync({
        force: false
      });
    } catch (err) {
      console.log('err');
    }
  }).catch(err => {
    console.log('db' + err);
  });


app.get('/', (req, res) => {
  res.send('Hello World!')
});

// api guide
app.use('/api/help', express.static(__dirname + '/api'));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
app.get('/docs.json', (req,  res) => {
    res.setHeader('Content-Type','application/json')
    res.send(specs);
});

//api service
app.use('/api/user', Router.userRouter);
app.use('/api/product', Router.productRouter);
app.use('/auth', Router.kakaoRouter);

app.use((req, res, next) => {
  try {
    //콘솔말고 따로 이벤트 처리해주는게 좋음
    res.status(403).send("잘못된 접근" + req + res);
    console.log('req' + JSON.stringify(req));
    console.log('res' + JSON.stringify(res));
  } catch (error) {
    console.log("오류"+error)
    next();
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log(timeDate.getChangeDate(new Date()));
});