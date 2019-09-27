# Atube

Cloning youtube with VanillaJS and nodeJS

## 구현 현황

[v] Model: Schema 활용한 간략한 MODEL 구현 - 추가 내용 구상중

[v] View: pug 템플릿 활용, form 구현 및 video 활성화

[v] Controller : router와 controller를 세분화 하여 구현, user와 video로 나뉘어짐

[v] 서버: nodejs 활용 , Database: mongoDB 활용

[v] Video 업로드 시 home에 업로드한 순서대로 배치되도록 구현

[v] EditVideo에서 이름 및 설명 수정 가능 구현

[v] 검색기능 구현, 업로드된 video의 title 일부만으로도 검색가능

[v] webpack : scss를 활용

[v] scss: Front-end작업으로 활용 -작업중

### 해야 할 것

[] 회원가입, 로그인을 Social-login 연동으로 구현 할 것

[] 유저 인증 구현화 (현재는 id와 password를 기억못하고 그냥 로그인 됨)

[] 프론트엔드작업 - Video 외관 및 배치 작업, Upload파일 외관 작업, 기타 외관작업 등등

#### 주의점

- 현재 유저 인증 구현화 미완료로 인하여 middlewares.js파일의 user.isAuthenticated를
  true or false 로 입력 시 로그인 or 로그아웃이 가능.
