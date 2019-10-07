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

### user 인증 관리

[x] 회원가입

[x] 로그인- 쿠키활용

[x] 로그인 상태유지(서버를 종료 후 다시시작해도 로그인 상태 유지)

[x] 로그아웃 시 홈페이지 redirect 및 login 창 뜨도록 설정

[x] 게시물 보안 설정 (middleware를 직접 제작 후 로그인/로그아웃 시 들어갈 수 있는 게시물설정)

[x] Github 회원가입 연동 활성화 - 정보는 이름,사진 가져옴

[x] Instagram 회원가입 연동 활성화 - 정보는 이름,사진 가져옴

[x] Facebook 회원가입 연동 활성화 - 정보는 이름만 가져옴 \* Facebook은 https에서만 활성화가 되기때문에 localhost에서는 작동x, tunnel을 사용하였으나 tunnel자체가 오류 많음,
Facebook은 https설정 후 연동 및 카카오톡 연동으로 대체\*

#### Front-end작업

[x] webpack, scss활용하여 Front-end작업 실시

[x] home 윤곽 맞춤

[x] font 사이즈, 버튼 작업

[x] home 동영상 화면 배열 grid 작업

##### 해야 할 것

[] 로그인을 Social-login 연동으로 구현 할 것

[] 유저 인증 구현화 (현재는 id와 password를 기억못하고 그냥 로그인 됨)

[] 프론트엔드작업 - Video 외관 및 배치 작업, Upload파일 외관 작업, 기타 외관작업 등등

###### 주의점
