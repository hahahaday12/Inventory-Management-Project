# create express project 
npm install express --save

# npm install express 
npm i express

# npm install express error check 
package.json file not found error
create package.json create and modify commend is 'npm init' or 'npm init -y'

# start server
node server.js

# package are looking for funding
run `npm fund` for details

# DB Design 
http 요청을 받을 때 Route에서 DB 스크립트를 요청해 MySQL에 접속하고 필요한 데이터 조회, 삽입, 수정, 삭제 등을 수행한 후 결과와 데이터를 Route로 반환합니다.
Route는 반환받은 결과를 필요에 따라 View에 출력하는 형태로 구현할 예정입니다.
이를 위해 db 접속을 전담할 db.js를 생성해야 합니다.

# mysql node modules add 
npm install --save mysql

# what is --save?
npm install (설치를 원하는 모듈) --save를 통하여 설치할 수 있다.
이때 --save옵션은 다른 환경에서도 프로젝트에 필요한 프로그램을 npm install 명령어로 한번에 설치할 수 있게
package.json 파일의 dependencies항목에 추가해주는 역할을 한다.

# dev server setting 
매번 수정할때마다 서버를 재시작 하지않도록 하는방법을 위해서
npm i -D(dev) nodemon 설치

package.json에 
"scripts": {
    "dev": "nodemon server.js" 추가 

서버 실행명령어 
npm run dev 

# dev 래퍼런스 
https://hyungju-lee.github.io/hyungju-lee2021_2.github.io/categories/study/database-mongodb/database3.html

# dev api 가이드 문서화 래퍼런스
https://www.lesstif.com/software-architect/apidoc-rest-api-rest-api-documentation-1-98926722.html

# SWAGGER 대신 API DOC 사용한 이유 비교
https://co-de.tistory.com/92

# api doc 생성 
npm install apidoc -g

# api doc 화면 다시 그리기 
apidoc -i ./ -o api/   
index.json 참고하여 다시 화면 그려줌

# 의존성 추가 
npm install --save express body-parser jsonwebtoken mongoose morgan
express: 웹서버 프레임워크입니다.
body-parser: 클라이언트측에서 요청을 받을때, url-encoded 쿼리 및 json 형태의 바디를 파싱하는데 도움을 주는 모듈입니다.
jsonwebtoken: 이 예제프로젝트에서 사용되는 핵심 모듈입니다. JSON Web Token 을 손쉽게 생성하고, 또 검증도 해줍니다.
mongoose: 서버에서 MongoDB 를 사용하기 위하여 설치합니다.
morgan: Express 서버에서 발생하는 이벤트들을 기록해주는 미들웨어입니다

# 문법검사를 위한 의존성 추가
npm install --save-dev eslint

# routes/models
db tabel 


# JWT토큰 처리 작업 
https://velopert.com/2448

- mysql 설정
https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=rile1036&logNo=221803734102


crm_server\routes\auth\auth.controller.js
인증처리 

crm_server\routes\middlewares\auth.js
라우터에서 주어진 요청을 설정하기전에, JWT 검증 미들웨어를 통하여 JWT 검증 작업을 하고 나서, 주어진 작업을 하게 하도록 구현


# npm i dotenv
파일에다가 절대로 적는 것이 아니라 환경변수를 사용해서 해주도록 한다. 그럴때 사용해주는 라이브러리가 'dotenv'이다.

# db connect 관련해서 구조 따로 만들기 위해서 패키지 인스톨 
npm install --save sequelize
npm install --save mysql2


# npm install bcryptjs
- 암호키 설정 

# 서버 로그 툴 
npm install morgan --save

# user post signup test

post man body type : x-www-form-urlencoded send
{
    "userid": "test123",
    "password": "asdasdsadsad",
    "username": "koboram",
    "email": "koboram1081@gmail.com"
}




https://github.com/loy124/express-react-oauth-login/blob/main/backend/index.js

https://developers.kakao.com/console/app/855000