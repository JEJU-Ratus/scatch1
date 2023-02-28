# Scatch

- Scatch 스캐치! 캐릭터를 스케치! 디자인을 캐치!

- 캐릭터 제작자가 캐릭터를 제작한 후 판매하는 사이트.

- 마치 캐릭터를 기성품 팔듯이 판매하는 사이트를 만드는게 목적.

### 인원구성

- 웹 개발 1인.(프론트엔드)

- 웹 디자인 1인

- 캐릭터, 마스코트 디자인 1인


### 페이지 소개

- index.html - 메인 페이지 / index-afterLogin.html - (로그인 되었을 때)

- login.html - 로그인 페이지

- join.html - 회원가입 페이지 / join-finish - 회원가입 완료 페이지

- intro.html - 사이트 소개 페이지 / intro-afterLogin.html - (로그인 되었을 때)

- market.html - 판매 캐릭터 페이지 / market-afterLogin.html - (로그인 되었을 때)

- kategorie1.html - 판매캐릭터-카테고리1 페이지 / kategorie1-afterLogin.html - (로그인 되었을 때)

- notice.html - 공지사항 페이지 / notice-afterLogin.html - (로그인 되었을 때)

- noticePost.html - 공지사항 게시물 페이지. / noticePost-afterLogin.html - (로그인 되었을 때)

- noticeWrite.html - 공지사항 게시글 작성 페이지. / noticeWrite-afterLogin.html - (로그인 되었을 때)

- noticeWriteEdit.html - 공지사항 게시글 수정 페이지. / noticeWriteEdit-afterLogin.html - (로그인 되었을 때)

### 개발 과정
- 23년 1월 20일 첫 아이디어 회의

- 23년 1월 30일 두번째 회의 scatch 탄생. 1차 마스코트 및 로고 디자인. 사이트 컨셉 및 기능 회의

- 23년 2월 2일 사이트 와이어 프레임

- 23년 2월 6일 와이어 프레임 기반의 사이트 제작 시작. (메인 페이지, 로그인 페이지)

- 23년 2월 7일 회원가입 페이지

- 파이어베이스 연동. 넷트리파이에는 오류가 안생길지? 넷트리파이 링크에서 파이어 베이스가 작동할지가 젤 궁금.

- 넷리파이 연동해제.

- scatch 와 scatch1로 나눠 우선 scatch1에서 프론트 개발 후 이를 scatch로 클론하여 파이어베이스 기반 기능 연결을 시도해볼 예정.

- scatch1에 넷리파이 연결

- 23년 2월 13일 scatch 로고 및 마스코트 변경
  
- 회원가입 완료 페이지 추가

- 23년 2월 15일 회원가입 유효성 검사 이름 부분 추가 성공

- test 페이지 하나 만듦. 기능 테스트 용 페이지로 홈페이지 진행에는 문제 없음. 추후 삭제 예정.

- netlify 에서 action이 작동 안하는 오류 발견 
   - 수정 완료. form 태그에 data-netlify="true"를 추가하니 정상 작동 하기 시작

- 회원가입 페이지 유효성 검사 전부 적용 완료.

- index-afterLogin.html 은 로그인 한 것처럼 효과를 냈다. 
  실 로그인 구현을 하기엔 백도 봐야해서 우선 프론트에 집중하였다.

- 로그인 페이지에 값을 입력해야 로그인 되게 하였고, 아이디에 정규식을 걸어, 규칙에 맞지 않은 아이디로는 로그인이 불가능 하게 만들었다.

- test용 js 추가. 다양한 기능 실험하고 지우고 할 공간을 위해 만들어 두었다.

- 로그인창만 우선 alert값을 하단 빨간줄 쳐지게 만듦

- 23년 2월 20일 test.css 파일 생성. classList기능을 적용하려함.

- 23년 2월 21일 회원가입 기능 최종 완성.(월에 따른 일자 구현은 추후)

- netlify form submit 속성 수정

- frame.css 로 frame에 해당하는 속성 분리

- 사이트 소개 페이지 1차 완료

- 23년 2월 22일 사이트 width 설정.

- 23년 2월 27일 사이트 공지사항 추가.

- 게시글 에디터 기능 추가. (네이버 스마트 에디터 2.0 이용.)

- 23년 2월 28일 사이트 공지사항 구현 완료

- 로그인 후 창 폴더 구분.

- 로그인 후 게시글 폼 오류 수정.

- kategorie1 완성. - 카테고리1 페이지 완성.