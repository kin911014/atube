# Atube

Cloning youtube with VanillaJS and nodeJS

서버 실행방법 - npm run dev:server
웹팩 실행방법 - npm run dev:assets

# 서버 구현 현황 - 작업중

[X] 서버: nodejs 활용 , Database: mongoDB 활용, ES6문법 적용

[X] Model: Schema 활용한 간략한 MODEL 구현 - 추가 내용 구상중

[X] View: pug 템플릿 활용, form 구현 및 video 활성화

[X] Controller : router와 controller를 세분화 하여 구현, user와 video로 나뉘어짐

[X] Video 업로드 시 home에 업로드한 순서대로 배치되도록 구현

[X] 동영상 Delete 구현

[X] EditVideo에서 이름 및 설명 수정 가능 구현

[X] 검색기능 구현, 업로드된 video의 title 일부만으로도 검색가능

[X] View 조회수 API 구현 - 동영상 종료 시 조회수 1 증가

[X] Comment 기능 구현 - 로그인 후 Comment에 글을 작성 가능, comment 작성 시 곧바로 말풍선 구현 및 comments 숫자 변경 설정

### AWS A3

[X] 데이터의 저장을 내 서버에서 AWS S3 로 변경

# user 인증 관리

### 회원가입

[X] 회원가입

[X] 로그인- 쿠키활용

[X] Github 회원가입 연동 활성화 - 이름,사진,email 정보를 가져옴

[X] Instagram 회원가입 연동 활성화 - 이름,사진,email 정보를 가져옴

[X] Facebook 회원가입 연동 활성화 - Facebook은 https에서만 활성화가 되기때문에 localhost에서는 작동x, tunnel을 사용하였으나 tunnel자체가 오류 많음,
Facebook은 https설정 후 연동 및 카카오톡 연동으로 대체

[X] 연동 회원가입 후 개인정보 변경 기능 설정 - 이름, 사진, email 변경가능

### 로그인

[X] 로그인 상태유지(서버를 종료 후 다시시작해도 로그인 상태 유지)

[X] 로그아웃 시 홈페이지 redirect 및 login 창 뜨도록 설정

[X] 게시물 보안 설정 (middleware를 직접 생성 한 후 로그인/로그아웃 시 들어갈 수 있는 게시물설정)

[X] 비밀번호 변경 기능 설정

### 동영상

[X] Video 업로드 한 인원의 이름, uploaded by뜨도록 설정 및 해당 유저 이외에 수정 못하도록 설정

[X] 다른 유저가 동영상을 수정하거나 router에 접근 못하도록 설정

# Front-end작업

[X] Webpack, scss활용하여 Front-end작업 실시

[X] Home 윤곽 맞춤

[X] Font 사이즈, 버튼 작업

[X] Home 동영상 화면 배열 grid 작업

### video css작업

[X] control bar 생성

[X] 생성된 control bar로 play,pause기능 활성화

[X] volume 및 mute기능 활성화

[X] 동영상 totalTime 및 currnetTime 설정

[X] 동영상 재생 시간 종료 후 00초로 복귀 및 pause버튼을 play버튼으로 변경 설정

[X] Volume bar 생성 및 설정값 입력

[X] Volume bar 소리 조절 시 동영상에 적용되도록 설정 및 음소거 클릭 시 소리꺼짐/켜짐 설정

[X] Volume bar 조절 시 아이콘 모양 변경 설정 ex/ 낮으면 mute 아이콘, 중간이면 down아이콘, 높으면 up아이콘

# 해야 할 것

[] 프론트엔드작업 - Video 외관 및 배치 작업, Upload파일 외관 작업, 기타 외관작업 등등
