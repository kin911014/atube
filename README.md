# Atube

Cloning youtube with VanillaJS and nodeJS

서버 실행방법 - npm run dev:server
웹팩 실행방법 - npm run dev:assets

## 서버 구현 현황 - 작업중

[x] 서버: nodejs 활용 , Database: mongoDB 활용, ES6문법 적용

[x] Model: Schema 활용한 간략한 MODEL 구현 - 추가 내용 구상중

[x] View: pug 템플릿 활용, form 구현 및 video 활성화

[x] Controller : router와 controller를 세분화 하여 구현, user와 video로 나뉘어짐

[x] Video 업로드 시 home에 업로드한 순서대로 배치되도록 구현

[x] 동영상 Delete 구현

[x] EditVideo에서 이름 및 설명 수정 가능 구현

[x] 검색기능 구현, 업로드된 video의 title 일부만으로도 검색가능

[x] 회원가입

[x] 로그인- 쿠키활용

[x] 로그인 상태유지(서버를 종료 후 다시시작해도 로그인 상태 유지)

[x] 게시물 보안 설정 (middleware를 직접 제작 후 로그인/로그아웃 시 들어갈 수 있는 게시물설정)

### Front-end작업

[x] webpack, scss활용하여 Front-end작업 실시

[x] home 윤곽 맞춤

[x] font 사이즈, 버튼 작업

[x] home 동영상 화면 배열 grid 작업

#### 해야 할 것

[] 로그인을 Social-login 연동으로 구현 할 것

[] 유저 인증 구현화 (현재는 id와 password를 기억못하고 그냥 로그인 됨)

[] 프론트엔드작업 - Video 외관 및 배치 작업, Upload파일 외관 작업, 기타 외관작업 등등

##### 주의점

- 현재 유저 인증 구현화 미완료로 인하여 middlewares.js파일의 user.isAuthenticated를
  true or false 로 입력 시 로그인 or 로그아웃이 가능.
